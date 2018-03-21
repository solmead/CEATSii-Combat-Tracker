using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using CombatTracker.Entities.Current;
using CombatTracker.Entities.Reference;
using CombatTracker.Entities.Reference.Actions;
using CombatTracker.Entities.Reference.Attacks;
using CombatTracker.Entities.Reference.Base;
using CombatTracker.Entities.Repositories;
using CombatTracker.Entities.Service;
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
                RolledInititive = rolledInit ?? Dice.RollAddOnes10High(2)
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
            


            var action = new BaseAction()
            {
                Name = "Wait",
                WhoIsActing_ID = actor.ID,
                Game_ID = actor.Game_ID,
                Type = ActorActionType.Normal,
                CharacterAction = true
            };
            TimeCalc.SetActionTime(actor, action, CurrentGame);
            _gameRepository.SaveAction(action);

            SetCurrentAction(actor, action);

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
            CurAction.WhoIsActing = actor;
            CurAction.Game_ID = CurrentGame.ID;

            if ((CurAction.EndTime == 0))
            {
                CurAction.EndTime = (CurrentGame.CurrentTime + TimeCalc.GetTimeRequired(actor, (CurAction.BasePercent * CurrentGame.BaseRoundTime), CurAction.CurrentModifier, CurAction.Type == ActorActionType.Attack, CurAction.CurrentAttack));
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



            action.ActionType = ActionTypeEnum.Proposed;
            action.WhoIsActing_ID = actor.ID;
            action.WhoIsActing = actor;
            action.ID = _gameRepository.SaveAction(action).ID;
        }

        public void SetFutureAction(Actor actor, BaseAction action)
        {

            var CurAction = GetFutureAction(actor);
            if (CurAction != null && CurAction != action)
            {
                _gameRepository.DeleteAction(CurAction);
            }

            action.ActionType = ActionTypeEnum.Next;
            action.WhoIsActing_ID = actor.ID;
            action.WhoIsActing = actor;
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
            throw new NotImplementedException();
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
            throw new NotImplementedException();
        }

        public void RemoveEffect(BaseAction action)
        {
            throw new NotImplementedException();
        }

        public void RemoveFirstCriticalEffect(Actor whom)
        {
            throw new NotImplementedException();
        }

        public void RemoveAllCriticalEffects(Actor whom)
        {
            throw new NotImplementedException();
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
            RecalculateActionsTime(action.WhoIsActing);
        }

        public void SetAttackOnAction(BaseAction action, int attackId)
        {
            action.CurrentAttack = _combatRepository.GetAttack(attackId);
            action.CurrentAttack_ID = attackId;
            _gameRepository.SaveAction(action);
            RecalculateActionsTime(action.WhoIsActing);
        }

        public MoveNextResult MoveToNextAction()
        {
            var actions = _gameRepository.GetActionsInGame(CurrentGame);
            var next = actions.First();
            CurrentGame.CurrentTime = next.EndTime;
            if (next.Type == ActorActionType.Spell)
            {
                next.WhoIsActing.NextSpellTime = CurrentGame.CurrentTime + TimeCalc.GetActionTime(next.WhoIsActing, ActionTypeEnum.Current, CurrentGame);
            }
            
            var result = _actionServices.ProcessAction(next, next.WhoIsActing, this);

            if (!next.CharacterAction && !next.Reoccuring)
            {
                _gameRepository.DeleteAction(next);
            }

            return result;
        }
    }
}
