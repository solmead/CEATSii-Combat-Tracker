
using System;
using System.Collections.Generic;

namespace CombatTracker.Entities.Reference.Actions
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
