using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using CombatTracker.Entities.Reference;
using CombatTracker.Entities.Reference.Attacks;
using CombatTracker.Base;
using CombatTracker.Entities.Reference.Creatures;
using CombatTracker.Base.Reference;

namespace CombatTracker.Entities.Current
{
    public class Actor
    {
        public Actor()
        {
            //this.Actions = new List<BaseAction>();
            this.Attacks = new List<Attack>();
            this.CriticalEffects = new Stack<CriticalEffect>();
            PercentRequiredAdrenalDB = 0.4;
            PercentAction = 100;
            ConstitutionStat = 90;
        }

        public int ID { get; set; }
        public string Name { get; set; }
        public CharacterType Type { get; set; }
        public string TypeString
        {
            get => Type.ToString();
            set => Type = (CharacterType)Enum.Parse(typeof(CharacterType), value);
        }
        public int Level { get; set; }
        public int HitsTotal { get; set; }
        public int HitsRemaining { get; set; }

        public DamageLevel Damage  {
            get
            {
                var dmg = ((1.0 * HitsRemaining) / (1.0 * HitsTotal))*100;
                if (dmg>=75)
                {
                    return DamageLevel.Healthy;
                }
                if (dmg >= 54)
                {
                    return DamageLevel.Winded;
                }
                if (dmg >= 33)
                {
                    return DamageLevel.Rough;
                }
                if (dmg > 0)
                {
                    return DamageLevel.Bloodied;
                }
                if (dmg > ConstitutionStat)
                {
                    return DamageLevel.Unconscious;
                }
                return DamageLevel.Dead;


            }
        }
        public string DamageString
        {
            get
            {
                return Damage.ToString();
            }
        }
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
        public double NextSpellTime { get; set; }
        public int ConstitutionStat { get; set; }
        public double Movement { get; set; }
        public string Color { get; set; }


        public int Game_ID { get; set; }
        public int? BaseCreature_ID { get; set; }
        public int? BaseCharacter_ID { get; set; }
        public int? CurrentArmor_ID { get; set; }


        public string CriticalIgnores { get; set; }
        public string CriticalModified { get; set; }




        //public  Character Character { get; set; }
        public  Armor CurrentArmor { get; set; }
        //public  Creature Creature { get; set; }
        //public Game Game { get; set; }

        //public IEnumerable<BaseAction> Actions { get; set; }
        public List<Attack> Attacks { get; set; }
        public Stack<CriticalEffect> CriticalEffects { get; set; }


        public int Inititive => BaseInititive + RolledInititive - 11;

        
        //public IActable Base { get; set; }


        public override string ToString()
        {
            return Name;
        }
        
        //public BaseAction CurrentAction => (from a in Game.GameActions where a.WhoIsActing.ID==ID && a.ActionType == ActionTypeEnum.Current select a).FirstOrDefault();

        //public BaseAction ProposedAction => (from a in Game.GameActions where a.WhoIsActing.ID == ID && a.ActionType == ActionTypeEnum.Proposed select a).FirstOrDefault();

        //public BaseAction FutureAction => (from a in Game.GameActions where a.WhoIsActing.ID == ID && a.ActionType == ActionTypeEnum.Next select a).FirstOrDefault();


        public int StunRounds => (from CR in CriticalEffects where CR.IsStunned select CR).Count();

        public int ParryRounds => (from CR in CriticalEffects where CR.Parry != ParryType.Fine select CR).Count();
        

        public int NegativeRounds => (from CR in CriticalEffects where CR.Negative != 0 select CR).Count();


        public CriticalEffect CurrentCrits => CriticalEffects.LastOrDefault();


        public int HitNegatives {
            get {
                if (HitsRemaining >= 0.75 * HitsTotal)
                {
                    return 0;
                }
                else if (HitsRemaining >= 0.5 * HitsTotal)
                {
                    return -10;
                }
                else if (HitsRemaining >= 0.25 * HitsTotal)
                {
                    return -20;
                }
                else
                {
                    return -30;
                }
            }
        }

        public int ExhNegatives {
            get {
                if (ExhaustionRemaining >= 0.75 * ExhaustionTotal)
                {
                    return 0;
                }
                else if (ExhaustionRemaining >= 0.5 * ExhaustionTotal)
                {
                    return -5;
                }
                else if (ExhaustionRemaining >= 0.25 * ExhaustionTotal)
                {
                    return -15;
                }
                else if (ExhaustionRemaining >= 0.1 * ExhaustionTotal)
                {
                    return -30;
                }
                else if (ExhaustionRemaining >= 0.01 * ExhaustionTotal)
                {
                    return -60;
                }
                else
                {
                    return -100;
                }
            }
        }

        public int Negatives => CritNegatives + HitNegatives + ExhNegatives + (CurrentCrits?.Negative ?? 0);

        public int SpellNegatives
        {
            get
            {
                if (PowerPointsRemaining >= 0.75 * PowerPointsTotal)
                {
                    return 0 + Negatives;
                }
                else if (PowerPointsRemaining >= 0.5 * PowerPointsTotal)
                {
                    return -10 + Negatives;
                }
                else if (PowerPointsRemaining >= 0.25 * PowerPointsTotal)
                {
                    return -20 + Negatives;
                }
                else
                {
                    return -30 + Negatives;
                }
            }
        }




    }
}
