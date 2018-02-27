using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using CombatTracker.Domain.Reference;

namespace CombatTracker.Domain.Current.Actions
{
    public class StandardAction : BaseAction
    {
        public StandardAction(Actor theChar, double currentTime, Reference.Actions.Action baseAction)
            : base(currentTime, baseAction)
        {
            WhoIsActing = theChar;
            Type = ActorActionType.Normal;
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
