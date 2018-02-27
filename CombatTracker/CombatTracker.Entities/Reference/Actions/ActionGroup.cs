
using System;
using System.Collections.Generic;

namespace CombatTracker.Entities
{
    public partial class ActionGroup
    {
        public ActionGroup()
        {
            this.Actions = new List<Action>();
        }
    
        public int ID { get; set; }
        public string Name { get; set; }
    
        public virtual IList<Action> Actions { get; set; }


        public override string ToString()
        {
            return Name;
        }
    }
    
}
