namespace Combat.Domain
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class CriticalAffect
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public CriticalAffect()
        {
            ActorsActions = new HashSet<ActorsAction>();
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

        public int? Action_ID { get; set; }

        public virtual Actor Actor { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ActorsAction> ActorsActions { get; set; }

        public virtual ActorsAction ActorsAction { get; set; }
    }
}
