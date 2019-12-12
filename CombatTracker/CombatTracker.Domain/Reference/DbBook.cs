using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using CombatTracker.Domain.Reference.Creatures;

namespace CombatTracker.Domain.Reference
{
    [Table("Books")]
    public class DbBook
    {
        public DbBook()
        {
            Creatures = new HashSet<DbCreature>();
        }

        public int ID { get; set; }

        [Required]
        [StringLength(500)]
        public string Name { get; set; }
        
        [InverseProperty("Book")]
        public virtual ICollection<DbCreature> Creatures { get; set; }
    }
}
