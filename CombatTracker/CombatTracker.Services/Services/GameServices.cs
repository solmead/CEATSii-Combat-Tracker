using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using CombatTracker.Entities.Abstract.Repos;
using CombatTracker.Entities.Abstract.Services;
using CombatTracker.Entities.Current;
using CombatTracker.Entities.Reference;
using CombatTracker.Entities.Reference.Actions;
using CombatTracker.Entities.Reference.Attacks;
using CombatTracker.Entities.Reference.Base;
using Utilities.Caching;

namespace CombatTracker.Services.Services
{
    public class GameServices : IGameService
    {
        private readonly IChartRepository _chartRepository;
        private readonly IGameRepository _gameRepository;
        private readonly ICombatRepository _combatRepository;
        private readonly IActionServices _actionServices;

        public GameServices(IChartRepository chartRepository,
            IGameRepository gameRepository,
            ICombatRepository combatRepository,
            IActionServices actionServices)
        {
            _chartRepository = chartRepository;
            _gameRepository = gameRepository;
            _combatRepository = combatRepository;
            _actionServices = actionServices;
        }


        public Game CurrentGame {
            get => Cache.GetItem<Game>(CacheArea.Session, "CurrentGame", () => new Game());
            set => Cache.SetItem<Game>(CacheArea.Session, "CurrentGame", value);
        }

        

        public Actor CreateActorFrom(IActable person, int? rolledInit = null)
        {
            var actor = new Actor()
            {
                Game_ID = CurrentGame.ID,
                Name = person.GetName(),
                Color = "",
                Level = person.GetLevel(),
                BaseInititive = person.GetBaseInititive(),
                HitsTotal = person.GetHitsTotal(),
                ExhaustionTotal = person.GetExaustionTotal(),
                PowerPointsTotal = person.GetPowerPointsTotal(),
                Type = person.GetActorType(),
                StrengthBonus = person.GetStrengthBonus(),
                PercentRequiredAdrenalDB = person.GetPercentRequiredAdrenalDB(),
                Movement = person.GetWalkSpeed(),
                RolledInititive = rolledInit ?? Dice.RollAddOnes10High(2),
                CriticalModified = person.GetCriticalModified(),
                CriticalIgnores = person.GetCriticalIgnores()
            };
            actor.HitsRemaining = actor.HitsTotal;
            actor.ExhaustionRemaining = actor.ExhaustionTotal;
            actor.PowerPointsRemaining = actor.PowerPointsTotal;
            var armor = person.GetArmor();
            if (armor==null)
            {
                armor = new Armor()
                {
                    Type = 1
                };
                armor = _combatRepository.SaveArmor(armor);
            }
            actor.CurrentArmor = armor;
            actor.CurrentArmor_ID = armor?.ID;

            actor = _gameRepository.SaveActor(actor);

            var attacks = person.GetAttacks();
            foreach(var att in attacks)
            {
                if (att.AttackType_ID == 0)
                {
                    var at = _chartRepository.GetAttackType("Weapon");
                    att.AttackType_ID = at.ID;
                    att.AttackType = at;
                }
                if (att.ID ==0)
                {
                    var att2 = _combatRepository.SaveAttack(att);
                    att.ID = att2.ID;
                }
                _combatRepository.SaveAttack(actor, att);
            }

            var act = ProposeActionWait(actor);
            act = DoProposedAction(actor);
            
            return actor;
        }

        

        public void SetCurrentAction(Actor actor, BaseAction action)
        {

            var CurAction = GetCurrentAction(actor);
            if (CurAction != null && ((CurAction.EndTime >= CurrentGame.CurrentTime)
                            && CurAction != action)) { 
                CurAction.Interrupted = true;
                CurAction.EndTime = CurrentGame.CurrentTime;
                CurAction.ActionType = ActionTypeEnum.Interrupted;
                //_gameRepository.SaveAction(CurAction);
                _gameRepository.DeleteAction(CurAction);
            }
            else
            {
                // Debug.WriteLine("Time not elapsed")
            }

            CurAction = action;
            CurAction.ActionType = ActionTypeEnum.Current;
            CurAction.WhoIsActing_ID = actor.ID;
            //CurAction.WhoIsActing = actor;
            CurAction.Game_ID = CurrentGame.ID;

            if ((CurAction.EndTime == 0))
            {
                TimeCalc.SetActionTime(actor, CurAction, CurrentGame);
                //CurAction.EndTime = (CurrentGame.CurrentTime + TimeCalc.GetTimeRequired(actor, (CurAction.BasePercent * CurrentGame.BaseRoundTime), CurAction.CurrentModifier, CurAction.Type == ActorActionType.Attack, CurAction.CurrentAttack));
            }

            if (CurAction.Type == ActorActionType.Spell && CurAction.EndTime<actor.NextSpellTime)
            {
                var found = false;
                for (int m = CurAction.CurrentModifier+10; m<=30;m+=10)
                {
                    CurAction.CurrentModifier = m;
                    TimeCalc.SetActionTime(actor, CurAction, CurrentGame);
                    if (CurAction.EndTime >= actor.NextSpellTime)
                    {
                        found = true;
                        m = 40;
                    }
                }
                if (!found)
                {
                    CurAction.EndTime = actor.NextSpellTime;
                }
            }


            _gameRepository.SaveAction(CurAction);

            // ActionsHistory.Add(CurAction)
            var future = GetFutureAction(actor);
            if (future != null)
            {
                _gameRepository.DeleteAction(future);
            }

            BaseAction NAct = null;
            if (CurAction.Base != null && CurAction.Base.NextAction !=null) {
                NAct = _actionServices.GetStandardAction(CurAction.Base.NextAction, CurAction, actor, CurrentGame);
            }

            if (((NAct == null) && CurAction.Base != null))
            {
                NAct = _actionServices.GetStandardAction(CurAction.Base, CurAction, actor, CurrentGame);
            }

            if (NAct != null)
            {
                NAct.Game_ID = CurrentGame.ID;
                TimeCalc.SetActionTime(actor, NAct, CurrentGame, CurAction.EndTime);

                SetFutureAction(actor, NAct);
            }
            
        }

        public void SetProposedAction(Actor actor, BaseAction action)
        {

            var CurAction = GetProposedAction(actor);
            if (CurAction != null && CurAction != action)
            {
                _gameRepository.DeleteAction(CurAction);
            }

            

            if (action.Type == ActorActionType.Spell && action.EndTime < actor.NextSpellTime)
            {
                action.Note = "Spell cannot go off till " + actor.NextSpellTime.ToString("0.00");
                action.State = ActionProblem.IsWarning;
            } else
            {
                action.Note = "";
            }

            if (action.Type == ActorActionType.Spell && action.EndTime < actor.NextSpellTime)
            {
                var found = false;
                for (int m = action.CurrentModifier + 10; m <= 30; m += 10)
                {
                    action.CurrentModifier = m;
                    TimeCalc.SetActionTime(actor, action, CurrentGame);
                    if (action.EndTime >= actor.NextSpellTime)
                    {
                        found = true;
                        m = 40;
                    }
                }
                if (!found)
                {
                    action.EndTime = actor.NextSpellTime;
                }
            }


            action.ActionType = ActionTypeEnum.Proposed;
            action.WhoIsActing_ID = actor.ID;
            //action.WhoIsActing = actor;
            action.Game_ID = CurrentGame.ID;

            action.ID = _gameRepository.SaveAction(action).ID;
        }

        public void SetFutureAction(Actor actor, BaseAction action)
        {
            var prevAction = GetCurrentAction(actor);

            var CurAction = GetFutureAction(actor);
            if (CurAction != null && CurAction != action)
            {
                _gameRepository.DeleteAction(CurAction);
            }


            var nextSpelltime = prevAction.EndTime + TimeCalc.GetTimeRequiredForSpells(actor, CurrentGame.BaseRoundTime);
            if (action.Type == ActorActionType.Spell && prevAction.Type == ActorActionType.Spell && action.EndTime < nextSpelltime)
            {
                var found = false;
                for (int m = action.CurrentModifier + 10; m <= 30; m += 10)
                {
                    action.CurrentModifier = m;
                    TimeCalc.SetActionTime(actor, action, CurrentGame, prevAction.EndTime);
                    if (action.EndTime >= nextSpelltime)
                    {
                        found = true;
                        m = 40;
                    }
                }
                if (!found)
                {
                    action.EndTime = nextSpelltime;
                }
            }



            action.ActionType = ActionTypeEnum.Next;
            action.WhoIsActing_ID = actor.ID;
            //action.WhoIsActing = actor;
            action.Game_ID = CurrentGame.ID;
            action.ID = _gameRepository.SaveAction(action).ID;

        }

        public BaseAction GetCurrentAction(Actor actor)
        {
            var actions = _gameRepository.GetActionsOnActor(actor);
            return (from act in actions
                    where act.ActionType == ActionTypeEnum.Current
                    select act).FirstOrDefault();
        }

        public BaseAction GetProposedAction(Actor actor)
        {
            var actions = _gameRepository.GetActionsOnActor(actor);
            return (from act in actions
                    where act.ActionType == ActionTypeEnum.Proposed
                    select act).FirstOrDefault();
        }

        public BaseAction GetFutureAction(Actor actor)
        {
            var actions = _gameRepository.GetActionsOnActor(actor);
            return (from act in actions
                    where act.ActionType == ActionTypeEnum.Next
                    select act).FirstOrDefault();
        }

        public BaseAction ProposeActionWait(Actor actor)
        {
            var act = _actionServices.GetSpecialAction(ActorActionType.Normal, actor, CurrentGame);
            act.Name = "Wait";
            TimeCalc.SetActionTime(actor, act, CurrentGame);
            SetProposedAction(actor, act);
            return act;
        }
        public BaseAction ProposeActionUnconscious(Actor actor)
        {

            var act = _actionServices.GetSpecialAction(ActorActionType.Death, actor, CurrentGame);
            TimeCalc.SetActionTime(actor, act, CurrentGame);
            SetProposedAction(actor, act);
            return act;
        }

        public BaseAction ProposeAction(ActionDefinition action, Actor whom, int modifier = 0, int? attackId = null)
        {
            var act = _actionServices.GetStandardAction(action, null, whom, CurrentGame);
            act.CurrentModifier = modifier;
            if (attackId != null)
            {
                act.CurrentAttack = _combatRepository.GetAttack(attackId.Value);
                act.CurrentAttack_ID = attackId;
            }
            TimeCalc.SetActionTime(whom, act, CurrentGame);
            SetProposedAction(whom, act);
            return act;
        }

        public BaseAction ProposeActionContinue(BaseAction previousAction, Actor whom)
        {
            BaseAction act = null;
            var action = _chartRepository.GetAction(previousAction.BaseAction_ID ?? 0);

            if (action != null)
            {
                 act = _actionServices.GetStandardAction(action, previousAction, whom, CurrentGame);
            } else
            {
                act = _actionServices.GetSpecialAction(previousAction.Type, whom, CurrentGame);
            }

            act.CurrentModifier = previousAction.CurrentModifier;
            if (previousAction.CurrentAttack_ID != null)
            {
                act.CurrentAttack = previousAction.CurrentAttack;
                act.CurrentAttack_ID = previousAction.CurrentAttack_ID;
            }

            TimeCalc.SetActionTime(whom, act, CurrentGame);
            SetProposedAction(whom, act);
            return act;
        }

        public BaseAction AddBleedEffect(Actor whom, int bleedRate)
        {

            var act = _actionServices.GetSpecialAction(ActorActionType.Bleed, whom, CurrentGame);
            act.Bleeder = bleedRate;
            _actionServices.RefreshData(act, whom, CurrentGame);

            TimeCalc.SetActionTime(whom, act, CurrentGame);
            _gameRepository.SaveAction(act);
            //SetProposedAction(whom, act);
            return act;
        }

        public BaseAction AddCriticalEffect(Actor whom, CriticalEffect crit, int rounds)
        {
            var anyExistingCrits = whom.CriticalEffects.Any();
            AddRoundsCriticalAffectsToActor(whom, crit, rounds);
            if (!anyExistingCrits)
            {
                var act = _actionServices.GetSpecialAction(ActorActionType.Critical, whom, CurrentGame);
                act.Game_ID = CurrentGame.ID;
                _gameRepository.SaveAction(act);
            } 

            var action = (from ac in _gameRepository.GetActionsOnActor(whom)
                       where ac.Type == ActorActionType.Critical
                       select ac).FirstOrDefault();
            _actionServices.RefreshData(action, whom, CurrentGame);
            _gameRepository.SaveAction(action);


            return action;
        }

        public void AddRoundsCriticalAffectsToActor(Actor actor, CriticalEffect cAffect, int rounds)
        {
            //CriticalEffect ca;
            int RS = 0;
            int RNP = 0;
            int RMP = 0;
            int RNeg = 0;
            bool flag = false;
            if ((cAffect.Parry == ParryType.No_Parry))
            {
                RNP = rounds;
            }

            if ((cAffect.Parry == ParryType.Must_Parry))
            {
                RMP = rounds;
            }

            if (cAffect.IsStunned)
            {
                RS = rounds;
            }

            if ((cAffect.Negative != 0))
            {
                RNeg = rounds;
            }

            foreach (var ca in actor.CriticalEffects.ToList())
            {
                if (((ca.TimeStart == 0) || ((ca.TimeStart == CurrentGame.CurrentTime)
                            || (((ca.TimeEnd - ca.TimeStart) * 0.5) >= (CurrentGame.CurrentTime - ca.TimeStart)))))
                {
                    if ((!ca.IsStunned && (RS > 0)))
                    {
                        ca.IsStunned = true;
                        RS--;
                    }

                    if (((ca.Parry == ParryType.Fine) && (RMP > 0)))
                    {
                        ca.Parry = ParryType.Must_Parry;
                        ca.ParryNegative = cAffect.ParryNegative;
                        RMP--;
                    }
                    else if (((ca.Parry == ParryType.No_Parry) && (RMP > 0)))
                    {
                        RMP--;
                    }

                    if (((ca.Parry != ParryType.No_Parry) && (RNP > 0)))
                    {
                        ca.Parry = ParryType.No_Parry;
                        ca.ParryNegative = 0;
                        RNP--;
                    }

                    if ((RNeg > 0))
                    {
                        ca.Negative = (ca.Negative + cAffect.Negative);
                        RNeg--;
                    }

                    _gameRepository.SaveCriticalEffect(ca);
                }

            }

            while (((RS > 0) || ((RMP > 0) || ((RNP > 0) || (RNeg > 0)))))
            {
                var ca = new CriticalEffect();
                ca.Actor_ID = actor.ID;
                if ((RS > 0))
                {
                    ca.IsStunned = true;
                    RS--;
                }

                if ((RMP > 0))
                {
                    ca.Parry = ParryType.Must_Parry;
                    ca.ParryNegative = cAffect.ParryNegative;
                    RMP--;
                }

                if ((RNP > 0))
                {
                    ca.Parry = ParryType.No_Parry;
                    ca.ParryNegative = 0;
                    RNP--;
                }

                if ((RNeg > 0))
                {
                    ca.Negative = (ca.Negative + cAffect.Negative);
                    RNeg--;
                }

                _gameRepository.SaveCriticalEffect(ca);
                actor.CriticalEffects.Push(ca);
            }

            var ca2 = actor.CriticalEffects.First();
            if ((ca2.TimeStart == 0))
            {
                ca2.TimeStart = CurrentGame.CurrentTime;
                ca2.TimeEnd = TimeCalc.GetTimeRequiredNonEncumbered(actor, CurrentGame.BaseRoundTime) + CurrentGame.CurrentTime;
            }
        }

        public BaseAction AddPsychicEffect(Actor whom, int psychicLevel)
        {

            var act = _actionServices.GetSpecialAction(ActorActionType.Psychic, whom, CurrentGame, psychicLevel);
            TimeCalc.SetActionTime(whom, act, CurrentGame);
            _gameRepository.SaveAction(act);
            return act;
        }

        public BaseAction AddSpellEffect(Actor effectedActor, Actor caster, string spellName, int rounds = 1, int hastePercent = 0)
        {
            var act = _actionServices.GetSpecialAction(ActorActionType.SpellEffect, effectedActor, CurrentGame);
            act.Name = spellName;
            act.HastedPercent = hastePercent;
            act.IsHasted = hastePercent > 0;
            act.IsSlowed = hastePercent < 0;
            TimeCalc.SetActionTime(caster, act, CurrentGame);
            act.BasePercent = rounds;
            act.EndTime = TimeCalc.GetTimeRequiredForSpells(caster, CurrentGame.BaseRoundTime * rounds) + CurrentGame.CurrentTime;

            act.Name = "Spell: " + act.Name + " cast";
            if (effectedActor != null)
            {
                act.Note = "on " + effectedActor.Name;
            }

            _gameRepository.SaveAction(act);
            if (act.IsHasted || act.IsSlowed)
            {
                effectedActor.PercentAction *= (act.HastedPercent / 100);
            }
            _gameRepository.SaveActor(effectedActor);
            if (act.IsHasted || act.IsSlowed)
            {
                RecalculateActionsTime(effectedActor);
            }
            return act;
        }

        public void RemoveEffect(BaseAction action)
        {
            throw new NotImplementedException();
        }

        public void RemoveCriticalsFromActor(Actor whom, int count)
        {
            var action = (from act in _gameRepository.GetActionsOnActor(whom)
                          where act.Type == ActorActionType.Critical
                          select act).FirstOrDefault();
            if (action != null)
            {
                _gameRepository.DeleteAction(action);
            }

            for(int a=1;a<=count;a++)
            {
                if (whom.CriticalEffects.Any())
                {
                    var ce = whom.CriticalEffects.Pop();
                    _gameRepository.DeleteCriticalEffect(ce);
                }
            }


            if (whom.CriticalEffects.Any())
            {
                var act = _actionServices.GetSpecialAction(ActorActionType.Critical, whom, CurrentGame);
                act.Game_ID = CurrentGame.ID;
                _gameRepository.SaveAction(act);
            }
            
        }
        

        public BaseAction DoProposedAction(Actor whom)
        {
            var act = GetProposedAction(whom);
            SetCurrentAction(whom, act);
            return act;
        }

        public void RecalculateActionsTime(Actor actor)
        {
            var act = GetCurrentAction(actor);
            var cact = act;
            if (act != null)
            {
                TimeCalc.AdjustActionTimeRemaining(actor, act, CurrentGame);
                _gameRepository.SaveAction(act);
            }

            act = GetProposedAction(actor);
            if (act != null)
            {
                TimeCalc.AdjustActionTimeRemaining(actor, act, CurrentGame);
                _gameRepository.SaveAction(act);
            }
            act = GetFutureAction(actor);
            if (act != null)
            {
                act.StartTime = cact.EndTime;
                TimeCalc.AdjustActionTimeRemaining(actor, act, CurrentGame);
                _gameRepository.SaveAction(act);
            }
            
        }
        

        public void SetModifierOnAction(BaseAction action, int modifier)
        {
            action.CurrentModifier = modifier;
            _gameRepository.SaveAction(action);
            var who = _gameRepository.GetActor(action.WhoIsActing_ID);
            RecalculateActionsTime(who);
        }

        public void SetAttackOnAction(BaseAction action, int attackId)
        {
            action.CurrentAttack = _combatRepository.GetAttack(attackId);
            action.CurrentAttack_ID = attackId;
            _gameRepository.SaveAction(action);
            var who = _gameRepository.GetActor(action.WhoIsActing_ID);
            RecalculateActionsTime(who);
        }

        public MoveNextResult MoveToNextAction()
        {
            var actions = _gameRepository.GetActionsInGame(CurrentGame);
            var next = actions.First();
            CurrentGame.CurrentTime = next.EndTime;
            var who = _gameRepository.GetActor(next.WhoIsActing_ID);
            if (next.Type == ActorActionType.Spell)
            {
                who.NextSpellTime = CurrentGame.CurrentTime + TimeCalc.GetActionTime(who, ActionTypeEnum.Current, CurrentGame);
            }
            
            var result = _actionServices.ProcessAction(next, who, this);

            if (!next.CharacterAction && !next.Reoccuring)
            {
                _gameRepository.DeleteAction(next);
            }

            return result;
        }
    }
}
