using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using CombatTracker.Domain.Reference;

namespace CombatTracker.Domain.Current.Actions
{
    public class BleedAction : BaseAction
    {
        public int Bleeder { get; set; }
        public int Count { get; set; }

        
        public BleedAction(Actor theChar, double currentTime, int bleedRate)
            : base(currentTime)
        {
            WhoIsActing = theChar;
            Bleeder = bleedRate;
            Name = theChar.Name + " bleeding at " + bleedRate;
            Note = "";
            BasePercent = 1;
            StartTime = currentTime;
            EndTime = theChar.CalculateTimeRequiredNonEncumbered(MySettings.BaseRoundTime) + currentTime;
            Type = ActorActionType.Bleed;
        }

        public override bool CharacterAction
        {
            get { return false; }
        }

        public override void HandleAction(RmssDbContext db, double currentTime)
        {

            WhoIsActing.HitsRemaining -= Bleeder;
            Count += 1;
            Note = "Rounds of Bleeding:" + Count;
            EndTime = WhoIsActing.CalculateTimeRequiredNonEncumbered(MySettings.BaseRoundTime) + currentTime;
            WhoIsActing.HandleInitChange(currentTime);
            if (WhoIsActing.Type == CharacterType.PC)
            {
                MySettings.NotifyOutside(WhoIsActing.Name + " bleeds " + Bleeder);
            }


            if (WhoIsActing.HitsRemaining <= 0)
            {
                WhoIsActing.HandleDeath(db, currentTime);
            }
        }

        public override void RefreshData()
        {
            
        }
        public override bool Reoccuring
        {
            get { return true; }
        }
    }
}
