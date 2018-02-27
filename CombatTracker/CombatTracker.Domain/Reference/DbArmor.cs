using CombatTracker.Domain.Models;
using CombatTracker.Domain.Reference.Players;

namespace CombatTracker.Domain
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    
    [Table("Armors")]
    public partial class DbArmor
    {
        public int ID { get; set; }

        public int Type { get; set; }

        [Required]
        [StringLength(255)]
        public string Description { get; set; }

        public int MovingManeuverMod { get; set; }

        public int DB { get; set; }
        

        public int? TiedToID { get; set; }
        [ForeignKey("TiedToID")]
        public virtual DbCharacter Character { get; set; }

    }
}
