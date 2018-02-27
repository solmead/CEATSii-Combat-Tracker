namespace CombatTracker.Domain
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    
    [Table("Weapons")]
    public partial class DbWeapon
    {
        public int ID { get; set; }

        [Required]
        [StringLength(500)]
        public string Name { get; set; }

        public int MinWeight { get; set; }

        public int MaxWeight { get; set; }

        public int Weight { get; set; }

        public int Bonus { get; set; }

        public bool Is2Handed { get; set; }

        public int OB { get; set; }

        public int? TiedToID { get; set; }
        
    }
}
