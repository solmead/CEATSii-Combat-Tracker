using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using CombatTracker.Domain.Reference.Base;

namespace CombatTracker.Domain.Reference.Attacks.Charts
{
    [Table("Attack_CriticalTypes")]
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
