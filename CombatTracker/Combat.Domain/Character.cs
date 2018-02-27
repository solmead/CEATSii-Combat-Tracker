namespace Combat.Domain
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Character
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Character()
        {
            Actors = new HashSet<Actor>();
            Armors = new HashSet<Armor>();
            Weapons = new HashSet<Weapon>();
        }

        public int ID { get; set; }

        [Required]
        [StringLength(500)]
        public string Name { get; set; }

        public int Level { get; set; }

        public int BaseInititive { get; set; }

        public int HitPoints { get; set; }

        public int ExhaustionPoints { get; set; }

        public int PowerPoints { get; set; }

        [Required]
        [StringLength(50)]
        public string Type { get; set; }

        public int StrengthBonus { get; set; }

        public double PercentRequiredAdrenalDB { get; set; }

        public double WalkSpeed { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Actor> Actors { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Armor> Armors { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Weapon> Weapons { get; set; }
    }
}
