using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CombatTracker.Domain.Reference.Attacks.Charts
{
    [Table("Attack_Types")]
    public class DbAttackType
    {

        public int ID { get; set; }

        [Required]
        [StringLength(50)]
        public string Name { get; set; }

        [Required]
        [StringLength(50)]
        public string Abbreviation { get; set; }

        public bool HasSize { get; set; }

        public bool HasDB { get; set; }
        
    }
}
