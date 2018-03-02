using System;
using System.Collections.Generic;
using System.Text;
using CombatTracker.Entities.Reference;

namespace CombatTracker.Entities.Current
{
    public class CriticalEffect
    {

        public int ID { get; set; }
        public bool IsStunned { get; set; }
        public ParryType Parry { get; set; }
        public string ParryString
        {
            get => Parry.ToString();
            set => Parry = (ParryType)Enum.Parse(typeof(ParryType), value);
        }
        public int ParryNegative { get; set; }
        public int Negative { get; set; }
        public double TimeStart { get; set; }
        public double TimeEnd { get; set; }
        public int Actor_ID { get; set; }
    }
}
