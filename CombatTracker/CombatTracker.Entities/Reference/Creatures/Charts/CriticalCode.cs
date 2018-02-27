
using System.Collections.Generic;
using CombatTracker.Entities.Reference.Base;
using CombatTracker.Entities.Reference.Creatures;

namespace CombatTracker.Entities.Reference.Creatures.Charts
{
    public partial class CriticalCode : ReferenceEntry
    {
        public CriticalCode()
        {
            //this.Creatures = new HashSet<Creature>();
        }
    
        
        public override string ToString()
        {
            return Name;
        }
    }
    
}
