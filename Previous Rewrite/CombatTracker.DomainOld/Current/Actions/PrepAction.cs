using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using CombatTracker.Domain.Reference;

namespace CombatTracker.Domain.Current.Actions
{
    public class PrepAction : BaseAction
    {
        public int CurrentRound { get; set; }


        public PrepAction(int prevRounds, double currentTime, Reference.Actions.Action baseAction)
            : base(currentTime, baseAction)
        {
            CurrentRound = prevRounds;
            Type = ActorActionType.Prep;
            Name = baseAction.Name + " Round " + CurrentRound;
        }

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
    }
}
