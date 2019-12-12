namespace Combat.Domain
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("PsychicRefractoryPeriodMod")]
    public partial class PsychicRefractoryPeriodMod
    {
        public int ID { get; set; }

        public int? RoundNumber { get; set; }

        public int? LevelMin { get; set; }

        public int? LevelMax { get; set; }

        public int? Mod { get; set; }
    }
}
