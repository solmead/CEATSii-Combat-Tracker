
using CombatTracker.Base.Abstract;
using System;
namespace CombatTracker.Entities.Reference
{
    public partial class Armor : IArmor
    {
        public int ID { get; set; }
        public int Type { get; set; }
        public string Description { get; set; }
        public int MovingManeuverMod { get; set; }
        public int DB { get; set; }
        public int? CharacterId { get; set; }



        public override string ToString()
        {
            return Type.ToString();
        }
    }
    
}
