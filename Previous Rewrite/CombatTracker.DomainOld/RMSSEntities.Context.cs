using System;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
//using CombatTracker.Domain.Current;
//using CombatTracker.Domain.Current.Actions;
//using CombatTracker.Domain.Many2Many;
using CombatTracker.Domain.Reference;
using CombatTracker.Domain.Reference.Attacks;
using CombatTracker.Domain.Reference.Attacks.Charts;
using CombatTracker.Domain.Reference.Creatures;
using CombatTracker.Domain.Reference.Creatures.Charts;
using CombatTracker.Domain.Reference.Magic;
using Action = CombatTracker.Domain.Reference.Actions.Action;

namespace CombatTracker.Domain
{
    public partial class RmssDbContext : DbContext
    {
        public RmssDbContext()
            : base("name=RmssDbContext")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {

        }
    
        public DbSet<ActionGroup> ActionGroups { get; set; }
        public DbSet<Action> Actions { get; set; }
        //public DbSet<Actor> Actors { get; set; }
        //public DbSet<BaseAction> GameActions { get; set; }
        //public DbSet<ActorsAttack> ActorsAttacks { get; set; }
        public DbSet<Armor> Armors { get; set; }
        public DbSet<CriticalType> CriticalTypes { get; set; }
        public DbSet<AttackType> AttackTypes { get; set; }
        public DbSet<WeaponType> WeaponTypes { get; set; }
        public DbSet<Attack> Attacks { get; set; }
        public DbSet<AttacksAddCrit> AttacksAddCrits { get; set; }
        public DbSet<Book> Books { get; set; }
        public DbSet<Character> Characters { get; set; }
        public DbSet<ConstitutionBonusChart> ConstitutionBonusCharts { get; set; }
        public DbSet<ConstitutionBonusChartValues> ConstitutionBonusChartValues { get; set; }
        public DbSet<CriticalCode> CriticalCodes { get; set; }
        public DbSet<CriticalIgnore> CriticalIgnores { get; set; }
        public DbSet<IQ> Creature_IQs { get; set; }
        public DbSet<LevelChart> LevelCharts { get; set; }
        public DbSet<LevelChartValue> LevelChartValues { get; set; }
        public DbSet<Outlook> Creature_Outlook { get; set; }
        public DbSet<Pace> Paces { get; set; }
        public DbSet<SizeRating> SizeRatings { get; set; }
        public DbSet<SpeedChart> SpeedCharts { get; set; }
        public DbSet<Creature> Creatures { get; set; }
        //public DbSet<CriticalAffect> CriticalAffects { get; set; }
        //public DbSet<Game> Games { get; set; }
        //public DbSet<GamesPlayer> GamesPlayers { get; set; }
        public DbSet<PsychicRefractoryPeriodChart> PsychicRefractoryPeriodMods { get; set; }
        public DbSet<Weapon> Weapons { get; set; }
    }
}
