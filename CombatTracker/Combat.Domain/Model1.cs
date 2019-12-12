namespace Combat.Domain
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class Model1 : DbContext
    {
        public Model1()
            : base("name=Model1")
        {
        }

        public virtual DbSet<ActionGroup> ActionGroups { get; set; }
        public virtual DbSet<Action> Actions { get; set; }
        public virtual DbSet<Actor> Actors { get; set; }
        public virtual DbSet<ActorsAction> ActorsActions { get; set; }
        public virtual DbSet<ActorsAttack> ActorsAttacks { get; set; }
        public virtual DbSet<Armor> Armors { get; set; }
        public virtual DbSet<Attack_CriticalTypes> Attack_CriticalTypes { get; set; }
        public virtual DbSet<Attack_Types> Attack_Types { get; set; }
        public virtual DbSet<Attack_WeaponTypes> Attack_WeaponTypes { get; set; }
        public virtual DbSet<Attack> Attacks { get; set; }
        public virtual DbSet<AttacksAddCrit> AttacksAddCrits { get; set; }
        public virtual DbSet<Book> Books { get; set; }
        public virtual DbSet<Character> Characters { get; set; }
        public virtual DbSet<Creature_ConsitutionBonusChart> Creature_ConsitutionBonusChart { get; set; }
        public virtual DbSet<Creature_ConstitutionBonusChartValues> Creature_ConstitutionBonusChartValues { get; set; }
        public virtual DbSet<Creature_CriticalCodes> Creature_CriticalCodes { get; set; }
        public virtual DbSet<Creature_CriticalIgnores> Creature_CriticalIgnores { get; set; }
        public virtual DbSet<Creature_IQs> Creature_IQs { get; set; }
        public virtual DbSet<Creature_LevelChart> Creature_LevelChart { get; set; }
        public virtual DbSet<Creature_LevelChartValues> Creature_LevelChartValues { get; set; }
        public virtual DbSet<Creature_Outlook> Creature_Outlook { get; set; }
        public virtual DbSet<Creature_Pace> Creature_Pace { get; set; }
        public virtual DbSet<Creature_Sizes> Creature_Sizes { get; set; }
        public virtual DbSet<Creature_SpeedChart> Creature_SpeedChart { get; set; }
        public virtual DbSet<Creature> Creatures { get; set; }
        public virtual DbSet<CriticalAffect> CriticalAffects { get; set; }
        public virtual DbSet<Game> Games { get; set; }
        public virtual DbSet<GamesPlayer> GamesPlayers { get; set; }
        public virtual DbSet<PsychicRefractoryPeriodMod> PsychicRefractoryPeriodMods { get; set; }
        public virtual DbSet<Weapon> Weapons { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ActionGroup>()
                .HasMany(e => e.Actions)
                .WithOptional(e => e.ActionGroup)
                .HasForeignKey(e => e.ActionGroup_ID);

            modelBuilder.Entity<Action>()
                .HasMany(e => e.Actions1)
                .WithOptional(e => e.Action1)
                .HasForeignKey(e => e.NextAction_ID);

            modelBuilder.Entity<Action>()
                .HasMany(e => e.ActorsActions)
                .WithOptional(e => e.Action)
                .HasForeignKey(e => e.BaseAction_ID);

            modelBuilder.Entity<Actor>()
                .Property(e => e.Color)
                .IsFixedLength();

            modelBuilder.Entity<Actor>()
                .HasMany(e => e.ActorsActions)
                .WithRequired(e => e.Actor)
                .HasForeignKey(e => e.WhoIsActing_ID)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Actor>()
                .HasMany(e => e.ActorsAttacks)
                .WithRequired(e => e.Actor)
                .HasForeignKey(e => e.Actor_ID)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Actor>()
                .HasMany(e => e.CriticalAffects)
                .WithRequired(e => e.Actor)
                .HasForeignKey(e => e.Actor_ID)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<ActorsAction>()
                .HasMany(e => e.CriticalAffects)
                .WithOptional(e => e.ActorsAction)
                .HasForeignKey(e => e.Action_ID);

            modelBuilder.Entity<Attack_CriticalTypes>()
                .HasMany(e => e.Attacks)
                .WithOptional(e => e.Attack_CriticalTypes)
                .HasForeignKey(e => e.UseCriticalInstead_ID);

            modelBuilder.Entity<Attack_CriticalTypes>()
                .HasMany(e => e.AttacksAddCrits)
                .WithRequired(e => e.Attack_CriticalTypes)
                .HasForeignKey(e => e.Critical_ID)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Attack_Types>()
                .HasMany(e => e.Attacks)
                .WithRequired(e => e.Attack_Types)
                .HasForeignKey(e => e.Type_ID)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Attack>()
                .HasMany(e => e.ActorsActions)
                .WithOptional(e => e.Attack)
                .HasForeignKey(e => e.CurrentAttack_ID);

            modelBuilder.Entity<Attack>()
                .HasMany(e => e.ActorsAttacks)
                .WithRequired(e => e.Attack)
                .HasForeignKey(e => e.Attack_ID)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Attack>()
                .HasMany(e => e.Attacks1)
                .WithOptional(e => e.Attack1)
                .HasForeignKey(e => e.NextRoundSuccess_ID);

            modelBuilder.Entity<Attack>()
                .HasMany(e => e.Attacks11)
                .WithOptional(e => e.Attack2)
                .HasForeignKey(e => e.ParentAttack_ID);

            modelBuilder.Entity<Attack>()
                .HasMany(e => e.Attacks12)
                .WithOptional(e => e.Attack3)
                .HasForeignKey(e => e.ThisRoundSuccess_ID);

            modelBuilder.Entity<Book>()
                .HasMany(e => e.Creatures)
                .WithRequired(e => e.Book)
                .HasForeignKey(e => e.Book_ID)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Character>()
                .HasMany(e => e.Actors)
                .WithOptional(e => e.Character)
                .HasForeignKey(e => e.BaseCharacter_ID);

            modelBuilder.Entity<Character>()
                .HasMany(e => e.Armors)
                .WithOptional(e => e.Character)
                .HasForeignKey(e => e.TiedToID);

            modelBuilder.Entity<Character>()
                .HasMany(e => e.Weapons)
                .WithOptional(e => e.Character)
                .HasForeignKey(e => e.TiedToID);

            modelBuilder.Entity<Creature_ConsitutionBonusChart>()
                .HasMany(e => e.Creature_ConstitutionBonusChartValues)
                .WithRequired(e => e.Creature_ConsitutionBonusChart)
                .HasForeignKey(e => e.Chart_ID)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Creature_ConsitutionBonusChart>()
                .HasMany(e => e.Creatures)
                .WithRequired(e => e.Creature_ConsitutionBonusChart)
                .HasForeignKey(e => e.HitMod_ID)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Creature_CriticalCodes>()
                .HasMany(e => e.Creatures)
                .WithRequired(e => e.Creature_CriticalCodes)
                .HasForeignKey(e => e.Criticals_ID)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Creature_CriticalIgnores>()
                .HasMany(e => e.Creatures)
                .WithRequired(e => e.Creature_CriticalIgnores)
                .HasForeignKey(e => e.CriticalsIgnore_ID)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Creature_IQs>()
                .HasMany(e => e.Creatures)
                .WithRequired(e => e.Creature_IQs)
                .HasForeignKey(e => e.IQ_ID)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Creature_LevelChart>()
                .HasMany(e => e.Creature_LevelChartValues)
                .WithRequired(e => e.Creature_LevelChart)
                .HasForeignKey(e => e.Level_ID)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Creature_LevelChart>()
                .HasMany(e => e.Creatures)
                .WithRequired(e => e.Creature_LevelChart)
                .HasForeignKey(e => e.LevelMod_ID)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Creature_Outlook>()
                .HasMany(e => e.Creatures)
                .WithRequired(e => e.Creature_Outlook)
                .HasForeignKey(e => e.Outlook_ID)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Creature_Pace>()
                .HasMany(e => e.Creatures)
                .WithRequired(e => e.Creature_Pace)
                .HasForeignKey(e => e.MaxPace_ID)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Creature_Sizes>()
                .HasMany(e => e.Attacks)
                .WithOptional(e => e.Creature_Sizes)
                .HasForeignKey(e => e.Size_ID);

            modelBuilder.Entity<Creature_Sizes>()
                .HasMany(e => e.Creatures)
                .WithRequired(e => e.Creature_Sizes)
                .HasForeignKey(e => e.Size_ID)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Creature_SpeedChart>()
                .HasMany(e => e.Creatures)
                .WithRequired(e => e.Creature_SpeedChart)
                .HasForeignKey(e => e.AQRating_ID)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Creature_SpeedChart>()
                .HasMany(e => e.Creatures1)
                .WithRequired(e => e.Creature_SpeedChart1)
                .HasForeignKey(e => e.MSRating_ID)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Creature>()
                .HasMany(e => e.Actors)
                .WithOptional(e => e.Creature)
                .HasForeignKey(e => e.BaseCreature_ID);

            modelBuilder.Entity<Creature>()
                .HasMany(e => e.Attacks)
                .WithOptional(e => e.Creature)
                .HasForeignKey(e => e.CreatureOn_ID);

            modelBuilder.Entity<CriticalAffect>()
                .HasMany(e => e.ActorsActions)
                .WithOptional(e => e.CriticalAffect)
                .HasForeignKey(e => e.Critical_ID);

            modelBuilder.Entity<Game>()
                .HasMany(e => e.Actors)
                .WithRequired(e => e.Game)
                .HasForeignKey(e => e.Game_ID)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Game>()
                .HasMany(e => e.ActorsActions)
                .WithRequired(e => e.Game)
                .HasForeignKey(e => e.Game_ID)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Game>()
                .HasMany(e => e.GamesPlayers)
                .WithRequired(e => e.Game)
                .HasForeignKey(e => e.Game_ID)
                .WillCascadeOnDelete(false);
        }
    }
}
