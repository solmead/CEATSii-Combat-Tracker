//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using CombatTracker.Domain.Reference.Attacks.Charts;

namespace CombatTracker.Domain.Reference.Attacks
{
    [Table("AttacksAddCrit")]
    public partial class AttacksAddCrit
    {
        public int ID { get; set; }
        public int? AttackID { get; set; }
        public int Critical_ID { get; set; }
        [Required]
        [ForeignKey("Critical_ID")]
        public virtual CriticalType CriticalType { get; set; }
        [Required]
        [ForeignKey("AttackID")]
        public virtual Attack Attack { get; set; }
    }
    
}
