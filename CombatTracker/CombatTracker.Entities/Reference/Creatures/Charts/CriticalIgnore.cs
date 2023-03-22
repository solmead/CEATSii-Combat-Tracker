
using System.Collections.Generic;
using CombatTracker.Base;

namespace CombatTracker.Entities.Reference.Creatures.Charts
{
    public partial class CriticalIgnore : ReferenceEntry
    {
        public CriticalIgnore()
        {
            //this.Creatures = new HashSet<Creature>();
        }
    

        public override string ToString()
        {
            return Name;
        }
    }
    
}
