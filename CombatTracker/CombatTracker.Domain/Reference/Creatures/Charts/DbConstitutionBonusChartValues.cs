using System.ComponentModel.DataAnnotations.Schema;

namespace CombatTracker.Domain.Reference.Creatures.Charts
{
    [Table("Creature_ConstitutionBonusChartValues")]
    public partial class DbConstitutionBonusChartValues
    {
        public int ID { get; set; }

        public int Chart_ID { get; set; }

        public int Min { get; set; }

        public int Max { get; set; }

        public int Mod { get; set; }
        
    }
}
