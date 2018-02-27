using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using CombatTracker.Entities.Reference;

namespace CombatTracker.Domain.Reference.Actions
{
    [Table("Actions")]
    public partial class DbActionDefinition
    {

        public DbActionDefinition()
        {
            Type = BaseActionType.Normal;
        }

        public int ID { get; set; }
        public int? ActionGroup_ID { get; set; }

        [Required]
        [StringLength(500)]
        public string Name { get; set; }
        public double BasePercent { get; set; }
        public bool IsAttack { get; set; }
        public bool IsSpell { get; set; }
        public int? NextAction_ID { get; set; }

        [Required]
        [StringLength(50)]
        [Column("Type")]
        public string TypeString { get; set; }

        [NotMapped]
        public BaseActionType Type
        {
            get => (BaseActionType) Enum.Parse(typeof(BaseActionType), TypeString);
            set => TypeString = value.ToString();
        }

        //[Required]
        //[ForeignKey("ActionGroup_ID")]
        //public virtual DbActionGroup ActionGroup { get; set; }
        
        [ForeignKey("NextAction_ID")]
        public virtual DbActionDefinition NextAction { get; set; }
        

        //public virtual ActionGroup ActionGroup { get; set; }

        //[System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        //public virtual ICollection<Action> Actions1 { get; set; }

        //public virtual Action Action1 { get; set; }

        //[System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        //public virtual ICollection<ActorsAction> ActorsActions { get; set; }
    }
}
