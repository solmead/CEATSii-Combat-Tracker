using System.Collections.Generic;
using System.Linq;
using CombatTracker.Base;

namespace CombatTracker.Entities.Reference.Attacks.Charts
{
    public partial class AttackType : ReferenceEntry
    {
        public AttackType()
        {
            //this.Attacks = new HashSet<Attack>();
        }
    
        public bool HasSize { get; set; }
        public bool HasDB { get; set; }
    

        public override string ToString()
        {
            return Name;
        }

        //public static AttackType LoadByName(RmssDbContext db, string name)
        //{
        //    return (from sc in db.AttackTypes where sc.Name == name select sc).FirstOrDefault();
        //}
    }
    
}
