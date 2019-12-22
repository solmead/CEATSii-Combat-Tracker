
using System.Collections.Generic;
using System.Linq;

namespace CombatTracker.Entities.Reference.Creatures.Charts
{
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


        public override string ToString()
        {
            return Name;
        }
        

        public int LookupLevel(int roll)
        {
            return (from lc in LevelChartValues where lc.Min <= roll && roll <= lc.Max select lc.Mod).FirstOrDefault();
        }
    }
    
}
