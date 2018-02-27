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
            Values = new HashSet<DbLevelChartValue>();
        }

        public int ID { get; set; }

        [Required]
        [StringLength(1)]
        public string Name { get; set; }

        [InverseProperty("Chart")]
        public virtual ICollection<DbLevelChartValue> Values { get; set; }

    }
}
