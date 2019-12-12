//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;

namespace CombatTracker.Domain.Reference.Creatures.Charts
{
    [Table("Creature_ConsitutionBonusChart")]
    public partial class ConstitutionBonusChart
    {
        public ConstitutionBonusChart()
        {
            this.ConstitutionBonusChartValues = new HashSet<ConstitutionBonusChartValues>();
            //this.Creatures = new HashSet<Creature>();
        }
    
        public int ID { get; set; }
        public string Code { get; set; }
        public int PerLevelDifference { get; set; }
        public int BonusExhaustion { get; set; }
    
        public virtual ICollection<ConstitutionBonusChartValues> ConstitutionBonusChartValues { get; set; }
        //public virtual ICollection<Creature> Creatures { get; set; }


        public override string ToString()
        {
            return Code;
        }

        public static ConstitutionBonusChart LoadByName(RmssDbContext db, string name)
        {
            return (from sc in db.ConstitutionBonusCharts where sc.Code == name select sc).FirstOrDefault();
        }

        public int LookupStamina(int roll)
        {
            return (from cbc 
                        in ConstitutionBonusChartValues 
                    where cbc.Min <= roll && roll <= cbc.Max 
                    select cbc.Mod).FirstOrDefault();
        }
    }
    
}
