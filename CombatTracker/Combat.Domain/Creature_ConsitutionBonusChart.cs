namespace Combat.Domain
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Creature_ConsitutionBonusChart
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Creature_ConsitutionBonusChart()
        {
            Creature_ConstitutionBonusChartValues = new HashSet<Creature_ConstitutionBonusChartValues>();
            Creatures = new HashSet<Creature>();
        }

        public int ID { get; set; }

        [StringLength(1)]
        public string Code { get; set; }

        public int PerLevelDifference { get; set; }

        public int BonusExhaustion { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Creature_ConstitutionBonusChartValues> Creature_ConstitutionBonusChartValues { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Creature> Creatures { get; set; }
    }
}
