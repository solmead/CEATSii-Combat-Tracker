using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using CombatTracker.Domain.Reference;

namespace CombatTracker.Domain.Current.Actions
{
    public class MovementAction : BaseAction
    {
        public int Count { get; set; }


        public MovementAction(Actor theChar, double currentTime, Reference.Actions.Action baseAction)
            : base(currentTime, baseAction)
        {
            WhoIsActing = theChar;
            Type = ActorActionType.Movement;
            BasePercent = 10/(theChar.Movement*baseAction.BasePercent);
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
