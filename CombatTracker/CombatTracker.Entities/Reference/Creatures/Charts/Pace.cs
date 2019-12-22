using CombatTracker.Entities.Reference.Base;

namespace CombatTracker.Entities.Reference.Creatures.Charts
{
    public partial class Pace : ReferenceEntry
    {
        public Pace()
        {
            //this.Creatures = new HashSet<Creature>();
        }
    

        public override string ToString()
        {
            return Name;
        }

    }
    
}
