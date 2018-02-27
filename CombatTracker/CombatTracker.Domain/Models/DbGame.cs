using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CombatTracker.Domain.Models
{
    [Table("Games")]
    public partial class DbGame
    {
        public DbGame()
        {
            Actors = new HashSet<DbActor>();
            ActorsActions = new HashSet<DbActorsAction>();
        }

        public int ID { get; set; }

        [Required]
        [StringLength(50)]
        public string Name { get; set; }

        public Guid? GM_ID { get; set; }

        public double CurrentTime { get; set; }
        
        [InverseProperty("Game")]
        public virtual ICollection<DbActor> Actors { get; set; }

        [InverseProperty("Game")]
        public virtual ICollection<DbActorsAction> ActorsActions { get; set; }
        
    }
}
