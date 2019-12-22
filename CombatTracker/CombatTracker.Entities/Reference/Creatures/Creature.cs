using System;
using System.Collections.Generic;
using System.Linq;
using CombatTracker.Entities.Reference.Attacks;
using CombatTracker.Entities.Reference.Base;
using CombatTracker.Entities.Reference.Creatures.Charts;

namespace CombatTracker.Entities.Reference.Creatures
{
    
    
    public partial class Creature  :IActable
    {
        public Creature()
        {
            //this.Actors = new List<Actor>();
            this.Attacks = new List<Attack>();
        }
    
        public int ID { get; set; }
        public string TypeName { get; set; }
        public int BaseLevel { get; set; }
        public int Size_ID { get; set; }
        public int BaseMove { get; set; }
        public int MMBonus { get; set; }
        public int MinEncountered { get; set; }
        public int MaxEncountered { get; set; }
        public int BaseHits { get; set; }
        public int AT { get; set; }
        public int DB { get; set; }
        public int PageNumber { get; set; }
        public string Description { get; set; }
        public string Habitat { get; set; }


        public int LevelMod_ID { get; set; }
        public int MSRating_ID { get; set; }
        public int AQRating_ID { get; set; }
        public int MaxPace_ID { get; set; }
        public int HitMod_ID { get; set; }
        public int Criticals_ID { get; set; }
        public int CriticalsIgnore_ID { get; set; }
        public int Outlook_ID { get; set; }
        public int IQ_ID { get; set; }
        public int Book_ID { get; set; }
        public GameType GameType { get; set; }
        public string GameTypeString
        {
            get => GameType.ToString();
            set => GameType = (GameType)Enum.Parse(typeof(GameType), value);
        }

        //public virtual ICollection<Actor> Actors { get; set; }
        public virtual ICollection<Attack> Attacks { get; set; }
        public virtual Book Book { get; set; }
        public virtual ConstitutionBonusChart HitMod { get; set; }
        public virtual CriticalCode Criticals { get; set; }
        public virtual CriticalIgnore CriticalIgnore { get; set; }
        public virtual IQ IQ { get; set; }
        public virtual LevelChart LevelMod { get; set; }
        public virtual Outlook Outlook { get; set; }
        public virtual Pace MaxPace { get; set; }
        public virtual SizeRating Size { get; set; }
        public virtual SpeedChart AQRating { get; set; }
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
        public int GetHitsTotal(int? roll = null, int? characterLevel = null)
        {
            roll = roll ?? Dice.RollD100();
            characterLevel = characterLevel ?? GetLevel();
            return BaseHits + HitMod.LookupStamina(roll.Value) + (characterLevel.Value - BaseLevel) * HitMod.PerLevelDifference;
        }
        public int GetExaustionTotal(int? roll = null)
        {
            roll = roll ?? Dice.RollD100();
            return HitMod.LookupStamina(roll.Value)*3 + 40 + HitMod.BonusExhaustion;
        }

        public int GetPowerPointsTotal(int? roll = null)
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

        public double GetWalkSpeed()
        {
            return BaseMove;
        }

    }
    
}
