namespace Combat.Domain
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Creature_SpeedChart
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Creature_SpeedChart()
        {
            Creatures = new HashSet<Creature>();
            Creatures1 = new HashSet<Creature>();
        }

        public int ID { get; set; }

        [Required]
        [StringLength(50)]
        public string Abbreviation { get; set; }

        [Required]
        [StringLength(500)]
        public string Name { get; set; }

        public int MSBaseDB { get; set; }

        public int MSFleeEvade { get; set; }

        public int AQChargeLunge { get; set; }

        public int AQInitiative { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Creature> Creatures { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Creature> Creatures1 { get; set; }
    }
}
