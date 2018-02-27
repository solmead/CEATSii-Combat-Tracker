using CombatTracker.Domain.Reference.Attacks.Charts;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CombatTracker.Domain.Reference.Attacks
{
    
    [Table("AttacksAddCrits")]
    public partial class DbAttacksAddCrit
    {
        public int ID { get; set; }

        public int? AttackID { get; set; }

        public int Critical_ID { get; set; }

        [Required]
        [ForeignKey("Critical_ID")]
        public virtual DbCriticalType CriticalType { get; set; }
        [Required]
        [ForeignKey("AttackID")]
        public virtual DbAttack Attack { get; set; }
    }
}
