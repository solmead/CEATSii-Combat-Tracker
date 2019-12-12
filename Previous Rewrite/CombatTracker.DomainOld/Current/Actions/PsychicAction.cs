using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using CombatTracker.Domain.Reference;
using CombatTracker.Domain.Reference.Magic;

namespace CombatTracker.Domain.Current.Actions
{
    public class PsychicAction : BaseAction
    {
        public int CurrentRound { get; set; }
        public int TotalRounds { get; set; }
        public int LevelDifference { get; set; }


        public PsychicAction(RmssDbContext db, Actor theChar, double currentTime, int psychicLevel)
            : base(currentTime)
        {
            WhoIsActing = theChar;
            LevelDifference = theChar.Level - psychicLevel;
            TotalRounds = PsychicRefractoryPeriodChart.LookupRoundsToZero(db, LevelDifference);
            Name = "Psychic Recovery";
            Note = "Round " + CurrentRound + " of " + TotalRounds;
            BasePercent = 1;
            StartTime = currentTime;
            EndTime = theChar.CalculateTimeRequiredForSpells(MySettings.BaseRoundTime) + currentTime;
            theChar.CritNegatives += PsychicRefractoryPeriodChart.LookupNegative(db, LevelDifference, CurrentRound);
            ActionType = ActionTypeEnum.Effect;
            Type = ActorActionType.Psychic;
        }

        public override bool CharacterAction
        {
            get { return false; }
        }

        public override void HandleAction(RmssDbContext db, double currentTime)
        {
            WhoIsActing.CritNegatives -= PsychicRefractoryPeriodChart.LookupNegative(db, LevelDifference, CurrentRound);
            CurrentRound += 1;
            WhoIsActing.CritNegatives += PsychicRefractoryPeriodChart.LookupNegative(db, LevelDifference, CurrentRound);
            EndTime = WhoIsActing.CalculateTimeRequiredForSpells(MySettings.BaseRoundTime) + currentTime;
            Note = "Round " + CurrentRound + " of " + TotalRounds;
        }

        public override void RefreshData()
        {
            
        }
        public override bool Reoccuring
        {
            get { return CurrentRound <= TotalRounds; }
        }
    }
}
