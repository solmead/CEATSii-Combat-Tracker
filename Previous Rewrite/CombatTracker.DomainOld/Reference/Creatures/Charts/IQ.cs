//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using CombatTracker.Domain.Reference.Base;

namespace CombatTracker.Domain.Reference.Creatures.Charts
{
    [Table("Creature_IQs")]
    public partial class IQ : ReferenceEntry
    {
        public IQ()
        {
            //this.Creatures = new HashSet<Creature>();
        }
    
        //public int ID { get; set; }
        //public string Name { get; set; }
        //public string Abbreviation { get; set; }
    
        //public virtual ICollection<Creature> Creatures { get; set; }
    }
    
}