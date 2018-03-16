﻿// <auto-generated />
using CombatTracker.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using System;

namespace CombatTracker.Domain.Migrations
{
    [DbContext(typeof(TrackerContext))]
    [Migration("20180316032826_RecurringCharacterActions")]
    partial class RecurringCharacterActions
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.2-rtm-10011")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("CombatTracker.Domain.DbArmor", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("CharacterId")
                        .HasColumnName("TiedToID");

                    b.Property<int>("DB");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasMaxLength(255);

                    b.Property<int>("MovingManeuverMod");

                    b.Property<int>("Type");

                    b.HasKey("ID");

                    b.HasIndex("CharacterId");

                    b.ToTable("Armors");
                });

            modelBuilder.Entity("CombatTracker.Domain.DbConstitutionBonusChart", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("BonusExhaustion");

                    b.Property<string>("Code")
                        .HasMaxLength(1);

                    b.Property<int>("PerLevelDifference");

                    b.HasKey("ID");

                    b.ToTable("Creature_ConsitutionBonusChart");
                });

            modelBuilder.Entity("CombatTracker.Domain.DbCriticalCode", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Abbreviation")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.HasKey("ID");

                    b.ToTable("Creature_CriticalCodes");
                });

            modelBuilder.Entity("CombatTracker.Domain.DbCriticalIgnore", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Abbreviation")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.HasKey("ID");

                    b.ToTable("Creature_CriticalIgnores");
                });

            modelBuilder.Entity("CombatTracker.Domain.DbIQ", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Abbreviation")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.HasKey("ID");

                    b.ToTable("Creature_IQs");
                });

            modelBuilder.Entity("CombatTracker.Domain.DbLevelChart", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(1);

                    b.HasKey("ID");

                    b.ToTable("Creature_LevelChart");
                });

            modelBuilder.Entity("CombatTracker.Domain.DbLevelChartValue", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Level_ID");

                    b.Property<int>("Max");

                    b.Property<int>("Min");

                    b.Property<int>("Mod");

                    b.HasKey("ID");

                    b.HasIndex("Level_ID");

                    b.ToTable("Creature_LevelChartValues");
                });

            modelBuilder.Entity("CombatTracker.Domain.DbOutlook", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Abbreviation")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(250);

                    b.HasKey("ID");

                    b.ToTable("Creature_Outlook");
                });

            modelBuilder.Entity("CombatTracker.Domain.DbPace", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Abbreviation")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.HasKey("ID");

                    b.ToTable("Creature_Pace");
                });

            modelBuilder.Entity("CombatTracker.Domain.DbSizeRating", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Abbreviation")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.HasKey("ID");

                    b.ToTable("Creature_Sizes");
                });

            modelBuilder.Entity("CombatTracker.Domain.DbSpeedChart", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AQChargeLunge");

                    b.Property<int>("AQInitiative");

                    b.Property<string>("Abbreviation")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<int>("MSBaseDB");

                    b.Property<int>("MSFleeEvade");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(500);

                    b.HasKey("ID");

                    b.ToTable("Creature_SpeedChart");
                });

            modelBuilder.Entity("CombatTracker.Domain.DbWeapon", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Bonus");

                    b.Property<int?>("CharacterId")
                        .HasColumnName("TiedToID");

                    b.Property<bool>("Is2Handed");

                    b.Property<int>("MaxWeight");

                    b.Property<int>("MinWeight");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(500);

                    b.Property<int>("OB");

                    b.Property<int>("Weight");

                    b.HasKey("ID");

                    b.HasIndex("CharacterId");

                    b.ToTable("Weapons");
                });

            modelBuilder.Entity("CombatTracker.Domain.Models.DbActor", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("BaseCharacter_ID");

                    b.Property<int?>("BaseCreature_ID");

                    b.Property<int>("BaseInititive");

                    b.Property<string>("Color")
                        .IsRequired()
                        .HasMaxLength(11);

                    b.Property<int>("ConstitutionStat");

                    b.Property<int>("CritNegatives");

                    b.Property<int?>("CurrentArmor_ID");

                    b.Property<int>("ExhaustionRemaining");

                    b.Property<int>("ExhaustionTotal");

                    b.Property<int>("Game_ID");

                    b.Property<int>("HitsRemaining");

                    b.Property<int>("HitsTotal");

                    b.Property<bool>("IsConcentrating");

                    b.Property<bool>("IsMoving");

                    b.Property<int>("Level");

                    b.Property<double>("Movement");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<double>("NextSpellTime");

                    b.Property<double>("PercentAction");

                    b.Property<double>("PercentRequiredAdrenalDB");

                    b.Property<Guid?>("Player_ID");

                    b.Property<int>("PowerPointsRemaining");

                    b.Property<int>("PowerPointsTotal");

                    b.Property<int>("RolledInititive");

                    b.Property<int>("StrengthBonus");

                    b.Property<bool>("Suprised");

                    b.Property<string>("Type")
                        .IsRequired()
                        .HasMaxLength(5);

                    b.Property<bool>("UsingAdrenalDB");

                    b.HasKey("ID");

                    b.HasIndex("BaseCharacter_ID");

                    b.HasIndex("BaseCreature_ID");

                    b.HasIndex("Game_ID");

                    b.ToTable("Actors");
                });

            modelBuilder.Entity("CombatTracker.Domain.Models.DbActorsAction", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ActionType")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<int?>("BaseAction_ID");

                    b.Property<double>("BasePercent");

                    b.Property<int>("Bleeder");

                    b.Property<bool>("CharacterAction");

                    b.Property<int>("Count");

                    b.Property<bool>("CriticalGiven");

                    b.Property<int?>("Critical_ID");

                    b.Property<int?>("CurrentAttack_ID");

                    b.Property<int>("CurrentModifier");

                    b.Property<double>("EndTime");

                    b.Property<int>("Game_ID");

                    b.Property<double>("HastedPercent");

                    b.Property<bool>("Interrupted");

                    b.Property<bool>("IsHasted");

                    b.Property<bool>("IsSlowed");

                    b.Property<double>("LeftPercent");

                    b.Property<int>("LevelDifference");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<string>("Note")
                        .IsRequired()
                        .HasMaxLength(250);

                    b.Property<bool>("Reoccuring");

                    b.Property<double>("StartTime");

                    b.Property<string>("State")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<int>("TotalRounds");

                    b.Property<string>("Type")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<int>("WhoIsActing_ID");

                    b.HasKey("ID");

                    b.HasIndex("BaseAction_ID");

                    b.HasIndex("Critical_ID");

                    b.HasIndex("CurrentAttack_ID");

                    b.HasIndex("Game_ID");

                    b.HasIndex("WhoIsActing_ID");

                    b.ToTable("ActorsActions");
                });

            modelBuilder.Entity("CombatTracker.Domain.Models.DbActorsAttack", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Actor_ID");

                    b.Property<int>("Attack_ID");

                    b.HasKey("ID");

                    b.HasIndex("Actor_ID");

                    b.HasIndex("Attack_ID");

                    b.ToTable("ActorsAttacks");
                });

            modelBuilder.Entity("CombatTracker.Domain.Models.DbCriticalAffect", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Actor_ID");

                    b.Property<bool>("IsStunned");

                    b.Property<int>("Negative");

                    b.Property<string>("Parry")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<int>("ParryNegative");

                    b.Property<double>("TimeEnd");

                    b.Property<double>("TimeStart");

                    b.HasKey("ID");

                    b.HasIndex("Actor_ID");

                    b.ToTable("CriticalAffects");
                });

            modelBuilder.Entity("CombatTracker.Domain.Models.DbGame", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<double>("CurrentTime");

                    b.Property<Guid?>("GM_ID");

                    b.Property<string>("GameType");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.HasKey("ID");

                    b.ToTable("Games");
                });

            modelBuilder.Entity("CombatTracker.Domain.Reference.Actions.DbActionDefinition", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("ActionGroup_ID");

                    b.Property<double>("BasePercent");

                    b.Property<bool>("IsAttack");

                    b.Property<bool>("IsSpell");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(500);

                    b.Property<int?>("NextAction_ID");

                    b.Property<string>("Type")
                        .IsRequired()
                        .HasColumnName("Type")
                        .HasMaxLength(50);

                    b.HasKey("ID");

                    b.HasIndex("ActionGroup_ID");

                    b.HasIndex("NextAction_ID");

                    b.ToTable("Actions");
                });

            modelBuilder.Entity("CombatTracker.Domain.Reference.Actions.DbActionGroup", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(500);

                    b.HasKey("ID");

                    b.ToTable("ActionGroups");
                });

            modelBuilder.Entity("CombatTracker.Domain.Reference.Attacks.Charts.DbAttackType", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Abbreviation")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<bool>("HasDB");

                    b.Property<bool>("HasSize");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.HasKey("ID");

                    b.ToTable("Attack_Types");
                });

            modelBuilder.Entity("CombatTracker.Domain.Reference.Attacks.Charts.DbCriticalType", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Abbreviation")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.HasKey("ID");

                    b.ToTable("Attack_CriticalTypes");
                });

            modelBuilder.Entity("CombatTracker.Domain.Reference.Attacks.Charts.DbWeaponType", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Abbreviation")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.HasKey("ID");

                    b.ToTable("Attack_WeaponTypes");
                });

            modelBuilder.Entity("CombatTracker.Domain.Reference.Attacks.DbAttack", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("AdditionalCritsIsOr");

                    b.Property<int?>("CreatureOn_ID");

                    b.Property<string>("CriticalLevel")
                        .HasMaxLength(50);

                    b.Property<int>("DamageMultiplier");

                    b.Property<int>("MaxOB");

                    b.Property<int?>("NextRoundSuccess_ID");

                    b.Property<int>("Number");

                    b.Property<int>("OB");

                    b.Property<int?>("ParentAttack_ID");

                    b.Property<double>("PercentChance");

                    b.Property<int?>("Size_ID");

                    b.Property<int?>("ThisRoundSuccess_ID");

                    b.Property<int>("Type_ID");

                    b.Property<int?>("UseCriticalInstead_ID");

                    b.Property<int?>("WeaponUsed_ID");

                    b.HasKey("ID");

                    b.HasIndex("CreatureOn_ID");

                    b.HasIndex("NextRoundSuccess_ID");

                    b.HasIndex("Size_ID");

                    b.HasIndex("ThisRoundSuccess_ID");

                    b.HasIndex("Type_ID");

                    b.HasIndex("UseCriticalInstead_ID");

                    b.HasIndex("WeaponUsed_ID");

                    b.ToTable("Attacks");
                });

            modelBuilder.Entity("CombatTracker.Domain.Reference.Attacks.DbAttacksAddCrit", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("AttackID")
                        .IsRequired();

                    b.Property<int>("Critical_ID");

                    b.HasKey("ID");

                    b.HasIndex("AttackID");

                    b.HasIndex("Critical_ID");

                    b.ToTable("AttacksAddCrits");
                });

            modelBuilder.Entity("CombatTracker.Domain.Reference.Creatures.Charts.DbConstitutionBonusChartValues", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Chart_ID");

                    b.Property<int>("Max");

                    b.Property<int>("Min");

                    b.Property<int>("Mod");

                    b.HasKey("ID");

                    b.HasIndex("Chart_ID");

                    b.ToTable("Creature_ConstitutionBonusChartValues");
                });

            modelBuilder.Entity("CombatTracker.Domain.Reference.Creatures.DbCreature", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AQRating_ID");

                    b.Property<int>("AT");

                    b.Property<int>("BaseHits");

                    b.Property<int>("BaseLevel");

                    b.Property<int>("BaseMove");

                    b.Property<int>("Book_ID");

                    b.Property<int>("CriticalsIgnore_ID");

                    b.Property<int>("Criticals_ID");

                    b.Property<int>("DB");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasMaxLength(255);

                    b.Property<string>("GameType");

                    b.Property<string>("Habitat")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<int>("HitMod_ID");

                    b.Property<int>("IQ_ID");

                    b.Property<int>("LevelMod_ID");

                    b.Property<int>("MMBonus");

                    b.Property<int>("MSRating_ID");

                    b.Property<int>("MaxEncountered");

                    b.Property<int>("MaxPace_ID");

                    b.Property<int>("MinEncountered");

                    b.Property<int>("Outlook_ID");

                    b.Property<int>("PageNumber");

                    b.Property<int>("Size_ID");

                    b.Property<string>("TypeName")
                        .IsRequired()
                        .HasMaxLength(500);

                    b.HasKey("ID");

                    b.HasIndex("AQRating_ID");

                    b.HasIndex("Book_ID");

                    b.HasIndex("CriticalsIgnore_ID");

                    b.HasIndex("Criticals_ID");

                    b.HasIndex("HitMod_ID");

                    b.HasIndex("IQ_ID");

                    b.HasIndex("LevelMod_ID");

                    b.HasIndex("MSRating_ID");

                    b.HasIndex("MaxPace_ID");

                    b.HasIndex("Outlook_ID");

                    b.HasIndex("Size_ID");

                    b.ToTable("Creatures");
                });

            modelBuilder.Entity("CombatTracker.Domain.Reference.DbBook", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(500);

                    b.HasKey("ID");

                    b.ToTable("Books");
                });

            modelBuilder.Entity("CombatTracker.Domain.Reference.Magic.DbPsychicRefractoryPeriodEntry", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("LevelMax");

                    b.Property<int>("LevelMin");

                    b.Property<int>("Mod");

                    b.Property<int>("RoundNumber");

                    b.HasKey("ID");

                    b.ToTable("PsychicRefractoryPeriodMod");
                });

            modelBuilder.Entity("CombatTracker.Domain.Reference.Players.DbCharacter", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("BaseInititive");

                    b.Property<int>("ExhaustionPoints");

                    b.Property<string>("GameType");

                    b.Property<int>("HitPoints");

                    b.Property<int>("Level");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(500);

                    b.Property<double>("PercentRequiredAdrenalDB");

                    b.Property<int>("PowerPoints");

                    b.Property<int>("StrengthBonus");

                    b.Property<string>("Type")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<double>("WalkSpeed");

                    b.HasKey("ID");

                    b.ToTable("Characters");
                });

            modelBuilder.Entity("CombatTracker.Domain.DbArmor", b =>
                {
                    b.HasOne("CombatTracker.Domain.Reference.Players.DbCharacter", "Character")
                        .WithMany("Armors")
                        .HasForeignKey("CharacterId");
                });

            modelBuilder.Entity("CombatTracker.Domain.DbLevelChartValue", b =>
                {
                    b.HasOne("CombatTracker.Domain.DbLevelChart", "Chart")
                        .WithMany("Values")
                        .HasForeignKey("Level_ID")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("CombatTracker.Domain.DbWeapon", b =>
                {
                    b.HasOne("CombatTracker.Domain.Reference.Players.DbCharacter", "Character")
                        .WithMany("Weapons")
                        .HasForeignKey("CharacterId");
                });

            modelBuilder.Entity("CombatTracker.Domain.Models.DbActor", b =>
                {
                    b.HasOne("CombatTracker.Domain.Reference.Players.DbCharacter", "Character")
                        .WithMany()
                        .HasForeignKey("BaseCharacter_ID");

                    b.HasOne("CombatTracker.Domain.Reference.Creatures.DbCreature", "Creature")
                        .WithMany()
                        .HasForeignKey("BaseCreature_ID");

                    b.HasOne("CombatTracker.Domain.Models.DbGame", "Game")
                        .WithMany("Actors")
                        .HasForeignKey("Game_ID")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("CombatTracker.Domain.Models.DbActorsAction", b =>
                {
                    b.HasOne("CombatTracker.Domain.Reference.Actions.DbActionDefinition", "Action")
                        .WithMany()
                        .HasForeignKey("BaseAction_ID");

                    b.HasOne("CombatTracker.Domain.Models.DbCriticalAffect", "CriticalAffect")
                        .WithMany()
                        .HasForeignKey("Critical_ID");

                    b.HasOne("CombatTracker.Domain.Reference.Attacks.DbAttack", "CurrentAttack")
                        .WithMany()
                        .HasForeignKey("CurrentAttack_ID");

                    b.HasOne("CombatTracker.Domain.Models.DbGame", "Game")
                        .WithMany("ActorsActions")
                        .HasForeignKey("Game_ID")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("CombatTracker.Domain.Models.DbActor", "Actor")
                        .WithMany("Actions")
                        .HasForeignKey("WhoIsActing_ID")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("CombatTracker.Domain.Models.DbActorsAttack", b =>
                {
                    b.HasOne("CombatTracker.Domain.Models.DbActor", "Actor")
                        .WithMany("Attacks")
                        .HasForeignKey("Actor_ID")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("CombatTracker.Domain.Reference.Attacks.DbAttack", "Attack")
                        .WithMany()
                        .HasForeignKey("Attack_ID")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("CombatTracker.Domain.Models.DbCriticalAffect", b =>
                {
                    b.HasOne("CombatTracker.Domain.Models.DbActor", "Actor")
                        .WithMany("CriticalAffects")
                        .HasForeignKey("Actor_ID")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("CombatTracker.Domain.Reference.Actions.DbActionDefinition", b =>
                {
                    b.HasOne("CombatTracker.Domain.Reference.Actions.DbActionGroup", "ActionGroup")
                        .WithMany("Actions")
                        .HasForeignKey("ActionGroup_ID");

                    b.HasOne("CombatTracker.Domain.Reference.Actions.DbActionDefinition", "NextAction")
                        .WithMany()
                        .HasForeignKey("NextAction_ID");
                });

            modelBuilder.Entity("CombatTracker.Domain.Reference.Attacks.DbAttack", b =>
                {
                    b.HasOne("CombatTracker.Domain.Reference.Creatures.DbCreature", "Creature")
                        .WithMany("Attacks")
                        .HasForeignKey("CreatureOn_ID");

                    b.HasOne("CombatTracker.Domain.Reference.Attacks.DbAttack", "NextRoundSuccess")
                        .WithMany()
                        .HasForeignKey("NextRoundSuccess_ID");

                    b.HasOne("CombatTracker.Domain.DbSizeRating", "SizeRating")
                        .WithMany()
                        .HasForeignKey("Size_ID");

                    b.HasOne("CombatTracker.Domain.Reference.Attacks.DbAttack", "ThisRoundSuccess")
                        .WithMany()
                        .HasForeignKey("ThisRoundSuccess_ID");

                    b.HasOne("CombatTracker.Domain.Reference.Attacks.Charts.DbAttackType", "AttackType")
                        .WithMany()
                        .HasForeignKey("Type_ID")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("CombatTracker.Domain.Reference.Attacks.Charts.DbCriticalType", "CriticalUseInstead")
                        .WithMany()
                        .HasForeignKey("UseCriticalInstead_ID");

                    b.HasOne("CombatTracker.Domain.DbWeapon", "WeaponUsed")
                        .WithMany()
                        .HasForeignKey("WeaponUsed_ID");
                });

            modelBuilder.Entity("CombatTracker.Domain.Reference.Attacks.DbAttacksAddCrit", b =>
                {
                    b.HasOne("CombatTracker.Domain.Reference.Attacks.DbAttack", "Attack")
                        .WithMany("AdditionalCrits")
                        .HasForeignKey("AttackID")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("CombatTracker.Domain.Reference.Attacks.Charts.DbCriticalType", "CriticalType")
                        .WithMany()
                        .HasForeignKey("Critical_ID")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("CombatTracker.Domain.Reference.Creatures.Charts.DbConstitutionBonusChartValues", b =>
                {
                    b.HasOne("CombatTracker.Domain.DbConstitutionBonusChart", "Chart")
                        .WithMany("Values")
                        .HasForeignKey("Chart_ID")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("CombatTracker.Domain.Reference.Creatures.DbCreature", b =>
                {
                    b.HasOne("CombatTracker.Domain.DbSpeedChart", "AQRating")
                        .WithMany()
                        .HasForeignKey("AQRating_ID")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("CombatTracker.Domain.Reference.DbBook", "Book")
                        .WithMany("Creatures")
                        .HasForeignKey("Book_ID")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("CombatTracker.Domain.DbCriticalIgnore", "CriticalIgnore")
                        .WithMany()
                        .HasForeignKey("CriticalsIgnore_ID")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("CombatTracker.Domain.DbCriticalCode", "Criticals")
                        .WithMany()
                        .HasForeignKey("Criticals_ID")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("CombatTracker.Domain.DbConstitutionBonusChart", "HitMod")
                        .WithMany()
                        .HasForeignKey("HitMod_ID")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("CombatTracker.Domain.DbIQ", "IQ")
                        .WithMany()
                        .HasForeignKey("IQ_ID")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("CombatTracker.Domain.DbLevelChart", "LevelMod")
                        .WithMany()
                        .HasForeignKey("LevelMod_ID")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("CombatTracker.Domain.DbSpeedChart", "MSRating")
                        .WithMany()
                        .HasForeignKey("MSRating_ID")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("CombatTracker.Domain.DbPace", "MaxPace")
                        .WithMany()
                        .HasForeignKey("MaxPace_ID")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("CombatTracker.Domain.DbOutlook", "Outlook")
                        .WithMany()
                        .HasForeignKey("Outlook_ID")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("CombatTracker.Domain.DbSizeRating", "Size")
                        .WithMany()
                        .HasForeignKey("Size_ID")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
