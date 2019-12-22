using CombatTracker.Domain.Reference.Creatures;

namespace CombatTracker.Domain
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    
    [Table("Creature_SpeedChart")]
    public partial class DbSpeedChart
    {
        public DbSpeedChart()
        {

        }

        public int ID { get; set; }

        [Required]
        [StringLength(50)]
        public string Abbreviation { get; set; }

        [Required]
        [StringLength(500)]
        public string Name { get; set; }

        public int MSBaseDB { get; set; }

        public int MSFleeEvade { get; set; }

        public int AQChargeLunge { get; set; }

        public int AQInitiative { get; set; }
        
    }
}
