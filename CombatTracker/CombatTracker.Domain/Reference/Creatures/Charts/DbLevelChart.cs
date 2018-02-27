using CombatTracker.Domain.Reference.Creatures;

namespace CombatTracker.Domain
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    
    [Table("Creature_LevelChart")]
    public partial class DbLevelChart
    {
        public DbLevelChart()
        {
            LevelChartValues = new HashSet<DbLevelChartValue>();
        }

        public int ID { get; set; }

        [Required]
        [StringLength(1)]
        public string Name { get; set; }

        [InverseProperty("Level_ID")]
        public virtual ICollection<DbLevelChartValue> LevelChartValues { get; set; }

    }
}
