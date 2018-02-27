//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;

namespace CombatTracker.Domain.Reference.Magic
{
    [Table("PsychicRefractoryPeriodMod")]
    public partial class PsychicRefractoryPeriodChart
    {
        public int ID { get; set; }
        public int RoundNumber { get; set; }
        public int LevelMin { get; set; }
        public int LevelMax { get; set; }
        public int Mod { get; set; }

        public static int LookupNegative(RmssDbContext db, int levelDifference, int roundNumber)
        {
            var mods = (from rl in db.PsychicRefractoryPeriodMods
                        where rl.LevelMin <= levelDifference && levelDifference <= rl.LevelMax
                        orderby rl.RoundNumber
                        select rl).ToList();

            foreach (var rm in mods)
            {
                if (rm.RoundNumber == roundNumber)
                {
                    return rm.Mod;
                }
            }

            var lMod = mods.Last().Mod;
            var rnd = mods.Last().RoundNumber;
            while (lMod < 0 && rnd < roundNumber)
            {
                rnd++;
                lMod = lMod + 5;
            }
            if (lMod > 0)
            {
                lMod = 0;
            }
            return lMod;
        }

        public static int LookupRoundsToZero(RmssDbContext db, int levelDifference)
        {
            var mods = (from rl in db.PsychicRefractoryPeriodMods
                        where rl.LevelMin <= levelDifference && levelDifference <= rl.LevelMax
                        orderby rl.RoundNumber
                        select rl).ToList();

            if (!mods.Any())
            {
                return 0;
            }

            var lMod = mods.Last().Mod;
            var rnd = mods.Last().RoundNumber;
            while (lMod < 0)
            {
                rnd++;
                lMod = lMod + 5;
            }
            return rnd;
        }
    }
    
}
