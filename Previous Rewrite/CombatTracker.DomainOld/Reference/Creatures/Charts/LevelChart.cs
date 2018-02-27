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
    [Table("Creature_LevelChart")]
    public partial class LevelChart
    {
        public LevelChart()
        {
            this.LevelChartValues = new HashSet<LevelChartValue>();
            //this.Creatures = new HashSet<Creature>();
        }
    
        public int ID { get; set; }
        public string Name { get; set; }
    
        public virtual ICollection<LevelChartValue> LevelChartValues { get; set; }
        //public virtual ICollection<Creature> Creatures { get; set; }


        public override string ToString()
        {
            return Name;
        }

        public static LevelChart LoadByName(RmssDbContext db, string name)
        {
            return (from sc in db.LevelCharts where sc.Name == name select sc).FirstOrDefault();
        }

        public int LookupLevel(int roll)
        {
            return (from lc in LevelChartValues where lc.Min <= roll && roll <= lc.Max select lc.Mod).FirstOrDefault();
        }
    }
    
}