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
            Values = new HashSet<DbConstitutionBonusChartValues>();
        }

        public int ID { get; set; }

        [StringLength(1)]
        public string Code { get; set; }

        public int PerLevelDifference { get; set; }

        public int BonusExhaustion { get; set; }

        [InverseProperty("Chart")]
        public virtual ICollection<DbConstitutionBonusChartValues> Values { get; set; }
        
    }
}
