using System.ComponentModel.DataAnnotations.Schema;
using CombatTracker.Domain.Reference.Attacks;

namespace CombatTracker.Domain.Models
{
    [Table("ActorsAttacks")]
    public partial class DbActorsAttack
    {
        public int ID { get; set; }

        public int Actor_ID { get; set; }

        public int Attack_ID { get; set; }

        [ForeignKey("Actor_ID")]
        public virtual DbActor Actor { get; set; }

        [ForeignKey("Attack_ID")]
        public virtual DbAttack Attack { get; set; }
    }
}
