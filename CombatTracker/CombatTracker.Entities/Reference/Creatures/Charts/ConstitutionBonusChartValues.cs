//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

using System.ComponentModel.DataAnnotations.Schema;

namespace CombatTracker.Entities.Reference.Creatures.Charts
{
    public partial class ConstitutionBonusChartValues
    {
        public int ID { get; set; }
        //public int Chart_ID { get; set; }
        public int Min { get; set; }
        public int Max { get; set; }
        public int Mod { get; set; }

        //[ForeignKey("Chart_ID")]
        //public virtual ConstitutionBonusChart ConstitutionBonusChart { get; set; }


    }
    
}