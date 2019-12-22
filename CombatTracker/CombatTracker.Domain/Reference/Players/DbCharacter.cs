using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CombatTracker.Domain.Reference.Players
{
    [Table("Characters")]
    public class DbCharacter
    {

        public DbCharacter()
        {
            Armors = new HashSet<DbArmor>();
            Weapons = new HashSet<DbWeapon>();
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

        public string GameType { get; set; }


        [InverseProperty("Character")]
        public virtual ICollection<DbArmor> Armors { get; set; }
        
        [InverseProperty("Character")]
        public virtual ICollection<DbWeapon> Weapons { get; set; }
    }
}
