namespace Combat.Domain
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Creature_LevelChartValues
    {
        public int ID { get; set; }

        public int Level_ID { get; set; }

        public int Min { get; set; }

        public int Max { get; set; }

        public int Mod { get; set; }

        public virtual Creature_LevelChart Creature_LevelChart { get; set; }
    }
}
