//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CombatTracker.Domain.Reference.Actions
{
    public partial class Action
    {
        public Action()
        {
            //this.ParentActions = new HashSet<Action>();
            //this.ActorsActions = new HashSet<ActorsAction>();
            Type = BaseActionType.Normal;
        }
    
        public int ID { get; set; }
        public int? ActionGroup_ID { get; set; }
        [Required]
        public string Name { get; set; }
        public double BasePercent { get; set; }
        public bool IsAttack { get; set; }
        public bool IsSpell { get; set; }
        public int? NextAction_ID { get; set; }
        public BaseActionType Type { get; set; }

        [Required]
        [ForeignKey("ActionGroup_ID")]
        public virtual ActionGroup ActionGroup { get; set; }
        //[InverseProperty("NextAction_ID")]
        //public virtual ICollection<Action> ParentActions { get; set; }
        [ForeignKey("NextAction_ID")]
        public virtual Action NextAction { get; set; }

        //public virtual ICollection<ActorsAction> ActorsActions { get; set; }


        public override string ToString()
        {
            return Name;
        }

        
    }
    
}
