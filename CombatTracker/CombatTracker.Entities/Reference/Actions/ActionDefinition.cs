


using System.ComponentModel.DataAnnotations;

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
        [Required]
        public string Name { get; set; }
        public double BasePercent { get; set; }
        public bool IsAttack { get; set; }
        public bool IsSpell { get; set; }
        public int? NextAction_ID { get; set; }
        public BaseActionType Type { get; set; }

        [Required]
        public virtual ActionGroup ActionGroup { get; set; }
        

        public virtual ActionDefinition NextAction { get; set; }
        
        public override string ToString()
        {
            return Name;
        }

        
    }
    
}
