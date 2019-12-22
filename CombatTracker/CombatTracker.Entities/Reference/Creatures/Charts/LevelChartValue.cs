
namespace CombatTracker.Entities.Reference.Creatures.Charts
{
    public partial class LevelChartValue
    {
        public int ID { get; set; }
        //public int Level_ID { get; set; }
        public int Min { get; set; }
        public int Max { get; set; }
        public int Mod { get; set; }

        //[ForeignKey("Level_ID")]
        //public virtual LevelChart LevelChart { get; set; }
    }
    
}
