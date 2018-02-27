using CombatTracker.Domain.Reference.Creatures;

namespace CombatTracker.Domain
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    
    [Table("Creature_Pace")]
    public partial class DbPace
    {
        public DbPace()
        {

        }

        public int ID { get; set; }

        [Required]
        [StringLength(50)]
        public string Name { get; set; }

        [Required]
        [StringLength(50)]
        public string Abbreviation { get; set; }
        
    }
}
