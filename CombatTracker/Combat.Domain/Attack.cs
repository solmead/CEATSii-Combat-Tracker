namespace Combat.Domain
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Attack
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Attack()
        {
            ActorsActions = new HashSet<ActorsAction>();
            ActorsAttacks = new HashSet<ActorsAttack>();
            Attacks1 = new HashSet<Attack>();
            Attacks11 = new HashSet<Attack>();
            Attacks12 = new HashSet<Attack>();
            AttacksAddCrits = new HashSet<AttacksAddCrit>();
        }

        public int ID { get; set; }

        public double PercentChance { get; set; }

        public int OB { get; set; }

        public int MaxOB { get; set; }

        public int Type_ID { get; set; }

        public int? Size_ID { get; set; }

        public int Number { get; set; }

        public int DamageMultiplier { get; set; }

        [StringLength(50)]
        public string CriticalLevel { get; set; }

        public bool AdditionalCritsIsOr { get; set; }

        public int? UseCriticalInstead_ID { get; set; }

        public int? ThisRoundSuccess_ID { get; set; }

        public int? NextRoundSuccess_ID { get; set; }

        public int? ParentAttack_ID { get; set; }

        public int? CreatureOn_ID { get; set; }

        public int? WeaponUsed_ID { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ActorsAction> ActorsActions { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ActorsAttack> ActorsAttacks { get; set; }

        public virtual Attack_CriticalTypes Attack_CriticalTypes { get; set; }

        public virtual Attack_Types Attack_Types { get; set; }

        public virtual Creature Creature { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Attack> Attacks1 { get; set; }

        public virtual Attack Attack1 { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Attack> Attacks11 { get; set; }

        public virtual Attack Attack2 { get; set; }

        public virtual Creature_Sizes Creature_Sizes { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Attack> Attacks12 { get; set; }

        public virtual Attack Attack3 { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<AttacksAddCrit> AttacksAddCrits { get; set; }
    }
}
