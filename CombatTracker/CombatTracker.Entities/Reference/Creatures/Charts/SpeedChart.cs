using CombatTracker.Entities.Reference.Base;

namespace CombatTracker.Entities.Reference.Creatures.Charts
{
    public partial class SpeedChart : ReferenceEntry
    {
        public SpeedChart()
        {
            
        }
    
        public int MSBaseDB { get; set; }
        public int MSFleeEvade { get; set; }
        public int AQChargeLunge { get; set; }
        public int AQInitiative { get; set; }
    
        public override string ToString()
        {
            return Name;
        }

    }
    
}
