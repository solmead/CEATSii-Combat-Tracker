using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using CombatTracker.Domain.Reference.Base;

namespace CombatTracker.Domain.Reference.Attacks.Charts
{
    [Table("Attack_Types")]
    public partial class AttackType : ReferenceEntry
    {
        public AttackType()
        {
            //this.Attacks = new HashSet<Attack>();
        }
    
        //public int ID { get; set; }
        //public string Name { get; set; }
        //public string Abbreviation { get; set; }
        public bool HasSize { get; set; }
        public bool HasDB { get; set; }
    
        //public virtual ICollection<Attack> Attacks { get; set; }



        public override string ToString()
        {
            return Name;
        }

        public static AttackType LoadByName(RmssDbContext db, string name)
        {
            return (from sc in db.AttackTypes where sc.Name == name select sc).FirstOrDefault();
        }
    }
    
}
