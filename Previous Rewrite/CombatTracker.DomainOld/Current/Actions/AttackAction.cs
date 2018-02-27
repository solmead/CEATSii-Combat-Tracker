using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using CombatTracker.Domain.Reference;

namespace CombatTracker.Domain.Current.Actions
{
    public class AttackAction : BaseAction
    {
        public override bool CharacterAction
        {
            get { return true; }
        }

        public override void HandleAction(RmssDbContext db, double currentTime)
        {
            
        }

        public override void RefreshData()
        {
            
        }

        public AttackAction(Actor theChar, double currentTime, Reference.Actions.Action baseAction)
            : base(currentTime, baseAction)
        {
            WhoIsActing = theChar;
            Type = ActorActionType.Attack;
            //EndTime = currentTime +
            //          theChar.CalculateTimeRequired(BasePercent*MySettings.BaseRoundTime, CurrentModifier,
            //                                        Type = ActorActionType.Attack, CurrentAttack);
        }
    }
}
