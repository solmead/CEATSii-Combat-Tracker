using CombatTracker.Entities.Current;
using CombatTracker.Entities.Reference;
using CombatTracker.Entities.Reference.Attacks;
using System;
using System.Collections.Generic;
using System.Text;

namespace CombatTracker.Services
{
    public class TimeCalc
    {

        public static void AdjustActionTimeRemaining(Actor actor, BaseAction action, Game game)
        {
            var currentTime = game.CurrentTime;
            if (action.StartTime > currentTime)
            {
                currentTime = action.StartTime;
            }
            var perRemain = 0.0;
            perRemain = 1 - action.PercentageCompleted(currentTime);
            if (action.ActionType == ActionTypeEnum.Effect)
            {
                action.EndTime = currentTime + perRemain * GetTimeRequiredNonEncumbered(actor, action.BasePercent * game.BaseRoundTime);
            }
            else
            {
                action.EndTime = currentTime + perRemain * GetTimeRequired(actor, action.BasePercent * game.BaseRoundTime, action.CurrentModifier, action.Type == ActorActionType.Attack, action.CurrentAttack);
            }
        }

        public static void SetActionTime(Actor actor, BaseAction action,Game game, double? referenceTime = null)
        {
            referenceTime = referenceTime ?? game.CurrentTime;
            action.StartTime = referenceTime.Value;
            action.EndTime = referenceTime.Value + GetActionTime(actor, action, game);
        }

        public static double GetFullRoundActionTime(Actor actor, ActionTypeEnum actionType, Game game)
        {
            if (actionType == ActionTypeEnum.Effect)
            {
                return GetTimeRequiredNonEncumbered(actor, 1 * game.BaseRoundTime);
            }
            else
            {
                return GetTimeRequired(actor, 1 * game.BaseRoundTime, 0, false, null);
            }
        }
        public static double GetActionTime(Actor actor, BaseAction action, Game game)
        {
            if (action.ActionType == ActionTypeEnum.Effect)
            {
                return  GetTimeRequiredNonEncumbered(actor, action.BasePercent * game.BaseRoundTime);
            }
            else
            {
                return GetTimeRequired(actor, action.BasePercent * game.BaseRoundTime, action.CurrentModifier, action.Type == ActorActionType.Attack, action.CurrentAttack);
            }
        }

        public static double GetTimeRequired(Actor actor, double baseTime, double modifier, bool isAttack, Attack currentAttack)
        {
            var init = 0.0;
            init = actor.Inititive;

            if (actor.HitsRemaining < actor.HitsTotal / 2)
            {
                init -= 8.0;
            }
            if (actor.IsConcentrating)
            {
                init -= 30.0;
            }
            if (actor.Suprised)
            {
                init -= 30.0;
            }
            init += 3.0 * (actor.CurrentArmor?.MovingManeuverMod ?? 0) / 10.0;
            if (isAttack && currentAttack != null && currentAttack.WeaponUsed != null)
            {
                init += 3.0 * currentAttack.WeaponUsed.Bonus / 5.0;
                if (!(currentAttack.WeaponUsed?.Is2Handed ?? false))
                {
                    init += actor.StrengthBonus - currentAttack.WeaponUsed.Weight;
                }
                else
                {
                    init += actor.StrengthBonus - currentAttack.WeaponUsed.Weight / 2.0;
                }
            }

            if (actor.UsingAdrenalDB)
            {
                init += (100.0 + init) * (1.0 / ((100.0 + (actor.PercentRequiredAdrenalDB * 100.0)) / 100.0) - 1.0);
            }
            //modifier modification
            init += (100.0 + init) * (1.0 / ((100.0 + modifier) / 100.0) - 1.0);
            //haste modification
            baseTime = baseTime / (actor.PercentAction / 100.0);
            return baseTime * (100.0 / (100.0 + (init)));

        }

        public static double GetTimeRequiredNonEncumbered(Actor actor, double baseTime)
        {
            var init = 0.0;
            init = actor.Inititive;
            if (actor.HitsRemaining < actor.HitsTotal / 2)
            {
                init -= 8;
            }
            var BInit = init;
            if (actor.UsingAdrenalDB)
            {
                init = (100 + BInit) * (1 / (1 + actor.PercentRequiredAdrenalDB / 100) - 1) + init;
            }
            baseTime = baseTime / (actor.PercentAction / 100);
            //'If Me.UnderHaste Then
            //'    BaseTime = BaseTime / 2
            //'End If
            return baseTime * (100 / (100 + (init)));
        }

        public static double GetTimeRequiredForSpells(Actor actor, double baseTime)
        {
            var init = 0.0;
            init = actor.Inititive;
            return baseTime * (100 / (100 + (init)));
        }


    }
}
