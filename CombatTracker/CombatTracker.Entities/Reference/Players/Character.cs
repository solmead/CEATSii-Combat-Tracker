using System;
using System.Collections.Generic;
using System.Linq;
using CombatTracker.Entities.Reference.Attacks;
using CombatTracker.Entities.Reference.Attacks.Charts;
using CombatTracker.Entities.Reference.Base;
using Utilities.EnumExtensions;

namespace CombatTracker.Entities.Reference
{
    public partial class Character  :IActable
    {
        public Character()
        {
            //this.Actors = new HashSet<Actor>();
            this.Armors = new HashSet<Armor>();
            this.Weapons = new HashSet<Weapon>();
            Type = CharacterType.PC;
        }
    
        public int ID { get; set; }
        public string Name { get; set; }
        public int Level { get; set; }
        public int BaseInititive { get; set; }
        public int HitPoints { get; set; }
        public int ExhaustionPoints { get; set; }
        public int PowerPoints { get; set; }
        public CharacterType Type { get; set; }
        public string TypeString
        {
            get => Type.ToString();
            set => Type = (CharacterType)Enum.Parse(typeof(CharacterType), value);
        }
        public int StrengthBonus { get; set; }
        public double PercentRequiredAdrenalDB { get; set; }
        public double WalkSpeed { get; set; }
        public GameType GameType { get; set; }
        public string GameTypeString
        {
            get => GameType.ToString();
            set => GameType = (!string.IsNullOrWhiteSpace(value) ? value.ToEnum<GameType>() : GameType.RMSS);
        }

        //public virtual ICollection<Actor> Actors { get; set; }
        public virtual ICollection<Armor> Armors { get; set; }
        public virtual ICollection<Weapon> Weapons { get; set; }

        public int RolledInititive { get; set; }

        public override string ToString()
        {
            return Name;
        }

        public string GetName()
        {
            return Name;
        }


        public int GetLevel()
        {
            return Level;
        }

        public int GetBaseInititive()
        {
            return BaseInititive;
        }

        public int GetRolledInititive()
        {
            if (Type == CharacterType.PC)
            {
                return RolledInititive;
            }
            else
            {
                var roll = Dice.RollAddOnes10High(2);
                return roll;
            }
        }

        public int GetHitsTotal(int? roll = null, int? characterLevel = null)
        {
            return HitPoints;
        }

        public int GetExaustionTotal(int? roll = null)
        {
            return ExhaustionPoints;
        }
        public int GetPowerPointsTotal(int? roll = null)
        {
            return PowerPoints;
        }

        public CharacterType GetActorType()
        {
            return Type;
        }

        public Armor GetArmor()
        {
            return Armors.FirstOrDefault();
        }

        public int GetStrengthBonus()
        {
            return StrengthBonus;
        }
        public double GetPercentRequiredAdrenalDB()
        {
            return PercentRequiredAdrenalDB;
        }
        public double GetBaseMove()
        {
            return WalkSpeed;
        }
        public List<Attack> GetAttacks()
        {
            return (from wpn in Weapons
                    select new Attack()
                               {
                                   WeaponUsed = wpn,
                                   OB = wpn.OB
                               }).ToList();
        }

        public double GetWalkSpeed()
        {
            return WalkSpeed;
        }

        public string GetCriticalIgnores()
        {
            return null;
        }

        public string GetCriticalModified()
        {
            return null;
        }
    }
    
}
