using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using CombatTracker.Domain.Reference.Attacks;

namespace CombatTracker.Domain.Reference.Creatures
{
    [Table("Creatures")]
    public partial class DbCreature
    {
        public DbCreature()
        {
            Attacks = new HashSet<DbAttack>();
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
        

        [InverseProperty("Creature")]
        public virtual ICollection<DbAttack> Attacks { get; set; }
        [Required]
        [ForeignKey("Book_ID")]
        public virtual DbBook Book { get; set; }
        [Required]
        [ForeignKey("HitMod_ID")]
        public virtual DbConstitutionBonusChart HitMod { get; set; }
        [ForeignKey("Criticals_ID")]
        public virtual DbCriticalCode Criticals { get; set; }
        [ForeignKey("CriticalsIgnore_ID")]
        public virtual DbCriticalIgnore CriticalIgnore { get; set; }
        [Required]
        [ForeignKey("IQ_ID")]
        public virtual DbIQ IQ { get; set; }
        [Required]
        [ForeignKey("LevelMod_ID")]
        public virtual DbLevelChart LevelMod { get; set; }
        [Required]
        [ForeignKey("Outlook_ID")]
        public virtual DbOutlook Outlook { get; set; }
        [Required]
        [ForeignKey("MaxPace_ID")]
        public virtual DbPace MaxPace { get; set; }
        [Required]
        [ForeignKey("Size_ID")]
        public virtual DbSizeRating Size { get; set; }
        [Required]
        [ForeignKey("AQRating_ID")]
        public virtual DbSpeedChart AQRating { get; set; }
        [Required]
        [ForeignKey("MSRating_ID")]
        public virtual DbSpeedChart MSRating { get; set; }

    }
}
