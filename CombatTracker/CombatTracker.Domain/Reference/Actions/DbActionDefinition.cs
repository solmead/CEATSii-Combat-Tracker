using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using CombatTracker.Entities.Reference;

namespace CombatTracker.Domain.Reference.Actions
{
    [Table("Actions")]
    public partial class DbActionDefinition
    {


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
        public string Type { get; set; }


        //[Required]
        [ForeignKey("ActionGroup_ID")]
        public virtual DbActionGroup ActionGroup { get; set; }

        [ForeignKey("NextAction_ID")]
        public virtual DbActionDefinition NextAction { get; set; }
        

    }
}
