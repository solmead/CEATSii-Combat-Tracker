using CombatTracker.Domain.Reference.Creatures;
using CombatTracker.Domain.Reference.Creatures.Charts;

namespace CombatTracker.Domain
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;


    [Table("Creature_ConsitutionBonusChart")]
    public partial class DbConstitutionBonusChart
    {
        public DbConstitutionBonusChart()
        {
            ConstitutionBonusChartValues = new HashSet<DbConstitutionBonusChartValues>();
        }

        public int ID { get; set; }

        [StringLength(1)]
        public string Code { get; set; }

        public int PerLevelDifference { get; set; }

        public int BonusExhaustion { get; set; }

        [InverseProperty("Chart_ID")]
        public virtual ICollection<DbConstitutionBonusChartValues> ConstitutionBonusChartValues { get; set; }
        
    }
}
