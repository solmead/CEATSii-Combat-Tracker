
using Newtonsoft.Json;
using System;

namespace CombatTracker.Entities.Reference.Actions
{
    public partial class ActionDefinition
    {
        public ActionDefinition()
        {
            Type = BaseActionType.Normal;
        }
    
        public int ID { get; set; }
        public int? ActionGroup_ID { get; set; }
        public string Name { get; set; }
        public double BasePercent { get; set; }
        public bool IsAttack { get; set; }
        public bool IsSpell { get; set; }
        public int? NextAction_ID { get; set; }
        public BaseActionType Type { get; set; }

        public string TypeString
        {
            get => Type.ToString();
            set => Type = (BaseActionType)Enum.Parse(typeof(BaseActionType), value);
        }
        [JsonIgnore]
        public virtual ActionGroup ActionGroup { get; set; }

        [JsonIgnore]
        public virtual ActionDefinition NextAction { get; set; }
        
        public override string ToString()
        {
            return Name;
        }

        
    }
    
}
