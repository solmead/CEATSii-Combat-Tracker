﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading;
using CombatTracker.Entities.Reference;
using CombatTracker.Entities.Reference.Attacks;
using CombatTracker.Entities.Reference.Base;
using CombatTracker.Entities.Reference.Creatures;

namespace CombatTracker.Entities.Current
{
    public class Actor
    {
        public Actor()
        {
            this.Actions = new List<BaseAction>();
            this.Attacks = new List<Attack>();
            this.CriticalEffects = new List<CriticalEffect>();
            PercentRequiredAdrenalDB = 0.4;
            PercentAction = 100;
            ConstitutionStat = 90;
        }

        public int ID { get; set; }
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
        public double NextSpellTime { get; set; }
        public int ConstitutionStat { get; set; }
        public double Movement { get; set; }
        public string Color { get; set; }
        
        public  Character Character { get; set; }
        public  Armor CurrentArmor { get; set; }
        public  Creature Creature { get; set; }

        public  List<BaseAction> Actions { get; set; }
        public List<Attack> Attacks { get; set; }
        public List<CriticalEffect> CriticalEffects { get; set; }


        public int Inititive => BaseInititive + RolledInititive - 11;

        
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
        
        public BaseAction CurrentAction
        {
            get => (from a in Actions where a.ActionType == ActionTypeEnum.Current select a).FirstOrDefault();
        }

        
        public BaseAction ProposedAction
        {
            get => (from a in Actions where a.ActionType == ActionTypeEnum.Proposed select a).FirstOrDefault();
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
            }
        }
        public BaseAction FutureAction
        {
            get => (from a in Actions where a.ActionType == ActionTypeEnum.Next select a).FirstOrDefault();
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
            }
        }

        public int StunRounds => (from CR in CriticalEffects where CR.IsStunned select CR).Count();

        public int ParryRounds => (from CR in CriticalEffects where CR.Parry != ParryType.Fine select CR).Count();
        

        public int NegativeRounds => (from CR in CriticalEffects where CR.Negative != 0 select CR).Count();


        public CriticalEffect CurrentCrits => CriticalEffects.FirstOrDefault();
        
        
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

        public int Negatives => CritNegatives + HitNegatives() + ExhNegatives() + (CurrentCrits?.Negative ?? 0);

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




    }
}