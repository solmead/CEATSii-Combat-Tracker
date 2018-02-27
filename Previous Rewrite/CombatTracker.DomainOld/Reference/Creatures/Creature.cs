using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using CombatTracker.Domain.Reference.Attacks;
using CombatTracker.Domain.Reference.Base;
using CombatTracker.Domain.Reference.Creatures.Charts;

namespace CombatTracker.Domain.Reference.Creatures
{
    

    [Table("Creature")]
    public partial class Creature  :IActable
    {
        public Creature()
        {
            //this.Actors = new List<Actor>();
            this.Attacks = new List<Attack>();
        }
    
        public int ID { get; set; }
        [Required]
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
        public string Description { get; set; }
        public string Habitat { get; set; }
    
        //public virtual ICollection<Actor> Actors { get; set; }
        public virtual ICollection<Attack> Attacks { get; set; }
        [Required]
        [ForeignKey("Book_ID")]
        public virtual Book Book { get; set; }
        [Required]
        [ForeignKey("HitMod_ID")]
        public virtual ConstitutionBonusChart HitMod { get; set; }
        [ForeignKey("Criticals_ID")]
        public virtual CriticalCode Criticals { get; set; }
        [ForeignKey("CriticalsIgnore_ID")]
        public virtual CriticalIgnore CriticalIgnore { get; set; }
        [Required]
        [ForeignKey("IQ_ID")]
        public virtual IQ IQ { get; set; }
        [Required]
        [ForeignKey("LevelMod_ID")]
        public virtual LevelChart LevelMod { get; set; }
        [Required]
        [ForeignKey("Outlook_ID")]
        public virtual Outlook Outlook { get; set; }
        [Required]
        [ForeignKey("MaxPace_ID")]
        public virtual Pace MaxPace { get; set; }
        [Required]
        [ForeignKey("Size_ID")]
        public virtual SizeRating Size { get; set; }
        [Required]
        [ForeignKey("AQRating_ID")]
        public virtual SpeedChart AQRating { get; set; }
        [Required]
        [ForeignKey("MSRating_ID")]
        public virtual SpeedChart MSRating { get; set; }

        
        public override string ToString()
        {
            return TypeName;
        }
        public string GetName()
        {
            return TypeName;
        }
        public int GetLevel()
        {
            var roll = Dice.RollD100OpenEnded();
            var level = BaseLevel + LevelMod.LookupLevel(roll);
            return level;
        }
        public int GetBaseInititive()
        {
            return AQRating.AQInitiative;
        }
        public int GetRolledInititive()
        {
            var roll = Dice.RollAddOnes10High(2);
            return roll;
        }
        public int GetHitsTotal(int roll, int characterLevel)
        {
            return BaseHits + HitMod.LookupStamina(roll) + (characterLevel - BaseLevel) * HitMod.PerLevelDifference;
        }
        public int GetExaustionTotal(int roll)
        {
            return HitMod.LookupStamina(roll)*3 + 40 + HitMod.BonusExhaustion;
        }

        public int GetPowerPointsTotal(int roll)
        {
            return 0;
        }

        public CharacterType GetActorType()
        {
            return CharacterType.NPC;
        }
        public Armor GetArmor()
        {
            var ar = new Armor {Type = AT, Description = "Unknown", DB = DB};
            return ar;
        }
        public double GetBaseMove()
        {
            return BaseMove;
        }

        public int GetStrengthBonus()
        {
            return 0;
        }

        public double GetPercentRequiredAdrenalDB()
        {
            return 1;
        }

        public List<Attack> GetAttacks()
        {
            return Attacks.ToList();
        } 


    }
    
}
