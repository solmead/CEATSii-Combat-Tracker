using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using CombatTracker.Domain.Reference;

namespace CombatTracker.Domain.Current.Actions
{
    public class CriticalAction : BaseAction
    {
        public int? Critical_ID { get; set; }
        [ForeignKey("Critical_ID")]
        public virtual CriticalAffect CriticalAffect { get; set; }

        public CriticalAction(Actor theChar, double currentTime)
            : base(currentTime)
        {
            WhoIsActing = theChar;
            BasePercent = 1;
            Type = ActorActionType.Critical;
            CriticalAffect = theChar.CurrentCrits;
            RefreshData();
            ActionType = ActionTypeEnum.Effect;
        }

        public override bool CharacterAction
        {
            get { return false; }
        }

        public override void HandleAction(RmssDbContext db, double currentTime)
        {
            WhoIsActing.RemoveCriticalFromCharacter(db, currentTime);
        }

        public override void RefreshData()
        {
            var ch = WhoIsActing;
            var n1 = "";
            var n2 = "";
            var n3 = "";
            if (ch.StunRounds() > 0)
            {
                n1 = ch.StunRounds() + " Rnds of Stun";
            }
            if (ch.ParryRounds() > 0)
            {
                n1 = ch.ParryRounds() + " Rnds of Parry";
            }
            if (ch.NegativeRounds() > 0)
            {
                n1 = ch.NegativeRounds() + " Rnds at Mods";
            }
            Note = n1 + " " + n2 + " " + n3;
            BasePercent = 1;
            EndTime = CriticalAffect.TimeEnd;
            Name = "";
        if (CriticalAffect.IsStunned)
        {
            Name = "Stun";
        }
        if (CriticalAffect.Parry != ParryType.Fine)
        {
            if (!String.IsNullOrEmpty(Name))
            {
                Name = Name + " & " + CriticalAffect.Parry.ToString();
            }
            else
            {
                Name =  CriticalAffect.Parry.ToString();
            }
        }
            Name = Name + " On " + ch.Name;
        }
    }
}
