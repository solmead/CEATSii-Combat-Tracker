using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CombatTracker.Domain.Models
{
    [Table("CriticalAffects")]
    public partial class DbCriticalAffect
    {
        public DbCriticalAffect()
        {
            //ActorsActions = new HashSet<ActorsAction>();
        }

        public int ID { get; set; }

        public bool IsStunned { get; set; }

        [Required]
        [StringLength(50)]
        public string Parry { get; set; }

        public int ParryNegative { get; set; }

        public int Negative { get; set; }

        public double TimeStart { get; set; }

        public double TimeEnd { get; set; }

        public int Actor_ID { get; set; }

        //public int? Action_ID { get; set; }

        [ForeignKey("Actor_ID")]
        public virtual DbActor Actor { get; set; }
        
        //public virtual ICollection<ActorsAction> ActorsActions { get; set; }

        //[ForeignKey("Action_ID")]
        //public virtual ActorsAction Action { get; set; }
    }
}
