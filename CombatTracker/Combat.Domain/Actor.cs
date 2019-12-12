namespace Combat.Domain
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Actor
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Actor()
        {
            ActorsActions = new HashSet<ActorsAction>();
            ActorsAttacks = new HashSet<ActorsAttack>();
            CriticalAffects = new HashSet<CriticalAffect>();
        }

        public int ID { get; set; }

        public int Game_ID { get; set; }

        public Guid? Player_ID { get; set; }

        public int? BaseCreature_ID { get; set; }

        public int? BaseCharacter_ID { get; set; }

        [Required]
        [StringLength(50)]
        public string Name { get; set; }

        [Required]
        [StringLength(5)]
        public string Type { get; set; }

        public int Level { get; set; }

        public int HitsTotal { get; set; }

        public int HitsRemaining { get; set; }

        public int BaseInititive { get; set; }

        public int RolledInititive { get; set; }

        public int ExhaustionTotal { get; set; }

        public int ExhaustionRemaining { get; set; }

        public int PowerPointsTotal { get; set; }

        public int PowerPointsRemaining { get; set; }

        public bool IsConcentrating { get; set; }

        public bool IsMoving { get; set; }

        public bool Suprised { get; set; }

        public bool UsingAdrenalDB { get; set; }

        public double PercentRequiredAdrenalDB { get; set; }

        public double PercentAction { get; set; }

        public int StrengthBonus { get; set; }

        public int CritNegatives { get; set; }

        public int? CurrentArmor_ID { get; set; }

        public double NextSpellTime { get; set; }

        public int ConstitutionStat { get; set; }

        public double Movement { get; set; }

        [Required]
        [StringLength(11)]
        public string Color { get; set; }

        public virtual Character Character { get; set; }

        public virtual Creature Creature { get; set; }

        public virtual Game Game { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ActorsAction> ActorsActions { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ActorsAttack> ActorsAttacks { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<CriticalAffect> CriticalAffects { get; set; }
    }
}
