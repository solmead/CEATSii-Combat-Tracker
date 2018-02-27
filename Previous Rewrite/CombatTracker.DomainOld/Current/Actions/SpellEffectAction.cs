using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using CombatTracker.Domain.Reference;

namespace CombatTracker.Domain.Current.Actions
{
    public class SpellEffectAction : BaseAction
    {
        public bool IsHasted { get; set; }
        public bool IsSlowed { get; set; }
        public double HastedPercent { get; set; }


        public SpellEffectAction(Actor theChar, Actor caster, double currentTime, string Name, int duration, int hastePercent)
            : base(currentTime)
        {
            WhoIsActing = theChar;
            HastedPercent = hastePercent;
            IsHasted = (hastePercent > 0);
            IsSlowed = (hastePercent < 0);
            if (theChar != null)
            {
                Name = "Spell:" + Name + " cast";
                Note = "on " + theChar.Name;
            }
            else
            {
                Name = "Spell:" + Name + " cast";
            }

            BasePercent = duration;
            StartTime = currentTime;
            EndTime = caster.CalculateTimeRequiredForSpells(MySettings.BaseRoundTime*duration) + currentTime;
            if (IsHasted || IsSlowed)
            {
                WhoIsActing.PercentAction = WhoIsActing.PercentAction*(hastePercent/100.0);
                WhoIsActing.HandleInitChange(currentTime);
            }
            ActionType = ActionTypeEnum.Effect;
            Type = ActorActionType.SpellEffect;
        }

        public override bool CharacterAction
        {
            get { return true; }
        }

        public override void HandleAction(RmssDbContext db, double currentTime)
        {
            if (IsHasted || IsSlowed)
            {
                WhoIsActing.PercentAction = WhoIsActing.PercentAction /(HastedPercent / 100);
                WhoIsActing.HandleInitChange(currentTime);
            }
        }

        public override void RefreshData()
        {
            
        }
    }
}
