using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CombatTracker.Domain.Reference.Actions
{
    public partial class DbActionGroup
    {
        public DbActionGroup()
        {
            Actions = new List<DbActionDefinition>();
        }

        public int ID { get; set; }

        [Required]
        [StringLength(500)]
        public string Name { get; set; }

        [InverseProperty("ActionGroup")]
        public virtual IList<DbActionDefinition> Actions { get; set; }
    }
}
