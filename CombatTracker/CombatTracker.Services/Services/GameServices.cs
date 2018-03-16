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

        public int LookupRefractoryNegative(int levelDifference, int roundNumber)
        {
            var periods = _chartRepository.GetPsychicRefractoryPeriodEntries();

            var mods = (from rl in periods
                        where rl.LevelMin <= levelDifference && levelDifference <= rl.LevelMax
                orderby rl.RoundNumber
                select rl).ToList();

            foreach (var rm in mods)
            {
                if (rm.RoundNumber == roundNumber)
                {
                    return rm.Mod;
                }
            }

            var lMod = mods.Last().Mod;
            var rnd = mods.Last().RoundNumber;
            while (lMod < 0 && rnd < roundNumber)
            {
                rnd++;
                lMod = lMod + 5;
            }
            if (lMod > 0)
            {
                lMod = 0;
            }
            return lMod;
        }

        public int LookupRefractoryRoundsToZero(int levelDifference)
        {
            var periods = _chartRepository.GetPsychicRefractoryPeriodEntries();
            var mods = (from rl in periods
                        where rl.LevelMin <= levelDifference && levelDifference <= rl.LevelMax
                orderby rl.RoundNumber
                select rl).ToList();

            if (!mods.Any())
            {
                return 0;
            }

            var lMod = mods.Last().Mod;
            var rnd = mods.Last().RoundNumber;
            while (lMod < 0)
            {
                rnd++;
                lMod = lMod + 5;
            }
            return rnd;
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
            SetActionTime(actor, action);
            _gameRepository.SaveAction(action);

            SetCurrentAction(actor, action);

            return actor;
        }

        

        public void TriggerActorDeath(Actor actor)
        {
            var act = _actionServices.GetSpecialAction(ActorActionType.Death, actor);
            SetActionTime(actor, act);
            SetCurrentAction(actor, act);
        }

        public void OnActorInitChanged(Actor actor)
        {
            var currentTime = CurrentGame.CurrentTime;
            var curAct = GetCurrentAction(actor);
            var perRemain = 0.0;
            perRemain = 1 - curAct.PercentageCompleted(currentTime);
            curAct.EndTime = currentTime + perRemain * GetTimeRequired(actor, curAct.BasePercent * CurrentGame.BaseRoundTime, curAct.CurrentModifier, curAct.Type == ActorActionType.Attack, curAct.CurrentAttack);

            _gameRepository.SaveAction(curAct);

            var futAct = GetFutureAction(actor);
            if (futAct != null)
            {
                SetActionTime(actor, futAct, curAct.EndTime);

                _gameRepository.SaveAction(futAct);
            }
            var proAct = GetProposedAction(actor);
            if (proAct != null)
            {
                SetActionTime(actor, proAct, currentTime);

                _gameRepository.SaveAction(proAct);
            }
            
        }
        
        public void SetActionTime(Actor actor, BaseAction action, double? referenceTime = null)
        {
            referenceTime = referenceTime ?? CurrentGame.CurrentTime;
            action.StartTime = referenceTime.Value;
            action.EndTime = referenceTime.Value + GetTimeRequired(actor, action.BasePercent * CurrentGame.BaseRoundTime, action.CurrentModifier, action.Type == ActorActionType.Attack, action.CurrentAttack);
        }

        public double GetTimeRequired(Actor actor, double baseTime, int modifier, bool isAttack, Attack currentAttack)
        {
            var init = 0.0;
            init = actor.Inititive;

            if (actor.HitsRemaining < actor.HitsTotal / 2) {
                init -= 8;
            }
            if (actor.IsConcentrating) {
                init -= 30;
            }
            if (actor.Suprised) {
                init -= 30;
            }
            init += 3 * (actor.CurrentArmor?.MovingManeuverMod ?? 0) / 10;
            if (isAttack && currentAttack != null && currentAttack.WeaponUsed != null) {
                init += 3 * currentAttack.WeaponUsed.Bonus / 5;
                if (!(currentAttack.WeaponUsed?.Is2Handed ?? false)) {
                    init += actor.StrengthBonus - currentAttack.WeaponUsed.Weight;
                } else {
                    init += actor.StrengthBonus - currentAttack.WeaponUsed.Weight / 2;
                }
            }

            if (actor.UsingAdrenalDB) {
                init += (100 + init) * (1 / ((100 + (actor.PercentRequiredAdrenalDB * 100)) / 100) - 1);
            }
            init += (100 + init) * (1 / ((100 + modifier) / 100) - 1);
            baseTime = baseTime / (actor.PercentAction / 100);
            return baseTime * (100 / (100 + (init)));

        }

        public double GetTimeRequiredNonEncumbered(Actor actor, double baseTime)
        {
            var init = 0.0;
            init = actor.Inititive;
            if (actor.HitsRemaining < actor.HitsTotal / 2) {
                init -= 8;
            }
            var BInit = init;
            if (actor.UsingAdrenalDB) {
                init = (100 + BInit) * (1 / (1 + actor.PercentRequiredAdrenalDB / 100) - 1) + init;
            }
            baseTime = baseTime / (actor.PercentAction / 100);
            //'If Me.UnderHaste Then
            //'    BaseTime = BaseTime / 2
            //'End If
            return baseTime * (100 / (100 + (init)));
        }

        public double GetTimeRequiredForSpells(Actor actor, double baseTime)
        {
            var init = 0.0;
            init = actor.Inititive;
            return baseTime * (100 / (100 + (init)));
        }

        public void RemoveCriticalsFromActor(Actor actor, int count)
        {
            throw new NotImplementedException();
        }

        public void RemoveCriticalFromActor(Actor actor)
        {
            RemoveCriticalsFromActor(actor, 1);
        }

        public void AddCriticalToActor(Actor actor, CriticalEffect crit, int rounds)
        {
            var anyExistingCrits = actor.CriticalEffects.Any();
            AddRoundsCriticalAffectsToActor(actor, crit, rounds);
            if (!anyExistingCrits)
            {
                var act = _actionServices.GetSpecialAction(ActorActionType.Critical, actor);
                act.Game_ID = CurrentGame.ID;
                _gameRepository.SaveAction(act);
            }
        }

        public void AddRoundsCriticalAffectsToActor(Actor actor, CriticalEffect cAffect, int rounds)
        {
            throw new NotImplementedException();
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
                CurAction.EndTime = (CurrentGame.CurrentTime + GetTimeRequired(actor, (CurAction.BasePercent * CurrentGame.BaseRoundTime), CurAction.CurrentModifier, CurAction.Type == ActorActionType.Attack, CurAction.CurrentAttack));
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
                NAct = _actionServices.GetStandardAction(CurAction.Base.NextAction, CurAction, actor);
            }

            if (((NAct == null) && CurAction.Base != null))
            {
                NAct = _actionServices.GetStandardAction(CurAction.Base, CurAction, actor);
            }

            if (NAct != null)
            {
                NAct.Game_ID = CurrentGame.ID;
                SetActionTime(actor, NAct, CurAction.EndTime);

                SetFutureAction(actor, NAct);
            }
            
        }

        public void SetProposedAction(Actor actor, BaseAction action)
        {
            action.ActionType = ActionTypeEnum.Proposed;
            action.WhoIsActing_ID = actor.ID;
            action.WhoIsActing = actor;
            action.ID = _gameRepository.SaveAction(action).ID;
        }

        public void SetFutureAction(Actor actor, BaseAction action)
        {
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
    }
}
