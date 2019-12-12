namespace Combat.Domain
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Armor
    {
        public int ID { get; set; }

        public int Type { get; set; }

        [Required]
        [StringLength(255)]
        public string Description { get; set; }

        public int MovingManeuverMod { get; set; }

        public int DB { get; set; }

        public int? BaseArmor_ID { get; set; }

        public int? TiedToID { get; set; }

        public virtual Character Character { get; set; }
    }
}
