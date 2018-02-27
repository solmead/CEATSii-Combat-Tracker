namespace CombatTracker.Domain.Reference.Attacks.Charts
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    
    [Table("Attack_CriticalTypes")]
    public class DbCriticalType
    {
        public DbCriticalType()
        {

        }

        public int ID { get; set; }

        [Required]
        [StringLength(50)]
        public string Name { get; set; }

        [Required]
        [StringLength(50)]
        public string Abbreviation { get; set; }
        
    }
}
