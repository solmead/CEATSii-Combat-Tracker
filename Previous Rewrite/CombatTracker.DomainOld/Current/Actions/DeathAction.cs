using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using CombatTracker.Domain.Reference;

namespace CombatTracker.Domain.Current.Actions
{
    public class DeathAction : BaseAction
    {
        public int Count { get; set; }


        public DeathAction(Actor theChar, double currentTime)
            : base(currentTime)
        {
            WhoIsActing = theChar;
            Name = "Unconcious";
            StartTime = currentTime;
            BasePercent = 1;
            Type = ActorActionType.Death;
            EndTime = WhoIsActing.CalculateTimeRequiredNonEncumbered(MySettings.BaseRoundTime) + currentTime;
        }

        public override bool CharacterAction
        {
            get { return true; }
        }

        public override void HandleAction(RmssDbContext db, double currentTime)
        {
            if (WhoIsActing.HitsRemaining < -WhoIsActing.ConstitutionStat)
            {
                Name = WhoIsActing.Name + " is Dead";
                Count += 1;
                Note = "Rounds of Death:" + Count;
            }
            EndTime = WhoIsActing.CalculateTimeRequiredNonEncumbered(MySettings.BaseRoundTime) + currentTime;
        }

        public override void RefreshData()
        {
            
        }
        public override bool Reoccuring
        {
            get { return WhoIsActing.HitsRemaining <= 0; }
        }
    }
}
