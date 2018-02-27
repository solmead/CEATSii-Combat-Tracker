namespace Combat.Domain
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Creature
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Creature()
        {
            Actors = new HashSet<Actor>();
            Attacks = new HashSet<Attack>();
        }

        public int ID { get; set; }

        [Required]
        [StringLength(500)]
        public string TypeName { get; set; }

        public int BaseLevel { get; set; }

        public int LevelMod_ID { get; set; }

        public int Size_ID { get; set; }

        public int MSRating_ID { get; set; }

        public int AQRating_ID { get; set; }

        public int BaseMove { get; set; }

        public int MaxPace_ID { get; set; }

        public int MMBonus { get; set; }

        public int MinEncountered { get; set; }

        public int MaxEncountered { get; set; }

        public int BaseHits { get; set; }

        public int HitMod_ID { get; set; }

        public int Criticals_ID { get; set; }

        public int CriticalsIgnore_ID { get; set; }

        public int AT { get; set; }

        public int DB { get; set; }

        public int Outlook_ID { get; set; }

        public int IQ_ID { get; set; }

        public int PageNumber { get; set; }

        public int Book_ID { get; set; }

        [Required]
        [StringLength(255)]
        public string Description { get; set; }

        [Required]
        [StringLength(50)]
        public string Habitat { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Actor> Actors { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Attack> Attacks { get; set; }

        public virtual Book Book { get; set; }

        public virtual Creature_ConsitutionBonusChart Creature_ConsitutionBonusChart { get; set; }

        public virtual Creature_CriticalCodes Creature_CriticalCodes { get; set; }

        public virtual Creature_CriticalIgnores Creature_CriticalIgnores { get; set; }

        public virtual Creature_IQs Creature_IQs { get; set; }

        public virtual Creature_LevelChart Creature_LevelChart { get; set; }

        public virtual Creature_Outlook Creature_Outlook { get; set; }

        public virtual Creature_Pace Creature_Pace { get; set; }

        public virtual Creature_Sizes Creature_Sizes { get; set; }

        public virtual Creature_SpeedChart Creature_SpeedChart { get; set; }

        public virtual Creature_SpeedChart Creature_SpeedChart1 { get; set; }
    }
}
