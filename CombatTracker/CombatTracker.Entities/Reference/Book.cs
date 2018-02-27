
using System.Collections.Generic;
using CombatTracker.Entities.Reference.Creatures;

namespace CombatTracker.Entities.Reference
{
    public partial class Book
    {
        public Book()
        {
            this.Creatures = new HashSet<Creature>();
        }
    
        public int ID { get; set; }
        public string Name { get; set; }
    
        public virtual ICollection<Creature> Creatures { get; set; }


        public override string ToString()
        {
            return Name;
        }
    }
    
}
