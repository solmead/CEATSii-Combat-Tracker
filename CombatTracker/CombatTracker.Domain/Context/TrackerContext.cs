

using CombatTracker.Domain.Models;
using CombatTracker.Domain.Reference;
using CombatTracker.Domain.Reference.Actions;
using CombatTracker.Domain.Reference.Attacks;
using CombatTracker.Domain.Reference.Attacks.Charts;
using CombatTracker.Domain.Reference.Creatures;
using CombatTracker.Domain.Reference.Creatures.Charts;
using CombatTracker.Domain.Reference.Magic;
using CombatTracker.Domain.Reference.Players;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.Extensions.Options;
using CombatTracker.Entities.Security;
using Duende.IdentityServer.EntityFramework.Options;

namespace CombatTracker.Domain
{

    public partial class TrackerContext : ApiAuthorizationDbContext<ApplicationUser>
    {
        public TrackerContext(DbContextOptions options, IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
        {
        }

        //public TrackerContext(DbContextOptions options, IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
        //{
        //}

        //public TrackerContext(
        //    DbContextOptions options,
        //    IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
        //{
        //}


        //public TrackerContext(DbContextOptions<TrackerContext> options)
        //    : base(options)
        //{

        //}

        public virtual DbSet<DbActionGroup> ActionGroups { get; set; }
        public virtual DbSet<DbActionDefinition> Actions { get; set; }
        public virtual DbSet<DbActor> Actors { get; set; }
        public virtual DbSet<DbActorsAction> ActorsActions { get; set; }
        public virtual DbSet<DbActorsAttack> ActorsAttacks { get; set; }
        public virtual DbSet<DbArmor> Armors { get; set; }
        public virtual DbSet<DbCriticalType> Attack_CriticalTypes { get; set; }
        public virtual DbSet<DbAttackType> Attack_Types { get; set; }
        public virtual DbSet<DbWeaponType> Attack_WeaponTypes { get; set; }
        public virtual DbSet<DbAttack> Attacks { get; set; }
        public virtual DbSet<DbAttacksAddCrit> AttacksAddCrits { get; set; }
        public virtual DbSet<DbBook> Books { get; set; }
        public virtual DbSet<DbCharacter> Characters { get; set; }
        public virtual DbSet<DbConstitutionBonusChart> Creature_ConsitutionBonusChart { get; set; }
        public virtual DbSet<DbConstitutionBonusChartValues> Creature_ConstitutionBonusChartValues { get; set; }
        public virtual DbSet<DbCriticalCode> Creature_CriticalCodes { get; set; }
        public virtual DbSet<DbCriticalIgnore> Creature_CriticalIgnores { get; set; }
        public virtual DbSet<DbIQ> Creature_IQs { get; set; }
        public virtual DbSet<DbLevelChart> Creature_LevelChart { get; set; }
        public virtual DbSet<DbLevelChartValue> Creature_LevelChartValues { get; set; }
        public virtual DbSet<DbOutlook> Creature_Outlook { get; set; }
        public virtual DbSet<DbPace> Creature_Pace { get; set; }
        public virtual DbSet<DbSizeRating> Creature_Sizes { get; set; }
        public virtual DbSet<DbSpeedChart> Creature_SpeedChart { get; set; }
        public virtual DbSet<DbCreature> Creatures { get; set; }
        public virtual DbSet<DbCriticalAffect> CriticalAffects { get; set; }
        public virtual DbSet<DbGame> Games { get; set; }
        //public virtual DbSet<GamesPlayer> GamesPlayers { get; set; }
        public virtual DbSet<DbPsychicRefractoryPeriodEntry> PsychicRefractoryPeriodMods { get; set; }
        public virtual DbSet<DbWeapon> Weapons { get; set; }

        public virtual DbSet<DbMessage> Messages { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            //modelBuilder.Entity<ActionGroup>()
            //    .HasMany(e => e.Actions)
            //    .WithOptional(e => e.ActionGroup)
            //    .HasForeignKey(e => e.ActionGroup_ID);

            //modelBuilder.Entity<Action>()
            //    .HasMany(e => e.Actions1)
            //    .WithOptional(e => e.Action1)
            //    .HasForeignKey(e => e.NextAction_ID);

            //modelBuilder.Entity<Action>()
            //    .HasMany(e => e.ActorsActions)
            //    .WithOptional(e => e.Action)
            //    .HasForeignKey(e => e.BaseAction_ID);

            //modelBuilder.Entity<Actor>()
            //    .Property(e => e.Color)
            //    .IsFixedLength();

            //modelBuilder.Entity<Actor>()
            //    .HasMany(e => e.ActorsActions)
            //    .WithRequired(e => e.Actor)
            //    .HasForeignKey(e => e.WhoIsActing_ID)
            //    .WillCascadeOnDelete(false);

            //modelBuilder.Entity<Actor>()
            //    .HasMany(e => e.ActorsAttacks)
            //    .WithRequired(e => e.Actor)
            //    .HasForeignKey(e => e.Actor_ID)
            //    .WillCascadeOnDelete(false);

            //modelBuilder.Entity<Actor>()
            //    .HasMany(e => e.CriticalAffects)
            //    .WithRequired(e => e.Actor)
            //    .HasForeignKey(e => e.Actor_ID)
            //    .WillCascadeOnDelete(false);

            //modelBuilder.Entity<ActorsAction>()
            //    .HasMany(e => e.CriticalAffects)
            //    .WithOptional(e => e.ActorsAction)
            //    .HasForeignKey(e => e.Action_ID);

            //modelBuilder.Entity<Attack_CriticalTypes>()
            //    .HasMany(e => e.Attacks)
            //    .WithOptional(e => e.Attack_CriticalTypes)
            //    .HasForeignKey(e => e.UseCriticalInstead_ID);

            //modelBuilder.Entity<Attack_CriticalTypes>()
            //    .HasMany(e => e.AttacksAddCrits)
            //    .WithRequired(e => e.Attack_CriticalTypes)
            //    .HasForeignKey(e => e.Critical_ID)
            //    .WillCascadeOnDelete(false);

            //modelBuilder.Entity<Attack_Types>()
            //    .HasMany(e => e.Attacks)
            //    .WithRequired(e => e.Attack_Types)
            //    .HasForeignKey(e => e.Type_ID)
            //    .WillCascadeOnDelete(false);

            //modelBuilder.Entity<Attack>()
            //    .HasMany(e => e.ActorsActions)
            //    .WithOptional(e => e.Attack)
            //    .HasForeignKey(e => e.CurrentAttack_ID);

            //modelBuilder.Entity<Attack>()
            //    .HasMany(e => e.ActorsAttacks)
            //    .WithRequired(e => e.Attack)
            //    .HasForeignKey(e => e.Attack_ID)
            //    .WillCascadeOnDelete(false);

            //modelBuilder.Entity<Attack>()
            //    .HasMany(e => e.Attacks1)
            //    .WithOptional(e => e.Attack1)
            //    .HasForeignKey(e => e.NextRoundSuccess_ID);

            //modelBuilder.Entity<Attack>()
            //    .HasMany(e => e.Attacks11)
            //    .WithOptional(e => e.Attack2)
            //    .HasForeignKey(e => e.ParentAttack_ID);

            //modelBuilder.Entity<Attack>()
            //    .HasMany(e => e.Attacks12)
            //    .WithOptional(e => e.Attack3)
            //    .HasForeignKey(e => e.ThisRoundSuccess_ID);

            //modelBuilder.Entity<Book>()
            //    .HasMany(e => e.Creatures)
            //    .WithRequired(e => e.Book)
            //    .HasForeignKey(e => e.Book_ID)
            //    .WillCascadeOnDelete(false);

            //modelBuilder.Entity<Character>()
            //    .HasMany(e => e.Actors)
            //    .WithOptional(e => e.Character)
            //    .HasForeignKey(e => e.BaseCharacter_ID);

            //modelBuilder.Entity<Character>()
            //    .HasMany(e => e.Armors)
            //    .WithOptional(e => e.Character)
            //    .HasForeignKey(e => e.TiedToID);

            //modelBuilder.Entity<Character>()
            //    .HasMany(e => e.Weapons)
            //    .WithOptional(e => e.Character)
            //    .HasForeignKey(e => e.TiedToID);

            //modelBuilder.Entity<Creature_ConsitutionBonusChart>()
            //    .HasMany(e => e.Creature_ConstitutionBonusChartValues)
            //    .WithRequired(e => e.Creature_ConsitutionBonusChart)
            //    .HasForeignKey(e => e.Chart_ID)
            //    .WillCascadeOnDelete(false);

            //modelBuilder.Entity<Creature_ConsitutionBonusChart>()
            //    .HasMany(e => e.Creatures)
            //    .WithRequired(e => e.Creature_ConsitutionBonusChart)
            //    .HasForeignKey(e => e.HitMod_ID)
            //    .WillCascadeOnDelete(false);

            //modelBuilder.Entity<Creature_CriticalCodes>()
            //    .HasMany(e => e.Creatures)
            //    .WithRequired(e => e.Creature_CriticalCodes)
            //    .HasForeignKey(e => e.Criticals_ID)
            //    .WillCascadeOnDelete(false);

            //modelBuilder.Entity<Creature_CriticalIgnores>()
            //    .HasMany(e => e.Creatures)
            //    .WithRequired(e => e.Creature_CriticalIgnores)
            //    .HasForeignKey(e => e.CriticalsIgnore_ID)
            //    .WillCascadeOnDelete(false);

            //modelBuilder.Entity<Creature_IQs>()
            //    .HasMany(e => e.Creatures)
            //    .WithRequired(e => e.Creature_IQs)
            //    .HasForeignKey(e => e.IQ_ID)
            //    .WillCascadeOnDelete(false);

            //modelBuilder.Entity<Creature_LevelChart>()
            //    .HasMany(e => e.Creature_LevelChartValues)
            //    .WithRequired(e => e.Creature_LevelChart)
            //    .HasForeignKey(e => e.Level_ID)
            //    .WillCascadeOnDelete(false);

            //modelBuilder.Entity<Creature_LevelChart>()
            //    .HasMany(e => e.Creatures)
            //    .WithRequired(e => e.Creature_LevelChart)
            //    .HasForeignKey(e => e.LevelMod_ID)
            //    .WillCascadeOnDelete(false);

            //modelBuilder.Entity<Creature_Outlook>()
            //    .HasMany(e => e.Creatures)
            //    .WithRequired(e => e.Creature_Outlook)
            //    .HasForeignKey(e => e.Outlook_ID)
            //    .WillCascadeOnDelete(false);

            //modelBuilder.Entity<Creature_Pace>()
            //    .HasMany(e => e.Creatures)
            //    .WithRequired(e => e.Creature_Pace)
            //    .HasForeignKey(e => e.MaxPace_ID)
            //    .WillCascadeOnDelete(false);

            //modelBuilder.Entity<Creature_Sizes>()
            //    .HasMany(e => e.Attacks)
            //    .WithOptional(e => e.Creature_Sizes)
            //    .HasForeignKey(e => e.Size_ID);

            //modelBuilder.Entity<Creature_Sizes>()
            //    .HasMany(e => e.Creatures)
            //    .WithRequired(e => e.Creature_Sizes)
            //    .HasForeignKey(e => e.Size_ID)
            //    .WillCascadeOnDelete(false);

            //modelBuilder.Entity<Creature_SpeedChart>()
            //    .HasMany(e => e.Creatures)
            //    .WithRequired(e => e.Creature_SpeedChart)
            //    .HasForeignKey(e => e.AQRating_ID)
            //    .WillCascadeOnDelete(false);

            //modelBuilder.Entity<Creature_SpeedChart>()
            //    .HasMany(e => e.Creatures1)
            //    .WithRequired(e => e.Creature_SpeedChart1)
            //    .HasForeignKey(e => e.MSRating_ID)
            //    .WillCascadeOnDelete(false);

            //modelBuilder.Entity<Creature>()
            //    .HasMany(e => e.Actors)
            //    .WithOptional(e => e.Creature)
            //    .HasForeignKey(e => e.BaseCreature_ID);

            //modelBuilder.Entity<Creature>()
            //    .HasMany(e => e.Attacks)
            //    .WithOptional(e => e.Creature)
            //    .HasForeignKey(e => e.CreatureOn_ID);

            //modelBuilder.Entity<CriticalAffect>()
            //    .HasMany(e => e.ActorsActions)
            //    .WithOptional(e => e.CriticalAffect)
            //    .HasForeignKey(e => e.Critical_ID);

            //modelBuilder.Entity<Game>()
            //    .HasMany(e => e.Actors)
            //    .WithRequired(e => e.Game)
            //    .HasForeignKey(e => e.Game_ID)
            //    .WillCascadeOnDelete(false);

            //modelBuilder.Entity<Game>()
            //    .HasMany(e => e.ActorsActions)
            //    .WithRequired(e => e.Game)
            //    .HasForeignKey(e => e.Game_ID)
            //    .WillCascadeOnDelete(false);

            //modelBuilder.Entity<Game>()
            //    .HasMany(e => e.GamesPlayers)
            //    .WithRequired(e => e.Game)
            //    .HasForeignKey(e => e.Game_ID)
            //    .WillCascadeOnDelete(false);
        }
    }
}
