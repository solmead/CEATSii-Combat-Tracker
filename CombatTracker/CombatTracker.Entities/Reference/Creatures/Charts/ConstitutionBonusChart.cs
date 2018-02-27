
using System.Collections.Generic;
using System.Linq;

namespace CombatTracker.Entities.Reference.Creatures.Charts
{
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

        //public static ConstitutionBonusChart LoadByName(RmssDbContext db, string name)
        //{
        //    return (from sc in db.ConstitutionBonusCharts where sc.Code == name select sc).FirstOrDefault();
        //}

        public int LookupStamina(int roll)
        {
            return (from cbc 
                        in ConstitutionBonusChartValues 
                    where cbc.Min <= roll && roll <= cbc.Max 
                    select cbc.Mod).FirstOrDefault();
        }
    }
    
}
