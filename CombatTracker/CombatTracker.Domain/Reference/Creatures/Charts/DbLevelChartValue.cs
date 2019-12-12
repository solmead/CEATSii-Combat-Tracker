namespace CombatTracker.Domain
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    
    [Table("Creature_LevelChartValues")]
    public partial class DbLevelChartValue
    {
        public int ID { get; set; }

        public int Level_ID { get; set; }

        public int Min { get; set; }

        public int Max { get; set; }

        public int Mod { get; set; }

        [ForeignKey("Level_ID")]
        public virtual DbLevelChart Chart { get; set; }
    }
}
