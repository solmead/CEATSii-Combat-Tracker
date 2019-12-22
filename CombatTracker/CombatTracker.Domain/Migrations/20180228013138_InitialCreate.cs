using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace CombatTracker.Domain.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ActionGroups",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(maxLength: 500, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ActionGroups", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Attack_CriticalTypes",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Abbreviation = table.Column<string>(maxLength: 50, nullable: false),
                    Name = table.Column<string>(maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Attack_CriticalTypes", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Attack_Types",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Abbreviation = table.Column<string>(maxLength: 50, nullable: false),
                    HasDB = table.Column<bool>(nullable: false),
                    HasSize = table.Column<bool>(nullable: false),
                    Name = table.Column<string>(maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Attack_Types", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Attack_WeaponTypes",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Abbreviation = table.Column<string>(maxLength: 50, nullable: false),
                    Name = table.Column<string>(maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Attack_WeaponTypes", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Books",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(maxLength: 500, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Books", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Characters",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    BaseInititive = table.Column<int>(nullable: false),
                    ExhaustionPoints = table.Column<int>(nullable: false),
                    HitPoints = table.Column<int>(nullable: false),
                    Level = table.Column<int>(nullable: false),
                    Name = table.Column<string>(maxLength: 500, nullable: false),
                    PercentRequiredAdrenalDB = table.Column<double>(nullable: false),
                    PowerPoints = table.Column<int>(nullable: false),
                    StrengthBonus = table.Column<int>(nullable: false),
                    Type = table.Column<string>(maxLength: 50, nullable: false),
                    WalkSpeed = table.Column<double>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Characters", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Creature_ConsitutionBonusChart",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    BonusExhaustion = table.Column<int>(nullable: false),
                    Code = table.Column<string>(maxLength: 1, nullable: true),
                    PerLevelDifference = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Creature_ConsitutionBonusChart", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Creature_CriticalCodes",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Abbreviation = table.Column<string>(maxLength: 50, nullable: false),
                    Name = table.Column<string>(maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Creature_CriticalCodes", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Creature_CriticalIgnores",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Abbreviation = table.Column<string>(maxLength: 50, nullable: false),
                    Name = table.Column<string>(maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Creature_CriticalIgnores", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Creature_IQs",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Abbreviation = table.Column<string>(maxLength: 50, nullable: false),
                    Name = table.Column<string>(maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Creature_IQs", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Creature_LevelChart",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(maxLength: 1, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Creature_LevelChart", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Creature_Outlook",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Abbreviation = table.Column<string>(maxLength: 50, nullable: false),
                    Name = table.Column<string>(maxLength: 250, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Creature_Outlook", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Creature_Pace",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Abbreviation = table.Column<string>(maxLength: 50, nullable: false),
                    Name = table.Column<string>(maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Creature_Pace", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Creature_Sizes",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Abbreviation = table.Column<string>(maxLength: 50, nullable: false),
                    Name = table.Column<string>(maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Creature_Sizes", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Creature_SpeedChart",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    AQChargeLunge = table.Column<int>(nullable: false),
                    AQInitiative = table.Column<int>(nullable: false),
                    Abbreviation = table.Column<string>(maxLength: 50, nullable: false),
                    MSBaseDB = table.Column<int>(nullable: false),
                    MSFleeEvade = table.Column<int>(nullable: false),
                    Name = table.Column<string>(maxLength: 500, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Creature_SpeedChart", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Games",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CurrentTime = table.Column<double>(nullable: false),
                    GM_ID = table.Column<Guid>(nullable: true),
                    Name = table.Column<string>(maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Games", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "PsychicRefractoryPeriodMod",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    LevelMax = table.Column<int>(nullable: true),
                    LevelMin = table.Column<int>(nullable: true),
                    Mod = table.Column<int>(nullable: true),
                    RoundNumber = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PsychicRefractoryPeriodMod", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Actions",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ActionGroup_ID = table.Column<int>(nullable: true),
                    BasePercent = table.Column<double>(nullable: false),
                    IsAttack = table.Column<bool>(nullable: false),
                    IsSpell = table.Column<bool>(nullable: false),
                    Name = table.Column<string>(maxLength: 500, nullable: false),
                    NextAction_ID = table.Column<int>(nullable: true),
                    Type = table.Column<string>(maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Actions", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Actions_ActionGroups_ActionGroup_ID",
                        column: x => x.ActionGroup_ID,
                        principalTable: "ActionGroups",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Actions_Actions_NextAction_ID",
                        column: x => x.NextAction_ID,
                        principalTable: "Actions",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Armors",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    DB = table.Column<int>(nullable: false),
                    Description = table.Column<string>(maxLength: 255, nullable: false),
                    MovingManeuverMod = table.Column<int>(nullable: false),
                    TiedToID = table.Column<int>(nullable: true),
                    Type = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Armors", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Armors_Characters_TiedToID",
                        column: x => x.TiedToID,
                        principalTable: "Characters",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Weapons",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Bonus = table.Column<int>(nullable: false),
                    Is2Handed = table.Column<bool>(nullable: false),
                    MaxWeight = table.Column<int>(nullable: false),
                    MinWeight = table.Column<int>(nullable: false),
                    Name = table.Column<string>(maxLength: 500, nullable: false),
                    OB = table.Column<int>(nullable: false),
                    TiedToID = table.Column<int>(nullable: true),
                    Weight = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Weapons", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Weapons_Characters_TiedToID",
                        column: x => x.TiedToID,
                        principalTable: "Characters",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Creature_ConstitutionBonusChartValues",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Chart_ID = table.Column<int>(nullable: false),
                    Max = table.Column<int>(nullable: false),
                    Min = table.Column<int>(nullable: false),
                    Mod = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Creature_ConstitutionBonusChartValues", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Creature_ConstitutionBonusChartValues_Creature_ConsitutionBonusChart_Chart_ID",
                        column: x => x.Chart_ID,
                        principalTable: "Creature_ConsitutionBonusChart",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Creature_LevelChartValues",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Level_ID = table.Column<int>(nullable: false),
                    Max = table.Column<int>(nullable: false),
                    Min = table.Column<int>(nullable: false),
                    Mod = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Creature_LevelChartValues", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Creature_LevelChartValues_Creature_LevelChart_Level_ID",
                        column: x => x.Level_ID,
                        principalTable: "Creature_LevelChart",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Creatures",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    AQRating_ID = table.Column<int>(nullable: false),
                    AT = table.Column<int>(nullable: false),
                    BaseHits = table.Column<int>(nullable: false),
                    BaseLevel = table.Column<int>(nullable: false),
                    BaseMove = table.Column<int>(nullable: false),
                    Book_ID = table.Column<int>(nullable: false),
                    CriticalsIgnore_ID = table.Column<int>(nullable: false),
                    Criticals_ID = table.Column<int>(nullable: false),
                    DB = table.Column<int>(nullable: false),
                    Description = table.Column<string>(maxLength: 255, nullable: false),
                    Habitat = table.Column<string>(maxLength: 50, nullable: false),
                    HitMod_ID = table.Column<int>(nullable: false),
                    IQ_ID = table.Column<int>(nullable: false),
                    LevelMod_ID = table.Column<int>(nullable: false),
                    MMBonus = table.Column<int>(nullable: false),
                    MSRating_ID = table.Column<int>(nullable: false),
                    MaxEncountered = table.Column<int>(nullable: false),
                    MaxPace_ID = table.Column<int>(nullable: false),
                    MinEncountered = table.Column<int>(nullable: false),
                    Outlook_ID = table.Column<int>(nullable: false),
                    PageNumber = table.Column<int>(nullable: false),
                    Size_ID = table.Column<int>(nullable: false),
                    TypeName = table.Column<string>(maxLength: 500, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Creatures", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Creatures_Creature_SpeedChart_AQRating_ID",
                        column: x => x.AQRating_ID,
                        principalTable: "Creature_SpeedChart",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Creatures_Books_Book_ID",
                        column: x => x.Book_ID,
                        principalTable: "Books",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Creatures_Creature_CriticalIgnores_CriticalsIgnore_ID",
                        column: x => x.CriticalsIgnore_ID,
                        principalTable: "Creature_CriticalIgnores",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Creatures_Creature_CriticalCodes_Criticals_ID",
                        column: x => x.Criticals_ID,
                        principalTable: "Creature_CriticalCodes",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Creatures_Creature_ConsitutionBonusChart_HitMod_ID",
                        column: x => x.HitMod_ID,
                        principalTable: "Creature_ConsitutionBonusChart",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Creatures_Creature_IQs_IQ_ID",
                        column: x => x.IQ_ID,
                        principalTable: "Creature_IQs",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Creatures_Creature_LevelChart_LevelMod_ID",
                        column: x => x.LevelMod_ID,
                        principalTable: "Creature_LevelChart",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Creatures_Creature_SpeedChart_MSRating_ID",
                        column: x => x.MSRating_ID,
                        principalTable: "Creature_SpeedChart",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Creatures_Creature_Pace_MaxPace_ID",
                        column: x => x.MaxPace_ID,
                        principalTable: "Creature_Pace",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Creatures_Creature_Outlook_Outlook_ID",
                        column: x => x.Outlook_ID,
                        principalTable: "Creature_Outlook",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Creatures_Creature_Sizes_Size_ID",
                        column: x => x.Size_ID,
                        principalTable: "Creature_Sizes",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Actors",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    BaseCharacter_ID = table.Column<int>(nullable: true),
                    BaseCreature_ID = table.Column<int>(nullable: true),
                    BaseInititive = table.Column<int>(nullable: false),
                    Color = table.Column<string>(maxLength: 11, nullable: false),
                    ConstitutionStat = table.Column<int>(nullable: false),
                    CritNegatives = table.Column<int>(nullable: false),
                    CurrentArmor_ID = table.Column<int>(nullable: true),
                    ExhaustionRemaining = table.Column<int>(nullable: false),
                    ExhaustionTotal = table.Column<int>(nullable: false),
                    Game_ID = table.Column<int>(nullable: false),
                    HitsRemaining = table.Column<int>(nullable: false),
                    HitsTotal = table.Column<int>(nullable: false),
                    IsConcentrating = table.Column<bool>(nullable: false),
                    IsMoving = table.Column<bool>(nullable: false),
                    Level = table.Column<int>(nullable: false),
                    Movement = table.Column<double>(nullable: false),
                    Name = table.Column<string>(maxLength: 50, nullable: false),
                    NextSpellTime = table.Column<double>(nullable: false),
                    PercentAction = table.Column<double>(nullable: false),
                    PercentRequiredAdrenalDB = table.Column<double>(nullable: false),
                    Player_ID = table.Column<Guid>(nullable: true),
                    PowerPointsRemaining = table.Column<int>(nullable: false),
                    PowerPointsTotal = table.Column<int>(nullable: false),
                    RolledInititive = table.Column<int>(nullable: false),
                    StrengthBonus = table.Column<int>(nullable: false),
                    Suprised = table.Column<bool>(nullable: false),
                    Type = table.Column<string>(maxLength: 5, nullable: false),
                    UsingAdrenalDB = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Actors", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Actors_Characters_BaseCharacter_ID",
                        column: x => x.BaseCharacter_ID,
                        principalTable: "Characters",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Actors_Creatures_BaseCreature_ID",
                        column: x => x.BaseCreature_ID,
                        principalTable: "Creatures",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Actors_Games_Game_ID",
                        column: x => x.Game_ID,
                        principalTable: "Games",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Attacks",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    AdditionalCritsIsOr = table.Column<bool>(nullable: false),
                    CreatureOn_ID = table.Column<int>(nullable: true),
                    CriticalLevel = table.Column<string>(maxLength: 50, nullable: true),
                    DamageMultiplier = table.Column<int>(nullable: false),
                    MaxOB = table.Column<int>(nullable: false),
                    NextRoundSuccess_ID = table.Column<int>(nullable: true),
                    Number = table.Column<int>(nullable: false),
                    OB = table.Column<int>(nullable: false),
                    ParentAttack_ID = table.Column<int>(nullable: true),
                    PercentChance = table.Column<double>(nullable: false),
                    Size_ID = table.Column<int>(nullable: true),
                    ThisRoundSuccess_ID = table.Column<int>(nullable: true),
                    Type_ID = table.Column<int>(nullable: false),
                    UseCriticalInstead_ID = table.Column<int>(nullable: true),
                    WeaponUsed_ID = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Attacks", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Attacks_Creatures_CreatureOn_ID",
                        column: x => x.CreatureOn_ID,
                        principalTable: "Creatures",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Attacks_Attacks_NextRoundSuccess_ID",
                        column: x => x.NextRoundSuccess_ID,
                        principalTable: "Attacks",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Attacks_Creature_Sizes_Size_ID",
                        column: x => x.Size_ID,
                        principalTable: "Creature_Sizes",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Attacks_Attacks_ThisRoundSuccess_ID",
                        column: x => x.ThisRoundSuccess_ID,
                        principalTable: "Attacks",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Attacks_Attack_Types_Type_ID",
                        column: x => x.Type_ID,
                        principalTable: "Attack_Types",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Attacks_Attack_CriticalTypes_UseCriticalInstead_ID",
                        column: x => x.UseCriticalInstead_ID,
                        principalTable: "Attack_CriticalTypes",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Attacks_Weapons_WeaponUsed_ID",
                        column: x => x.WeaponUsed_ID,
                        principalTable: "Weapons",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "CriticalAffects",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Actor_ID = table.Column<int>(nullable: false),
                    IsStunned = table.Column<bool>(nullable: false),
                    Negative = table.Column<int>(nullable: false),
                    Parry = table.Column<string>(maxLength: 50, nullable: false),
                    ParryNegative = table.Column<int>(nullable: false),
                    TimeEnd = table.Column<double>(nullable: false),
                    TimeStart = table.Column<double>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CriticalAffects", x => x.ID);
                    table.ForeignKey(
                        name: "FK_CriticalAffects_Actors_Actor_ID",
                        column: x => x.Actor_ID,
                        principalTable: "Actors",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "ActorsAttacks",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Actor_ID = table.Column<int>(nullable: false),
                    Attack_ID = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ActorsAttacks", x => x.ID);
                    table.ForeignKey(
                        name: "FK_ActorsAttacks_Actors_Actor_ID",
                        column: x => x.Actor_ID,
                        principalTable: "Actors",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ActorsAttacks_Attacks_Attack_ID",
                        column: x => x.Attack_ID,
                        principalTable: "Attacks",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "AttacksAddCrits",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    AttackID = table.Column<int>(nullable: false),
                    Critical_ID = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AttacksAddCrits", x => x.ID);
                    table.ForeignKey(
                        name: "FK_AttacksAddCrits_Attacks_AttackID",
                        column: x => x.AttackID,
                        principalTable: "Attacks",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AttacksAddCrits_Attack_CriticalTypes_Critical_ID",
                        column: x => x.Critical_ID,
                        principalTable: "Attack_CriticalTypes",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "ActorsActions",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ActionType = table.Column<string>(maxLength: 50, nullable: false, defaultValue: "Current"),
                    BaseAction_ID = table.Column<int>(nullable: true),
                    BasePercent = table.Column<double>(nullable: false, defaultValue:1),
                    Bleeder = table.Column<int>(nullable: false, defaultValue: 0),
                    Count = table.Column<int>(nullable: false, defaultValue: 0),
                    CriticalGiven = table.Column<bool>(nullable: false, defaultValue: 0),
                    Critical_ID = table.Column<int>(nullable: true),
                    CurrentAttack_ID = table.Column<int>(nullable: true),
                    CurrentModifier = table.Column<int>(nullable: false, defaultValue: 0),
                    EndTime = table.Column<double>(nullable: false, defaultValue: 0),
                    Game_ID = table.Column<int>(nullable: false, defaultValue: 0),
                    HastedPercent = table.Column<double>(nullable: false, defaultValue: 0),
                    Interrupted = table.Column<bool>(nullable: false, defaultValue: 0),
                    IsHasted = table.Column<bool>(nullable: false, defaultValue: 0),
                    IsSlowed = table.Column<bool>(nullable: false, defaultValue: 0),
                    LeftPercent = table.Column<double>(nullable: false, defaultValue: 0),
                    LevelDifference = table.Column<int>(nullable: false, defaultValue: 0),
                    Name = table.Column<string>(maxLength: 50, nullable: false, defaultValue: ""),
                    Note = table.Column<string>(maxLength: 250, nullable: false, defaultValue: ""),
                    StartTime = table.Column<double>(nullable: false, defaultValue: 0),
                    State = table.Column<string>(maxLength: 50, nullable: false, defaultValue: "IsOK"),
                    TotalRounds = table.Column<int>(nullable: false, defaultValue: 0),
                    Type = table.Column<string>(maxLength: 50, nullable: false, defaultValue: ""),
                    WhoIsActing_ID = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ActorsActions", x => x.ID);
                    table.ForeignKey(
                        name: "FK_ActorsActions_Actions_BaseAction_ID",
                        column: x => x.BaseAction_ID,
                        principalTable: "Actions",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ActorsActions_CriticalAffects_Critical_ID",
                        column: x => x.Critical_ID,
                        principalTable: "CriticalAffects",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ActorsActions_Attacks_CurrentAttack_ID",
                        column: x => x.CurrentAttack_ID,
                        principalTable: "Attacks",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ActorsActions_Games_Game_ID",
                        column: x => x.Game_ID,
                        principalTable: "Games",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ActorsActions_Actors_WhoIsActing_ID",
                        column: x => x.WhoIsActing_ID,
                        principalTable: "Actors",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Actions_ActionGroup_ID",
                table: "Actions",
                column: "ActionGroup_ID");

            migrationBuilder.CreateIndex(
                name: "IX_Actions_NextAction_ID",
                table: "Actions",
                column: "NextAction_ID");

            migrationBuilder.CreateIndex(
                name: "IX_Actors_BaseCharacter_ID",
                table: "Actors",
                column: "BaseCharacter_ID");

            migrationBuilder.CreateIndex(
                name: "IX_Actors_BaseCreature_ID",
                table: "Actors",
                column: "BaseCreature_ID");

            migrationBuilder.CreateIndex(
                name: "IX_Actors_Game_ID",
                table: "Actors",
                column: "Game_ID");

            migrationBuilder.CreateIndex(
                name: "IX_ActorsActions_BaseAction_ID",
                table: "ActorsActions",
                column: "BaseAction_ID");

            migrationBuilder.CreateIndex(
                name: "IX_ActorsActions_Critical_ID",
                table: "ActorsActions",
                column: "Critical_ID");

            migrationBuilder.CreateIndex(
                name: "IX_ActorsActions_CurrentAttack_ID",
                table: "ActorsActions",
                column: "CurrentAttack_ID");

            migrationBuilder.CreateIndex(
                name: "IX_ActorsActions_Game_ID",
                table: "ActorsActions",
                column: "Game_ID");

            migrationBuilder.CreateIndex(
                name: "IX_ActorsActions_WhoIsActing_ID",
                table: "ActorsActions",
                column: "WhoIsActing_ID");

            migrationBuilder.CreateIndex(
                name: "IX_ActorsAttacks_Actor_ID",
                table: "ActorsAttacks",
                column: "Actor_ID");

            migrationBuilder.CreateIndex(
                name: "IX_ActorsAttacks_Attack_ID",
                table: "ActorsAttacks",
                column: "Attack_ID");

            migrationBuilder.CreateIndex(
                name: "IX_Armors_TiedToID",
                table: "Armors",
                column: "TiedToID");

            migrationBuilder.CreateIndex(
                name: "IX_Attacks_CreatureOn_ID",
                table: "Attacks",
                column: "CreatureOn_ID");

            migrationBuilder.CreateIndex(
                name: "IX_Attacks_NextRoundSuccess_ID",
                table: "Attacks",
                column: "NextRoundSuccess_ID");

            migrationBuilder.CreateIndex(
                name: "IX_Attacks_Size_ID",
                table: "Attacks",
                column: "Size_ID");

            migrationBuilder.CreateIndex(
                name: "IX_Attacks_ThisRoundSuccess_ID",
                table: "Attacks",
                column: "ThisRoundSuccess_ID");

            migrationBuilder.CreateIndex(
                name: "IX_Attacks_Type_ID",
                table: "Attacks",
                column: "Type_ID");

            migrationBuilder.CreateIndex(
                name: "IX_Attacks_UseCriticalInstead_ID",
                table: "Attacks",
                column: "UseCriticalInstead_ID");

            migrationBuilder.CreateIndex(
                name: "IX_Attacks_WeaponUsed_ID",
                table: "Attacks",
                column: "WeaponUsed_ID");

            migrationBuilder.CreateIndex(
                name: "IX_AttacksAddCrits_AttackID",
                table: "AttacksAddCrits",
                column: "AttackID");

            migrationBuilder.CreateIndex(
                name: "IX_AttacksAddCrits_Critical_ID",
                table: "AttacksAddCrits",
                column: "Critical_ID");

            migrationBuilder.CreateIndex(
                name: "IX_Creature_ConstitutionBonusChartValues_Chart_ID",
                table: "Creature_ConstitutionBonusChartValues",
                column: "Chart_ID");

            migrationBuilder.CreateIndex(
                name: "IX_Creature_LevelChartValues_Level_ID",
                table: "Creature_LevelChartValues",
                column: "Level_ID");

            migrationBuilder.CreateIndex(
                name: "IX_Creatures_AQRating_ID",
                table: "Creatures",
                column: "AQRating_ID");

            migrationBuilder.CreateIndex(
                name: "IX_Creatures_Book_ID",
                table: "Creatures",
                column: "Book_ID");

            migrationBuilder.CreateIndex(
                name: "IX_Creatures_CriticalsIgnore_ID",
                table: "Creatures",
                column: "CriticalsIgnore_ID");

            migrationBuilder.CreateIndex(
                name: "IX_Creatures_Criticals_ID",
                table: "Creatures",
                column: "Criticals_ID");

            migrationBuilder.CreateIndex(
                name: "IX_Creatures_HitMod_ID",
                table: "Creatures",
                column: "HitMod_ID");

            migrationBuilder.CreateIndex(
                name: "IX_Creatures_IQ_ID",
                table: "Creatures",
                column: "IQ_ID");

            migrationBuilder.CreateIndex(
                name: "IX_Creatures_LevelMod_ID",
                table: "Creatures",
                column: "LevelMod_ID");

            migrationBuilder.CreateIndex(
                name: "IX_Creatures_MSRating_ID",
                table: "Creatures",
                column: "MSRating_ID");

            migrationBuilder.CreateIndex(
                name: "IX_Creatures_MaxPace_ID",
                table: "Creatures",
                column: "MaxPace_ID");

            migrationBuilder.CreateIndex(
                name: "IX_Creatures_Outlook_ID",
                table: "Creatures",
                column: "Outlook_ID");

            migrationBuilder.CreateIndex(
                name: "IX_Creatures_Size_ID",
                table: "Creatures",
                column: "Size_ID");

            migrationBuilder.CreateIndex(
                name: "IX_CriticalAffects_Actor_ID",
                table: "CriticalAffects",
                column: "Actor_ID");

            migrationBuilder.CreateIndex(
                name: "IX_Weapons_TiedToID",
                table: "Weapons",
                column: "TiedToID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ActorsActions");

            migrationBuilder.DropTable(
                name: "ActorsAttacks");

            migrationBuilder.DropTable(
                name: "Armors");

            migrationBuilder.DropTable(
                name: "Attack_WeaponTypes");

            migrationBuilder.DropTable(
                name: "AttacksAddCrits");

            migrationBuilder.DropTable(
                name: "Creature_ConstitutionBonusChartValues");

            migrationBuilder.DropTable(
                name: "Creature_LevelChartValues");

            migrationBuilder.DropTable(
                name: "PsychicRefractoryPeriodMod");

            migrationBuilder.DropTable(
                name: "Actions");

            migrationBuilder.DropTable(
                name: "CriticalAffects");

            migrationBuilder.DropTable(
                name: "Attacks");

            migrationBuilder.DropTable(
                name: "ActionGroups");

            migrationBuilder.DropTable(
                name: "Actors");

            migrationBuilder.DropTable(
                name: "Attack_Types");

            migrationBuilder.DropTable(
                name: "Attack_CriticalTypes");

            migrationBuilder.DropTable(
                name: "Weapons");

            migrationBuilder.DropTable(
                name: "Creatures");

            migrationBuilder.DropTable(
                name: "Games");

            migrationBuilder.DropTable(
                name: "Characters");

            migrationBuilder.DropTable(
                name: "Creature_SpeedChart");

            migrationBuilder.DropTable(
                name: "Books");

            migrationBuilder.DropTable(
                name: "Creature_CriticalIgnores");

            migrationBuilder.DropTable(
                name: "Creature_CriticalCodes");

            migrationBuilder.DropTable(
                name: "Creature_ConsitutionBonusChart");

            migrationBuilder.DropTable(
                name: "Creature_IQs");

            migrationBuilder.DropTable(
                name: "Creature_LevelChart");

            migrationBuilder.DropTable(
                name: "Creature_Pace");

            migrationBuilder.DropTable(
                name: "Creature_Outlook");

            migrationBuilder.DropTable(
                name: "Creature_Sizes");
        }
    }
}
