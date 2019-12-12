using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using CombatTracker.Domain.Reference.Actions;
using CombatTracker.Domain.Reference.Attacks;

namespace CombatTracker.Domain.Models
{
    [Table("ActorsActions")]
    public partial class DbActorsAction
    {

        public DbActorsAction()
        {
            //CriticalAffects = new HashSet<DbCriticalAffect>();
        }

        public int ID { get; set; }

        public int Game_ID { get; set; }

        public int WhoIsActing_ID { get; set; }

        public int? BaseAction_ID { get; set; }

        public int? CurrentAttack_ID { get; set; }

        [Required]
        [StringLength(50)]
        public string Name { get; set; }

        public double StartTime { get; set; }

        public double EndTime { get; set; }

        [Required]
        [StringLength(50)]
        public string Type { get; set; }

        public double BasePercent { get; set; }

        public bool Interrupted { get; set; }

        [Required]
        [StringLength(250)]
        public string Note { get; set; }

        [Required]
        [StringLength(50)]
        public string State { get; set; }

        public int CurrentModifier { get; set; }

        public bool CriticalGiven { get; set; }

        public int Bleeder { get; set; }

        public int Count { get; set; }

        public int? Critical_ID { get; set; }

        public int TotalRounds { get; set; }

        public int LevelDifference { get; set; }

        public bool IsHasted { get; set; }

        public bool IsSlowed { get; set; }

        public double HastedPercent { get; set; }

        public double LeftPercent { get; set; }
        public bool Reoccuring { get; set; }
        public bool CharacterAction { get; set; }

        [Required]
        [StringLength(50)]
        public string ActionType { get; set; }

        [ForeignKey("BaseAction_ID")]
        public virtual DbActionDefinition Action { get; set; }

        [ForeignKey("WhoIsActing_ID")]
        public virtual DbActor Actor { get; set; }

        [ForeignKey("CurrentAttack_ID")]
        public virtual DbAttack CurrentAttack { get; set; }

        [ForeignKey("Critical_ID")]
        public virtual DbCriticalAffect CriticalAffect { get; set; }

        [ForeignKey("Game_ID")]
        public virtual DbGame Game { get; set; }
        
    }
}
