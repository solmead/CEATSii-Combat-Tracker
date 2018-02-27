//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using CombatTracker.Domain.Current.Actions;
using CombatTracker.Domain.Many2Many;
using CombatTracker.Domain.Reference;
using CombatTracker.Domain.Reference.Base;
using CombatTracker.Domain.Reference.Creatures;

namespace CombatTracker.Domain.Current
{
    public partial class Actor
    {
        public Actor()
        {
            this.Actions = new HashSet<BaseAction>();
            this.ActorsAttacks = new HashSet<ActorsAttack>();
            this.CriticalAffects = new HashSet<CriticalAffect>();
            PercentRequiredAdrenalDB = 0.4;
            PercentAction = 100;
            ConstitutionStat = 90;
        }
    
        public int ID { get; set; }
        public int Game_ID { get; set; }
        public Guid? Player_ID { get; set; }
        public int? BaseCreature_ID { get; set; }
        public int? BaseCharacter_ID { get; set; }
        public string Name { get; set; }
        public CharacterType Type { get; set; }
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
        public string Color { get; set; }

        [ForeignKey("BaseCharacter_ID")]
        public virtual Character Character { get; set; }
        public virtual Armor CurrentArmor { get; set; }
        [ForeignKey("BaseCreature_ID")]
        public virtual Creature Creature { get; set; }
        //public virtual Game Game { get; set; }
        [InverseProperty("WhoIsActing_ID")]
        public virtual ICollection<BaseAction> Actions { get; set; }
        public virtual ICollection<ActorsAttack> ActorsAttacks { get; set; }
        public virtual ICollection<CriticalAffect> CriticalAffects { get; set; }


        public int Inititive
        {
            get
            {
                return BaseInititive + RolledInititive - 11;
            }
        }


        [NotMapped]
        public IActable Base
        {
            get
            {
                if (Character != null)
                {
                    return Character;
                }
                if (Creature != null)
                {
                    return Creature;
                }
                return null;
            }
            set
            {
                if (value is Character)
                {
                    Character = value as Character;
                }
                if (value is Creature)
                {
                    Creature = value as Creature;
                }
            }
        }


        public override string ToString()
        {
            return Name;
        }

        [NotMapped]
        public BaseAction CurrentAction
        {
            get { return (from a in Actions where a.ActionType == ActionTypeEnum.Current select a).FirstOrDefault(); }
        }
        [NotMapped]
        public BaseAction ProposedAction
        {
            get
            {
                return (from a in Actions where a.ActionType == ActionTypeEnum.Proposed select a).FirstOrDefault();
            }
            set
            {
                if (value != null)
                {
                    value.ActionType = ActionTypeEnum.Proposed;
                    value.WhoIsActing = this;
                    if (!Actions.Contains(value))
                    {
                        Actions.Add(value);
                    }
                }
                //else
                //{
                //    var act = ProposedAction;
                //    if (act != null)
                //    {
                //        Actions.Remove(act);
                //        act.WhoIsActing = null;
                //    }
                //}
            }
        }
        [NotMapped]
        public BaseAction FutureAction
        {
            get
            {
                return (from a in Actions where a.ActionType == ActionTypeEnum.Next select a).FirstOrDefault();
            }
            set
            {
                if (value != null)
                {
                    value.ActionType = ActionTypeEnum.Next;
                    value.WhoIsActing = this;
                    if (!Actions.Contains(value))
                    {
                        Actions.Add(value);
                    }
                }
                //else
                //{
                //    var act = FutureAction;
                //    if (act != null)
                //    {
                //        Actions.Remove(act);
                //        act.WhoIsActing = null;
                //    }
                //}
            }
        }


        public void HandleDeath(RmssDbContext db, double currentTime)
        {
            if (!(CurrentAction is DeathAction))
            {
                var nAct = new DeathAction(this, currentTime);
                this.Actions.Add(nAct);
            }
        }





        public static Actor CreateFrom(IActable person)
        {
            var roll = Dice.RollD100();

            var myChar = new Actor
                             {
                                 Base = person,
                                 Name = person.GetName(),
                                 CurrentArmor = person.GetArmor(),
                                 Level = person.GetLevel(),
                                 BaseInititive = person.GetBaseInititive(),
                                 RolledInititive = person.GetRolledInititive(),
                                 Type = person.GetActorType(),
                                 Movement = person.GetBaseMove(),
                                 StrengthBonus = person.GetStrengthBonus(),
                                 PercentRequiredAdrenalDB = person.GetPercentRequiredAdrenalDB() 
                             };
            myChar.HitsTotal = person.GetHitsTotal(roll, myChar.Level);
            myChar.HitsRemaining = myChar.HitsTotal;
            myChar.ExhaustionTotal = person.GetExaustionTotal(roll);
            myChar.ExhaustionRemaining = myChar.ExhaustionTotal;
            myChar.PowerPointsTotal = person.GetPowerPointsTotal(roll);
            myChar.PowerPointsRemaining = myChar.PowerPointsTotal;
 
            return myChar;
        }


        public void HandleInitChange(double CurrentTime)
        {
            Action CurAct = this.CurrentAction;
            double PerRemain = 0;
            PerRemain = 1 - CurAct.PercentageCompleted(CurrentTime);
            CurAct.EndTime = CurrentTime + PerRemain * this.CalculateTimeRequired(CurAct.BasePercent * BaseRoundTime, CurAct.CurrentModifier, CurAct.Type == ActorActionType.Attack, CurAct.CurrentAttack);
            if (this.FutureAction != null)
            {
                SetActionTime(this.FutureAction, CurAct.EndTime);
            }

            if (this.ProposedAction != null)
            {
                SetActionTime(this.ProposedAction, CurrentTime);
            }
        }

        public int StunRounds()
        {
            int Cnt = 0;
            //CriticalAffect CR;
            foreach (var CR in CriticalAffects)
            {
                if (CR.IsStunned)
                    Cnt += 1;
            }

            return Cnt;
        }

        public int ParryRounds()
        {
            int Cnt = 0;
            //CriticalAffect CR;
            foreach (var CR in CriticalAffects)
            {
                if (CR.Parry != ParryType.Fine)
                    Cnt += 1;
            }

            return Cnt;
        }

        public int NegativeRounds()
        {
            int Cnt = 0;
            //CriticalAffect CR;
            foreach (var CR in CriticalAffects)
            {
                if (CR.Negative != 0)
                    Cnt += 1;
            }

            return Cnt;
        }

        public CriticalAffect CurrentCrits
        {
            get
            {
                if (CriticalAffects.Count > 0)
                {
                    return CriticalAffects.First();
                }
                else
                {
                    return null;
                }
            }
        }

        public void RemoveCriticalsFromCharacter(RmssDbContext DB, Game GI, int Count)
        {
            bool flag = this.CurrentCrits == null;
            if (!flag)
            {
                if (this.CurrentCrits.Action != null)
                {
                    this.CurrentCrits.Action.deletepartial(DB);
                }

                int a;
                for (a = 1; a <= Count; a++)
                {
                    CriticalAffect ca = CriticalAffects.First();
                    ca.DeletePartial(DB);
                    CriticalAffects.RemoveAt(0);
                }

                if (CriticalAffects.Count == 0)
                    return;
                if (this.CurrentCrits != null)
                {
                    if (CurrentCrits.TimeStart == 0)
                    {
                        CurrentCrits.TimeStart = GI.CurrentTime;
                        CurrentCrits.TimeEnd = this.CalculateTimeRequiredNonEncumbered(BaseRoundTime) + GI.CurrentTime;
                    }

                    CriticalAction CA = new CriticalAction(this, GI.CurrentTime);
                    CA.Game = GI;
                }
            }
        }

        public void RemoveCriticalFromCharacter(RmssDbContext DB, Game GI)
        {
            RemoveCriticalsFromCharacter(DB, GI, 1);
        }

        public void AddCriticalToCharcter(Game GI, CriticalAffect Crit, int Rounds)
        {
            bool flag = CurrentCrits == null;
            AddRoundsCriticalAffects(Crit, Rounds, GI.CurrentTime);
            if (flag)
            {
                CriticalAction CA = new CriticalAction(this, GI.CurrentTime);
                CA.Game = GI;
            }
        }

        public void AddRoundsCriticalAffects(CriticalAffect CAffect, int Rounds, double CurrentTime)
        {
            //CriticalAffect ca;
            int RS = 0;
            int RNP = 0;
            int RMP = 0;
            int RNeg = 0;
            bool flag = CriticalAffects.Count == 0;
            if (CAffect.Parry == ParryType.No_Parry)
                RNP = Rounds;
            if (CAffect.Parry == ParryType.Must_Parry)
                RMP = Rounds;
            if (CAffect.IsStunned)
                RS = Rounds;
            if (CAffect.Negative != 0)
                RNeg = Rounds;
            foreach (CriticalAffect ca in CriticalAffects)
            {
                if (ca.TimeStart == 0 || ca.TimeStart == CurrentTime || (ca.TimeEnd - ca.TimeStart) * 0.5 >= (CurrentTime - ca.TimeStart))
                {
                    if (!ca.IsStunned && RS > 0)
                    {
                        ca.IsStunned = true;
                        RS -= 1;
                    }

                    if (ca.Parry == ParryType.Fine && RMP > 0)
                    {
                        ca.Parry = ParryType.Must_Parry;
                        ca.ParryNegative = CAffect.ParryNegative;
                        RMP -= 1;
                    }
                    else if (ca.Parry == ParryType.No_Parry && RMP > 0)
                    {
                        RMP -= 1;
                    }

                    if (ca.Parry != ParryType.No_Parry && RNP > 0)
                    {
                        ca.Parry = ParryType.No_Parry;
                        ca.ParryNegative = 0;
                        RNP -= 1;
                    }

                    if (RNeg > 0)
                    {
                        ca.Negative += CAffect.Negative;
                        RNeg -= 1;
                    }
                }
            }

            while (RS > 0 || RMP > 0 || RNP > 0 || RNeg > 0)
            {
                var ca = new CriticalAffect();
                if (RS > 0)
                {
                    ca.IsStunned = true;
                    RS -= 1;
                }

                if (RMP > 0)
                {
                    ca.Parry = ParryType.Must_Parry;
                    ca.ParryNegative = CAffect.ParryNegative;
                    RMP -= 1;
                }

                if (RNP > 0)
                {
                    ca.Parry = ParryType.No_Parry;
                    ca.ParryNegative = 0;
                    RNP -= 1;
                }

                if (RNeg > 0)
                {
                    ca.Negative += CAffect.Negative;
                    RNeg -= 1;
                }

                CriticalAffects.Add(ca);
            }

            var caf = CriticalAffects.First();
            if (caf.TimeStart == 0)
            {
                caf.TimeStart = CurrentTime;
                caf.TimeEnd = this.CalculateTimeRequiredNonEncumbered(BaseRoundTime) + CurrentTime;
            }
        }

        private int HitNegatives()
        {
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

        private int ExhNegatives()
        {
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

        public int Negatives
        {
            get
            {
                int T = 0;
                if (CurrentCrits != null)
                    T = CurrentCrits.Negative;
                return CritNegatives + HitNegatives() + ExhNegatives() + T;
            }
        }

        public int SpellNegatives()
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



        public void SetActionTime(Action Act, double CurrentTime)
        {
            Act.StartTime = CurrentTime;
            Act.EndTime = CurrentTime + this.CalculateTimeRequired(Act.BasePercent * BaseRoundTime, Act.CurrentModifier, Act.Type == ActorActionType.Attack, Act.CurrentAttack);
        }

        public double CalculateTimeRequired(double BaseTime, int Modifier, bool IsAttack, Attack CurrentAttack)
        {
            double Init;
            Init = this.Inititive;
            if (this.HitsRemaining < this.HitsTotal / 2)
            {
                Init -= 8;
            }

            if (this.IsConcentrating)
            {
                Init -= 30;
            }

            if (this.Suprised)
            {
                Init -= 30;
            }

            Init += 3 * this.CurrentArmor.MovingManeuverMod / 10;
            if (IsAttack && CurrentAttack != null && CurrentAttack.WeaponUsed != null)
            {
                Init += 3 * CurrentAttack.WeaponUsed.Bonus / 5;
                if (!CurrentAttack.WeaponUsed.Is2Handed)
                {
                    Init += this.StrengthBonus - CurrentAttack.WeaponUsed.Weight;
                }
                else
                {
                    Init += this.StrengthBonus - CurrentAttack.WeaponUsed.Weight / 2;
                }
            }

            if (this.UsingAdrenalDB)
            {
                Init += (100 + Init) * (1 / ((100 + (this.PercentRequiredAdrenalDB * 100)) / 100) - 1);
            }

            Init += (100 + Init) * (1 / ((100 + Modifier) / 100) - 1);
            BaseTime = BaseTime / (this.PercentAction / 100);
            //Debug.WriteLine(Init);
            return BaseTime * (100 / (100 + (Init)));
        }

        public double CalculateTimeRequiredNonEncumbered(double BaseTime)
        {
            double Init;
            Init = this.Inititive;
            if (this.HitsRemaining < this.HitsTotal / 2)
            {
                Init -= 8;
            }

            double BInit = Init;
            if (this.UsingAdrenalDB)
            {
                Init = (100 + BInit) * (1 / (1 + this.PercentRequiredAdrenalDB / 100) - 1) + Init;
            }

            BaseTime = BaseTime / (this.PercentAction / 100);
            return BaseTime * (100 / (100 + (Init)));
        }

        public double CalculateTimeRequiredForSpells(double BaseTime)
        {
            double Init;
            Init = this.Inititive;
            return BaseTime * (100 / (100 + (Init)));
        }

    }
    
}