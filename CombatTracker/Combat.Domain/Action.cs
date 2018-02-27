namespace Combat.Domain
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Action
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Action()
        {
            Actions1 = new HashSet<Action>();
            ActorsActions = new HashSet<ActorsAction>();
        }

        public int ID { get; set; }

        public int? ActionGroup_ID { get; set; }

        [Required]
        [StringLength(500)]
        public string Name { get; set; }

        public double BasePercent { get; set; }

        public bool IsAttack { get; set; }

        public bool IsSpell { get; set; }

        public int? NextAction_ID { get; set; }

        [Required]
        [StringLength(50)]
        public string Type { get; set; }

        public virtual ActionGroup ActionGroup { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Action> Actions1 { get; set; }

        public virtual Action Action1 { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ActorsAction> ActorsActions { get; set; }
    }
}
