using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using CombatTracker.Domain.Reference.Attacks.Charts;
using CombatTracker.Domain.Reference.Creatures;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace CombatTracker.Domain.Reference.Attacks
{
    [Table("Attacks")]
    public class DbAttack
    {
        public DbAttack()
        {
           
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

        [Required]
        [ForeignKey("UseCriticalInstead_ID")]
        public virtual DbCriticalType CriticalUseInstead { get; set; }
        [Required]
        [ForeignKey("Type_ID")]
        public virtual DbAttackType AttackType { get; set; }
        [ForeignKey("CreatureOn_ID")]
        public virtual DbCreature Creature { get; set; }
        [ForeignKey("ThisRoundSuccess_ID")]
        public virtual DbAttack ThisRoundSuccess { get; set; }
        [ForeignKey("NextRoundSuccess_ID")]
        public virtual DbAttack NextRoundSuccess { get; set; }
        [ForeignKey("Size_ID")]
        public virtual DbSizeRating SizeRating { get; set; }
        [ForeignKey("WeaponUsed_ID")]
        public virtual DbWeapon WeaponUsed { get; set; }

    }
}
