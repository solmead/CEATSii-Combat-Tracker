using System.Collections.Generic;
using System.Linq;
using CombatTracker.Entities.Reference.Base;

namespace CombatTracker.Entities.Reference.Attacks.Charts
{
    public partial class CriticalType : ReferenceEntry
    {
        public CriticalType()
        {
            //this.Attacks = new HashSet<Attack>();
            //this.AttacksAddCrits = new HashSet<AttacksAddCrit>();
        }
    
        public override string ToString()
        {
            return Name;
        }

        //public static CriticalType LoadByName(RmssDbContext db, string name)
        //{
        //    return (from sc in db.CriticalTypes where sc.Name == name select sc).FirstOrDefault();
        //}
    }
    
}
