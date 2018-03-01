using System.ComponentModel.DataAnnotations.Schema;

namespace CombatTracker.Domain.Reference.Magic
{
    [Table("PsychicRefractoryPeriodMod")]
    public partial class DbPsychicRefractoryPeriodEntry
    {
        public int ID { get; set; }

        public int RoundNumber { get; set; }

        public int LevelMin { get; set; }

        public int LevelMax { get; set; }

        public int Mod { get; set; }
    }
}
