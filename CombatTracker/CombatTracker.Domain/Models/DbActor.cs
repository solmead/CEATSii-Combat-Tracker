using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using CombatTracker.Domain.Reference.Creatures;
using CombatTracker.Domain.Reference.Players;

namespace CombatTracker.Domain.Models
{
    [Table("Actors")]
    public partial class DbActor
    {
        public DbActor()
        {
            Actions = new HashSet<DbActorsAction>();
            Attacks = new HashSet<DbActorsAttack>();
            CriticalAffects = new HashSet<DbCriticalAffect>();
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

        [ForeignKey("BaseCharacter_ID")]
        public virtual DbCharacter Character { get; set; }

        [ForeignKey("BaseCreature_ID")]
        public virtual DbCreature Creature { get; set; }

        [ForeignKey("Game_ID")]
        public virtual DbGame Game { get; set; }

        [InverseProperty("Actor")]
        public virtual ICollection<DbActorsAction> Actions { get; set; }


        [InverseProperty("Actor")]
        public virtual ICollection<DbActorsAttack> Attacks { get; set; }


        [InverseProperty("Actor")]
        public virtual ICollection<DbCriticalAffect> CriticalAffects { get; set; }
    }
}
