namespace Combat.Domain
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class ActorsAction
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public ActorsAction()
        {
            CriticalAffects = new HashSet<CriticalAffect>();
        }

        public int ID { get; set; }

        public int Game_ID { get; set; }

        public int WhoIsActing_ID { get; set; }

        public int? BaseAction_ID { get; set; }

        public int? CurrentAttack_ID { get; set; }

        [Required]
        [StringLength(50)]
        public string Name { get; set; }

        public double StartTime { get; set; }

        public double EndTime { get; set; }

        [Required]
        [StringLength(50)]
        public string Type { get; set; }

        public double BasePercent { get; set; }

        public bool Interrupted { get; set; }

        [Required]
        [StringLength(250)]
        public string Note { get; set; }

        [Required]
        [StringLength(50)]
        public string State { get; set; }

        public int CurrentModifier { get; set; }

        public bool CriticalGiven { get; set; }

        public int Bleeder { get; set; }

        public int Count { get; set; }

        public int? Critical_ID { get; set; }

        public int TotalRounds { get; set; }

        public int LevelDifference { get; set; }

        public bool IsHasted { get; set; }

        public bool IsSlowed { get; set; }

        public double HastedPercent { get; set; }

        public double LeftPercent { get; set; }

        [Required]
        [StringLength(50)]
        public string ActionType { get; set; }

        public virtual Action Action { get; set; }

        public virtual Actor Actor { get; set; }

        public virtual Attack Attack { get; set; }

        public virtual CriticalAffect CriticalAffect { get; set; }

        public virtual Game Game { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<CriticalAffect> CriticalAffects { get; set; }
    }
}
