
using System;
using System.Collections.Generic;
using CombatTracker.Entities.Reference.Actions;

namespace CombatTracker.Entities
{
    public partial class ActionGroup
    {
        public ActionGroup()
        {
            this.Actions = new List<ActionDefinition>();
        }
    
        public int ID { get; set; }
        public string Name { get; set; }
    
        public virtual IList<ActionDefinition> Actions { get; set; }


        public override string ToString()
        {
            return Name;
        }
    }
    
}
