/*    ==Scripting Parameters==

    Source Server Version : SQL Server 2019 (15.0.4138)
    Source Database Engine Edition : Microsoft SQL Server Enterprise Edition
    Source Database Engine Type : Standalone SQL Server

    Target Server Version : SQL Server 2019
    Target Database Engine Edition : Microsoft SQL Server Enterprise Edition
    Target Database Engine Type : Standalone SQL Server
*/

ALTER DATABASE [RMSSNew] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [RMSSNew].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [RMSSNew] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [RMSSNew] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [RMSSNew] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [RMSSNew] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [RMSSNew] SET ARITHABORT OFF 
GO
ALTER DATABASE [RMSSNew] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [RMSSNew] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [RMSSNew] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [RMSSNew] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [RMSSNew] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [RMSSNew] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [RMSSNew] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [RMSSNew] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [RMSSNew] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [RMSSNew] SET  DISABLE_BROKER 
GO
ALTER DATABASE [RMSSNew] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [RMSSNew] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [RMSSNew] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [RMSSNew] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [RMSSNew] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [RMSSNew] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [RMSSNew] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [RMSSNew] SET RECOVERY FULL 
GO
ALTER DATABASE [RMSSNew] SET  MULTI_USER 
GO
ALTER DATABASE [RMSSNew] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [RMSSNew] SET DB_CHAINING OFF 
GO
ALTER DATABASE [RMSSNew] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [RMSSNew] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [RMSSNew] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'RMSSNew', N'ON'
GO
ALTER DATABASE [RMSSNew] SET QUERY_STORE = OFF
GO
USE [RMSSNew]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 8/1/2021 12:02:55 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[__EFMigrationsHistory]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	[ProductVersion] [nvarchar](32) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[ActionGroups]    Script Date: 8/1/2021 12:02:55 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[ActionGroups]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[ActionGroups](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](500) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
 CONSTRAINT [PK_ActionGroups] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[Actions]    Script Date: 8/1/2021 12:02:55 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Actions]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[Actions](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[ActionGroup_ID] [int] NULL,
	[BasePercent] [float] NOT NULL,
	[IsAttack] [bit] NOT NULL,
	[IsSpell] [bit] NOT NULL,
	[Name] [nvarchar](500) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	[NextAction_ID] [int] NULL,
	[Type] [nvarchar](50) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
 CONSTRAINT [PK_Actions] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[Actors]    Script Date: 8/1/2021 12:02:55 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Actors]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[Actors](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[BaseCharacter_ID] [int] NULL,
	[BaseCreature_ID] [int] NULL,
	[BaseInititive] [int] NOT NULL,
	[Color] [nvarchar](11) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	[ConstitutionStat] [int] NOT NULL,
	[CritNegatives] [int] NOT NULL,
	[CurrentArmor_ID] [int] NULL,
	[ExhaustionRemaining] [int] NOT NULL,
	[ExhaustionTotal] [int] NOT NULL,
	[Game_ID] [int] NOT NULL,
	[HitsRemaining] [int] NOT NULL,
	[HitsTotal] [int] NOT NULL,
	[IsConcentrating] [bit] NOT NULL,
	[IsMoving] [bit] NOT NULL,
	[Level] [int] NOT NULL,
	[Movement] [float] NOT NULL,
	[Name] [nvarchar](50) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	[NextSpellTime] [float] NOT NULL,
	[PercentAction] [float] NOT NULL,
	[PercentRequiredAdrenalDB] [float] NOT NULL,
	[Player_ID] [uniqueidentifier] NULL,
	[PowerPointsRemaining] [int] NOT NULL,
	[PowerPointsTotal] [int] NOT NULL,
	[RolledInititive] [int] NOT NULL,
	[StrengthBonus] [int] NOT NULL,
	[Suprised] [bit] NOT NULL,
	[Type] [nvarchar](5) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	[UsingAdrenalDB] [bit] NOT NULL,
 CONSTRAINT [PK_Actors] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[ActorsActions]    Script Date: 8/1/2021 12:02:55 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[ActorsActions]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[ActorsActions](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[ActionType] [nvarchar](50) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	[BaseAction_ID] [int] NULL,
	[BasePercent] [float] NOT NULL,
	[Bleeder] [int] NOT NULL,
	[Count] [int] NOT NULL,
	[CriticalGiven] [bit] NOT NULL,
	[Critical_ID] [int] NULL,
	[CurrentAttack_ID] [int] NULL,
	[CurrentModifier] [int] NOT NULL,
	[EndTime] [float] NOT NULL,
	[Game_ID] [int] NOT NULL,
	[HastedPercent] [float] NOT NULL,
	[Interrupted] [bit] NOT NULL,
	[IsHasted] [bit] NOT NULL,
	[IsSlowed] [bit] NOT NULL,
	[LeftPercent] [float] NOT NULL,
	[LevelDifference] [int] NOT NULL,
	[Name] [nvarchar](50) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	[Note] [nvarchar](250) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	[StartTime] [float] NOT NULL,
	[State] [nvarchar](50) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	[TotalRounds] [int] NOT NULL,
	[Type] [nvarchar](50) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	[WhoIsActing_ID] [int] NOT NULL,
 CONSTRAINT [PK_ActorsActions] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[ActorsAttacks]    Script Date: 8/1/2021 12:02:55 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[ActorsAttacks]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[ActorsAttacks](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Actor_ID] [int] NOT NULL,
	[Attack_ID] [int] NOT NULL,
 CONSTRAINT [PK_ActorsAttacks] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[Armors]    Script Date: 8/1/2021 12:02:55 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Armors]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[Armors](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[DB] [int] NOT NULL,
	[Description] [nvarchar](255) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	[MovingManeuverMod] [int] NOT NULL,
	[TiedToID] [int] NULL,
	[Type] [int] NOT NULL,
 CONSTRAINT [PK_Armors] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[Attack_CriticalTypes]    Script Date: 8/1/2021 12:02:55 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Attack_CriticalTypes]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[Attack_CriticalTypes](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Abbreviation] [nvarchar](50) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	[Name] [nvarchar](50) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
 CONSTRAINT [PK_Attack_CriticalTypes] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[Attack_Types]    Script Date: 8/1/2021 12:02:55 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Attack_Types]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[Attack_Types](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Abbreviation] [nvarchar](50) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	[HasDB] [bit] NOT NULL,
	[HasSize] [bit] NOT NULL,
	[Name] [nvarchar](50) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
 CONSTRAINT [PK_Attack_Types] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[Attack_WeaponTypes]    Script Date: 8/1/2021 12:02:55 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Attack_WeaponTypes]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[Attack_WeaponTypes](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Abbreviation] [nvarchar](50) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	[Name] [nvarchar](50) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
 CONSTRAINT [PK_Attack_WeaponTypes] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[Attacks]    Script Date: 8/1/2021 12:02:55 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Attacks]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[Attacks](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[AdditionalCritsIsOr] [bit] NOT NULL,
	[CreatureOn_ID] [int] NULL,
	[CriticalLevel] [nvarchar](50) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	[DamageMultiplier] [int] NOT NULL,
	[MaxOB] [int] NOT NULL,
	[NextRoundSuccess_ID] [int] NULL,
	[Number] [int] NOT NULL,
	[OB] [int] NOT NULL,
	[ParentAttack_ID] [int] NULL,
	[PercentChance] [float] NOT NULL,
	[Size_ID] [int] NULL,
	[ThisRoundSuccess_ID] [int] NULL,
	[Type_ID] [int] NOT NULL,
	[UseCriticalInstead_ID] [int] NULL,
	[WeaponUsed_ID] [int] NULL,
 CONSTRAINT [PK_Attacks] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[AttacksAddCrits]    Script Date: 8/1/2021 12:02:55 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[AttacksAddCrits]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[AttacksAddCrits](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[AttackID] [int] NOT NULL,
	[Critical_ID] [int] NOT NULL,
 CONSTRAINT [PK_AttacksAddCrits] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[Books]    Script Date: 8/1/2021 12:02:55 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Books]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[Books](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](500) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
 CONSTRAINT [PK_Books] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[Characters]    Script Date: 8/1/2021 12:02:55 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Characters]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[Characters](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[BaseInititive] [int] NOT NULL,
	[ExhaustionPoints] [int] NOT NULL,
	[HitPoints] [int] NOT NULL,
	[Level] [int] NOT NULL,
	[Name] [nvarchar](500) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	[PercentRequiredAdrenalDB] [float] NOT NULL,
	[PowerPoints] [int] NOT NULL,
	[StrengthBonus] [int] NOT NULL,
	[Type] [nvarchar](50) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	[WalkSpeed] [float] NOT NULL,
 CONSTRAINT [PK_Characters] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[Creature_ConsitutionBonusChart]    Script Date: 8/1/2021 12:02:55 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Creature_ConsitutionBonusChart]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[Creature_ConsitutionBonusChart](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[BonusExhaustion] [int] NOT NULL,
	[Code] [nvarchar](1) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	[PerLevelDifference] [int] NOT NULL,
 CONSTRAINT [PK_Creature_ConsitutionBonusChart] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[Creature_ConstitutionBonusChartValues]    Script Date: 8/1/2021 12:02:55 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Creature_ConstitutionBonusChartValues]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[Creature_ConstitutionBonusChartValues](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Chart_ID] [int] NOT NULL,
	[Max] [int] NOT NULL,
	[Min] [int] NOT NULL,
	[Mod] [int] NOT NULL,
 CONSTRAINT [PK_Creature_ConstitutionBonusChartValues] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[Creature_CriticalCodes]    Script Date: 8/1/2021 12:02:55 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Creature_CriticalCodes]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[Creature_CriticalCodes](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Abbreviation] [nvarchar](50) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	[Name] [nvarchar](50) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
 CONSTRAINT [PK_Creature_CriticalCodes] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[Creature_CriticalIgnores]    Script Date: 8/1/2021 12:02:55 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Creature_CriticalIgnores]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[Creature_CriticalIgnores](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Abbreviation] [nvarchar](50) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	[Name] [nvarchar](50) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
 CONSTRAINT [PK_Creature_CriticalIgnores] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[Creature_IQs]    Script Date: 8/1/2021 12:02:55 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Creature_IQs]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[Creature_IQs](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Abbreviation] [nvarchar](50) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	[Name] [nvarchar](50) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
 CONSTRAINT [PK_Creature_IQs] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[Creature_LevelChart]    Script Date: 8/1/2021 12:02:55 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Creature_LevelChart]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[Creature_LevelChart](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](1) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
 CONSTRAINT [PK_Creature_LevelChart] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[Creature_LevelChartValues]    Script Date: 8/1/2021 12:02:55 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Creature_LevelChartValues]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[Creature_LevelChartValues](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Level_ID] [int] NOT NULL,
	[Max] [int] NOT NULL,
	[Min] [int] NOT NULL,
	[Mod] [int] NOT NULL,
 CONSTRAINT [PK_Creature_LevelChartValues] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[Creature_Outlook]    Script Date: 8/1/2021 12:02:55 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Creature_Outlook]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[Creature_Outlook](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Abbreviation] [nvarchar](50) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	[Name] [nvarchar](250) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
 CONSTRAINT [PK_Creature_Outlook] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[Creature_Pace]    Script Date: 8/1/2021 12:02:55 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Creature_Pace]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[Creature_Pace](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Abbreviation] [nvarchar](50) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	[Name] [nvarchar](50) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
 CONSTRAINT [PK_Creature_Pace] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[Creature_Sizes]    Script Date: 8/1/2021 12:02:55 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Creature_Sizes]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[Creature_Sizes](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Abbreviation] [nvarchar](50) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	[Name] [nvarchar](50) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
 CONSTRAINT [PK_Creature_Sizes] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[Creature_SpeedChart]    Script Date: 8/1/2021 12:02:55 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Creature_SpeedChart]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[Creature_SpeedChart](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[AQChargeLunge] [int] NOT NULL,
	[AQInitiative] [int] NOT NULL,
	[Abbreviation] [nvarchar](50) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	[MSBaseDB] [int] NOT NULL,
	[MSFleeEvade] [int] NOT NULL,
	[Name] [nvarchar](500) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
 CONSTRAINT [PK_Creature_SpeedChart] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[Creatures]    Script Date: 8/1/2021 12:02:55 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Creatures]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[Creatures](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[AQRating_ID] [int] NOT NULL,
	[AT] [int] NOT NULL,
	[BaseHits] [int] NOT NULL,
	[BaseLevel] [int] NOT NULL,
	[BaseMove] [int] NOT NULL,
	[Book_ID] [int] NOT NULL,
	[CriticalsIgnore_ID] [int] NOT NULL,
	[Criticals_ID] [int] NOT NULL,
	[DB] [int] NOT NULL,
	[Description] [nvarchar](255) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	[Habitat] [nvarchar](50) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	[HitMod_ID] [int] NOT NULL,
	[IQ_ID] [int] NOT NULL,
	[LevelMod_ID] [int] NOT NULL,
	[MMBonus] [int] NOT NULL,
	[MSRating_ID] [int] NOT NULL,
	[MaxEncountered] [int] NOT NULL,
	[MaxPace_ID] [int] NOT NULL,
	[MinEncountered] [int] NOT NULL,
	[Outlook_ID] [int] NOT NULL,
	[PageNumber] [int] NOT NULL,
	[Size_ID] [int] NOT NULL,
	[TypeName] [nvarchar](500) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
 CONSTRAINT [PK_Creatures] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[CriticalAffects]    Script Date: 8/1/2021 12:02:55 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[CriticalAffects]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[CriticalAffects](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Actor_ID] [int] NOT NULL,
	[IsStunned] [bit] NOT NULL,
	[Negative] [int] NOT NULL,
	[Parry] [nvarchar](50) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	[ParryNegative] [int] NOT NULL,
	[TimeEnd] [float] NOT NULL,
	[TimeStart] [float] NOT NULL,
 CONSTRAINT [PK_CriticalAffects] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[Games]    Script Date: 8/1/2021 12:02:55 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Games]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[Games](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[CurrentTime] [float] NOT NULL,
	[GM_ID] [uniqueidentifier] NULL,
	[Name] [nvarchar](50) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
 CONSTRAINT [PK_Games] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[PsychicRefractoryPeriodMod]    Script Date: 8/1/2021 12:02:55 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[PsychicRefractoryPeriodMod]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[PsychicRefractoryPeriodMod](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[LevelMax] [int] NULL,
	[LevelMin] [int] NULL,
	[Mod] [int] NULL,
	[RoundNumber] [int] NULL,
 CONSTRAINT [PK_PsychicRefractoryPeriodMod] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[Weapons]    Script Date: 8/1/2021 12:02:55 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Weapons]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[Weapons](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Bonus] [int] NOT NULL,
	[Is2Handed] [bit] NOT NULL,
	[MaxWeight] [int] NOT NULL,
	[MinWeight] [int] NOT NULL,
	[Name] [nvarchar](500) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	[OB] [int] NOT NULL,
	[TiedToID] [int] NULL,
	[Weight] [int] NOT NULL,
 CONSTRAINT [PK_Weapons] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
END
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20180228013138_InitialCreate', N'2.0.1-rtm-125')
GO
SET IDENTITY_INSERT [dbo].[ActionGroups] ON 
GO
INSERT [dbo].[ActionGroups] ([ID], [Name]) VALUES (34, N'Manoeuvre')
GO
INSERT [dbo].[ActionGroups] ([ID], [Name]) VALUES (35, N'Melee')
GO
INSERT [dbo].[ActionGroups] ([ID], [Name]) VALUES (36, N'Missle')
GO
INSERT [dbo].[ActionGroups] ([ID], [Name]) VALUES (37, N'Movement')
GO
INSERT [dbo].[ActionGroups] ([ID], [Name]) VALUES (38, N'Spell')
GO
SET IDENTITY_INSERT [dbo].[ActionGroups] OFF
GO
SET IDENTITY_INSERT [dbo].[Actions] ON 
GO
INSERT [dbo].[Actions] ([ID], [ActionGroup_ID], [BasePercent], [IsAttack], [IsSpell], [Name], [NextAction_ID], [Type]) VALUES (490, 34, 0.1, 0, 0, N'Awareness / Adrenal / Static Maneouvre', NULL, N'Normal')
GO
INSERT [dbo].[Actions] ([ID], [ActionGroup_ID], [BasePercent], [IsAttack], [IsSpell], [Name], [NextAction_ID], [Type]) VALUES (491, 34, 0.3, 0, 0, N'Rapid maneouvre (-40)', NULL, N'Normal')
GO
INSERT [dbo].[Actions] ([ID], [ActionGroup_ID], [BasePercent], [IsAttack], [IsSpell], [Name], [NextAction_ID], [Type]) VALUES (492, 34, 0.5, 0, 0, N'Half maneouvre (-20)', NULL, N'Normal')
GO
INSERT [dbo].[Actions] ([ID], [ActionGroup_ID], [BasePercent], [IsAttack], [IsSpell], [Name], [NextAction_ID], [Type]) VALUES (493, 34, 0.7, 0, 0, N'Full maneouvre (0)', NULL, N'Normal')
GO
INSERT [dbo].[Actions] ([ID], [ActionGroup_ID], [BasePercent], [IsAttack], [IsSpell], [Name], [NextAction_ID], [Type]) VALUES (494, 34, 0.2, 0, 0, N'Draw a weapon', NULL, N'Normal')
GO
INSERT [dbo].[Actions] ([ID], [ActionGroup_ID], [BasePercent], [IsAttack], [IsSpell], [Name], [NextAction_ID], [Type]) VALUES (495, 34, 0.0001, 0, 0, N'Drop a weapon', NULL, N'Normal')
GO
INSERT [dbo].[Actions] ([ID], [ActionGroup_ID], [BasePercent], [IsAttack], [IsSpell], [Name], [NextAction_ID], [Type]) VALUES (496, 34, 0.0001, 0, 0, N'Quickdraw a weapon', NULL, N'Normal')
GO
INSERT [dbo].[Actions] ([ID], [ActionGroup_ID], [BasePercent], [IsAttack], [IsSpell], [Name], [NextAction_ID], [Type]) VALUES (497, 34, 0.2, 0, 0, N'Rapid mount / dismount', NULL, N'Normal')
GO
INSERT [dbo].[Actions] ([ID], [ActionGroup_ID], [BasePercent], [IsAttack], [IsSpell], [Name], [NextAction_ID], [Type]) VALUES (498, 34, 0.5, 0, 0, N'Normal mount / dismount', NULL, N'Normal')
GO
INSERT [dbo].[Actions] ([ID], [ActionGroup_ID], [BasePercent], [IsAttack], [IsSpell], [Name], [NextAction_ID], [Type]) VALUES (499, 34, 0.1, 0, 0, N'Stand from seated', NULL, N'Normal')
GO
INSERT [dbo].[Actions] ([ID], [ActionGroup_ID], [BasePercent], [IsAttack], [IsSpell], [Name], [NextAction_ID], [Type]) VALUES (500, 34, 0.2, 0, 0, N'Stand from kneeling / crouched', NULL, N'Normal')
GO
INSERT [dbo].[Actions] ([ID], [ActionGroup_ID], [BasePercent], [IsAttack], [IsSpell], [Name], [NextAction_ID], [Type]) VALUES (501, 34, 0.3, 0, 0, N'Moving to crouched from prone', NULL, N'Normal')
GO
INSERT [dbo].[Actions] ([ID], [ActionGroup_ID], [BasePercent], [IsAttack], [IsSpell], [Name], [NextAction_ID], [Type]) VALUES (502, 34, 0.5, 0, 0, N'Standing from prone', NULL, N'Normal')
GO
INSERT [dbo].[Actions] ([ID], [ActionGroup_ID], [BasePercent], [IsAttack], [IsSpell], [Name], [NextAction_ID], [Type]) VALUES (503, 34, 0.1, 0, 0, N'Rapid drop to ground', NULL, N'Normal')
GO
INSERT [dbo].[Actions] ([ID], [ActionGroup_ID], [BasePercent], [IsAttack], [IsSpell], [Name], [NextAction_ID], [Type]) VALUES (504, 34, 0.2, 0, 0, N'Careful drop to ground', NULL, N'Normal')
GO
INSERT [dbo].[Actions] ([ID], [ActionGroup_ID], [BasePercent], [IsAttack], [IsSpell], [Name], [NextAction_ID], [Type]) VALUES (505, 34, 0.3, 0, 0, N'Picking something up from ground', NULL, N'Normal')
GO
INSERT [dbo].[Actions] ([ID], [ActionGroup_ID], [BasePercent], [IsAttack], [IsSpell], [Name], [NextAction_ID], [Type]) VALUES (506, 35, 0.25, 0, 0, N'Disengage', NULL, N'Normal')
GO
INSERT [dbo].[Actions] ([ID], [ActionGroup_ID], [BasePercent], [IsAttack], [IsSpell], [Name], [NextAction_ID], [Type]) VALUES (507, 35, 1, 1, 0, N'Full melee attack', NULL, N'Attack')
GO
INSERT [dbo].[Actions] ([ID], [ActionGroup_ID], [BasePercent], [IsAttack], [IsSpell], [Name], [NextAction_ID], [Type]) VALUES (508, 35, 1, 1, 0, N'Press and melee attack', NULL, N'Attack')
GO
INSERT [dbo].[Actions] ([ID], [ActionGroup_ID], [BasePercent], [IsAttack], [IsSpell], [Name], [NextAction_ID], [Type]) VALUES (509, 35, 1, 1, 0, N'React and melee attack', NULL, N'Attack')
GO
INSERT [dbo].[Actions] ([ID], [ActionGroup_ID], [BasePercent], [IsAttack], [IsSpell], [Name], [NextAction_ID], [Type]) VALUES (510, 36, 0.5, 0, 0, N'Loading sling', 511, N'Normal')
GO
INSERT [dbo].[Actions] ([ID], [ActionGroup_ID], [BasePercent], [IsAttack], [IsSpell], [Name], [NextAction_ID], [Type]) VALUES (511, 36, 0.6, 1, 0, N'Missile attack', 512, N'Attack')
GO
INSERT [dbo].[Actions] ([ID], [ActionGroup_ID], [BasePercent], [IsAttack], [IsSpell], [Name], [NextAction_ID], [Type]) VALUES (512, 36, 0.7, 0, 0, N'Loading long bow', 511, N'Normal')
GO
INSERT [dbo].[Actions] ([ID], [ActionGroup_ID], [BasePercent], [IsAttack], [IsSpell], [Name], [NextAction_ID], [Type]) VALUES (513, 36, 0.5, 0, 0, N'Loading short bow', 511, N'Normal')
GO
INSERT [dbo].[Actions] ([ID], [ActionGroup_ID], [BasePercent], [IsAttack], [IsSpell], [Name], [NextAction_ID], [Type]) VALUES (514, 36, 0.6, 0, 0, N'Loading composite bow', 511, N'Normal')
GO
INSERT [dbo].[Actions] ([ID], [ActionGroup_ID], [BasePercent], [IsAttack], [IsSpell], [Name], [NextAction_ID], [Type]) VALUES (515, 36, 1.6, 0, 0, N'Loading light crossbow', 511, N'Normal')
GO
INSERT [dbo].[Actions] ([ID], [ActionGroup_ID], [BasePercent], [IsAttack], [IsSpell], [Name], [NextAction_ID], [Type]) VALUES (516, 36, 2.2, 0, 0, N'Loading heavy crossbow', 511, N'Normal')
GO
INSERT [dbo].[Actions] ([ID], [ActionGroup_ID], [BasePercent], [IsAttack], [IsSpell], [Name], [NextAction_ID], [Type]) VALUES (517, 36, 0.2, 1, 0, N'Thrown weapon attack', NULL, N'Attack')
GO
INSERT [dbo].[Actions] ([ID], [ActionGroup_ID], [BasePercent], [IsAttack], [IsSpell], [Name], [NextAction_ID], [Type]) VALUES (518, 36, 2, 0, 0, N'Restring short bow', NULL, N'Normal')
GO
INSERT [dbo].[Actions] ([ID], [ActionGroup_ID], [BasePercent], [IsAttack], [IsSpell], [Name], [NextAction_ID], [Type]) VALUES (519, 36, 3, 0, 0, N'Restring composite / long bow', NULL, N'Normal')
GO
INSERT [dbo].[Actions] ([ID], [ActionGroup_ID], [BasePercent], [IsAttack], [IsSpell], [Name], [NextAction_ID], [Type]) VALUES (520, 37, 0.1, 0, 0, N'10%', NULL, N'Normal')
GO
INSERT [dbo].[Actions] ([ID], [ActionGroup_ID], [BasePercent], [IsAttack], [IsSpell], [Name], [NextAction_ID], [Type]) VALUES (521, 37, 0.2, 0, 0, N'20%', NULL, N'Normal')
GO
INSERT [dbo].[Actions] ([ID], [ActionGroup_ID], [BasePercent], [IsAttack], [IsSpell], [Name], [NextAction_ID], [Type]) VALUES (522, 37, 0.3, 0, 0, N'30%', NULL, N'Normal')
GO
INSERT [dbo].[Actions] ([ID], [ActionGroup_ID], [BasePercent], [IsAttack], [IsSpell], [Name], [NextAction_ID], [Type]) VALUES (523, 37, 0.4, 0, 0, N'40%', NULL, N'Normal')
GO
INSERT [dbo].[Actions] ([ID], [ActionGroup_ID], [BasePercent], [IsAttack], [IsSpell], [Name], [NextAction_ID], [Type]) VALUES (524, 37, 0.5, 0, 0, N'50%', NULL, N'Normal')
GO
INSERT [dbo].[Actions] ([ID], [ActionGroup_ID], [BasePercent], [IsAttack], [IsSpell], [Name], [NextAction_ID], [Type]) VALUES (525, 37, 0.6, 0, 0, N'60%', NULL, N'Normal')
GO
INSERT [dbo].[Actions] ([ID], [ActionGroup_ID], [BasePercent], [IsAttack], [IsSpell], [Name], [NextAction_ID], [Type]) VALUES (526, 37, 0.7, 0, 0, N'70%', NULL, N'Normal')
GO
INSERT [dbo].[Actions] ([ID], [ActionGroup_ID], [BasePercent], [IsAttack], [IsSpell], [Name], [NextAction_ID], [Type]) VALUES (527, 37, 0.8, 0, 0, N'80%', NULL, N'Normal')
GO
INSERT [dbo].[Actions] ([ID], [ActionGroup_ID], [BasePercent], [IsAttack], [IsSpell], [Name], [NextAction_ID], [Type]) VALUES (528, 37, 0.9, 0, 0, N'90%', NULL, N'Normal')
GO
INSERT [dbo].[Actions] ([ID], [ActionGroup_ID], [BasePercent], [IsAttack], [IsSpell], [Name], [NextAction_ID], [Type]) VALUES (529, 37, 1, 0, 0, N'100%', NULL, N'Normal')
GO
INSERT [dbo].[Actions] ([ID], [ActionGroup_ID], [BasePercent], [IsAttack], [IsSpell], [Name], [NextAction_ID], [Type]) VALUES (530, 38, 0.9, 0, 0, N'Preparing a spell', NULL, N'Prep')
GO
INSERT [dbo].[Actions] ([ID], [ActionGroup_ID], [BasePercent], [IsAttack], [IsSpell], [Name], [NextAction_ID], [Type]) VALUES (531, 38, 0.1, 0, 1, N'Casting an instantaneous spell', NULL, N'Spell')
GO
INSERT [dbo].[Actions] ([ID], [ActionGroup_ID], [BasePercent], [IsAttack], [IsSpell], [Name], [NextAction_ID], [Type]) VALUES (532, 38, 0.75, 0, 1, N'Casting a non-instantaneous spell', NULL, N'Spell')
GO
INSERT [dbo].[Actions] ([ID], [ActionGroup_ID], [BasePercent], [IsAttack], [IsSpell], [Name], [NextAction_ID], [Type]) VALUES (533, 38, 0.1, 0, 0, N'Use item for instantaneous spell', NULL, N'Normal')
GO
INSERT [dbo].[Actions] ([ID], [ActionGroup_ID], [BasePercent], [IsAttack], [IsSpell], [Name], [NextAction_ID], [Type]) VALUES (534, 38, 0.75, 0, 0, N'Use item for non-instantaneous spell', NULL, N'Normal')
GO
INSERT [dbo].[Actions] ([ID], [ActionGroup_ID], [BasePercent], [IsAttack], [IsSpell], [Name], [NextAction_ID], [Type]) VALUES (535, 38, 0.01, 0, 0, N'Use item', 536, N'Normal')
GO
INSERT [dbo].[Actions] ([ID], [ActionGroup_ID], [BasePercent], [IsAttack], [IsSpell], [Name], [NextAction_ID], [Type]) VALUES (536, 38, 0.09, 0, 0, N'Recovery from item use', NULL, N'Normal')
GO
INSERT [dbo].[Actions] ([ID], [ActionGroup_ID], [BasePercent], [IsAttack], [IsSpell], [Name], [NextAction_ID], [Type]) VALUES (537, 38, 0.25, 0, 0, N'Delay to deliberate phase', NULL, N'Normal')
GO
INSERT [dbo].[Actions] ([ID], [ActionGroup_ID], [BasePercent], [IsAttack], [IsSpell], [Name], [NextAction_ID], [Type]) VALUES (538, 38, 0.75, 0, 0, N'Cast next round as 50% action', NULL, N'Normal')
GO
INSERT [dbo].[Actions] ([ID], [ActionGroup_ID], [BasePercent], [IsAttack], [IsSpell], [Name], [NextAction_ID], [Type]) VALUES (539, 37, 1, 0, 0, N'Move One Square - Walk', NULL, N'Movement')
GO
INSERT [dbo].[Actions] ([ID], [ActionGroup_ID], [BasePercent], [IsAttack], [IsSpell], [Name], [NextAction_ID], [Type]) VALUES (540, 37, 1.5, 0, 0, N'Move One Square - Jog', NULL, N'Movement')
GO
INSERT [dbo].[Actions] ([ID], [ActionGroup_ID], [BasePercent], [IsAttack], [IsSpell], [Name], [NextAction_ID], [Type]) VALUES (541, 37, 2, 0, 0, N'Move One Square - Run', NULL, N'Movement')
GO
INSERT [dbo].[Actions] ([ID], [ActionGroup_ID], [BasePercent], [IsAttack], [IsSpell], [Name], [NextAction_ID], [Type]) VALUES (542, 37, 3, 0, 0, N'Move One Square - Sprint', NULL, N'Movement')
GO
INSERT [dbo].[Actions] ([ID], [ActionGroup_ID], [BasePercent], [IsAttack], [IsSpell], [Name], [NextAction_ID], [Type]) VALUES (543, 37, 4, 0, 0, N'Move One Square - Fast Sprint', NULL, N'Movement')
GO
INSERT [dbo].[Actions] ([ID], [ActionGroup_ID], [BasePercent], [IsAttack], [IsSpell], [Name], [NextAction_ID], [Type]) VALUES (544, 37, 5, 0, 0, N'Move One Square - Dash', NULL, N'Movement')
GO
INSERT [dbo].[Actions] ([ID], [ActionGroup_ID], [BasePercent], [IsAttack], [IsSpell], [Name], [NextAction_ID], [Type]) VALUES (545, 37, 0.5, 0, 0, N'Move One Square - Half Speed', NULL, N'Movement')
GO
SET IDENTITY_INSERT [dbo].[Actions] OFF
GO
SET IDENTITY_INSERT [dbo].[Actors] ON 
GO
INSERT [dbo].[Actors] ([ID], [BaseCharacter_ID], [BaseCreature_ID], [BaseInititive], [Color], [ConstitutionStat], [CritNegatives], [CurrentArmor_ID], [ExhaustionRemaining], [ExhaustionTotal], [Game_ID], [HitsRemaining], [HitsTotal], [IsConcentrating], [IsMoving], [Level], [Movement], [Name], [NextSpellTime], [PercentAction], [PercentRequiredAdrenalDB], [Player_ID], [PowerPointsRemaining], [PowerPointsTotal], [RolledInititive], [StrengthBonus], [Suprised], [Type], [UsingAdrenalDB]) VALUES (84, 55, NULL, 6, N'255,0,0    ', 90, 0, 79, 100, 100, 15, 42, 112, 0, 0, 8, 50, N'Durgon Delgraven', 0, 100, 0.4, NULL, 15, 29, 5, 7, 0, N'NPC', 1)
GO
INSERT [dbo].[Actors] ([ID], [BaseCharacter_ID], [BaseCreature_ID], [BaseInititive], [Color], [ConstitutionStat], [CritNegatives], [CurrentArmor_ID], [ExhaustionRemaining], [ExhaustionTotal], [Game_ID], [HitsRemaining], [HitsTotal], [IsConcentrating], [IsMoving], [Level], [Movement], [Name], [NextSpellTime], [PercentAction], [PercentRequiredAdrenalDB], [Player_ID], [PowerPointsRemaining], [PowerPointsTotal], [RolledInititive], [StrengthBonus], [Suprised], [Type], [UsingAdrenalDB]) VALUES (85, 63, NULL, 13, N'0,255,0    ', 90, 0, 89, 52, 52, 15, 25, 45, 0, 0, 5, 89, N'Tasha - Half-Elf Assasin', 0, 100, 0.4, NULL, 4, 4, 12, 8, 1, N'PC', 0)
GO
INSERT [dbo].[Actors] ([ID], [BaseCharacter_ID], [BaseCreature_ID], [BaseInititive], [Color], [ConstitutionStat], [CritNegatives], [CurrentArmor_ID], [ExhaustionRemaining], [ExhaustionTotal], [Game_ID], [HitsRemaining], [HitsTotal], [IsConcentrating], [IsMoving], [Level], [Movement], [Name], [NextSpellTime], [PercentAction], [PercentRequiredAdrenalDB], [Player_ID], [PowerPointsRemaining], [PowerPointsTotal], [RolledInititive], [StrengthBonus], [Suprised], [Type], [UsingAdrenalDB]) VALUES (86, 67, NULL, 9, N'0,0,255    ', 90, 0, 109, 43, 43, 15, 37, 37, 1, 0, 5, 77, N'Matt - Grey Elf Magician', 14.476073476073477, 200, 0, NULL, 63, 67, 13, 0, 0, N'PC', 0)
GO
INSERT [dbo].[Actors] ([ID], [BaseCharacter_ID], [BaseCreature_ID], [BaseInititive], [Color], [ConstitutionStat], [CritNegatives], [CurrentArmor_ID], [ExhaustionRemaining], [ExhaustionTotal], [Game_ID], [HitsRemaining], [HitsTotal], [IsConcentrating], [IsMoving], [Level], [Movement], [Name], [NextSpellTime], [PercentAction], [PercentRequiredAdrenalDB], [Player_ID], [PowerPointsRemaining], [PowerPointsTotal], [RolledInititive], [StrengthBonus], [Suprised], [Type], [UsingAdrenalDB]) VALUES (87, NULL, 620, 12, N'0,255,255  ', 90, 0, 113, 160, 160, 15, 318, 340, 0, 0, 20, 100, N'Great Spider Major 1', 0, 50, 0.4, NULL, 0, 0, 4, 0, 0, N'NPC', 0)
GO
INSERT [dbo].[Actors] ([ID], [BaseCharacter_ID], [BaseCreature_ID], [BaseInititive], [Color], [ConstitutionStat], [CritNegatives], [CurrentArmor_ID], [ExhaustionRemaining], [ExhaustionTotal], [Game_ID], [HitsRemaining], [HitsTotal], [IsConcentrating], [IsMoving], [Level], [Movement], [Name], [NextSpellTime], [PercentAction], [PercentRequiredAdrenalDB], [Player_ID], [PowerPointsRemaining], [PowerPointsTotal], [RolledInititive], [StrengthBonus], [Suprised], [Type], [UsingAdrenalDB]) VALUES (88, 59, NULL, 9, N'128,128,128', 90, 0, 83, 81, 81, 15, -4, 106, 0, 0, 10, 90, N'Greshalk Grinding', 0, 100, 0.4, NULL, 0, 0, 3, 16, 0, N'NPC', 0)
GO
INSERT [dbo].[Actors] ([ID], [BaseCharacter_ID], [BaseCreature_ID], [BaseInititive], [Color], [ConstitutionStat], [CritNegatives], [CurrentArmor_ID], [ExhaustionRemaining], [ExhaustionTotal], [Game_ID], [HitsRemaining], [HitsTotal], [IsConcentrating], [IsMoving], [Level], [Movement], [Name], [NextSpellTime], [PercentAction], [PercentRequiredAdrenalDB], [Player_ID], [PowerPointsRemaining], [PowerPointsTotal], [RolledInititive], [StrengthBonus], [Suprised], [Type], [UsingAdrenalDB]) VALUES (89, NULL, 570, 12, N'255,128,0', 90, 0, 114, 40, 40, 15, 20, 20, 0, 0, 1, 240, N'Elemental Whisplings - Light 1', 0, 100, 0.4, NULL, 0, 0, 6, 0, 0, N'NPC', 0)
GO
INSERT [dbo].[Actors] ([ID], [BaseCharacter_ID], [BaseCreature_ID], [BaseInititive], [Color], [ConstitutionStat], [CritNegatives], [CurrentArmor_ID], [ExhaustionRemaining], [ExhaustionTotal], [Game_ID], [HitsRemaining], [HitsTotal], [IsConcentrating], [IsMoving], [Level], [Movement], [Name], [NextSpellTime], [PercentAction], [PercentRequiredAdrenalDB], [Player_ID], [PowerPointsRemaining], [PowerPointsTotal], [RolledInititive], [StrengthBonus], [Suprised], [Type], [UsingAdrenalDB]) VALUES (90, NULL, 607, -4, N'0,128,255', 90, 0, 115, 205, 205, 15, 107, 107, 0, 0, 7, 40, N'Ghost - Headless 1', 0, 100, 0.4, NULL, 0, 0, 15, 0, 0, N'NPC', 0)
GO
INSERT [dbo].[Actors] ([ID], [BaseCharacter_ID], [BaseCreature_ID], [BaseInititive], [Color], [ConstitutionStat], [CritNegatives], [CurrentArmor_ID], [ExhaustionRemaining], [ExhaustionTotal], [Game_ID], [HitsRemaining], [HitsTotal], [IsConcentrating], [IsMoving], [Level], [Movement], [Name], [NextSpellTime], [PercentAction], [PercentRequiredAdrenalDB], [Player_ID], [PowerPointsRemaining], [PowerPointsTotal], [RolledInititive], [StrengthBonus], [Suprised], [Type], [UsingAdrenalDB]) VALUES (91, 57, NULL, 7, N'128,255,0', 90, 0, 81, 64, 64, 15, 85, 85, 0, 0, 9, 70, N'Jason Terras ', 0, 100, 0.4, NULL, 120, 120, 15, 3, 0, N'PC', 0)
GO
SET IDENTITY_INSERT [dbo].[Actors] OFF
GO
SET IDENTITY_INSERT [dbo].[ActorsActions] ON 
GO
INSERT [dbo].[ActorsActions] ([ID], [ActionType], [BaseAction_ID], [BasePercent], [Bleeder], [Count], [CriticalGiven], [Critical_ID], [CurrentAttack_ID], [CurrentModifier], [EndTime], [Game_ID], [HastedPercent], [Interrupted], [IsHasted], [IsSlowed], [LeftPercent], [LevelDifference], [Name], [Note], [StartTime], [State], [TotalRounds], [Type], [WhoIsActing_ID]) VALUES (3062, N'Current', 507, 1, 0, 0, 1, NULL, 1364, 0, 22.945354676749975, 15, 0, 0, 0, 0, 0.31689663405890911, 0, N'Full melee attack', N'', 12.018295739348369, N'IsOK', 0, N'Attack', 87)
GO
INSERT [dbo].[ActorsActions] ([ID], [ActionType], [BaseAction_ID], [BasePercent], [Bleeder], [Count], [CriticalGiven], [Critical_ID], [CurrentAttack_ID], [CurrentModifier], [EndTime], [Game_ID], [HastedPercent], [Interrupted], [IsHasted], [IsSlowed], [LeftPercent], [LevelDifference], [Name], [Note], [StartTime], [State], [TotalRounds], [Type], [WhoIsActing_ID]) VALUES (3063, N'Next', 507, 1, 0, 0, 0, NULL, NULL, 0, 34.3739261053214, 15, 0, 0, 0, 0, 0.92439115729193111, 0, N'Full melee attack', N'', 22.945354676749975, N'IsOK', 0, N'Attack', 87)
GO
INSERT [dbo].[ActorsActions] ([ID], [ActionType], [BaseAction_ID], [BasePercent], [Bleeder], [Count], [CriticalGiven], [Critical_ID], [CurrentAttack_ID], [CurrentModifier], [EndTime], [Game_ID], [HastedPercent], [Interrupted], [IsHasted], [IsSlowed], [LeftPercent], [LevelDifference], [Name], [Note], [StartTime], [State], [TotalRounds], [Type], [WhoIsActing_ID]) VALUES (3069, N'Effect', NULL, 1, 0, 0, 0, 2, NULL, 0, 19.437863777089785, 15, 0, 0, 0, 0, 0.13045325177350139, 0, N'Stun & No_Parry On Tasha - Half-Elf Assasin', N'1 Rnds of Stun 2 Rnds of Parry ', 14.174705882352942, N'IsOK', 0, N'Critical', 85)
GO
INSERT [dbo].[ActorsActions] ([ID], [ActionType], [BaseAction_ID], [BasePercent], [Bleeder], [Count], [CriticalGiven], [Critical_ID], [CurrentAttack_ID], [CurrentModifier], [EndTime], [Game_ID], [HastedPercent], [Interrupted], [IsHasted], [IsSlowed], [LeftPercent], [LevelDifference], [Name], [Note], [StartTime], [State], [TotalRounds], [Type], [WhoIsActing_ID]) VALUES (3070, N'Effect', NULL, 1, 1, 0, 0, NULL, NULL, 0, 19.437863777089785, 15, 0, 0, 0, 0, 0.13045325177350139, 0, N'Tasha - Half-Elf Assasin bleeding at 1', N'', 14.174705882352942, N'IsOK', 0, N'Bleed', 85)
GO
INSERT [dbo].[ActorsActions] ([ID], [ActionType], [BaseAction_ID], [BasePercent], [Bleeder], [Count], [CriticalGiven], [Critical_ID], [CurrentAttack_ID], [CurrentModifier], [EndTime], [Game_ID], [HastedPercent], [Interrupted], [IsHasted], [IsSlowed], [LeftPercent], [LevelDifference], [Name], [Note], [StartTime], [State], [TotalRounds], [Type], [WhoIsActing_ID]) VALUES (3072, N'Effect', NULL, 4, 0, 0, 0, NULL, NULL, 0, 35.796327503974567, 15, 200, 0, 1, 0, 1, 0, N'Spell:Haste cast', N'on Matt - Grey Elf Magician', 14.174705882352942, N'IsOK', 0, N'SpellEffect', 86)
GO
INSERT [dbo].[ActorsActions] ([ID], [ActionType], [BaseAction_ID], [BasePercent], [Bleeder], [Count], [CriticalGiven], [Critical_ID], [CurrentAttack_ID], [CurrentModifier], [EndTime], [Game_ID], [HastedPercent], [Interrupted], [IsHasted], [IsSlowed], [LeftPercent], [LevelDifference], [Name], [Note], [StartTime], [State], [TotalRounds], [Type], [WhoIsActing_ID]) VALUES (3074, N'Effect', NULL, 2, 0, 0, 0, NULL, NULL, 0, 26.174705882352942, 15, 100, 0, 1, 0, 0.48855528652138808, 0, N'Spell:Bloody Hell cast', N'on Durgon Delgraven', 14.174705882352942, N'IsOK', 0, N'SpellEffect', 84)
GO
INSERT [dbo].[ActorsActions] ([ID], [ActionType], [BaseAction_ID], [BasePercent], [Bleeder], [Count], [CriticalGiven], [Critical_ID], [CurrentAttack_ID], [CurrentModifier], [EndTime], [Game_ID], [HastedPercent], [Interrupted], [IsHasted], [IsSlowed], [LeftPercent], [LevelDifference], [Name], [Note], [StartTime], [State], [TotalRounds], [Type], [WhoIsActing_ID]) VALUES (3075, N'Effect', NULL, 1, 0, 0, 0, NULL, NULL, 0, 20.174705882352942, 15, 0, 0, 0, 0, 0.16962066182405147, -2, N'Psychic Recovery', N'Round 0 of 10', 14.174705882352942, N'IsOK', 10, N'Psychic', 84)
GO
INSERT [dbo].[ActorsActions] ([ID], [ActionType], [BaseAction_ID], [BasePercent], [Bleeder], [Count], [CriticalGiven], [Critical_ID], [CurrentAttack_ID], [CurrentModifier], [EndTime], [Game_ID], [HastedPercent], [Interrupted], [IsHasted], [IsSlowed], [LeftPercent], [LevelDifference], [Name], [Note], [StartTime], [State], [TotalRounds], [Type], [WhoIsActing_ID]) VALUES (3077, N'Effect', NULL, 1, 0, 0, 0, 4, NULL, 0, 20.696445012787724, 15, 0, 0, 0, 0, 0.19735410744990675, 0, N' On Durgon Delgraven', N'  3 Rnds at Mods', 14.174705882352942, N'IsOK', 0, N'Critical', 84)
GO
INSERT [dbo].[ActorsActions] ([ID], [ActionType], [BaseAction_ID], [BasePercent], [Bleeder], [Count], [CriticalGiven], [Critical_ID], [CurrentAttack_ID], [CurrentModifier], [EndTime], [Game_ID], [HastedPercent], [Interrupted], [IsHasted], [IsSlowed], [LeftPercent], [LevelDifference], [Name], [Note], [StartTime], [State], [TotalRounds], [Type], [WhoIsActing_ID]) VALUES (3079, N'Current', 530, 0.9, 0, 1, 0, NULL, NULL, 0, 17.508039215686274, 15, 0, 0, 0, 0, 0.027871939736346257, 0, N'Preparing a spell Round 1', N'', 14.174705882352942, N'IsOK', 0, N'Prep', 86)
GO
INSERT [dbo].[ActorsActions] ([ID], [ActionType], [BaseAction_ID], [BasePercent], [Bleeder], [Count], [CriticalGiven], [Critical_ID], [CurrentAttack_ID], [CurrentModifier], [EndTime], [Game_ID], [HastedPercent], [Interrupted], [IsHasted], [IsSlowed], [LeftPercent], [LevelDifference], [Name], [Note], [StartTime], [State], [TotalRounds], [Type], [WhoIsActing_ID]) VALUES (3080, N'Next', 530, 0.9, 0, 2, 0, NULL, NULL, 0, 20.841372549019606, 15, 0, 0, 0, 0, 0.20505784234597763, 0, N'Preparing a spell Round 2', N'', 17.508039215686274, N'IsOK', 0, N'Prep', 86)
GO
INSERT [dbo].[ActorsActions] ([ID], [ActionType], [BaseAction_ID], [BasePercent], [Bleeder], [Count], [CriticalGiven], [Critical_ID], [CurrentAttack_ID], [CurrentModifier], [EndTime], [Game_ID], [HastedPercent], [Interrupted], [IsHasted], [IsSlowed], [LeftPercent], [LevelDifference], [Name], [Note], [StartTime], [State], [TotalRounds], [Type], [WhoIsActing_ID]) VALUES (3082, N'Effect', NULL, 2, 0, 0, 0, NULL, NULL, 0, 26.174705882352942, 15, 50, 0, 1, 0, 0.48855528652138808, 0, N'Spell:Slow cast', N'on Great Spider Major 1', 14.174705882352942, N'IsOK', 0, N'SpellEffect', 87)
GO
INSERT [dbo].[ActorsActions] ([ID], [ActionType], [BaseAction_ID], [BasePercent], [Bleeder], [Count], [CriticalGiven], [Critical_ID], [CurrentAttack_ID], [CurrentModifier], [EndTime], [Game_ID], [HastedPercent], [Interrupted], [IsHasted], [IsSlowed], [LeftPercent], [LevelDifference], [Name], [Note], [StartTime], [State], [TotalRounds], [Type], [WhoIsActing_ID]) VALUES (3087, N'Current', NULL, 1, 0, 0, 0, NULL, NULL, 0, 20.626318785578746, 15, 0, 0, 0, 0, 0.19362649379051755, 0, N'Unconcious', N'', 14.174705882352942, N'IsOK', 0, N'Death', 88)
GO
INSERT [dbo].[ActorsActions] ([ID], [ActionType], [BaseAction_ID], [BasePercent], [Bleeder], [Count], [CriticalGiven], [Critical_ID], [CurrentAttack_ID], [CurrentModifier], [EndTime], [Game_ID], [HastedPercent], [Interrupted], [IsHasted], [IsSlowed], [LeftPercent], [LevelDifference], [Name], [Note], [StartTime], [State], [TotalRounds], [Type], [WhoIsActing_ID]) VALUES (3097, N'Current', 539, 0.11235955056179775, 0, 0, 0, NULL, NULL, 0, 16.98369464639789, 15, 0, 0, 0, 0, 0, 0, N'Move One Square - Walk', N'', 16.181126428099333, N'IsOK', 0, N'Movement', 85)
GO
INSERT [dbo].[ActorsActions] ([ID], [ActionType], [BaseAction_ID], [BasePercent], [Bleeder], [Count], [CriticalGiven], [Critical_ID], [CurrentAttack_ID], [CurrentModifier], [EndTime], [Game_ID], [HastedPercent], [Interrupted], [IsHasted], [IsSlowed], [LeftPercent], [LevelDifference], [Name], [Note], [StartTime], [State], [TotalRounds], [Type], [WhoIsActing_ID]) VALUES (3100, N'Current', 541, 0.1, 0, 0, 0, NULL, NULL, 0, 17.896738124658761, 15, 0, 0, 0, 0, 0.048533529845246948, 0, N'Move One Square - Run', N'', 16.98369464639789, N'IsOK', 0, N'Movement', 84)
GO
INSERT [dbo].[ActorsActions] ([ID], [ActionType], [BaseAction_ID], [BasePercent], [Bleeder], [Count], [CriticalGiven], [Critical_ID], [CurrentAttack_ID], [CurrentModifier], [EndTime], [Game_ID], [HastedPercent], [Interrupted], [IsHasted], [IsSlowed], [LeftPercent], [LevelDifference], [Name], [Note], [StartTime], [State], [TotalRounds], [Type], [WhoIsActing_ID]) VALUES (3101, N'Next', 541, 0.1, 0, 0, 0, NULL, NULL, 0, 18.809781602919632, 15, 0, 0, 0, 0, 0.0970670596904939, 0, N'Move One Square - Run', N'', 17.896738124658761, N'IsOK', 0, N'Movement', 84)
GO
INSERT [dbo].[ActorsActions] ([ID], [ActionType], [BaseAction_ID], [BasePercent], [Bleeder], [Count], [CriticalGiven], [Critical_ID], [CurrentAttack_ID], [CurrentModifier], [EndTime], [Game_ID], [HastedPercent], [Interrupted], [IsHasted], [IsSlowed], [LeftPercent], [LevelDifference], [Name], [Note], [StartTime], [State], [TotalRounds], [Type], [WhoIsActing_ID]) VALUES (3120, N'Current', NULL, 0.001, 0, 0, 0, NULL, NULL, 0, 16.989302123033404, 15, 0, 0, 0, 0, 0.0002980697427078184, 0, N'Wait', N'', 16.98369464639789, N'IsOK', 0, N'Normal', 89)
GO
INSERT [dbo].[ActorsActions] ([ID], [ActionType], [BaseAction_ID], [BasePercent], [Bleeder], [Count], [CriticalGiven], [Critical_ID], [CurrentAttack_ID], [CurrentModifier], [EndTime], [Game_ID], [HastedPercent], [Interrupted], [IsHasted], [IsSlowed], [LeftPercent], [LevelDifference], [Name], [Note], [StartTime], [State], [TotalRounds], [Type], [WhoIsActing_ID]) VALUES (3122, N'Current', NULL, 0.001, 0, 0, 0, NULL, NULL, 0, 16.98969464639789, 15, 0, 0, 0, 0, 0.00031893462469734869, 0, N'Wait', N'', 16.98369464639789, N'IsOK', 0, N'Normal', 90)
GO
INSERT [dbo].[ActorsActions] ([ID], [ActionType], [BaseAction_ID], [BasePercent], [Bleeder], [Count], [CriticalGiven], [Critical_ID], [CurrentAttack_ID], [CurrentModifier], [EndTime], [Game_ID], [HastedPercent], [Interrupted], [IsHasted], [IsSlowed], [LeftPercent], [LevelDifference], [Name], [Note], [StartTime], [State], [TotalRounds], [Type], [WhoIsActing_ID]) VALUES (3124, N'Current', NULL, 0.001, 0, 0, 0, NULL, NULL, 0, 16.989100051803295, 15, 0, 0, 0, 0, 0.00028732849071829472, 0, N'Wait', N'', 16.98369464639789, N'IsOK', 0, N'Normal', 91)
GO
INSERT [dbo].[ActorsActions] ([ID], [ActionType], [BaseAction_ID], [BasePercent], [Bleeder], [Count], [CriticalGiven], [Critical_ID], [CurrentAttack_ID], [CurrentModifier], [EndTime], [Game_ID], [HastedPercent], [Interrupted], [IsHasted], [IsSlowed], [LeftPercent], [LevelDifference], [Name], [Note], [StartTime], [State], [TotalRounds], [Type], [WhoIsActing_ID]) VALUES (3125, N'Proposed', 506, 0.25, 0, 0, 0, NULL, NULL, 0, 18.769408932112174, 15, 0, 0, 0, 0, 0, 0, N'Disengage', N'', 16.98369464639789, N'IsOK', 0, N'Normal', 85)
GO
SET IDENTITY_INSERT [dbo].[ActorsActions] OFF
GO
SET IDENTITY_INSERT [dbo].[ActorsAttacks] ON 
GO
INSERT [dbo].[ActorsAttacks] ([ID], [Actor_ID], [Attack_ID]) VALUES (191, 84, 1484)
GO
INSERT [dbo].[ActorsAttacks] ([ID], [Actor_ID], [Attack_ID]) VALUES (192, 85, 1485)
GO
INSERT [dbo].[ActorsAttacks] ([ID], [Actor_ID], [Attack_ID]) VALUES (193, 85, 1486)
GO
INSERT [dbo].[ActorsAttacks] ([ID], [Actor_ID], [Attack_ID]) VALUES (194, 85, 1487)
GO
INSERT [dbo].[ActorsAttacks] ([ID], [Actor_ID], [Attack_ID]) VALUES (195, 86, 1488)
GO
INSERT [dbo].[ActorsAttacks] ([ID], [Actor_ID], [Attack_ID]) VALUES (196, 86, 1489)
GO
INSERT [dbo].[ActorsAttacks] ([ID], [Actor_ID], [Attack_ID]) VALUES (197, 87, 1364)
GO
INSERT [dbo].[ActorsAttacks] ([ID], [Actor_ID], [Attack_ID]) VALUES (198, 87, 1365)
GO
INSERT [dbo].[ActorsAttacks] ([ID], [Actor_ID], [Attack_ID]) VALUES (199, 88, 1490)
GO
INSERT [dbo].[ActorsAttacks] ([ID], [Actor_ID], [Attack_ID]) VALUES (200, 88, 1491)
GO
INSERT [dbo].[ActorsAttacks] ([ID], [Actor_ID], [Attack_ID]) VALUES (201, 88, 1492)
GO
INSERT [dbo].[ActorsAttacks] ([ID], [Actor_ID], [Attack_ID]) VALUES (202, 89, 1221)
GO
INSERT [dbo].[ActorsAttacks] ([ID], [Actor_ID], [Attack_ID]) VALUES (203, 89, 1222)
GO
INSERT [dbo].[ActorsAttacks] ([ID], [Actor_ID], [Attack_ID]) VALUES (204, 90, 1299)
GO
INSERT [dbo].[ActorsAttacks] ([ID], [Actor_ID], [Attack_ID]) VALUES (205, 90, 1300)
GO
INSERT [dbo].[ActorsAttacks] ([ID], [Actor_ID], [Attack_ID]) VALUES (206, 90, 1373)
GO
INSERT [dbo].[ActorsAttacks] ([ID], [Actor_ID], [Attack_ID]) VALUES (207, 91, 1493)
GO
SET IDENTITY_INSERT [dbo].[ActorsAttacks] OFF
GO
SET IDENTITY_INSERT [dbo].[Armors] ON 
GO
INSERT [dbo].[Armors] ([ID], [DB], [Description], [MovingManeuverMod], [TiedToID], [Type]) VALUES (79, 18, N'Clothing', 0, 55, 1)
GO
INSERT [dbo].[Armors] ([ID], [DB], [Description], [MovingManeuverMod], [TiedToID], [Type]) VALUES (80, 3, N'Leather Jerkin', 0, 56, 5)
GO
INSERT [dbo].[Armors] ([ID], [DB], [Description], [MovingManeuverMod], [TiedToID], [Type]) VALUES (81, 15, N'Robes', 0, 57, 2)
GO
INSERT [dbo].[Armors] ([ID], [DB], [Description], [MovingManeuverMod], [TiedToID], [Type]) VALUES (82, 6, N'Robes', 0, 58, 2)
GO
INSERT [dbo].[Armors] ([ID], [DB], [Description], [MovingManeuverMod], [TiedToID], [Type]) VALUES (83, 22, N'Leather Breastplate and Greaves', -10, 59, 10)
GO
INSERT [dbo].[Armors] ([ID], [DB], [Description], [MovingManeuverMod], [TiedToID], [Type]) VALUES (84, 0, N'Unknown', 0, NULL, 1)
GO
INSERT [dbo].[Armors] ([ID], [DB], [Description], [MovingManeuverMod], [TiedToID], [Type]) VALUES (85, 0, N'Unknown', 0, NULL, 20)
GO
INSERT [dbo].[Armors] ([ID], [DB], [Description], [MovingManeuverMod], [TiedToID], [Type]) VALUES (86, 0, N'Unknown', 0, NULL, 8)
GO
INSERT [dbo].[Armors] ([ID], [DB], [Description], [MovingManeuverMod], [TiedToID], [Type]) VALUES (87, 25, N'Full Plate with Shield', -70, 61, 20)
GO
INSERT [dbo].[Armors] ([ID], [DB], [Description], [MovingManeuverMod], [TiedToID], [Type]) VALUES (88, 39, N'', 0, 62, 5)
GO
INSERT [dbo].[Armors] ([ID], [DB], [Description], [MovingManeuverMod], [TiedToID], [Type]) VALUES (89, 39, N'', 0, 63, 5)
GO
INSERT [dbo].[Armors] ([ID], [DB], [Description], [MovingManeuverMod], [TiedToID], [Type]) VALUES (90, 21, N'', 0, 64, 1)
GO
INSERT [dbo].[Armors] ([ID], [DB], [Description], [MovingManeuverMod], [TiedToID], [Type]) VALUES (91, 15, N'', 0, 65, 1)
GO
INSERT [dbo].[Armors] ([ID], [DB], [Description], [MovingManeuverMod], [TiedToID], [Type]) VALUES (108, 27, N'', 0, 66, 1)
GO
INSERT [dbo].[Armors] ([ID], [DB], [Description], [MovingManeuverMod], [TiedToID], [Type]) VALUES (109, 27, N'', 0, 67, 1)
GO
INSERT [dbo].[Armors] ([ID], [DB], [Description], [MovingManeuverMod], [TiedToID], [Type]) VALUES (110, 48, N'', 0, 68, 1)
GO
INSERT [dbo].[Armors] ([ID], [DB], [Description], [MovingManeuverMod], [TiedToID], [Type]) VALUES (113, 60, N'Unknown', 0, NULL, 12)
GO
INSERT [dbo].[Armors] ([ID], [DB], [Description], [MovingManeuverMod], [TiedToID], [Type]) VALUES (114, 90, N'Unknown', 0, NULL, 1)
GO
INSERT [dbo].[Armors] ([ID], [DB], [Description], [MovingManeuverMod], [TiedToID], [Type]) VALUES (115, 30, N'Unknown', 0, NULL, 1)
GO
SET IDENTITY_INSERT [dbo].[Armors] OFF
GO
SET IDENTITY_INSERT [dbo].[Attack_CriticalTypes] ON 
GO
INSERT [dbo].[Attack_CriticalTypes] ([ID], [Abbreviation], [Name]) VALUES (1, N'', N'None')
GO
INSERT [dbo].[Attack_CriticalTypes] ([ID], [Abbreviation], [Name]) VALUES (2, N'S', N'Slash')
GO
INSERT [dbo].[Attack_CriticalTypes] ([ID], [Abbreviation], [Name]) VALUES (3, N'P', N'Puncture')
GO
INSERT [dbo].[Attack_CriticalTypes] ([ID], [Abbreviation], [Name]) VALUES (4, N'K', N'Krush')
GO
INSERT [dbo].[Attack_CriticalTypes] ([ID], [Abbreviation], [Name]) VALUES (5, N'U', N'Unbalance')
GO
INSERT [dbo].[Attack_CriticalTypes] ([ID], [Abbreviation], [Name]) VALUES (6, N'G', N'Grappling')
GO
INSERT [dbo].[Attack_CriticalTypes] ([ID], [Abbreviation], [Name]) VALUES (7, N'T', N'Tiny Animals')
GO
INSERT [dbo].[Attack_CriticalTypes] ([ID], [Abbreviation], [Name]) VALUES (8, N'H', N'Heat')
GO
INSERT [dbo].[Attack_CriticalTypes] ([ID], [Abbreviation], [Name]) VALUES (9, N'C', N'Cold')
GO
INSERT [dbo].[Attack_CriticalTypes] ([ID], [Abbreviation], [Name]) VALUES (10, N'B', N'Brawling')
GO
INSERT [dbo].[Attack_CriticalTypes] ([ID], [Abbreviation], [Name]) VALUES (11, N'ST', N'Martial Arts Strikes')
GO
INSERT [dbo].[Attack_CriticalTypes] ([ID], [Abbreviation], [Name]) VALUES (12, N'SW', N'Martial Arts Sweeps')
GO
INSERT [dbo].[Attack_CriticalTypes] ([ID], [Abbreviation], [Name]) VALUES (13, N'LP', N'Large Creature Physical')
GO
INSERT [dbo].[Attack_CriticalTypes] ([ID], [Abbreviation], [Name]) VALUES (14, N'SLP', N'Super Large Creature Physical')
GO
INSERT [dbo].[Attack_CriticalTypes] ([ID], [Abbreviation], [Name]) VALUES (15, N'LS', N'Large Creature Spells')
GO
INSERT [dbo].[Attack_CriticalTypes] ([ID], [Abbreviation], [Name]) VALUES (16, N'SLS', N'Super Large Creature Spells')
GO
INSERT [dbo].[Attack_CriticalTypes] ([ID], [Abbreviation], [Name]) VALUES (17, N'R', N'Electricity')
GO
INSERT [dbo].[Attack_CriticalTypes] ([ID], [Abbreviation], [Name]) VALUES (18, N'I', N'Impact')
GO
SET IDENTITY_INSERT [dbo].[Attack_CriticalTypes] OFF
GO
SET IDENTITY_INSERT [dbo].[Attack_Types] ON 
GO
INSERT [dbo].[Attack_Types] ([ID], [Abbreviation], [HasDB], [HasSize], [Name]) VALUES (1, N'Ba', 1, 1, N'Bash')
GO
INSERT [dbo].[Attack_Types] ([ID], [Abbreviation], [HasDB], [HasSize], [Name]) VALUES (2, N'Bi', 1, 1, N'Bite')
GO
INSERT [dbo].[Attack_Types] ([ID], [Abbreviation], [HasDB], [HasSize], [Name]) VALUES (3, N'Cl', 1, 1, N'Claw')
GO
INSERT [dbo].[Attack_Types] ([ID], [Abbreviation], [HasDB], [HasSize], [Name]) VALUES (4, N'Cr', 1, 1, N'Crush')
GO
INSERT [dbo].[Attack_Types] ([ID], [Abbreviation], [HasDB], [HasSize], [Name]) VALUES (5, N'Gr', 1, 1, N'Grapple')
GO
INSERT [dbo].[Attack_Types] ([ID], [Abbreviation], [HasDB], [HasSize], [Name]) VALUES (6, N'Pi', 1, 1, N'Pincer')
GO
INSERT [dbo].[Attack_Types] ([ID], [Abbreviation], [HasDB], [HasSize], [Name]) VALUES (7, N'Ho', 1, 1, N'Horn')
GO
INSERT [dbo].[Attack_Types] ([ID], [Abbreviation], [HasDB], [HasSize], [Name]) VALUES (8, N'St', 1, 1, N'Stinger')
GO
INSERT [dbo].[Attack_Types] ([ID], [Abbreviation], [HasDB], [HasSize], [Name]) VALUES (9, N'Ti', 1, 1, N'Tiny')
GO
INSERT [dbo].[Attack_Types] ([ID], [Abbreviation], [HasDB], [HasSize], [Name]) VALUES (10, N'Ts', 1, 1, N'Trample')
GO
INSERT [dbo].[Attack_Types] ([ID], [Abbreviation], [HasDB], [HasSize], [Name]) VALUES (11, N'Br', 1, 1, N'Brawling')
GO
INSERT [dbo].[Attack_Types] ([ID], [Abbreviation], [HasDB], [HasSize], [Name]) VALUES (12, N'We', 1, 0, N'Weapon')
GO
INSERT [dbo].[Attack_Types] ([ID], [Abbreviation], [HasDB], [HasSize], [Name]) VALUES (13, N'Msw', 1, 0, N'Martial Arts Sweep')
GO
INSERT [dbo].[Attack_Types] ([ID], [Abbreviation], [HasDB], [HasSize], [Name]) VALUES (14, N'Mst', 1, 0, N'Martial Arts Striking')
GO
INSERT [dbo].[Attack_Types] ([ID], [Abbreviation], [HasDB], [HasSize], [Name]) VALUES (15, N'Poison', 0, 0, N'Poison')
GO
INSERT [dbo].[Attack_Types] ([ID], [Abbreviation], [HasDB], [HasSize], [Name]) VALUES (16, N'Spell', 0, 0, N'Spell')
GO
INSERT [dbo].[Attack_Types] ([ID], [Abbreviation], [HasDB], [HasSize], [Name]) VALUES (17, N'Special', 0, 0, N'Special')
GO
INSERT [dbo].[Attack_Types] ([ID], [Abbreviation], [HasDB], [HasSize], [Name]) VALUES (18, N'Bolt', 1, 1, N'Bolt')
GO
INSERT [dbo].[Attack_Types] ([ID], [Abbreviation], [HasDB], [HasSize], [Name]) VALUES (19, N'Cone', 1, 1, N'Cone')
GO
INSERT [dbo].[Attack_Types] ([ID], [Abbreviation], [HasDB], [HasSize], [Name]) VALUES (20, N'Ball', 1, 1, N'Ball')
GO
INSERT [dbo].[Attack_Types] ([ID], [Abbreviation], [HasDB], [HasSize], [Name]) VALUES (21, N'FBolt', 1, 1, N'Fire Bolt')
GO
INSERT [dbo].[Attack_Types] ([ID], [Abbreviation], [HasDB], [HasSize], [Name]) VALUES (22, N'IBolt', 1, 1, N'Ice Bolt')
GO
INSERT [dbo].[Attack_Types] ([ID], [Abbreviation], [HasDB], [HasSize], [Name]) VALUES (23, N'LBolt', 1, 1, N'Lighting Bolt')
GO
INSERT [dbo].[Attack_Types] ([ID], [Abbreviation], [HasDB], [HasSize], [Name]) VALUES (24, N'SBolt', 1, 1, N'Shock Bolt')
GO
INSERT [dbo].[Attack_Types] ([ID], [Abbreviation], [HasDB], [HasSize], [Name]) VALUES (25, N'WBolt', 1, 1, N'Water Bolt')
GO
INSERT [dbo].[Attack_Types] ([ID], [Abbreviation], [HasDB], [HasSize], [Name]) VALUES (26, N'CBall', 1, 1, N'Cold Ball')
GO
INSERT [dbo].[Attack_Types] ([ID], [Abbreviation], [HasDB], [HasSize], [Name]) VALUES (27, N'FBall', 1, 1, N'Fire Ball')
GO
INSERT [dbo].[Attack_Types] ([ID], [Abbreviation], [HasDB], [HasSize], [Name]) VALUES (28, N'CCone', 1, 1, N'Cold Cone')
GO
INSERT [dbo].[Attack_Types] ([ID], [Abbreviation], [HasDB], [HasSize], [Name]) VALUES (29, N'FCone', 1, 1, N'Fire Cone')
GO
INSERT [dbo].[Attack_Types] ([ID], [Abbreviation], [HasDB], [HasSize], [Name]) VALUES (30, N'GCone', 1, 1, N'Gas Cone')
GO
INSERT [dbo].[Attack_Types] ([ID], [Abbreviation], [HasDB], [HasSize], [Name]) VALUES (31, N'SCone', 1, 1, N'Shock Cone')
GO
INSERT [dbo].[Attack_Types] ([ID], [Abbreviation], [HasDB], [HasSize], [Name]) VALUES (32, N'LCone', 1, 1, N'Lighting Cone')
GO
SET IDENTITY_INSERT [dbo].[Attack_Types] OFF
GO
SET IDENTITY_INSERT [dbo].[Attack_WeaponTypes] ON 
GO
INSERT [dbo].[Attack_WeaponTypes] ([ID], [Abbreviation], [Name]) VALUES (1, N'ba', N'battle axe')
GO
INSERT [dbo].[Attack_WeaponTypes] ([ID], [Abbreviation], [Name]) VALUES (2, N'bs', N'broadsword')
GO
INSERT [dbo].[Attack_WeaponTypes] ([ID], [Abbreviation], [Name]) VALUES (3, N'bo', N'bola')
GO
INSERT [dbo].[Attack_WeaponTypes] ([ID], [Abbreviation], [Name]) VALUES (4, N'cl', N'club')
GO
INSERT [dbo].[Attack_WeaponTypes] ([ID], [Abbreviation], [Name]) VALUES (5, N'cb', N'composite bow')
GO
INSERT [dbo].[Attack_WeaponTypes] ([ID], [Abbreviation], [Name]) VALUES (6, N'da', N'dagger')
GO
INSERT [dbo].[Attack_WeaponTypes] ([ID], [Abbreviation], [Name]) VALUES (7, N'fa', N'falchion')
GO
INSERT [dbo].[Attack_WeaponTypes] ([ID], [Abbreviation], [Name]) VALUES (8, N'ha', N'hand axe')
GO
INSERT [dbo].[Attack_WeaponTypes] ([ID], [Abbreviation], [Name]) VALUES (9, N'hb', N'halbard')
GO
INSERT [dbo].[Attack_WeaponTypes] ([ID], [Abbreviation], [Name]) VALUES (10, N'xh', N'heavy cross bow')
GO
INSERT [dbo].[Attack_WeaponTypes] ([ID], [Abbreviation], [Name]) VALUES (11, N'We', N'General weapon')
GO
INSERT [dbo].[Attack_WeaponTypes] ([ID], [Abbreviation], [Name]) VALUES (12, N'ja', N'javelin')
GO
INSERT [dbo].[Attack_WeaponTypes] ([ID], [Abbreviation], [Name]) VALUES (13, N'lb', N'long bow')
GO
INSERT [dbo].[Attack_WeaponTypes] ([ID], [Abbreviation], [Name]) VALUES (14, N'xl', N'light cross bow')
GO
INSERT [dbo].[Attack_WeaponTypes] ([ID], [Abbreviation], [Name]) VALUES (15, N'ma', N'mace')
GO
INSERT [dbo].[Attack_WeaponTypes] ([ID], [Abbreviation], [Name]) VALUES (16, N'la', N'mounted lance')
GO
INSERT [dbo].[Attack_WeaponTypes] ([ID], [Abbreviation], [Name]) VALUES (17, N'pa', N'pole arm')
GO
INSERT [dbo].[Attack_WeaponTypes] ([ID], [Abbreviation], [Name]) VALUES (18, N'qs', N'quarter staff')
GO
INSERT [dbo].[Attack_WeaponTypes] ([ID], [Abbreviation], [Name]) VALUES (19, N'ro', N'rock')
GO
INSERT [dbo].[Attack_WeaponTypes] ([ID], [Abbreviation], [Name]) VALUES (20, N'sb', N'short bow')
GO
INSERT [dbo].[Attack_WeaponTypes] ([ID], [Abbreviation], [Name]) VALUES (21, N'sc', N'scimitar')
GO
INSERT [dbo].[Attack_WeaponTypes] ([ID], [Abbreviation], [Name]) VALUES (22, N'sl', N'sling')
GO
INSERT [dbo].[Attack_WeaponTypes] ([ID], [Abbreviation], [Name]) VALUES (23, N'sp', N'spear')
GO
INSERT [dbo].[Attack_WeaponTypes] ([ID], [Abbreviation], [Name]) VALUES (24, N'ss', N'short sword')
GO
INSERT [dbo].[Attack_WeaponTypes] ([ID], [Abbreviation], [Name]) VALUES (25, N'ts', N'two handed sword')
GO
INSERT [dbo].[Attack_WeaponTypes] ([ID], [Abbreviation], [Name]) VALUES (26, N'sh', N'shuriken')
GO
INSERT [dbo].[Attack_WeaponTypes] ([ID], [Abbreviation], [Name]) VALUES (27, N'wh', N'war hammer')
GO
INSERT [dbo].[Attack_WeaponTypes] ([ID], [Abbreviation], [Name]) VALUES (28, N'wm', N'war mattock')
GO
INSERT [dbo].[Attack_WeaponTypes] ([ID], [Abbreviation], [Name]) VALUES (29, N'wp', N'whip')
GO
SET IDENTITY_INSERT [dbo].[Attack_WeaponTypes] OFF
GO
SET IDENTITY_INSERT [dbo].[Attacks] ON 
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (175, 0, NULL, N'Same', 1, 0, NULL, 1, 0, NULL, 100, 3, NULL, 15, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (250, 0, NULL, N'Same', 1, 0, NULL, 1, 90, NULL, 100, 4, NULL, 1, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (257, 0, NULL, N'Same', 1, 0, NULL, 1, 65, NULL, 100, 4, NULL, 3, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (261, 0, NULL, N'Same', 1, 0, NULL, 1, 0, NULL, 100, 3, NULL, 15, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (336, 0, NULL, N'Same', 1, 0, NULL, 1, 90, NULL, 100, 4, NULL, 1, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (343, 0, NULL, N'Same', 1, 0, NULL, 1, 65, NULL, 100, 4, NULL, 3, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (347, 0, NULL, N'Same', 1, 0, NULL, 1, 0, NULL, 100, 3, NULL, 15, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (422, 0, NULL, N'Same', 1, 0, NULL, 1, 90, NULL, 100, 4, NULL, 1, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (429, 0, NULL, N'Same', 1, 0, NULL, 1, 65, NULL, 100, 4, NULL, 3, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (433, 0, NULL, N'Same', 1, 0, NULL, 1, 0, NULL, 100, 3, NULL, 15, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (508, 0, NULL, N'Same', 1, 0, NULL, 1, 90, NULL, 100, 4, NULL, 1, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (515, 0, NULL, N'Same', 1, 0, NULL, 1, 65, NULL, 100, 4, NULL, 3, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (519, 0, NULL, N'Same', 1, 0, NULL, 1, 0, NULL, 100, 3, NULL, 15, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (594, 0, NULL, N'Same', 1, 0, NULL, 1, 90, NULL, 100, 4, NULL, 1, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (601, 0, NULL, N'Same', 1, 0, NULL, 1, 65, NULL, 100, 4, NULL, 3, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1207, 0, NULL, N'Same', 1, 0, NULL, 1, 0, NULL, 100, 3, NULL, 15, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1208, 0, 563, N'Same', 1, 0, NULL, 1, 35, NULL, 100, 2, 1207, 6, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1209, 0, 564, N'A', 1, 0, NULL, 1, 70, NULL, 100, 2, NULL, 2, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1210, 0, 565, N'Same', 1, 0, NULL, 1, 10, NULL, 42, 2, NULL, 2, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1211, 0, 565, N'Same', 1, 0, NULL, 1, 20, NULL, 41, 3, NULL, 9, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1212, 0, 565, N'Same', 1, 0, NULL, 1, 10, NULL, 17, 3, NULL, 18, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1213, 0, 566, N'Same', 1, 0, NULL, 3, 10, NULL, 50, 2, NULL, 1, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1214, 0, 566, N'Same', 1, 0, NULL, 1, 10, NULL, 50, 2, NULL, 5, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1215, 0, 567, N'Same', 1, 0, NULL, 1, 30, NULL, 50, 2, NULL, 1, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1216, 0, 567, N'Same', 1, 0, NULL, 1, 10, NULL, 50, 2, NULL, 5, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1217, 0, 568, N'Same', 1, 0, NULL, 2, 20, NULL, 50, 2, NULL, 1, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1218, 0, 568, N'Same', 1, 0, NULL, 1, 30, NULL, 50, 2, NULL, 5, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1219, 0, 569, N'Same', 1, 0, NULL, 2, 10, NULL, 50, 2, NULL, 1, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1220, 0, 569, N'Same', 1, 0, NULL, 1, 20, NULL, 50, 2, NULL, 5, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1221, 0, 570, N'Same', 1, 0, NULL, 4, 5, NULL, 50, 2, NULL, 1, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1222, 0, 570, N'Same', 1, 0, NULL, 1, 20, NULL, 50, 2, NULL, 5, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1223, 0, 571, N'Same', 1, 0, NULL, 1, 15, NULL, 50, 2, NULL, 1, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1224, 0, 571, N'Same', 1, 0, NULL, 1, 30, NULL, 50, 2, NULL, 5, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1225, 0, 572, N'A', 1, 0, NULL, 1, 60, NULL, 99, 3, NULL, 2, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1226, 0, 572, N'A', 1, 0, NULL, 1, 40, NULL, 1, 2, NULL, 5, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1227, 0, 573, N'A', 1, 0, NULL, 1, 5, NULL, 83, 2, NULL, 8, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1228, 0, 573, N'Same', 1, 0, NULL, 1, 20, NULL, 17, 3, NULL, 24, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1229, 0, 574, N'A', 1, 0, NULL, 3, 20, NULL, 50, 3, NULL, 1, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1230, 0, 574, N'A', 1, 0, NULL, 1, 30, NULL, 50, 3, NULL, 5, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1231, 0, 575, N'A', 1, 0, NULL, 1, 30, NULL, 50, 3, NULL, 1, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1232, 0, 575, N'A', 1, 0, NULL, 1, 45, NULL, 50, 3, NULL, 5, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1233, 0, 576, N'A', 1, 0, NULL, 2, 30, NULL, 50, 3, NULL, 1, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1234, 0, 576, N'A', 1, 0, NULL, 1, 50, NULL, 50, 3, NULL, 5, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1235, 0, 577, N'A', 1, 0, NULL, 1, 60, NULL, 50, 3, NULL, 1, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1236, 0, 577, N'A', 1, 0, NULL, 1, 20, NULL, 50, 3, NULL, 5, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1237, 0, 578, N'A', 1, 0, NULL, 2, 20, NULL, 50, 3, NULL, 1, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1238, 0, 578, N'A', 1, 0, NULL, 1, 40, NULL, 50, 3, NULL, 5, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1239, 0, 579, N'A', 1, 0, NULL, 4, 10, NULL, 50, 3, NULL, 1, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1240, 0, 579, N'A', 1, 0, NULL, 1, 40, NULL, 50, 3, NULL, 5, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1241, 0, 580, N'Same', 1, 0, NULL, 1, 60, NULL, 99, 3, NULL, 2, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1242, 0, 580, N'Same', 1, 0, NULL, 1, 40, NULL, 1, 2, NULL, 5, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1243, 0, 581, N'Same', 1, 0, NULL, 1, 80, NULL, 20, 3, NULL, 2, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1244, 0, 581, N'Same', 1, 0, NULL, 1, 60, NULL, 40, 3, NULL, 21, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1245, 0, 581, N'Same', 1, 0, NULL, 1, 35, NULL, 40, 3, NULL, 29, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1246, 0, 582, N'Same', 1, 0, NULL, 1, 70, NULL, 20, 3, NULL, 2, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1247, 0, 582, N'Same', 1, 0, NULL, 1, 50, NULL, 40, 3, NULL, 22, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1248, 0, 582, N'Same', 1, 0, NULL, 1, 50, NULL, 40, 3, NULL, 28, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1249, 0, 583, N'Same', 1, 0, NULL, 1, 60, NULL, 50, 3, NULL, 2, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1250, 0, 583, N'Same', 1, 0, NULL, 1, 0, NULL, 50, 3, NULL, 30, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1251, 0, 584, N'Same', 1, 0, NULL, 1, 50, NULL, 20, 3, NULL, 2, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1252, 0, 584, N'Same', 1, 0, NULL, 1, 60, NULL, 40, 3, NULL, 24, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1253, 0, 584, N'Same', 1, 0, NULL, 1, 30, NULL, 40, 3, NULL, 31, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1254, 0, 585, N'Same', 1, 0, NULL, 1, 60, NULL, 50, 3, NULL, 2, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1255, 0, 585, N'Same', 1, 0, NULL, 1, 0, NULL, 50, 3, NULL, 30, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1256, 0, 586, N'Same', 1, 0, NULL, 1, 50, NULL, 50, 3, NULL, 2, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1257, 0, 586, N'Same', 1, 0, NULL, 1, 60, NULL, 50, 3, NULL, 25, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1258, 0, 587, N'A', 1, 0, NULL, 1, 10, NULL, 50, 2, NULL, 6, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1259, 0, 587, N'A', 1, 0, NULL, 1, 10, NULL, 50, 2, NULL, 3, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1260, 0, 588, N'Same', 1, 0, NULL, 1, 60, NULL, 25, 4, NULL, 2, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1261, 0, 588, N'Same', 1, 0, NULL, 1, 70, NULL, 25, 4, NULL, 3, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1262, 0, 588, N'Same', 1, 0, NULL, 1, 50, NULL, 25, 5, NULL, 1, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1263, 0, 588, N'Same', 1, 0, NULL, 1, 50, NULL, 25, 3, NULL, 27, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1264, 0, 589, N'A', 1, 0, NULL, 3, 60, NULL, 50, 4, NULL, 4, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1265, 0, 589, N'A', 1, 0, NULL, 1, 90, NULL, 50, 4, NULL, 10, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1266, 0, 590, N'A', 1, 0, NULL, 3, 120, NULL, 50, 4, NULL, 4, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1267, 0, 590, N'A', 1, 0, NULL, 1, 180, NULL, 50, 4, NULL, 10, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1268, 0, 591, N'A', 1, 0, NULL, 2, 90, NULL, 50, 4, NULL, 1, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1269, 0, 591, N'A', 1, 0, NULL, 1, 150, NULL, 50, 4, NULL, 10, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1270, 0, 592, N'A', 1, 0, NULL, 2, 60, NULL, 50, 4, NULL, 4, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1271, 0, 592, N'A', 1, 0, NULL, 1, 120, NULL, 50, 4, NULL, 5, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1272, 0, 593, N'A', 1, 0, NULL, 4, 30, NULL, 50, 4, NULL, 4, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1273, 0, 593, N'A', 1, 0, NULL, 1, 120, NULL, 50, 4, NULL, 10, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1274, 0, 594, N'A', 1, 0, NULL, 3, 90, NULL, 50, 4, NULL, 4, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1275, 0, 594, N'A', 1, 0, NULL, 1, 135, NULL, 50, 4, NULL, 10, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1276, 0, 595, N'B', 1, 0, NULL, 2, 60, NULL, 100, 4, NULL, 2, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1277, 0, 596, N'B', 1, 0, NULL, 4, 20, NULL, 50, 2, NULL, 1, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1278, 0, 596, N'B', 1, 0, NULL, 1, 60, NULL, 50, 3, NULL, 5, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1279, 0, 597, N'Same', 1, 0, NULL, 1, 70, NULL, 100, 3, NULL, 1, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1280, 0, 597, N'Same', 1, 0, NULL, 1, 0, NULL, 100, 3, NULL, 16, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1281, 0, 597, N'Same', 1, 0, NULL, 1, 0, NULL, 100, 3, NULL, 17, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1282, 0, NULL, N'Same', 1, 0, NULL, 1, 90, 1283, 100, 4, NULL, 1, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1283, 0, 598, N'Same', 1, 0, NULL, 1, 80, NULL, 100, 4, 1282, 7, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1284, 0, 598, N'Same', 1, 0, NULL, 1, 150, NULL, 100, 4, NULL, 10, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1285, 0, 599, N'C', 1, 0, NULL, 2, 80, NULL, 100, 3, NULL, 3, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1286, 0, 599, N'C', 1, 0, NULL, 1, 75, NULL, 100, 3, NULL, 2, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1287, 0, 600, N'Same', 1, 0, NULL, 1, 105, NULL, 100, 3, NULL, 2, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1288, 0, 601, N'Same', 1, 0, NULL, 1, 110, NULL, 40, 3, NULL, 1, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1289, 0, NULL, N'Same', 1, 0, NULL, 1, 85, 1290, 100, 4, NULL, 3, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1290, 0, 601, N'Same', 1, 0, 1289, 1, 105, NULL, 60, 4, NULL, 5, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1291, 0, 602, N'Same', 1, 0, NULL, 1, 45, NULL, 50, 3, NULL, 3, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1292, 0, 602, N'Same', 1, 0, NULL, 1, 35, NULL, 100, 2, NULL, 2, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1293, 0, 603, N'Same', 1, 0, NULL, 1, 45, NULL, 100, 3, NULL, 2, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1294, 0, NULL, N'Same', 1, 0, NULL, 1, 120, 1295, 100, 5, NULL, 3, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1295, 0, 604, N'Same', 1, 0, NULL, 1, 70, NULL, 100, 4, 1294, 1, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1296, 0, 605, N'Same', 1, 0, NULL, 1, 50, NULL, 100, 3, NULL, 3, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1297, 0, 606, N'Same', 1, 0, NULL, 1, 60, NULL, 100, 3, NULL, 1, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1298, 0, 606, N'Same', 1, 0, NULL, 1, 50, NULL, 100, 3, NULL, 12, 1, 99)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1299, 0, 607, N'Same', 1, 0, NULL, 1, 65, NULL, 100, 3, NULL, 12, 1, 98)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1300, 0, 607, N'Same', 1, 0, NULL, 1, 55, NULL, 100, 3, NULL, 1, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1301, 0, 608, N'Same', 1, 0, NULL, 1, 90, NULL, 100, 4, NULL, 1, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1302, 0, 608, N'Same', 1, 0, NULL, 1, 110, NULL, 100, 3, NULL, 12, 1, 97)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1316, 0, NULL, N'Same', 0, 0, NULL, 0, 96, NULL, 0, NULL, NULL, 12, NULL, 82)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1320, 0, NULL, N'Same', 0, 0, NULL, 0, 41, NULL, 0, NULL, NULL, 12, NULL, 74)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1327, 0, NULL, N'Same', 0, 0, NULL, 0, 83, NULL, 0, NULL, NULL, 12, NULL, 85)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1341, 0, 610, N'Same', 2, 0, NULL, 0, 60, NULL, 0, 1, NULL, 12, NULL, 104)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1342, 0, NULL, N'Same', 0, 0, NULL, 0, 80, NULL, 0, 4, NULL, 4, NULL, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1343, 0, 610, N'Same', 0, 0, 1342, 0, 50, NULL, 100, 4, NULL, 5, NULL, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1344, 0, NULL, N'Same', 0, 0, NULL, 0, 100, NULL, 0, 5, NULL, 4, NULL, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1345, 0, 611, N'Same', 0, 0, 1344, 0, 70, NULL, 100, 4, NULL, 5, NULL, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1346, 0, NULL, N'Same', 0, 0, NULL, 0, 150, NULL, 0, 5, NULL, 4, NULL, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1347, 0, 612, N'Same', 0, 0, 1346, 0, 90, NULL, 100, 4, NULL, 5, NULL, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1348, 0, 614, N'Same', 0, 0, NULL, 0, 100, NULL, 0, 5, NULL, 1, NULL, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1349, 0, 613, N'Same', 0, 0, NULL, 0, 80, NULL, 100, 4, NULL, 1, NULL, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1350, 0, 613, N'Same', 0, 0, NULL, 0, 65, NULL, 0, 4, NULL, 3, NULL, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1351, 0, NULL, N'Same', 0, 0, NULL, 0, 50, NULL, 0, 3, NULL, 3, NULL, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1352, 0, 615, N'Same', 0, 0, NULL, 0, 75, NULL, 0, 3, 1351, 1, NULL, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1353, 0, NULL, N'Same', 0, 0, NULL, 0, 80, NULL, 0, 4, NULL, 3, NULL, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1354, 0, 616, N'Same', 0, 0, NULL, 0, 100, NULL, 0, 4, 1353, 1, NULL, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1355, 0, 617, N'C', 0, 0, NULL, 0, 60, NULL, 0, 3, NULL, 4, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1356, 0, 617, N'C', 0, 0, NULL, 0, 55, NULL, 0, 3, NULL, 2, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1357, 0, 618, N'Same', 0, 0, NULL, 0, 20, NULL, 0, 2, NULL, 6, NULL, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1358, 0, NULL, N'Same', 0, 0, NULL, 0, 0, NULL, 0, NULL, NULL, 15, NULL, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1359, 0, 618, N'Same', 0, 0, NULL, 0, 40, NULL, 0, 2, 1358, 8, NULL, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1360, 0, NULL, N'Same', 0, 0, NULL, 0, -45, NULL, 0, NULL, NULL, 15, NULL, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1361, 0, 619, N'Same', 0, 0, NULL, 0, 30, NULL, 0, 4, 1360, 8, NULL, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1362, 0, 619, N'Same', 0, 0, NULL, 0, 25, NULL, 0, 4, NULL, 6, NULL, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1363, 0, NULL, N'Same', 0, 0, NULL, 0, -60, NULL, 0, NULL, NULL, 15, NULL, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1364, 0, 620, N'Same', 0, 0, NULL, 0, 30, NULL, 0, 4, 1363, 7, NULL, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1365, 0, 620, N'Same', 0, 0, NULL, 0, 60, NULL, 0, 5, NULL, 6, NULL, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1366, 0, 617, N'Same', 0, 0, NULL, 0, 30, NULL, 0, 1, NULL, 12, NULL, 95)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1367, 0, 617, N'Same', 0, 0, NULL, 0, 0, NULL, 0, 1, NULL, 17, NULL, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1368, 0, 599, N'Same', 0, 0, NULL, 0, 0, NULL, 0, 1, NULL, 17, NULL, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1369, 0, 599, N'Same', 0, 0, NULL, 0, 65, NULL, 0, 1, NULL, 12, NULL, 96)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1370, 0, 600, N'Same', 0, 0, NULL, 0, 0, NULL, 0, 1, NULL, 17, NULL, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1371, 0, 598, N'Same', 0, 0, NULL, 0, 0, NULL, 0, 1, NULL, 17, NULL, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1372, 0, 608, N'Same', 0, 0, NULL, 0, 0, NULL, 0, 1, NULL, 17, NULL, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1373, 0, 607, N'Same', 0, 0, NULL, 0, 5, NULL, 0, 1, NULL, 17, NULL, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1374, 0, 606, N'Same', 0, 0, NULL, 0, 0, NULL, 0, 1, NULL, 17, NULL, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1375, 0, 605, N'Same', 0, 0, NULL, 0, 0, NULL, 0, 1, NULL, 17, NULL, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1376, 0, 611, N'Same', 3, 0, NULL, 0, 80, NULL, 0, 1, NULL, 12, NULL, 100)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1377, 0, 611, N'Same', 0, 0, NULL, 0, 70, NULL, 0, 1, NULL, 12, NULL, 101)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1378, 0, 612, N'Same', 4, 0, NULL, 0, 100, NULL, 0, 1, NULL, 12, NULL, 102)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1379, 0, 612, N'Same', 0, 0, NULL, 0, 90, NULL, 0, 1, NULL, 12, NULL, 103)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1380, 0, 610, N'Same', 0, 0, NULL, 0, 50, NULL, 0, 1, NULL, 12, NULL, 105)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1381, 0, 602, N'Same', 0, 0, NULL, 0, 0, NULL, 0, 1, NULL, 16, NULL, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1382, 0, 614, N'Same', 0, 0, NULL, 0, 110, NULL, 0, 1, NULL, 12, NULL, 106)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1383, 0, 614, N'Same', 0, 0, NULL, 0, 100, NULL, 0, 1, NULL, 12, NULL, 107)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1384, 0, 616, N'Same', 0, 0, NULL, 0, 70, NULL, 0, 1, NULL, 12, NULL, 108)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1385, 0, 615, N'Same', 0, 0, NULL, 0, 40, NULL, 0, 1, NULL, 12, NULL, 109)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1386, 0, 613, N'Same', 0, 0, NULL, 0, 40, NULL, 0, 1, NULL, 12, NULL, 110)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1387, 0, 613, N'Same', 0, 0, NULL, 0, 60, NULL, 0, 1, NULL, 12, NULL, 111)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1388, 0, 623, N'Same', 0, 0, NULL, 0, 50, NULL, 0, 3, NULL, 1, NULL, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1389, 0, 623, N'Same', 0, 0, NULL, 0, 40, NULL, 0, 1, NULL, 12, NULL, 112)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1390, 0, 623, N'Same', 0, 0, NULL, 0, -10, NULL, 0, 1, NULL, 17, NULL, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1391, 0, 622, N'Same', 0, 0, NULL, 0, 60, NULL, 0, 3, NULL, 1, NULL, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1392, 0, 622, N'Same', 0, 0, NULL, 0, 40, NULL, 0, 1, NULL, 12, NULL, 113)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1393, 0, 622, N'Same', 0, 0, NULL, 0, 0, NULL, 0, 1, NULL, 17, NULL, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1394, 0, 624, N'Same', 0, 0, NULL, 0, 30, NULL, 0, 4, NULL, 1, 1, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1395, 0, 624, N'Same', 0, 0, NULL, 0, 55, NULL, 0, 1, NULL, 12, NULL, 115)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1396, 0, 624, N'Same', 0, 0, NULL, 0, -40, NULL, 0, 1, NULL, 16, NULL, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1397, 0, 624, N'Same', 0, 0, NULL, 0, -40, NULL, 0, 1, NULL, 17, NULL, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1398, 0, 621, N'Same', 0, 0, NULL, 0, 40, NULL, 0, 3, NULL, 1, NULL, NULL)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1399, 0, 621, N'Same', 0, 0, NULL, 0, 25, NULL, 0, 1, NULL, 12, NULL, 116)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1402, 0, NULL, N'Same', 0, 0, NULL, 0, 66, NULL, 0, NULL, NULL, 12, NULL, 72)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1452, 0, NULL, N'Same', 0, 0, NULL, 0, 130, NULL, 0, NULL, NULL, 12, NULL, 71)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1466, 0, NULL, N'Same', 0, 0, NULL, 0, 81, NULL, 0, NULL, NULL, 12, NULL, 84)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1471, 0, NULL, N'Same', 0, 0, NULL, 0, 130, NULL, 0, NULL, NULL, 12, NULL, 71)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1480, 0, NULL, N'Same', 0, 0, NULL, 0, 81, NULL, 0, NULL, NULL, 12, NULL, 84)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1484, 0, NULL, N'Same', 0, 0, NULL, 0, 96, NULL, 0, NULL, NULL, 12, NULL, 82)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1485, 0, NULL, N'Same', 0, 0, NULL, 0, 86, NULL, 0, NULL, NULL, 12, NULL, 75)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1486, 0, NULL, N'Same', 0, 0, NULL, 0, 98, NULL, 0, NULL, NULL, 12, NULL, 76)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1487, 0, NULL, N'Same', 0, 0, NULL, 0, 55, NULL, 0, NULL, NULL, 12, NULL, 77)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1488, 0, NULL, N'Same', 0, 0, NULL, 0, 26, NULL, 0, NULL, NULL, 12, NULL, 88)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1489, 0, NULL, N'Same', 0, 0, NULL, 0, 31, NULL, 0, NULL, NULL, 12, NULL, 89)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1490, 0, NULL, N'Same', 0, 0, NULL, 0, 141, NULL, 0, NULL, NULL, 12, NULL, 68)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1491, 0, NULL, N'Same', 0, 0, NULL, 0, 142, NULL, 0, NULL, NULL, 12, NULL, 69)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1492, 0, NULL, N'Same', 0, 0, NULL, 0, 122, NULL, 0, NULL, NULL, 12, NULL, 70)
GO
INSERT [dbo].[Attacks] ([ID], [AdditionalCritsIsOr], [CreatureOn_ID], [CriticalLevel], [DamageMultiplier], [MaxOB], [NextRoundSuccess_ID], [Number], [OB], [ParentAttack_ID], [PercentChance], [Size_ID], [ThisRoundSuccess_ID], [Type_ID], [UseCriticalInstead_ID], [WeaponUsed_ID]) VALUES (1493, 0, NULL, N'Same', 0, 0, NULL, 0, 56, NULL, 0, NULL, NULL, 12, NULL, 83)
GO
SET IDENTITY_INSERT [dbo].[Attacks] OFF
GO
SET IDENTITY_INSERT [dbo].[AttacksAddCrits] ON 
GO
INSERT [dbo].[AttacksAddCrits] ([ID], [AttackID], [Critical_ID]) VALUES (217, 1209, 9)
GO
INSERT [dbo].[AttacksAddCrits] ([ID], [AttackID], [Critical_ID]) VALUES (218, 1225, 8)
GO
INSERT [dbo].[AttacksAddCrits] ([ID], [AttackID], [Critical_ID]) VALUES (219, 1226, 8)
GO
INSERT [dbo].[AttacksAddCrits] ([ID], [AttackID], [Critical_ID]) VALUES (220, 1227, 17)
GO
INSERT [dbo].[AttacksAddCrits] ([ID], [AttackID], [Critical_ID]) VALUES (221, 1229, 18)
GO
INSERT [dbo].[AttacksAddCrits] ([ID], [AttackID], [Critical_ID]) VALUES (222, 1230, 18)
GO
INSERT [dbo].[AttacksAddCrits] ([ID], [AttackID], [Critical_ID]) VALUES (223, 1231, 18)
GO
INSERT [dbo].[AttacksAddCrits] ([ID], [AttackID], [Critical_ID]) VALUES (224, 1232, 18)
GO
INSERT [dbo].[AttacksAddCrits] ([ID], [AttackID], [Critical_ID]) VALUES (225, 1233, 8)
GO
INSERT [dbo].[AttacksAddCrits] ([ID], [AttackID], [Critical_ID]) VALUES (226, 1234, 8)
GO
INSERT [dbo].[AttacksAddCrits] ([ID], [AttackID], [Critical_ID]) VALUES (227, 1235, 18)
GO
INSERT [dbo].[AttacksAddCrits] ([ID], [AttackID], [Critical_ID]) VALUES (228, 1236, 18)
GO
INSERT [dbo].[AttacksAddCrits] ([ID], [AttackID], [Critical_ID]) VALUES (229, 1237, 9)
GO
INSERT [dbo].[AttacksAddCrits] ([ID], [AttackID], [Critical_ID]) VALUES (230, 1238, 9)
GO
INSERT [dbo].[AttacksAddCrits] ([ID], [AttackID], [Critical_ID]) VALUES (231, 1239, 17)
GO
INSERT [dbo].[AttacksAddCrits] ([ID], [AttackID], [Critical_ID]) VALUES (232, 1240, 17)
GO
INSERT [dbo].[AttacksAddCrits] ([ID], [AttackID], [Critical_ID]) VALUES (233, 1258, 5)
GO
INSERT [dbo].[AttacksAddCrits] ([ID], [AttackID], [Critical_ID]) VALUES (234, 1259, 5)
GO
INSERT [dbo].[AttacksAddCrits] ([ID], [AttackID], [Critical_ID]) VALUES (235, 1264, 18)
GO
INSERT [dbo].[AttacksAddCrits] ([ID], [AttackID], [Critical_ID]) VALUES (236, 1265, 18)
GO
INSERT [dbo].[AttacksAddCrits] ([ID], [AttackID], [Critical_ID]) VALUES (237, 1266, 18)
GO
INSERT [dbo].[AttacksAddCrits] ([ID], [AttackID], [Critical_ID]) VALUES (238, 1267, 18)
GO
INSERT [dbo].[AttacksAddCrits] ([ID], [AttackID], [Critical_ID]) VALUES (239, 1268, 8)
GO
INSERT [dbo].[AttacksAddCrits] ([ID], [AttackID], [Critical_ID]) VALUES (240, 1269, 8)
GO
INSERT [dbo].[AttacksAddCrits] ([ID], [AttackID], [Critical_ID]) VALUES (241, 1270, 9)
GO
INSERT [dbo].[AttacksAddCrits] ([ID], [AttackID], [Critical_ID]) VALUES (242, 1271, 9)
GO
INSERT [dbo].[AttacksAddCrits] ([ID], [AttackID], [Critical_ID]) VALUES (243, 1272, 17)
GO
INSERT [dbo].[AttacksAddCrits] ([ID], [AttackID], [Critical_ID]) VALUES (244, 1273, 17)
GO
INSERT [dbo].[AttacksAddCrits] ([ID], [AttackID], [Critical_ID]) VALUES (245, 1274, 18)
GO
INSERT [dbo].[AttacksAddCrits] ([ID], [AttackID], [Critical_ID]) VALUES (246, 1275, 18)
GO
INSERT [dbo].[AttacksAddCrits] ([ID], [AttackID], [Critical_ID]) VALUES (247, 1276, 18)
GO
INSERT [dbo].[AttacksAddCrits] ([ID], [AttackID], [Critical_ID]) VALUES (248, 1277, 17)
GO
INSERT [dbo].[AttacksAddCrits] ([ID], [AttackID], [Critical_ID]) VALUES (249, 1278, 17)
GO
INSERT [dbo].[AttacksAddCrits] ([ID], [AttackID], [Critical_ID]) VALUES (250, 1279, 9)
GO
INSERT [dbo].[AttacksAddCrits] ([ID], [AttackID], [Critical_ID]) VALUES (251, 1285, 18)
GO
INSERT [dbo].[AttacksAddCrits] ([ID], [AttackID], [Critical_ID]) VALUES (252, 1286, 18)
GO
INSERT [dbo].[AttacksAddCrits] ([ID], [AttackID], [Critical_ID]) VALUES (254, 1355, 18)
GO
INSERT [dbo].[AttacksAddCrits] ([ID], [AttackID], [Critical_ID]) VALUES (256, 1356, 18)
GO
INSERT [dbo].[AttacksAddCrits] ([ID], [AttackID], [Critical_ID]) VALUES (260, 1394, 9)
GO
SET IDENTITY_INSERT [dbo].[AttacksAddCrits] OFF
GO
SET IDENTITY_INSERT [dbo].[Books] ON 
GO
INSERT [dbo].[Books] ([ID], [Name]) VALUES (1, N'Rolemaster Standard Rules')
GO
INSERT [dbo].[Books] ([ID], [Name]) VALUES (2, N'Creatures and Monsters')
GO
INSERT [dbo].[Books] ([ID], [Name]) VALUES (3, N'Elemental Companion')
GO
INSERT [dbo].[Books] ([ID], [Name]) VALUES (4, N'Gamemaster Law')
GO
SET IDENTITY_INSERT [dbo].[Books] OFF
GO
SET IDENTITY_INSERT [dbo].[Characters] ON 
GO
INSERT [dbo].[Characters] ([ID], [BaseInititive], [ExhaustionPoints], [HitPoints], [Level], [Name], [PercentRequiredAdrenalDB], [PowerPoints], [StrengthBonus], [Type], [WalkSpeed]) VALUES (55, 6, 100, 112, 8, N'Durgon Delgraven', 0.4, 29, 7, N'NPC', 50)
GO
INSERT [dbo].[Characters] ([ID], [BaseInititive], [ExhaustionPoints], [HitPoints], [Level], [Name], [PercentRequiredAdrenalDB], [PowerPoints], [StrengthBonus], [Type], [WalkSpeed]) VALUES (56, 1, 179, 175, 10, N'Lanthos Draconis', 0.4, 18, 9, N'PC', 60)
GO
INSERT [dbo].[Characters] ([ID], [BaseInititive], [ExhaustionPoints], [HitPoints], [Level], [Name], [PercentRequiredAdrenalDB], [PowerPoints], [StrengthBonus], [Type], [WalkSpeed]) VALUES (57, 7, 64, 85, 9, N'Jason Terras ', 0.4, 120, 3, N'PC', 70)
GO
INSERT [dbo].[Characters] ([ID], [BaseInititive], [ExhaustionPoints], [HitPoints], [Level], [Name], [PercentRequiredAdrenalDB], [PowerPoints], [StrengthBonus], [Type], [WalkSpeed]) VALUES (58, 2, 46, 34, 10, N'Vanel Tor Delgado', 0.4, 73, 1, N'NPC', 80)
GO
INSERT [dbo].[Characters] ([ID], [BaseInititive], [ExhaustionPoints], [HitPoints], [Level], [Name], [PercentRequiredAdrenalDB], [PowerPoints], [StrengthBonus], [Type], [WalkSpeed]) VALUES (59, 9, 81, 106, 10, N'Greshalk Grinding', 0.4, 0, 16, N'NPC', 90)
GO
INSERT [dbo].[Characters] ([ID], [BaseInititive], [ExhaustionPoints], [HitPoints], [Level], [Name], [PercentRequiredAdrenalDB], [PowerPoints], [StrengthBonus], [Type], [WalkSpeed]) VALUES (61, 3, 67, 164, 5, N'Stephen - Human Fighter', 0.4, 0, 8, N'PC', 64)
GO
INSERT [dbo].[Characters] ([ID], [BaseInititive], [ExhaustionPoints], [HitPoints], [Level], [Name], [PercentRequiredAdrenalDB], [PowerPoints], [StrengthBonus], [Type], [WalkSpeed]) VALUES (62, 13, 61, 64, 5, N'Halfling Thief', 0.4, 8, -7, N'PC', 43)
GO
INSERT [dbo].[Characters] ([ID], [BaseInititive], [ExhaustionPoints], [HitPoints], [Level], [Name], [PercentRequiredAdrenalDB], [PowerPoints], [StrengthBonus], [Type], [WalkSpeed]) VALUES (63, 13, 52, 45, 5, N'Tasha - Half-Elf Assasin', 0.4, 4, 8, N'PC', 89)
GO
INSERT [dbo].[Characters] ([ID], [BaseInititive], [ExhaustionPoints], [HitPoints], [Level], [Name], [PercentRequiredAdrenalDB], [PowerPoints], [StrengthBonus], [Type], [WalkSpeed]) VALUES (64, 7, 46, 30, 5, N'Wood Elf Scout, Cleric', 0.4, 32, 2, N'PC', 71)
GO
INSERT [dbo].[Characters] ([ID], [BaseInititive], [ExhaustionPoints], [HitPoints], [Level], [Name], [PercentRequiredAdrenalDB], [PowerPoints], [StrengthBonus], [Type], [WalkSpeed]) VALUES (65, 5, 85, 60, 5, N'Dwarf Psychic Ninja', 0.3, 17, 5, N'PC', 50)
GO
INSERT [dbo].[Characters] ([ID], [BaseInititive], [ExhaustionPoints], [HitPoints], [Level], [Name], [PercentRequiredAdrenalDB], [PowerPoints], [StrengthBonus], [Type], [WalkSpeed]) VALUES (66, 9, 76, 94, 5, N'Drew - Human - Sword Dancer', 0, 2, 6, N'PC', 82)
GO
INSERT [dbo].[Characters] ([ID], [BaseInititive], [ExhaustionPoints], [HitPoints], [Level], [Name], [PercentRequiredAdrenalDB], [PowerPoints], [StrengthBonus], [Type], [WalkSpeed]) VALUES (67, 9, 43, 37, 5, N'Matt - Grey Elf Magician', 0, 67, 0, N'PC', 77)
GO
INSERT [dbo].[Characters] ([ID], [BaseInititive], [ExhaustionPoints], [HitPoints], [Level], [Name], [PercentRequiredAdrenalDB], [PowerPoints], [StrengthBonus], [Type], [WalkSpeed]) VALUES (68, 16, 61, 75, 5, N'Matt - Akume Fighter', 0, 1, 6, N'PC', 98)
GO
SET IDENTITY_INSERT [dbo].[Characters] OFF
GO
SET IDENTITY_INSERT [dbo].[Creature_ConsitutionBonusChart] ON 
GO
INSERT [dbo].[Creature_ConsitutionBonusChart] ([ID], [BonusExhaustion], [Code], [PerLevelDifference]) VALUES (1, 0, N'A', 1)
GO
INSERT [dbo].[Creature_ConsitutionBonusChart] ([ID], [BonusExhaustion], [Code], [PerLevelDifference]) VALUES (2, 0, N'B', 2)
GO
INSERT [dbo].[Creature_ConsitutionBonusChart] ([ID], [BonusExhaustion], [Code], [PerLevelDifference]) VALUES (3, 0, N'C', 3)
GO
INSERT [dbo].[Creature_ConsitutionBonusChart] ([ID], [BonusExhaustion], [Code], [PerLevelDifference]) VALUES (4, 0, N'D', 5)
GO
INSERT [dbo].[Creature_ConsitutionBonusChart] ([ID], [BonusExhaustion], [Code], [PerLevelDifference]) VALUES (5, 50, N'E', 8)
GO
INSERT [dbo].[Creature_ConsitutionBonusChart] ([ID], [BonusExhaustion], [Code], [PerLevelDifference]) VALUES (6, 100, N'F', 10)
GO
INSERT [dbo].[Creature_ConsitutionBonusChart] ([ID], [BonusExhaustion], [Code], [PerLevelDifference]) VALUES (7, 150, N'G', 12)
GO
INSERT [dbo].[Creature_ConsitutionBonusChart] ([ID], [BonusExhaustion], [Code], [PerLevelDifference]) VALUES (8, 200, N'H', 15)
GO
SET IDENTITY_INSERT [dbo].[Creature_ConsitutionBonusChart] OFF
GO
SET IDENTITY_INSERT [dbo].[Creature_ConstitutionBonusChartValues] ON 
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (331, 1, 1, 1, -7)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (332, 1, 9, 2, -5)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (333, 1, 25, 10, -3)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (334, 1, 30, 26, -2)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (335, 1, 70, 31, 0)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (336, 1, 75, 71, 2)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (337, 1, 92, 76, 3)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (338, 1, 99, 93, 3)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (339, 1, 100, 100, 7)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (340, 2, 1, 1, -8)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (341, 2, 4, 2, -7)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (342, 2, 11, 5, -5)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (343, 2, 31, 12, -3)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (344, 2, 35, 32, -2)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (345, 2, 65, 36, 0)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (346, 2, 69, 66, 2)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (347, 2, 89, 70, 3)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (348, 2, 96, 90, 5)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (349, 2, 99, 97, 7)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (350, 2, 100, 100, 8)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (351, 3, 1, 1, -10)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (352, 3, 3, 2, -8)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (353, 3, 8, 4, -7)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (354, 3, 23, 9, -5)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (355, 3, 74, 24, -3)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (356, 3, 79, 75, -2)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (357, 3, 85, 80, 0)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (358, 3, 89, 86, 2)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (359, 3, 94, 90, 3)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (360, 3, 97, 95, 5)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (361, 3, 99, 98, 7)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (362, 3, 100, 100, 8)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (363, 4, 1, 1, -10)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (364, 4, 2, 2, -8)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (365, 4, 4, 3, -7)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (366, 4, 9, 5, -5)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (367, 4, 25, 10, -3)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (368, 4, 30, 26, -2)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (369, 4, 70, 31, 0)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (370, 4, 75, 71, 2)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (371, 4, 89, 76, 3)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (372, 4, 94, 90, 5)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (373, 4, 97, 95, 7)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (374, 4, 99, 98, 8)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (375, 4, 100, 100, 10)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (376, 5, 1, 1, -10)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (377, 5, 2, 2, -8)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (378, 5, 4, 3, -7)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (379, 5, 9, 5, -5)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (380, 5, 24, 10, -3)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (381, 5, 29, 25, -2)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (382, 5, 69, 30, 0)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (383, 5, 72, 70, 2)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (384, 5, 87, 73, 3)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (385, 5, 92, 88, 5)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (386, 5, 95, 93, 7)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (387, 5, 97, 96, 8)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (388, 5, 98, 98, 10)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (389, 5, 99, 99, 12)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (390, 5, 100, 100, 13)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (391, 6, 1, 1, -10)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (392, 6, 2, 2, -8)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (393, 6, 3, 3, -7)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (394, 6, 5, 4, -5)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (395, 6, 10, 6, -3)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (396, 6, 15, 11, -2)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (397, 6, 19, 16, 0)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (398, 6, 25, 21, 2)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (399, 6, 72, 26, 3)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (400, 6, 87, 73, 5)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (401, 6, 92, 88, 7)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (402, 6, 95, 93, 8)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (403, 6, 97, 96, 10)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (404, 6, 98, 98, 12)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (405, 6, 99, 99, 13)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (406, 6, 100, 100, 17)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (407, 7, 1, 1, -10)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (408, 7, 2, 2, -8)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (409, 7, 3, 3, -7)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (410, 7, 4, 4, -5)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (411, 7, 6, 5, -3)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (412, 7, 11, 7, -2)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (413, 7, 16, 12, 0)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (414, 7, 31, 17, 2)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (415, 7, 36, 32, 3)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (416, 7, 71, 37, 5)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (417, 7, 86, 72, 7)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (418, 7, 91, 87, 8)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (419, 7, 94, 92, 10)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (420, 7, 96, 95, 12)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (421, 7, 98, 97, 13)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (422, 7, 99, 99, 17)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (423, 7, 100, 100, 22)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (424, 8, 1, 1, -10)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (425, 8, 2, 2, -8)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (426, 8, 3, 3, -7)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (427, 8, 4, 4, -5)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (428, 8, 5, 5, -3)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (429, 8, 7, 6, -2)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (430, 8, 12, 8, 0)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (431, 8, 17, 13, 2)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (432, 8, 32, 18, 3)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (433, 8, 37, 33, 5)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (434, 8, 72, 38, 7)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (435, 8, 88, 73, 8)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (436, 8, 93, 89, 10)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (437, 8, 96, 94, 12)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (438, 8, 98, 97, 13)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (439, 8, 99, 99, 17)
GO
INSERT [dbo].[Creature_ConstitutionBonusChartValues] ([ID], [Chart_ID], [Max], [Min], [Mod]) VALUES (440, 8, 100, 100, 22)
GO
SET IDENTITY_INSERT [dbo].[Creature_ConstitutionBonusChartValues] OFF
GO
SET IDENTITY_INSERT [dbo].[Creature_CriticalCodes] ON 
GO
INSERT [dbo].[Creature_CriticalCodes] ([ID], [Abbreviation], [Name]) VALUES (1, N'-', N'Normal')
GO
INSERT [dbo].[Creature_CriticalCodes] ([ID], [Abbreviation], [Name]) VALUES (2, N'I', N'Decrease By One')
GO
INSERT [dbo].[Creature_CriticalCodes] ([ID], [Abbreviation], [Name]) VALUES (3, N'II', N'Decrease By Two')
GO
INSERT [dbo].[Creature_CriticalCodes] ([ID], [Abbreviation], [Name]) VALUES (4, N'LA', N'Large Critical')
GO
INSERT [dbo].[Creature_CriticalCodes] ([ID], [Abbreviation], [Name]) VALUES (5, N'SL', N'Super Large Critical')
GO
SET IDENTITY_INSERT [dbo].[Creature_CriticalCodes] OFF
GO
SET IDENTITY_INSERT [dbo].[Creature_CriticalIgnores] ON 
GO
INSERT [dbo].[Creature_CriticalIgnores] ([ID], [Abbreviation], [Name]) VALUES (1, N'', N'')
GO
INSERT [dbo].[Creature_CriticalIgnores] ([ID], [Abbreviation], [Name]) VALUES (2, N'@', N'Ignore Stun')
GO
INSERT [dbo].[Creature_CriticalIgnores] ([ID], [Abbreviation], [Name]) VALUES (3, N'#', N'Ignore Stun And Bleeders')
GO
SET IDENTITY_INSERT [dbo].[Creature_CriticalIgnores] OFF
GO
SET IDENTITY_INSERT [dbo].[Creature_IQs] ON 
GO
INSERT [dbo].[Creature_IQs] ([ID], [Abbreviation], [Name]) VALUES (1, N'NO', N'None')
GO
INSERT [dbo].[Creature_IQs] ([ID], [Abbreviation], [Name]) VALUES (2, N'VL', N'Very Low')
GO
INSERT [dbo].[Creature_IQs] ([ID], [Abbreviation], [Name]) VALUES (3, N'LO', N'Low')
GO
INSERT [dbo].[Creature_IQs] ([ID], [Abbreviation], [Name]) VALUES (4, N'LI', N'Little')
GO
INSERT [dbo].[Creature_IQs] ([ID], [Abbreviation], [Name]) VALUES (5, N'IN', N'Inferior')
GO
INSERT [dbo].[Creature_IQs] ([ID], [Abbreviation], [Name]) VALUES (6, N'MD', N'Mediocre')
GO
INSERT [dbo].[Creature_IQs] ([ID], [Abbreviation], [Name]) VALUES (7, N'AV', N'Average')
GO
INSERT [dbo].[Creature_IQs] ([ID], [Abbreviation], [Name]) VALUES (8, N'AA', N'Above Average')
GO
INSERT [dbo].[Creature_IQs] ([ID], [Abbreviation], [Name]) VALUES (9, N'SU', N'Superior')
GO
INSERT [dbo].[Creature_IQs] ([ID], [Abbreviation], [Name]) VALUES (10, N'HI', N'High')
GO
INSERT [dbo].[Creature_IQs] ([ID], [Abbreviation], [Name]) VALUES (11, N'VH', N'Very High')
GO
INSERT [dbo].[Creature_IQs] ([ID], [Abbreviation], [Name]) VALUES (12, N'EX', N'Exceptional')
GO
SET IDENTITY_INSERT [dbo].[Creature_IQs] OFF
GO
SET IDENTITY_INSERT [dbo].[Creature_LevelChart] ON 
GO
INSERT [dbo].[Creature_LevelChart] ([ID], [Name]) VALUES (1, N'A')
GO
INSERT [dbo].[Creature_LevelChart] ([ID], [Name]) VALUES (2, N'B')
GO
INSERT [dbo].[Creature_LevelChart] ([ID], [Name]) VALUES (3, N'C')
GO
INSERT [dbo].[Creature_LevelChart] ([ID], [Name]) VALUES (4, N'D')
GO
INSERT [dbo].[Creature_LevelChart] ([ID], [Name]) VALUES (5, N'E')
GO
INSERT [dbo].[Creature_LevelChart] ([ID], [Name]) VALUES (6, N'F')
GO
INSERT [dbo].[Creature_LevelChart] ([ID], [Name]) VALUES (7, N'G')
GO
INSERT [dbo].[Creature_LevelChart] ([ID], [Name]) VALUES (8, N'H')
GO
SET IDENTITY_INSERT [dbo].[Creature_LevelChart] OFF
GO
SET IDENTITY_INSERT [dbo].[Creature_LevelChartValues] ON 
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (1, 1, 0, -2000, -20)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (2, 1, 10, 1, -1)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (3, 1, 15, 11, 0)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (4, 1, 20, 16, 0)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (5, 1, 25, 21, 0)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (6, 1, 35, 26, 0)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (7, 1, 45, 36, 0)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (8, 1, 55, 46, 0)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (9, 1, 65, 56, 0)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (10, 1, 75, 66, 0)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (11, 1, 80, 76, 0)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (12, 1, 85, 81, 0)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (13, 1, 90, 86, 0)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (14, 1, 100, 91, 1)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (15, 1, 140, 101, 1)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (16, 1, 170, 141, 1)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (17, 1, 190, 171, 1)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (18, 1, 200, 191, 2)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (19, 1, 250, 201, 2)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (20, 1, 300, 251, 3)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (21, 1, 2000, 301, 4)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (22, 2, 0, -2000, -20)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (23, 2, 10, 1, -2)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (24, 2, 15, 11, -1)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (25, 2, 20, 16, 0)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (26, 2, 25, 21, 0)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (27, 2, 35, 26, 0)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (28, 2, 45, 36, 0)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (29, 2, 55, 46, 0)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (30, 2, 65, 56, 0)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (31, 2, 75, 66, 0)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (32, 2, 80, 76, 0)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (33, 2, 85, 81, 0)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (34, 2, 90, 86, 1)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (35, 2, 100, 91, 1)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (36, 2, 140, 101, 1)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (37, 2, 170, 141, 2)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (38, 2, 190, 171, 2)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (39, 2, 200, 191, 3)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (40, 2, 250, 201, 4)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (41, 2, 300, 251, 5)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (42, 2, 2000, 301, 6)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (43, 3, 0, -2000, -20)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (44, 3, 10, 1, -3)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (45, 3, 15, 11, -2)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (46, 3, 20, 16, -1)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (47, 3, 25, 21, 0)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (48, 3, 35, 26, 0)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (49, 3, 45, 36, 0)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (50, 3, 55, 46, 0)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (51, 3, 65, 56, 0)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (52, 3, 75, 66, 0)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (53, 3, 80, 76, 0)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (54, 3, 85, 81, 1)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (55, 3, 90, 86, 1)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (56, 3, 100, 91, 2)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (57, 3, 140, 101, 2)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (58, 3, 170, 141, 3)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (59, 3, 190, 171, 4)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (60, 3, 200, 191, 5)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (61, 3, 250, 201, 6)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (62, 3, 300, 251, 7)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (63, 3, 2000, 301, 8)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (64, 4, 0, -2000, -20)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (65, 4, 10, 1, -4)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (66, 4, 15, 11, -3)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (67, 4, 20, 16, -2)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (68, 4, 25, 21, -1)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (69, 4, 35, 26, 0)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (70, 4, 45, 36, 0)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (71, 4, 55, 46, 0)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (72, 4, 65, 56, 0)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (73, 4, 75, 66, 0)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (74, 4, 80, 76, 1)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (75, 4, 85, 81, 2)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (76, 4, 90, 86, 3)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (77, 4, 100, 91, 4)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (78, 4, 140, 101, 5)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (79, 4, 170, 141, 6)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (80, 4, 190, 171, 7)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (81, 4, 200, 191, 8)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (82, 4, 250, 201, 9)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (83, 4, 300, 251, 10)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (84, 4, 2000, 301, 11)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (85, 5, 0, -2000, -20)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (86, 5, 10, 1, -5)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (87, 5, 15, 11, -4)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (88, 5, 20, 16, -3)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (89, 5, 25, 21, -2)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (90, 5, 35, 26, -1)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (91, 5, 45, 36, 0)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (92, 5, 55, 46, 0)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (93, 5, 65, 56, 0)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (94, 5, 75, 66, 1)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (95, 5, 80, 76, 2)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (96, 5, 85, 81, 3)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (97, 5, 90, 86, 4)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (98, 5, 100, 91, 5)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (99, 5, 140, 101, 6)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (100, 5, 170, 141, 7)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (101, 5, 190, 171, 8)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (102, 5, 200, 191, 9)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (103, 5, 250, 201, 10)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (104, 5, 300, 251, 11)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (105, 5, 2000, 301, 12)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (106, 6, 0, -2000, -20)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (107, 6, 10, 1, -6)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (108, 6, 15, 11, -5)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (109, 6, 20, 16, -4)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (110, 6, 25, 21, -3)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (111, 6, 35, 26, -2)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (112, 6, 45, 36, -1)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (113, 6, 55, 46, 0)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (114, 6, 65, 56, 1)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (115, 6, 75, 66, 2)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (116, 6, 80, 76, 3)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (117, 6, 85, 81, 4)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (118, 6, 90, 86, 5)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (119, 6, 100, 91, 6)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (120, 6, 140, 101, 7)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (121, 6, 170, 141, 8)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (122, 6, 190, 171, 9)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (123, 6, 200, 191, 10)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (124, 6, 250, 201, 11)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (125, 6, 300, 251, 12)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (126, 6, 2000, 301, 13)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (127, 7, 0, -2000, -20)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (128, 7, 10, 1, -10)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (129, 7, 15, 11, -8)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (130, 7, 20, 16, -6)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (131, 7, 25, 21, -4)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (132, 7, 35, 26, -2)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (133, 7, 45, 36, -1)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (134, 7, 55, 46, 0)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (135, 7, 65, 56, 1)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (136, 7, 75, 66, 2)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (137, 7, 80, 76, 4)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (138, 7, 85, 81, 6)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (139, 7, 90, 86, 8)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (140, 7, 100, 91, 10)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (141, 7, 140, 101, 11)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (142, 7, 170, 141, 12)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (143, 7, 190, 171, 13)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (144, 7, 200, 191, 14)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (145, 7, 250, 201, 15)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (146, 7, 300, 251, 16)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (147, 7, 2000, 301, 17)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (148, 8, 0, -2000, -3)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (149, 8, 10, 1, -2)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (150, 8, 15, 11, -2)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (151, 8, 20, 16, -1)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (152, 8, 25, 21, -1)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (153, 8, 35, 26, -1)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (154, 8, 45, 36, 0)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (155, 8, 55, 46, 0)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (156, 8, 65, 56, 0)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (157, 8, 75, 66, 1)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (158, 8, 80, 76, 1)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (159, 8, 85, 81, 1)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (160, 8, 90, 86, 2)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (161, 8, 100, 91, 2)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (162, 8, 140, 101, 3)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (163, 8, 170, 141, 3)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (164, 8, 190, 171, 3)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (165, 8, 200, 191, 3)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (166, 8, 250, 201, 3)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (167, 8, 300, 251, 4)
GO
INSERT [dbo].[Creature_LevelChartValues] ([ID], [Level_ID], [Max], [Min], [Mod]) VALUES (168, 8, 2000, 301, 4)
GO
SET IDENTITY_INSERT [dbo].[Creature_LevelChartValues] OFF
GO
SET IDENTITY_INSERT [dbo].[Creature_Outlook] ON 
GO
INSERT [dbo].[Creature_Outlook] ([ID], [Abbreviation], [Name]) VALUES (1, N'Aggres.', N'Aggressive')
GO
INSERT [dbo].[Creature_Outlook] ([ID], [Abbreviation], [Name]) VALUES (2, N'Aloof', N'Aloof')
GO
INSERT [dbo].[Creature_Outlook] ([ID], [Abbreviation], [Name]) VALUES (3, N'Altru.', N'Altruistic')
GO
INSERT [dbo].[Creature_Outlook] ([ID], [Abbreviation], [Name]) VALUES (4, N'Bellig.', N'Belligerent')
GO
INSERT [dbo].[Creature_Outlook] ([ID], [Abbreviation], [Name]) VALUES (5, N'Berserk', N'Bersek')
GO
INSERT [dbo].[Creature_Outlook] ([ID], [Abbreviation], [Name]) VALUES (6, N'Carefree', N'Carefree')
GO
INSERT [dbo].[Creature_Outlook] ([ID], [Abbreviation], [Name]) VALUES (7, N'Cruel', N'Cruel')
GO
INSERT [dbo].[Creature_Outlook] ([ID], [Abbreviation], [Name]) VALUES (8, N'Domin.', N'Dominating')
GO
INSERT [dbo].[Creature_Outlook] ([ID], [Abbreviation], [Name]) VALUES (9, N'Good', N'Good')
GO
INSERT [dbo].[Creature_Outlook] ([ID], [Abbreviation], [Name]) VALUES (10, N'Greedy', N'Greedy')
GO
INSERT [dbo].[Creature_Outlook] ([ID], [Abbreviation], [Name]) VALUES (11, N'Hostile', N'Hostile')
GO
INSERT [dbo].[Creature_Outlook] ([ID], [Abbreviation], [Name]) VALUES (12, N'Inquis.', N'Inquisitive')
GO
INSERT [dbo].[Creature_Outlook] ([ID], [Abbreviation], [Name]) VALUES (13, N'Jumpy', N'Jumpy')
GO
INSERT [dbo].[Creature_Outlook] ([ID], [Abbreviation], [Name]) VALUES (14, N'Normal', N'Normal')
GO
INSERT [dbo].[Creature_Outlook] ([ID], [Abbreviation], [Name]) VALUES (15, N'Passive', N'Pasive')
GO
INSERT [dbo].[Creature_Outlook] ([ID], [Abbreviation], [Name]) VALUES (16, N'Playful', N'Playful')
GO
INSERT [dbo].[Creature_Outlook] ([ID], [Abbreviation], [Name]) VALUES (17, N'Protect', N'Protect')
GO
INSERT [dbo].[Creature_Outlook] ([ID], [Abbreviation], [Name]) VALUES (18, N'Timid', N'Timid')
GO
SET IDENTITY_INSERT [dbo].[Creature_Outlook] OFF
GO
SET IDENTITY_INSERT [dbo].[Creature_Pace] ON 
GO
INSERT [dbo].[Creature_Pace] ([ID], [Abbreviation], [Name]) VALUES (1, N'Walk', N'Walk')
GO
INSERT [dbo].[Creature_Pace] ([ID], [Abbreviation], [Name]) VALUES (2, N'Jog', N'Jog')
GO
INSERT [dbo].[Creature_Pace] ([ID], [Abbreviation], [Name]) VALUES (3, N'Run', N'Run')
GO
INSERT [dbo].[Creature_Pace] ([ID], [Abbreviation], [Name]) VALUES (4, N'Spt', N'Sprint')
GO
INSERT [dbo].[Creature_Pace] ([ID], [Abbreviation], [Name]) VALUES (5, N'FSpt', N'Fast Sprint')
GO
INSERT [dbo].[Creature_Pace] ([ID], [Abbreviation], [Name]) VALUES (6, N'Dash', N'Dash')
GO
SET IDENTITY_INSERT [dbo].[Creature_Pace] OFF
GO
SET IDENTITY_INSERT [dbo].[Creature_Sizes] ON 
GO
INSERT [dbo].[Creature_Sizes] ([ID], [Abbreviation], [Name]) VALUES (1, N'T', N'Tiny')
GO
INSERT [dbo].[Creature_Sizes] ([ID], [Abbreviation], [Name]) VALUES (2, N'S', N'Small')
GO
INSERT [dbo].[Creature_Sizes] ([ID], [Abbreviation], [Name]) VALUES (3, N'M', N'Medium')
GO
INSERT [dbo].[Creature_Sizes] ([ID], [Abbreviation], [Name]) VALUES (4, N'L', N'Large')
GO
INSERT [dbo].[Creature_Sizes] ([ID], [Abbreviation], [Name]) VALUES (5, N'H', N'Huge')
GO
SET IDENTITY_INSERT [dbo].[Creature_Sizes] OFF
GO
SET IDENTITY_INSERT [dbo].[Creature_SpeedChart] ON 
GO
INSERT [dbo].[Creature_SpeedChart] ([ID], [AQChargeLunge], [AQInitiative], [Abbreviation], [MSBaseDB], [MSFleeEvade], [Name]) VALUES (1, 0, -16, N'IN', -25, 0, N'Inching')
GO
INSERT [dbo].[Creature_SpeedChart] ([ID], [AQChargeLunge], [AQInitiative], [Abbreviation], [MSBaseDB], [MSFleeEvade], [Name]) VALUES (2, 0, -12, N'CR', -20, 0, N'Creeping')
GO
INSERT [dbo].[Creature_SpeedChart] ([ID], [AQChargeLunge], [AQInitiative], [Abbreviation], [MSBaseDB], [MSFleeEvade], [Name]) VALUES (3, 0, -8, N'VS', -10, 0, N'Very Slow')
GO
INSERT [dbo].[Creature_SpeedChart] ([ID], [AQChargeLunge], [AQInitiative], [Abbreviation], [MSBaseDB], [MSFleeEvade], [Name]) VALUES (4, 0, -4, N'SL', 0, 0, N'Slow')
GO
INSERT [dbo].[Creature_SpeedChart] ([ID], [AQChargeLunge], [AQInitiative], [Abbreviation], [MSBaseDB], [MSFleeEvade], [Name]) VALUES (5, -5, 0, N'MD', 10, 5, N'Medium')
GO
INSERT [dbo].[Creature_SpeedChart] ([ID], [AQChargeLunge], [AQInitiative], [Abbreviation], [MSBaseDB], [MSFleeEvade], [Name]) VALUES (6, -10, 4, N'MF', 20, 10, N'Moderately Fast')
GO
INSERT [dbo].[Creature_SpeedChart] ([ID], [AQChargeLunge], [AQInitiative], [Abbreviation], [MSBaseDB], [MSFleeEvade], [Name]) VALUES (7, -15, 8, N'FA', 30, 15, N'Fast')
GO
INSERT [dbo].[Creature_SpeedChart] ([ID], [AQChargeLunge], [AQInitiative], [Abbreviation], [MSBaseDB], [MSFleeEvade], [Name]) VALUES (8, -20, 12, N'VF', 40, 20, N'Very Fast')
GO
INSERT [dbo].[Creature_SpeedChart] ([ID], [AQChargeLunge], [AQInitiative], [Abbreviation], [MSBaseDB], [MSFleeEvade], [Name]) VALUES (9, -25, 16, N'BF', 50, 25, N'Blindingly Fast')
GO
SET IDENTITY_INSERT [dbo].[Creature_SpeedChart] OFF
GO
SET IDENTITY_INSERT [dbo].[Creatures] ON 
GO
INSERT [dbo].[Creatures] ([ID], [AQRating_ID], [AT], [BaseHits], [BaseLevel], [BaseMove], [Book_ID], [CriticalsIgnore_ID], [Criticals_ID], [DB], [Description], [Habitat], [HitMod_ID], [IQ_ID], [LevelMod_ID], [MMBonus], [MSRating_ID], [MaxEncountered], [MaxPace_ID], [MinEncountered], [Outlook_ID], [PageNumber], [Size_ID], [TypeName]) VALUES (563, 6, 20, 35, 1, 50, 3, 1, 1, 0, N'', N'', 7, 1, 1, 10, 4, 5, 4, 1, 1, 66, 2, N'Burrowing Beetle')
GO
INSERT [dbo].[Creatures] ([ID], [AQRating_ID], [AT], [BaseHits], [BaseLevel], [BaseMove], [Book_ID], [CriticalsIgnore_ID], [Criticals_ID], [DB], [Description], [Habitat], [HitMod_ID], [IQ_ID], [LevelMod_ID], [MMBonus], [MSRating_ID], [MaxEncountered], [MaxPace_ID], [MinEncountered], [Outlook_ID], [PageNumber], [Size_ID], [TypeName]) VALUES (564, 7, 3, 90, 4, 100, 3, 1, 1, 50, N'', N'', 7, 1, 3, 30, 7, 10, 6, 1, 1, 66, 2, N'Arctic Fox')
GO
INSERT [dbo].[Creatures] ([ID], [AQRating_ID], [AT], [BaseHits], [BaseLevel], [BaseMove], [Book_ID], [CriticalsIgnore_ID], [Criticals_ID], [DB], [Description], [Habitat], [HitMod_ID], [IQ_ID], [LevelMod_ID], [MMBonus], [MSRating_ID], [MaxEncountered], [MaxPace_ID], [MinEncountered], [Outlook_ID], [PageNumber], [Size_ID], [TypeName]) VALUES (565, 7, 4, 20, 2, 60, 3, 1, 1, 30, N'', N'', 1, 1, 2, 20, 7, 1, 5, 1, 1, 66, 2, N'Dragon (Miniature)')
GO
INSERT [dbo].[Creatures] ([ID], [AQRating_ID], [AT], [BaseHits], [BaseLevel], [BaseMove], [Book_ID], [CriticalsIgnore_ID], [Criticals_ID], [DB], [Description], [Habitat], [HitMod_ID], [IQ_ID], [LevelMod_ID], [MMBonus], [MSRating_ID], [MaxEncountered], [MaxPace_ID], [MinEncountered], [Outlook_ID], [PageNumber], [Size_ID], [TypeName]) VALUES (566, 8, 1, 20, 1, 180, 3, 2, 1, 80, N'Creates pseudopods with which to attak.', N'', 1, 1, 1, 10, 8, 1, 4, 1, 1, 67, 2, N'Elemental Whisplings - Air')
GO
INSERT [dbo].[Creatures] ([ID], [AQRating_ID], [AT], [BaseHits], [BaseLevel], [BaseMove], [Book_ID], [CriticalsIgnore_ID], [Criticals_ID], [DB], [Description], [Habitat], [HitMod_ID], [IQ_ID], [LevelMod_ID], [MMBonus], [MSRating_ID], [MaxEncountered], [MaxPace_ID], [MinEncountered], [Outlook_ID], [PageNumber], [Size_ID], [TypeName]) VALUES (567, 5, 8, 20, 1, 45, 3, 2, 1, 40, N'Creates pseudopods with which to attak.', N'', 1, 1, 1, 0, 4, 1, 3, 1, 1, 67, 2, N'Elemental Whisplings - Earth')
GO
INSERT [dbo].[Creatures] ([ID], [AQRating_ID], [AT], [BaseHits], [BaseLevel], [BaseMove], [Book_ID], [CriticalsIgnore_ID], [Criticals_ID], [DB], [Description], [Habitat], [HitMod_ID], [IQ_ID], [LevelMod_ID], [MMBonus], [MSRating_ID], [MaxEncountered], [MaxPace_ID], [MinEncountered], [Outlook_ID], [PageNumber], [Size_ID], [TypeName]) VALUES (568, 7, 1, 20, 1, 150, 3, 2, 1, 60, N'Creates pseudopods with which to attak.', N'', 1, 1, 1, 10, 7, 1, 4, 1, 1, 67, 2, N'Elemental Whisplings - Fire')
GO
INSERT [dbo].[Creatures] ([ID], [AQRating_ID], [AT], [BaseHits], [BaseLevel], [BaseMove], [Book_ID], [CriticalsIgnore_ID], [Criticals_ID], [DB], [Description], [Habitat], [HitMod_ID], [IQ_ID], [LevelMod_ID], [MMBonus], [MSRating_ID], [MaxEncountered], [MaxPace_ID], [MinEncountered], [Outlook_ID], [PageNumber], [Size_ID], [TypeName]) VALUES (569, 6, 1, 20, 1, 130, 3, 2, 1, 70, N'Creates pseudopods with which to attak.', N'', 1, 1, 1, 10, 6, 1, 4, 1, 1, 67, 2, N'Elemental Whisplings - Ice')
GO
INSERT [dbo].[Creatures] ([ID], [AQRating_ID], [AT], [BaseHits], [BaseLevel], [BaseMove], [Book_ID], [CriticalsIgnore_ID], [Criticals_ID], [DB], [Description], [Habitat], [HitMod_ID], [IQ_ID], [LevelMod_ID], [MMBonus], [MSRating_ID], [MaxEncountered], [MaxPace_ID], [MinEncountered], [Outlook_ID], [PageNumber], [Size_ID], [TypeName]) VALUES (570, 8, 1, 20, 1, 240, 3, 3, 1, 90, N'Creates pseudopods with which to attak.', N'', 1, 1, 1, 20, 9, 1, 4, 1, 1, 67, 2, N'Elemental Whisplings - Light')
GO
INSERT [dbo].[Creatures] ([ID], [AQRating_ID], [AT], [BaseHits], [BaseLevel], [BaseMove], [Book_ID], [CriticalsIgnore_ID], [Criticals_ID], [DB], [Description], [Habitat], [HitMod_ID], [IQ_ID], [LevelMod_ID], [MMBonus], [MSRating_ID], [MaxEncountered], [MaxPace_ID], [MinEncountered], [Outlook_ID], [PageNumber], [Size_ID], [TypeName]) VALUES (571, 7, 1, 20, 1, 80, 3, 2, 1, 80, N'Creates pseudopods with which to attak.', N'', 1, 1, 1, 0, 4, 1, 4, 1, 1, 67, 2, N'Elemental Whisplings - Water')
GO
INSERT [dbo].[Creatures] ([ID], [AQRating_ID], [AT], [BaseHits], [BaseLevel], [BaseMove], [Book_ID], [CriticalsIgnore_ID], [Criticals_ID], [DB], [Description], [Habitat], [HitMod_ID], [IQ_ID], [LevelMod_ID], [MMBonus], [MSRating_ID], [MaxEncountered], [MaxPace_ID], [MinEncountered], [Outlook_ID], [PageNumber], [Size_ID], [TypeName]) VALUES (572, 5, 7, 105, 2, 40, 3, 1, 1, 20, N'', N'', 4, 1, 1, 20, 5, 10, 3, 1, 1, 68, 3, N'Fire Lizard')
GO
INSERT [dbo].[Creatures] ([ID], [AQRating_ID], [AT], [BaseHits], [BaseLevel], [BaseMove], [Book_ID], [CriticalsIgnore_ID], [Criticals_ID], [DB], [Description], [Habitat], [HitMod_ID], [IQ_ID], [LevelMod_ID], [MMBonus], [MSRating_ID], [MaxEncountered], [MaxPace_ID], [MinEncountered], [Outlook_ID], [PageNumber], [Size_ID], [TypeName]) VALUES (573, 8, 1, 20, 1, 120, 3, 1, 1, 80, N'', N'', 1, 1, 1, 20, 9, 1000, 4, 100, 1, 68, 2, N'Giant Lightning Bug')
GO
INSERT [dbo].[Creatures] ([ID], [AQRating_ID], [AT], [BaseHits], [BaseLevel], [BaseMove], [Book_ID], [CriticalsIgnore_ID], [Criticals_ID], [DB], [Description], [Habitat], [HitMod_ID], [IQ_ID], [LevelMod_ID], [MMBonus], [MSRating_ID], [MaxEncountered], [MaxPace_ID], [MinEncountered], [Outlook_ID], [PageNumber], [Size_ID], [TypeName]) VALUES (574, 8, 1, 50, 5, 160, 3, 2, 3, 70, N'', N'', 6, 1, 8, 10, 8, 1, 4, 1, 1, 68, 2, N'Minor Elemental (Servant) - Air')
GO
INSERT [dbo].[Creatures] ([ID], [AQRating_ID], [AT], [BaseHits], [BaseLevel], [BaseMove], [Book_ID], [CriticalsIgnore_ID], [Criticals_ID], [DB], [Description], [Habitat], [HitMod_ID], [IQ_ID], [LevelMod_ID], [MMBonus], [MSRating_ID], [MaxEncountered], [MaxPace_ID], [MinEncountered], [Outlook_ID], [PageNumber], [Size_ID], [TypeName]) VALUES (575, 7, 1, 50, 5, 70, 3, 2, 3, 80, N'', N'', 6, 1, 8, 20, 4, 1, 4, 1, 1, 68, 2, N'Minor Elemental (Servant) - Water')
GO
INSERT [dbo].[Creatures] ([ID], [AQRating_ID], [AT], [BaseHits], [BaseLevel], [BaseMove], [Book_ID], [CriticalsIgnore_ID], [Criticals_ID], [DB], [Description], [Habitat], [HitMod_ID], [IQ_ID], [LevelMod_ID], [MMBonus], [MSRating_ID], [MaxEncountered], [MaxPace_ID], [MinEncountered], [Outlook_ID], [PageNumber], [Size_ID], [TypeName]) VALUES (576, 7, 1, 50, 5, 130, 3, 2, 3, 50, N'', N'', 6, 1, 8, 10, 7, 1, 4, 1, 1, 68, 2, N'Minor Elemental (Servant) - Fire')
GO
INSERT [dbo].[Creatures] ([ID], [AQRating_ID], [AT], [BaseHits], [BaseLevel], [BaseMove], [Book_ID], [CriticalsIgnore_ID], [Criticals_ID], [DB], [Description], [Habitat], [HitMod_ID], [IQ_ID], [LevelMod_ID], [MMBonus], [MSRating_ID], [MaxEncountered], [MaxPace_ID], [MinEncountered], [Outlook_ID], [PageNumber], [Size_ID], [TypeName]) VALUES (577, 5, 8, 50, 5, 45, 3, 2, 3, 30, N'', N'', 6, 1, 8, 0, 4, 1, 3, 1, 1, 68, 2, N'Minor Elemental (Servant) - Earth')
GO
INSERT [dbo].[Creatures] ([ID], [AQRating_ID], [AT], [BaseHits], [BaseLevel], [BaseMove], [Book_ID], [CriticalsIgnore_ID], [Criticals_ID], [DB], [Description], [Habitat], [HitMod_ID], [IQ_ID], [LevelMod_ID], [MMBonus], [MSRating_ID], [MaxEncountered], [MaxPace_ID], [MinEncountered], [Outlook_ID], [PageNumber], [Size_ID], [TypeName]) VALUES (578, 6, 1, 50, 5, 110, 3, 2, 3, 60, N'', N'', 6, 1, 8, 10, 6, 1, 4, 1, 1, 69, 2, N'Minor Elemental (Servant) - Ice')
GO
INSERT [dbo].[Creatures] ([ID], [AQRating_ID], [AT], [BaseHits], [BaseLevel], [BaseMove], [Book_ID], [CriticalsIgnore_ID], [Criticals_ID], [DB], [Description], [Habitat], [HitMod_ID], [IQ_ID], [LevelMod_ID], [MMBonus], [MSRating_ID], [MaxEncountered], [MaxPace_ID], [MinEncountered], [Outlook_ID], [PageNumber], [Size_ID], [TypeName]) VALUES (579, 8, 1, 50, 5, 210, 3, 2, 3, 80, N'', N'', 6, 1, 8, 20, 9, 1, 4, 1, 1, 68, 2, N'Minor Elemental (Servant) - Light')
GO
INSERT [dbo].[Creatures] ([ID], [AQRating_ID], [AT], [BaseHits], [BaseLevel], [BaseMove], [Book_ID], [CriticalsIgnore_ID], [Criticals_ID], [DB], [Description], [Habitat], [HitMod_ID], [IQ_ID], [LevelMod_ID], [MMBonus], [MSRating_ID], [MaxEncountered], [MaxPace_ID], [MinEncountered], [Outlook_ID], [PageNumber], [Size_ID], [TypeName]) VALUES (580, 5, 7, 105, 2, 40, 3, 1, 1, 20, N'', N'', 4, 1, 1, 20, 5, 10, 3, 1, 1, 69, 3, N'Sea Salamander')
GO
INSERT [dbo].[Creatures] ([ID], [AQRating_ID], [AT], [BaseHits], [BaseLevel], [BaseMove], [Book_ID], [CriticalsIgnore_ID], [Criticals_ID], [DB], [Description], [Habitat], [HitMod_ID], [IQ_ID], [LevelMod_ID], [MMBonus], [MSRating_ID], [MaxEncountered], [MaxPace_ID], [MinEncountered], [Outlook_ID], [PageNumber], [Size_ID], [TypeName]) VALUES (581, 7, 4, 90, 6, 140, 2, 1, 1, 30, N'', N'', 7, 1, 6, 20, 8, 10, 6, 1, 1, 87, 3, N'Zephyr Hound - Fire')
GO
INSERT [dbo].[Creatures] ([ID], [AQRating_ID], [AT], [BaseHits], [BaseLevel], [BaseMove], [Book_ID], [CriticalsIgnore_ID], [Criticals_ID], [DB], [Description], [Habitat], [HitMod_ID], [IQ_ID], [LevelMod_ID], [MMBonus], [MSRating_ID], [MaxEncountered], [MaxPace_ID], [MinEncountered], [Outlook_ID], [PageNumber], [Size_ID], [TypeName]) VALUES (582, 7, 4, 90, 6, 140, 2, 1, 1, 30, N'', N'', 7, 1, 6, 20, 8, 10, 6, 1, 1, 88, 3, N'Zephyr Hound - Ice')
GO
INSERT [dbo].[Creatures] ([ID], [AQRating_ID], [AT], [BaseHits], [BaseLevel], [BaseMove], [Book_ID], [CriticalsIgnore_ID], [Criticals_ID], [DB], [Description], [Habitat], [HitMod_ID], [IQ_ID], [LevelMod_ID], [MMBonus], [MSRating_ID], [MaxEncountered], [MaxPace_ID], [MinEncountered], [Outlook_ID], [PageNumber], [Size_ID], [TypeName]) VALUES (583, 7, 4, 80, 5, 140, 2, 1, 1, 30, N'', N'', 7, 1, 5, 20, 8, 10, 6, 1, 1, 88, 3, N'Zephyr Hound - Night')
GO
INSERT [dbo].[Creatures] ([ID], [AQRating_ID], [AT], [BaseHits], [BaseLevel], [BaseMove], [Book_ID], [CriticalsIgnore_ID], [Criticals_ID], [DB], [Description], [Habitat], [HitMod_ID], [IQ_ID], [LevelMod_ID], [MMBonus], [MSRating_ID], [MaxEncountered], [MaxPace_ID], [MinEncountered], [Outlook_ID], [PageNumber], [Size_ID], [TypeName]) VALUES (584, 7, 4, 60, 3, 140, 2, 1, 1, 30, N'', N'', 7, 1, 3, 20, 8, 10, 6, 1, 1, 88, 3, N'Zephyr Hound - Storm')
GO
INSERT [dbo].[Creatures] ([ID], [AQRating_ID], [AT], [BaseHits], [BaseLevel], [BaseMove], [Book_ID], [CriticalsIgnore_ID], [Criticals_ID], [DB], [Description], [Habitat], [HitMod_ID], [IQ_ID], [LevelMod_ID], [MMBonus], [MSRating_ID], [MaxEncountered], [MaxPace_ID], [MinEncountered], [Outlook_ID], [PageNumber], [Size_ID], [TypeName]) VALUES (585, 7, 4, 80, 5, 140, 2, 1, 1, 30, N'', N'', 7, 1, 5, 20, 8, 10, 6, 1, 1, 89, 3, N'Zephyr Hound - Vapor')
GO
INSERT [dbo].[Creatures] ([ID], [AQRating_ID], [AT], [BaseHits], [BaseLevel], [BaseMove], [Book_ID], [CriticalsIgnore_ID], [Criticals_ID], [DB], [Description], [Habitat], [HitMod_ID], [IQ_ID], [LevelMod_ID], [MMBonus], [MSRating_ID], [MaxEncountered], [MaxPace_ID], [MinEncountered], [Outlook_ID], [PageNumber], [Size_ID], [TypeName]) VALUES (586, 7, 4, 70, 4, 140, 2, 1, 1, 30, N'', N'', 7, 1, 4, 20, 8, 10, 6, 1, 1, 89, 3, N'Zephyr Hound - Water')
GO
INSERT [dbo].[Creatures] ([ID], [AQRating_ID], [AT], [BaseHits], [BaseLevel], [BaseMove], [Book_ID], [CriticalsIgnore_ID], [Criticals_ID], [DB], [Description], [Habitat], [HitMod_ID], [IQ_ID], [LevelMod_ID], [MMBonus], [MSRating_ID], [MaxEncountered], [MaxPace_ID], [MinEncountered], [Outlook_ID], [PageNumber], [Size_ID], [TypeName]) VALUES (587, 8, 1, 15, 1, 100, 3, 1, 1, 60, N'', N'', 1, 1, 1, 30, 8, 10, 6, 1, 1, 69, 2, N'Zephyr Falcon')
GO
INSERT [dbo].[Creatures] ([ID], [AQRating_ID], [AT], [BaseHits], [BaseLevel], [BaseMove], [Book_ID], [CriticalsIgnore_ID], [Criticals_ID], [DB], [Description], [Habitat], [HitMod_ID], [IQ_ID], [LevelMod_ID], [MMBonus], [MSRating_ID], [MaxEncountered], [MaxPace_ID], [MinEncountered], [Outlook_ID], [PageNumber], [Size_ID], [TypeName]) VALUES (588, 8, 12, 250, 10, 140, 2, 1, 4, 40, N'', N'', 8, 1, 7, 30, 8, 1, 5, 1, 1, 63, 5, N'Dragon Salamander')
GO
INSERT [dbo].[Creatures] ([ID], [AQRating_ID], [AT], [BaseHits], [BaseLevel], [BaseMove], [Book_ID], [CriticalsIgnore_ID], [Criticals_ID], [DB], [Description], [Habitat], [HitMod_ID], [IQ_ID], [LevelMod_ID], [MMBonus], [MSRating_ID], [MaxEncountered], [MaxPace_ID], [MinEncountered], [Outlook_ID], [PageNumber], [Size_ID], [TypeName]) VALUES (589, 8, 1, 70, 8, 150, 3, 2, 4, 60, N'', N'', 8, 1, 8, 10, 8, 1, 4, 1, 1, 70, 4, N'Elemental Steed - Air')
GO
INSERT [dbo].[Creatures] ([ID], [AQRating_ID], [AT], [BaseHits], [BaseLevel], [BaseMove], [Book_ID], [CriticalsIgnore_ID], [Criticals_ID], [DB], [Description], [Habitat], [HitMod_ID], [IQ_ID], [LevelMod_ID], [MMBonus], [MSRating_ID], [MaxEncountered], [MaxPace_ID], [MinEncountered], [Outlook_ID], [PageNumber], [Size_ID], [TypeName]) VALUES (590, 5, 8, 70, 8, 35, 3, 2, 4, 20, N'', N'', 8, 1, 8, 0, 4, 1, 3, 1, 1, 70, 4, N'Elemental Steed - Earth')
GO
INSERT [dbo].[Creatures] ([ID], [AQRating_ID], [AT], [BaseHits], [BaseLevel], [BaseMove], [Book_ID], [CriticalsIgnore_ID], [Criticals_ID], [DB], [Description], [Habitat], [HitMod_ID], [IQ_ID], [LevelMod_ID], [MMBonus], [MSRating_ID], [MaxEncountered], [MaxPace_ID], [MinEncountered], [Outlook_ID], [PageNumber], [Size_ID], [TypeName]) VALUES (591, 7, 1, 70, 8, 120, 3, 1, 4, 40, N'', N'', 8, 1, 8, 10, 7, 1, 4, 1, 1, 70, 2, N'Elemental Steed - Fire')
GO
INSERT [dbo].[Creatures] ([ID], [AQRating_ID], [AT], [BaseHits], [BaseLevel], [BaseMove], [Book_ID], [CriticalsIgnore_ID], [Criticals_ID], [DB], [Description], [Habitat], [HitMod_ID], [IQ_ID], [LevelMod_ID], [MMBonus], [MSRating_ID], [MaxEncountered], [MaxPace_ID], [MinEncountered], [Outlook_ID], [PageNumber], [Size_ID], [TypeName]) VALUES (592, 6, 1, 70, 8, 100, 3, 3, 4, 50, N'', N'', 8, 1, 8, 10, 6, 1, 4, 1, 1, 70, 4, N'Elemental Steed - Ice')
GO
INSERT [dbo].[Creatures] ([ID], [AQRating_ID], [AT], [BaseHits], [BaseLevel], [BaseMove], [Book_ID], [CriticalsIgnore_ID], [Criticals_ID], [DB], [Description], [Habitat], [HitMod_ID], [IQ_ID], [LevelMod_ID], [MMBonus], [MSRating_ID], [MaxEncountered], [MaxPace_ID], [MinEncountered], [Outlook_ID], [PageNumber], [Size_ID], [TypeName]) VALUES (593, 8, 1, 70, 8, 200, 3, 1, 4, 70, N'', N'', 8, 1, 8, 20, 9, 1, 4, 1, 1, 70, 4, N'Elemental Steed - Light')
GO
INSERT [dbo].[Creatures] ([ID], [AQRating_ID], [AT], [BaseHits], [BaseLevel], [BaseMove], [Book_ID], [CriticalsIgnore_ID], [Criticals_ID], [DB], [Description], [Habitat], [HitMod_ID], [IQ_ID], [LevelMod_ID], [MMBonus], [MSRating_ID], [MaxEncountered], [MaxPace_ID], [MinEncountered], [Outlook_ID], [PageNumber], [Size_ID], [TypeName]) VALUES (594, 7, 3, 70, 8, 60, 3, 1, 4, 30, N'', N'', 8, 1, 8, 0, 4, 1, 4, 1, 1, 70, 4, N'Elemental Steed - Water')
GO
INSERT [dbo].[Creatures] ([ID], [AQRating_ID], [AT], [BaseHits], [BaseLevel], [BaseMove], [Book_ID], [CriticalsIgnore_ID], [Criticals_ID], [DB], [Description], [Habitat], [HitMod_ID], [IQ_ID], [LevelMod_ID], [MMBonus], [MSRating_ID], [MaxEncountered], [MaxPace_ID], [MinEncountered], [Outlook_ID], [PageNumber], [Size_ID], [TypeName]) VALUES (595, 8, 1, 100, 10, 160, 3, 3, 4, 35, N'', N'', 6, 1, 8, 10, 8, 1, 4, 1, 1, 70, 5, N'Elemental Serpent - Air')
GO
INSERT [dbo].[Creatures] ([ID], [AQRating_ID], [AT], [BaseHits], [BaseLevel], [BaseMove], [Book_ID], [CriticalsIgnore_ID], [Criticals_ID], [DB], [Description], [Habitat], [HitMod_ID], [IQ_ID], [LevelMod_ID], [MMBonus], [MSRating_ID], [MaxEncountered], [MaxPace_ID], [MinEncountered], [Outlook_ID], [PageNumber], [Size_ID], [TypeName]) VALUES (596, 8, 1, 80, 10, 180, 3, 2, 4, 70, N'', N'', 8, 1, 8, 20, 9, 1, 5, 1, 1, 71, 3, N'Lesser Elemental (Weak) - Light')
GO
INSERT [dbo].[Creatures] ([ID], [AQRating_ID], [AT], [BaseHits], [BaseLevel], [BaseMove], [Book_ID], [CriticalsIgnore_ID], [Criticals_ID], [DB], [Description], [Habitat], [HitMod_ID], [IQ_ID], [LevelMod_ID], [MMBonus], [MSRating_ID], [MaxEncountered], [MaxPace_ID], [MinEncountered], [Outlook_ID], [PageNumber], [Size_ID], [TypeName]) VALUES (597, 8, 1, 250, 10, 80, 2, 2, 4, 50, N'', N'', 6, 1, 8, 20, 7, 1, 5, 1, 1, 199, 3, N'Specter Major')
GO
INSERT [dbo].[Creatures] ([ID], [AQRating_ID], [AT], [BaseHits], [BaseLevel], [BaseMove], [Book_ID], [CriticalsIgnore_ID], [Criticals_ID], [DB], [Description], [Habitat], [HitMod_ID], [IQ_ID], [LevelMod_ID], [MMBonus], [MSRating_ID], [MaxEncountered], [MaxPace_ID], [MinEncountered], [Outlook_ID], [PageNumber], [Size_ID], [TypeName]) VALUES (598, 6, 20, 280, 6, 100, 2, 3, 4, 10, N'', N'', 7, 1, 5, 10, 7, 2, 6, 1, 1, 76, 4, N'Euryale')
GO
INSERT [dbo].[Creatures] ([ID], [AQRating_ID], [AT], [BaseHits], [BaseLevel], [BaseMove], [Book_ID], [CriticalsIgnore_ID], [Criticals_ID], [DB], [Description], [Habitat], [HitMod_ID], [IQ_ID], [LevelMod_ID], [MMBonus], [MSRating_ID], [MaxEncountered], [MaxPace_ID], [MinEncountered], [Outlook_ID], [PageNumber], [Size_ID], [TypeName]) VALUES (599, 8, 3, 120, 8, 110, 2, 1, 4, 40, N'', N'', 6, 10, 6, 20, 8, 1, 6, 1, 7, 170, 3, N'Chaos Demon - Type III')
GO
INSERT [dbo].[Creatures] ([ID], [AQRating_ID], [AT], [BaseHits], [BaseLevel], [BaseMove], [Book_ID], [CriticalsIgnore_ID], [Criticals_ID], [DB], [Description], [Habitat], [HitMod_ID], [IQ_ID], [LevelMod_ID], [MMBonus], [MSRating_ID], [MaxEncountered], [MaxPace_ID], [MinEncountered], [Outlook_ID], [PageNumber], [Size_ID], [TypeName]) VALUES (600, 8, 1, 80, 8, 90, 2, 3, 2, 35, N'', N'', 6, 7, 5, 20, 8, 6, 6, 1, 5, 180, 2, N'Disembodied Head')
GO
INSERT [dbo].[Creatures] ([ID], [AQRating_ID], [AT], [BaseHits], [BaseLevel], [BaseMove], [Book_ID], [CriticalsIgnore_ID], [Criticals_ID], [DB], [Description], [Habitat], [HitMod_ID], [IQ_ID], [LevelMod_ID], [MMBonus], [MSRating_ID], [MaxEncountered], [MaxPace_ID], [MinEncountered], [Outlook_ID], [PageNumber], [Size_ID], [TypeName]) VALUES (601, 5, 8, 230, 10, 90, 2, 1, 2, 30, N'', N'', 7, 1, 7, 10, 5, 5, 4, 1, 1, 26, 4, N'Bear - Large')
GO
INSERT [dbo].[Creatures] ([ID], [AQRating_ID], [AT], [BaseHits], [BaseLevel], [BaseMove], [Book_ID], [CriticalsIgnore_ID], [Criticals_ID], [DB], [Description], [Habitat], [HitMod_ID], [IQ_ID], [LevelMod_ID], [MMBonus], [MSRating_ID], [MaxEncountered], [MaxPace_ID], [MinEncountered], [Outlook_ID], [PageNumber], [Size_ID], [TypeName]) VALUES (602, 5, 1, 70, 5, 50, 2, 1, 1, 10, N'', N'', 4, 1, 3, 0, 5, 30, 4, 1, 1, 187, 3, N'Living Ghoul')
GO
INSERT [dbo].[Creatures] ([ID], [AQRating_ID], [AT], [BaseHits], [BaseLevel], [BaseMove], [Book_ID], [CriticalsIgnore_ID], [Criticals_ID], [DB], [Description], [Habitat], [HitMod_ID], [IQ_ID], [LevelMod_ID], [MMBonus], [MSRating_ID], [MaxEncountered], [MaxPace_ID], [MinEncountered], [Outlook_ID], [PageNumber], [Size_ID], [TypeName]) VALUES (603, 7, 3, 65, 4, 120, 2, 1, 1, 40, N'', N'', 7, 1, 3, 20, 8, 20, 6, 2, 1, 28, 3, N'Dog')
GO
INSERT [dbo].[Creatures] ([ID], [AQRating_ID], [AT], [BaseHits], [BaseLevel], [BaseMove], [Book_ID], [CriticalsIgnore_ID], [Criticals_ID], [DB], [Description], [Habitat], [HitMod_ID], [IQ_ID], [LevelMod_ID], [MMBonus], [MSRating_ID], [MaxEncountered], [MaxPace_ID], [MinEncountered], [Outlook_ID], [PageNumber], [Size_ID], [TypeName]) VALUES (604, 8, 11, 200, 5, 100, 2, 1, 2, 40, N'', N'', 5, 1, 5, 20, 7, 5, 5, 1, 1, 95, 4, N'Spineshark')
GO
INSERT [dbo].[Creatures] ([ID], [AQRating_ID], [AT], [BaseHits], [BaseLevel], [BaseMove], [Book_ID], [CriticalsIgnore_ID], [Criticals_ID], [DB], [Description], [Habitat], [HitMod_ID], [IQ_ID], [LevelMod_ID], [MMBonus], [MSRating_ID], [MaxEncountered], [MaxPace_ID], [MinEncountered], [Outlook_ID], [PageNumber], [Size_ID], [TypeName]) VALUES (605, 6, 1, 55, 3, 75, 2, 2, 4, 40, N'', N'', 1, 1, 8, 10, 6, 1, 4, 1, 1, 182, 3, N'Ghost - Minor')
GO
INSERT [dbo].[Creatures] ([ID], [AQRating_ID], [AT], [BaseHits], [BaseLevel], [BaseMove], [Book_ID], [CriticalsIgnore_ID], [Criticals_ID], [DB], [Description], [Habitat], [HitMod_ID], [IQ_ID], [LevelMod_ID], [MMBonus], [MSRating_ID], [MaxEncountered], [MaxPace_ID], [MinEncountered], [Outlook_ID], [PageNumber], [Size_ID], [TypeName]) VALUES (606, 7, 1, 100, 7, 100, 2, 2, 4, 30, N'', N'', 1, 1, 8, 20, 7, 1, 4, 1, 1, 182, 3, N'Ghost - Lesser')
GO
INSERT [dbo].[Creatures] ([ID], [AQRating_ID], [AT], [BaseHits], [BaseLevel], [BaseMove], [Book_ID], [CriticalsIgnore_ID], [Criticals_ID], [DB], [Description], [Habitat], [HitMod_ID], [IQ_ID], [LevelMod_ID], [MMBonus], [MSRating_ID], [MaxEncountered], [MaxPace_ID], [MinEncountered], [Outlook_ID], [PageNumber], [Size_ID], [TypeName]) VALUES (607, 4, 1, 90, 6, 40, 2, 3, 4, 30, N'', N'', 7, 1, 8, 0, 3, 1, 3, 1, 1, 182, 3, N'Ghost - Headless')
GO
INSERT [dbo].[Creatures] ([ID], [AQRating_ID], [AT], [BaseHits], [BaseLevel], [BaseMove], [Book_ID], [CriticalsIgnore_ID], [Criticals_ID], [DB], [Description], [Habitat], [HitMod_ID], [IQ_ID], [LevelMod_ID], [MMBonus], [MSRating_ID], [MaxEncountered], [MaxPace_ID], [MinEncountered], [Outlook_ID], [PageNumber], [Size_ID], [TypeName]) VALUES (608, 8, 4, 165, 15, 130, 2, 2, 4, 55, N'', N'', 1, 1, 8, 30, 8, 0, 5, 0, 1, 182, 3, N'Ghost - Greater')
GO
INSERT [dbo].[Creatures] ([ID], [AQRating_ID], [AT], [BaseHits], [BaseLevel], [BaseMove], [Book_ID], [CriticalsIgnore_ID], [Criticals_ID], [DB], [Description], [Habitat], [HitMod_ID], [IQ_ID], [LevelMod_ID], [MMBonus], [MSRating_ID], [MaxEncountered], [MaxPace_ID], [MinEncountered], [Outlook_ID], [PageNumber], [Size_ID], [TypeName]) VALUES (610, 7, 4, 200, 6, 100, 2, 1, 4, 20, N'', N'', 6, 2, 5, 20, 7, 1, 6, 1, 4, 238, 4, N'Giants, Lesser Minor')
GO
INSERT [dbo].[Creatures] ([ID], [AQRating_ID], [AT], [BaseHits], [BaseLevel], [BaseMove], [Book_ID], [CriticalsIgnore_ID], [Criticals_ID], [DB], [Description], [Habitat], [HitMod_ID], [IQ_ID], [LevelMod_ID], [MMBonus], [MSRating_ID], [MaxEncountered], [MaxPace_ID], [MinEncountered], [Outlook_ID], [PageNumber], [Size_ID], [TypeName]) VALUES (611, 6, 8, 250, 12, 110, 2, 1, 4, 20, N'', N'', 7, 2, 6, 10, 7, 1, 5, 1, 4, 238, 5, N'Giants, Lesser Lesser')
GO
INSERT [dbo].[Creatures] ([ID], [AQRating_ID], [AT], [BaseHits], [BaseLevel], [BaseMove], [Book_ID], [CriticalsIgnore_ID], [Criticals_ID], [DB], [Description], [Habitat], [HitMod_ID], [IQ_ID], [LevelMod_ID], [MMBonus], [MSRating_ID], [MaxEncountered], [MaxPace_ID], [MinEncountered], [Outlook_ID], [PageNumber], [Size_ID], [TypeName]) VALUES (612, 6, 12, 350, 15, 110, 2, 1, 5, 30, N'', N'', 8, 2, 7, 10, 7, 1, 5, 1, 4, 239, 5, N'Giants, Lesser Major')
GO
INSERT [dbo].[Creatures] ([ID], [AQRating_ID], [AT], [BaseHits], [BaseLevel], [BaseMove], [Book_ID], [CriticalsIgnore_ID], [Criticals_ID], [DB], [Description], [Habitat], [HitMod_ID], [IQ_ID], [LevelMod_ID], [MMBonus], [MSRating_ID], [MaxEncountered], [MaxPace_ID], [MinEncountered], [Outlook_ID], [PageNumber], [Size_ID], [TypeName]) VALUES (613, 5, 11, 150, 7, 65, 2, 1, 3, 15, N'', N'', 6, 3, 4, 0, 4, 10, 5, 1, 11, 248, 4, N'Stone Troll')
GO
INSERT [dbo].[Creatures] ([ID], [AQRating_ID], [AT], [BaseHits], [BaseLevel], [BaseMove], [Book_ID], [CriticalsIgnore_ID], [Criticals_ID], [DB], [Description], [Habitat], [HitMod_ID], [IQ_ID], [LevelMod_ID], [MMBonus], [MSRating_ID], [MaxEncountered], [MaxPace_ID], [MinEncountered], [Outlook_ID], [PageNumber], [Size_ID], [TypeName]) VALUES (614, 5, 16, 240, 10, 75, 2, 2, 4, 40, N'', N'', 7, 6, 6, 10, 5, 10, 4, 1, 11, 247, 4, N'Mountain Troll')
GO
INSERT [dbo].[Creatures] ([ID], [AQRating_ID], [AT], [BaseHits], [BaseLevel], [BaseMove], [Book_ID], [CriticalsIgnore_ID], [Criticals_ID], [DB], [Description], [Habitat], [HitMod_ID], [IQ_ID], [LevelMod_ID], [MMBonus], [MSRating_ID], [MaxEncountered], [MaxPace_ID], [MinEncountered], [Outlook_ID], [PageNumber], [Size_ID], [TypeName]) VALUES (615, 6, 3, 100, 4, 80, 2, 1, 2, 20, N'', N'', 6, 3, 4, 20, 5, 10, 6, 1, 10, 248, 3, N'Ogre Small')
GO
INSERT [dbo].[Creatures] ([ID], [AQRating_ID], [AT], [BaseHits], [BaseLevel], [BaseMove], [Book_ID], [CriticalsIgnore_ID], [Criticals_ID], [DB], [Description], [Habitat], [HitMod_ID], [IQ_ID], [LevelMod_ID], [MMBonus], [MSRating_ID], [MaxEncountered], [MaxPace_ID], [MinEncountered], [Outlook_ID], [PageNumber], [Size_ID], [TypeName]) VALUES (616, 6, 4, 160, 8, 80, 2, 1, 3, 10, N'', N'', 6, 5, 6, 10, 5, 10, 5, 1, 4, 248, 4, N'Ogre Large')
GO
INSERT [dbo].[Creatures] ([ID], [AQRating_ID], [AT], [BaseHits], [BaseLevel], [BaseMove], [Book_ID], [CriticalsIgnore_ID], [Criticals_ID], [DB], [Description], [Habitat], [HitMod_ID], [IQ_ID], [LevelMod_ID], [MMBonus], [MSRating_ID], [MaxEncountered], [MaxPace_ID], [MinEncountered], [Outlook_ID], [PageNumber], [Size_ID], [TypeName]) VALUES (617, 8, 3, 90, 5, 100, 2, 1, 3, 35, N'', N'', 5, 6, 4, 15, 8, 4, 6, 1, 5, 170, 3, N'Chaos Demon - Type II')
GO
INSERT [dbo].[Creatures] ([ID], [AQRating_ID], [AT], [BaseHits], [BaseLevel], [BaseMove], [Book_ID], [CriticalsIgnore_ID], [Criticals_ID], [DB], [Description], [Habitat], [HitMod_ID], [IQ_ID], [LevelMod_ID], [MMBonus], [MSRating_ID], [MaxEncountered], [MaxPace_ID], [MinEncountered], [Outlook_ID], [PageNumber], [Size_ID], [TypeName]) VALUES (618, 7, 3, 30, 3, 60, 2, 1, 1, 30, N'', N'', 4, 1, 3, 30, 6, 20, 5, 2, 1, 78, 2, N'Great Spider Lesser')
GO
INSERT [dbo].[Creatures] ([ID], [AQRating_ID], [AT], [BaseHits], [BaseLevel], [BaseMove], [Book_ID], [CriticalsIgnore_ID], [Criticals_ID], [DB], [Description], [Habitat], [HitMod_ID], [IQ_ID], [LevelMod_ID], [MMBonus], [MSRating_ID], [MaxEncountered], [MaxPace_ID], [MinEncountered], [Outlook_ID], [PageNumber], [Size_ID], [TypeName]) VALUES (619, 7, 4, 160, 8, 80, 2, 1, 2, 40, N'', N'', 6, 4, 6, 20, 6, 10, 4, 1, 1, 78, 3, N'Great Spider Greater')
GO
INSERT [dbo].[Creatures] ([ID], [AQRating_ID], [AT], [BaseHits], [BaseLevel], [BaseMove], [Book_ID], [CriticalsIgnore_ID], [Criticals_ID], [DB], [Description], [Habitat], [HitMod_ID], [IQ_ID], [LevelMod_ID], [MMBonus], [MSRating_ID], [MaxEncountered], [MaxPace_ID], [MinEncountered], [Outlook_ID], [PageNumber], [Size_ID], [TypeName]) VALUES (620, 8, 12, 350, 20, 100, 2, 2, 4, 60, N'', N'', 7, 10, 7, 10, 7, 1, 6, 1, 7, 78, 4, N'Great Spider Major')
GO
INSERT [dbo].[Creatures] ([ID], [AQRating_ID], [AT], [BaseHits], [BaseLevel], [BaseMove], [Book_ID], [CriticalsIgnore_ID], [Criticals_ID], [DB], [Description], [Habitat], [HitMod_ID], [IQ_ID], [LevelMod_ID], [MMBonus], [MSRating_ID], [MaxEncountered], [MaxPace_ID], [MinEncountered], [Outlook_ID], [PageNumber], [Size_ID], [TypeName]) VALUES (621, 5, 1, 25, 1, 40, 2, 3, 2, 0, N'', N'', 6, 1, 1, 0, 3, 20, 4, 2, 5, 195, 3, N'Skeleton Minor')
GO
INSERT [dbo].[Creatures] ([ID], [AQRating_ID], [AT], [BaseHits], [BaseLevel], [BaseMove], [Book_ID], [CriticalsIgnore_ID], [Criticals_ID], [DB], [Description], [Habitat], [HitMod_ID], [IQ_ID], [LevelMod_ID], [MMBonus], [MSRating_ID], [MaxEncountered], [MaxPace_ID], [MinEncountered], [Outlook_ID], [PageNumber], [Size_ID], [TypeName]) VALUES (622, 6, 1, 55, 3, 60, 2, 3, 2, 10, N'', N'', 5, 1, 8, 0, 5, 10, 4, 1, 5, 195, 3, N'Skeleton Lesser')
GO
INSERT [dbo].[Creatures] ([ID], [AQRating_ID], [AT], [BaseHits], [BaseLevel], [BaseMove], [Book_ID], [CriticalsIgnore_ID], [Criticals_ID], [DB], [Description], [Habitat], [HitMod_ID], [IQ_ID], [LevelMod_ID], [MMBonus], [MSRating_ID], [MaxEncountered], [MaxPace_ID], [MinEncountered], [Outlook_ID], [PageNumber], [Size_ID], [TypeName]) VALUES (623, 7, 1, 100, 5, 80, 2, 3, 2, 30, N'', N'', 6, 1, 8, 10, 6, 5, 4, 1, 5, 195, 3, N'Skeleton Greater')
GO
INSERT [dbo].[Creatures] ([ID], [AQRating_ID], [AT], [BaseHits], [BaseLevel], [BaseMove], [Book_ID], [CriticalsIgnore_ID], [Criticals_ID], [DB], [Description], [Habitat], [HitMod_ID], [IQ_ID], [LevelMod_ID], [MMBonus], [MSRating_ID], [MaxEncountered], [MaxPace_ID], [MinEncountered], [Outlook_ID], [PageNumber], [Size_ID], [TypeName]) VALUES (624, 8, 1, 135, 8, 90, 2, 3, 3, 70, N'', N'', 7, 7, 8, 10, 6, 1, 5, 1, 8, 196, 3, N'Skeleton Lord')
GO
SET IDENTITY_INSERT [dbo].[Creatures] OFF
GO
SET IDENTITY_INSERT [dbo].[CriticalAffects] ON 
GO
INSERT [dbo].[CriticalAffects] ([ID], [Actor_ID], [IsStunned], [Negative], [Parry], [ParryNegative], [TimeEnd], [TimeStart]) VALUES (2, 85, 1, 0, N'No_Parry', 0, 19.437863777089785, 14.174705882352942)
GO
INSERT [dbo].[CriticalAffects] ([ID], [Actor_ID], [IsStunned], [Negative], [Parry], [ParryNegative], [TimeEnd], [TimeStart]) VALUES (3, 85, 0, 0, N'Must_Parry', -10, 0, 0)
GO
INSERT [dbo].[CriticalAffects] ([ID], [Actor_ID], [IsStunned], [Negative], [Parry], [ParryNegative], [TimeEnd], [TimeStart]) VALUES (4, 84, 0, 20, N'Fine', 0, 20.696445012787724, 14.174705882352942)
GO
INSERT [dbo].[CriticalAffects] ([ID], [Actor_ID], [IsStunned], [Negative], [Parry], [ParryNegative], [TimeEnd], [TimeStart]) VALUES (5, 84, 0, 20, N'Fine', 0, 0, 0)
GO
INSERT [dbo].[CriticalAffects] ([ID], [Actor_ID], [IsStunned], [Negative], [Parry], [ParryNegative], [TimeEnd], [TimeStart]) VALUES (6, 84, 0, 10, N'Fine', 0, 0, 0)
GO
SET IDENTITY_INSERT [dbo].[CriticalAffects] OFF
GO
SET IDENTITY_INSERT [dbo].[Games] ON 
GO
INSERT [dbo].[Games] ([ID], [CurrentTime], [GM_ID], [Name]) VALUES (1, 0, N'07b11ac8-3fd6-4195-9744-e041aa644a82', N'New Game 1')
GO
INSERT [dbo].[Games] ([ID], [CurrentTime], [GM_ID], [Name]) VALUES (15, 16.98369464639789, N'07b11ac8-3fd6-4195-9744-e041aa644a82', N'Test')
GO
SET IDENTITY_INSERT [dbo].[Games] OFF
GO
SET IDENTITY_INSERT [dbo].[PsychicRefractoryPeriodMod] ON 
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (1, 50, 9, 0, 1)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (2, 8, 6, 0, 1)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (3, 5, 5, -10, 1)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (4, 5, 5, 0, 2)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (5, 4, 4, -20, 1)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (6, 4, 4, 0, 2)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (7, 3, 3, -30, 1)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (8, 3, 3, 0, 2)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (9, 2, 2, -35, 1)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (10, 2, 2, -10, 2)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (11, 2, 2, 0, 3)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (12, 1, 1, -45, 1)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (13, 1, 1, -20, 2)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (14, 1, 1, 0, 3)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (15, 0, 0, -55, 1)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (16, 0, 0, -30, 2)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (17, 0, 0, 0, 3)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (18, -1, -1, -85, 1)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (19, -1, -1, -60, 2)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (20, -1, -1, -30, 3)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (21, -1, -1, -25, 4)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (22, -1, -1, -20, 5)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (23, -1, -1, -15, 6)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (24, -1, -1, -10, 7)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (25, -1, -1, -5, 8)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (26, -1, -1, 0, 9)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (27, -2, -2, -90, 1)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (28, -2, -2, -65, 2)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (29, -2, -2, -35, 3)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (30, -2, -2, -30, 4)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (31, -2, -2, -25, 5)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (32, -2, -2, -20, 6)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (33, -2, -2, -15, 7)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (34, -2, -2, -10, 8)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (35, -2, -2, -5, 9)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (36, -2, -2, 0, 10)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (37, -3, -3, -95, 1)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (38, -3, -3, -70, 2)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (39, -3, -3, -40, 3)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (40, -3, -3, -35, 4)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (41, -3, -3, -30, 5)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (42, -3, -3, -25, 6)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (43, -3, -3, -20, 7)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (44, -3, -3, -15, 8)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (45, -3, -3, -10, 9)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (46, -3, -3, -5, 10)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (47, -4, -4, -100, 1)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (48, -4, -4, -75, 2)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (49, -4, -4, -45, 3)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (50, -4, -4, -40, 4)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (51, -4, -4, -35, 5)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (52, -4, -4, -30, 6)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (53, -4, -4, -25, 7)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (54, -4, -4, -20, 8)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (55, -4, -4, -15, 9)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (56, -4, -4, -10, 10)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (57, -5, -5, -105, 1)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (58, -5, -5, -80, 2)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (59, -5, -5, -50, 3)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (60, -5, -5, -45, 4)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (61, -5, -5, -40, 5)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (62, -5, -5, -35, 6)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (63, -5, -5, -30, 7)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (64, -5, -5, -25, 8)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (65, -5, -5, -20, 9)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (66, -5, -5, -15, 10)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (67, -6, -7, -125, 1)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (68, -6, -7, -100, 2)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (69, -6, -7, -70, 3)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (70, -6, -7, -65, 4)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (71, -6, -7, -60, 5)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (72, -6, -7, -55, 6)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (73, -6, -7, -50, 7)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (74, -6, -7, -45, 8)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (75, -6, -7, -40, 9)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (76, -6, -7, -35, 10)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (77, -8, -10, -150, 1)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (78, -8, -10, -125, 2)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (79, -8, -10, -95, 3)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (80, -8, -10, -90, 4)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (81, -8, -10, -85, 5)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (82, -8, -10, -80, 6)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (83, -8, -10, -75, 7)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (84, -8, -10, -70, 8)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (85, -8, -10, -65, 9)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (86, -8, -10, -60, 10)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (87, -11, -15, -175, 1)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (88, -11, -15, -150, 2)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (89, -11, -15, -120, 3)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (90, -11, -15, -115, 4)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (91, -11, -15, -110, 5)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (92, -11, -15, -105, 6)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (93, -11, -15, -100, 7)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (94, -11, -15, -95, 8)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (95, -11, -15, -90, 9)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (96, -11, -15, -85, 10)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (97, -16, -20, -225, 1)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (98, -16, -20, -200, 2)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (99, -16, -20, -170, 3)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (100, -16, -20, -165, 4)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (101, -16, -20, -160, 5)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (102, -16, -20, -155, 6)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (103, -16, -20, -150, 7)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (104, -16, -20, -145, 8)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (105, -16, -20, -140, 9)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (106, -16, -20, -135, 10)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (107, -21, -50, -275, 1)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (108, -21, -50, -250, 2)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (109, -21, -50, -220, 3)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (110, -21, -50, -215, 4)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (111, -21, -50, -210, 5)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (112, -21, -50, -205, 6)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (113, -21, -50, -200, 7)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (114, -21, -50, -195, 8)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (115, -21, -50, -190, 9)
GO
INSERT [dbo].[PsychicRefractoryPeriodMod] ([ID], [LevelMax], [LevelMin], [Mod], [RoundNumber]) VALUES (116, -21, -50, -185, 10)
GO
SET IDENTITY_INSERT [dbo].[PsychicRefractoryPeriodMod] OFF
GO
SET IDENTITY_INSERT [dbo].[Weapons] ON 
GO
INSERT [dbo].[Weapons] ([ID], [Bonus], [Is2Handed], [MaxWeight], [MinWeight], [Name], [OB], [TiedToID], [Weight]) VALUES (65, 10, 0, 0, 0, N'Scimitar', 134, 56, 4)
GO
INSERT [dbo].[Weapons] ([ID], [Bonus], [Is2Handed], [MaxWeight], [MinWeight], [Name], [OB], [TiedToID], [Weight]) VALUES (68, 0, 0, 0, 0, N'Broadsword', 141, 59, 5)
GO
INSERT [dbo].[Weapons] ([ID], [Bonus], [Is2Handed], [MaxWeight], [MinWeight], [Name], [OB], [TiedToID], [Weight]) VALUES (69, 0, 0, 0, 0, N'Club', 142, 59, 5)
GO
INSERT [dbo].[Weapons] ([ID], [Bonus], [Is2Handed], [MaxWeight], [MinWeight], [Name], [OB], [TiedToID], [Weight]) VALUES (70, 0, 0, 0, 0, N'Long Bow', 122, 59, 3)
GO
INSERT [dbo].[Weapons] ([ID], [Bonus], [Is2Handed], [MaxWeight], [MinWeight], [Name], [OB], [TiedToID], [Weight]) VALUES (71, 0, 0, 0, 0, N'Broadsword', 130, 61, 4)
GO
INSERT [dbo].[Weapons] ([ID], [Bonus], [Is2Handed], [MaxWeight], [MinWeight], [Name], [OB], [TiedToID], [Weight]) VALUES (72, 0, 0, 0, 0, N'Dagger', 66, 62, 1)
GO
INSERT [dbo].[Weapons] ([ID], [Bonus], [Is2Handed], [MaxWeight], [MinWeight], [Name], [OB], [TiedToID], [Weight]) VALUES (73, 0, 0, 0, 0, N'Dagger Thrown', 41, 62, 1)
GO
INSERT [dbo].[Weapons] ([ID], [Bonus], [Is2Handed], [MaxWeight], [MinWeight], [Name], [OB], [TiedToID], [Weight]) VALUES (74, 0, 0, 0, 0, N'Short Bow', 41, 62, 2)
GO
INSERT [dbo].[Weapons] ([ID], [Bonus], [Is2Handed], [MaxWeight], [MinWeight], [Name], [OB], [TiedToID], [Weight]) VALUES (75, 0, 0, 0, 0, N'Dagger', 86, 63, 1)
GO
INSERT [dbo].[Weapons] ([ID], [Bonus], [Is2Handed], [MaxWeight], [MinWeight], [Name], [OB], [TiedToID], [Weight]) VALUES (76, 0, 0, 0, 0, N'Dagger Thrown', 98, 63, 1)
GO
INSERT [dbo].[Weapons] ([ID], [Bonus], [Is2Handed], [MaxWeight], [MinWeight], [Name], [OB], [TiedToID], [Weight]) VALUES (77, 0, 0, 0, 0, N'Short Bow', 55, 63, 2)
GO
INSERT [dbo].[Weapons] ([ID], [Bonus], [Is2Handed], [MaxWeight], [MinWeight], [Name], [OB], [TiedToID], [Weight]) VALUES (78, 10, 0, 0, 0, N'Scimitar', 88, 64, 2)
GO
INSERT [dbo].[Weapons] ([ID], [Bonus], [Is2Handed], [MaxWeight], [MinWeight], [Name], [OB], [TiedToID], [Weight]) VALUES (79, 0, 0, 0, 0, N'Martial Arts Sweeps', 59, 65, 0)
GO
INSERT [dbo].[Weapons] ([ID], [Bonus], [Is2Handed], [MaxWeight], [MinWeight], [Name], [OB], [TiedToID], [Weight]) VALUES (80, 0, 0, 0, 0, N'Martial Arts Strikes', 59, 65, 0)
GO
INSERT [dbo].[Weapons] ([ID], [Bonus], [Is2Handed], [MaxWeight], [MinWeight], [Name], [OB], [TiedToID], [Weight]) VALUES (81, 0, 0, 0, 0, N'Rapier', 27, 65, 1)
GO
INSERT [dbo].[Weapons] ([ID], [Bonus], [Is2Handed], [MaxWeight], [MinWeight], [Name], [OB], [TiedToID], [Weight]) VALUES (82, 0, 1, 0, 0, N'Battle Ax', 96, 55, 10)
GO
INSERT [dbo].[Weapons] ([ID], [Bonus], [Is2Handed], [MaxWeight], [MinWeight], [Name], [OB], [TiedToID], [Weight]) VALUES (83, 0, 0, 0, 0, N'Broadsword', 56, 57, 5)
GO
INSERT [dbo].[Weapons] ([ID], [Bonus], [Is2Handed], [MaxWeight], [MinWeight], [Name], [OB], [TiedToID], [Weight]) VALUES (84, 0, 0, 0, 0, N'Blade Dancer', 81, 66, 4)
GO
INSERT [dbo].[Weapons] ([ID], [Bonus], [Is2Handed], [MaxWeight], [MinWeight], [Name], [OB], [TiedToID], [Weight]) VALUES (85, 0, 0, 0, 0, N'Scimitar (Left)', 83, 66, 4)
GO
INSERT [dbo].[Weapons] ([ID], [Bonus], [Is2Handed], [MaxWeight], [MinWeight], [Name], [OB], [TiedToID], [Weight]) VALUES (86, 0, 0, 0, 0, N'Scimitar (Right)', 81, 66, 4)
GO
INSERT [dbo].[Weapons] ([ID], [Bonus], [Is2Handed], [MaxWeight], [MinWeight], [Name], [OB], [TiedToID], [Weight]) VALUES (87, 0, 0, 0, 0, N'Broadsword', 54, 66, 4)
GO
INSERT [dbo].[Weapons] ([ID], [Bonus], [Is2Handed], [MaxWeight], [MinWeight], [Name], [OB], [TiedToID], [Weight]) VALUES (88, 0, 0, 0, 0, N'Broadsword', 26, 67, 5)
GO
INSERT [dbo].[Weapons] ([ID], [Bonus], [Is2Handed], [MaxWeight], [MinWeight], [Name], [OB], [TiedToID], [Weight]) VALUES (89, 0, 0, 0, 0, N'Quarter staff', 31, 67, 5)
GO
INSERT [dbo].[Weapons] ([ID], [Bonus], [Is2Handed], [MaxWeight], [MinWeight], [Name], [OB], [TiedToID], [Weight]) VALUES (90, 0, 0, 0, 0, N'Dagger', 111, 61, 1)
GO
INSERT [dbo].[Weapons] ([ID], [Bonus], [Is2Handed], [MaxWeight], [MinWeight], [Name], [OB], [TiedToID], [Weight]) VALUES (91, 0, 0, 0, 0, N'Scimitar', 113, 61, 4)
GO
INSERT [dbo].[Weapons] ([ID], [Bonus], [Is2Handed], [MaxWeight], [MinWeight], [Name], [OB], [TiedToID], [Weight]) VALUES (92, 0, 0, 0, 0, N'Club', 89, 61, 5)
GO
INSERT [dbo].[Weapons] ([ID], [Bonus], [Is2Handed], [MaxWeight], [MinWeight], [Name], [OB], [TiedToID], [Weight]) VALUES (93, 0, 0, 0, 0, N'War Hammer', 89, 61, 8)
GO
INSERT [dbo].[Weapons] ([ID], [Bonus], [Is2Handed], [MaxWeight], [MinWeight], [Name], [OB], [TiedToID], [Weight]) VALUES (94, 0, 0, 0, 0, N'Long Bow', 53, 61, 4)
GO
INSERT [dbo].[Weapons] ([ID], [Bonus], [Is2Handed], [MaxWeight], [MinWeight], [Name], [OB], [TiedToID], [Weight]) VALUES (95, 0, 0, 0, 0, N'General weapon', 0, NULL, 0)
GO
INSERT [dbo].[Weapons] ([ID], [Bonus], [Is2Handed], [MaxWeight], [MinWeight], [Name], [OB], [TiedToID], [Weight]) VALUES (96, 0, 0, 0, 0, N'General weapon', 0, NULL, 0)
GO
INSERT [dbo].[Weapons] ([ID], [Bonus], [Is2Handed], [MaxWeight], [MinWeight], [Name], [OB], [TiedToID], [Weight]) VALUES (97, 0, 0, 0, 0, N'General weapon', 0, NULL, 0)
GO
INSERT [dbo].[Weapons] ([ID], [Bonus], [Is2Handed], [MaxWeight], [MinWeight], [Name], [OB], [TiedToID], [Weight]) VALUES (98, 0, 0, 0, 0, N'General weapon', 0, NULL, 0)
GO
INSERT [dbo].[Weapons] ([ID], [Bonus], [Is2Handed], [MaxWeight], [MinWeight], [Name], [OB], [TiedToID], [Weight]) VALUES (99, 0, 0, 0, 0, N'General weapon', 0, NULL, 0)
GO
INSERT [dbo].[Weapons] ([ID], [Bonus], [Is2Handed], [MaxWeight], [MinWeight], [Name], [OB], [TiedToID], [Weight]) VALUES (100, 0, 0, 0, 0, N'General weapon', 0, NULL, 0)
GO
INSERT [dbo].[Weapons] ([ID], [Bonus], [Is2Handed], [MaxWeight], [MinWeight], [Name], [OB], [TiedToID], [Weight]) VALUES (101, 0, 0, 0, 0, N'rock', 0, NULL, 0)
GO
INSERT [dbo].[Weapons] ([ID], [Bonus], [Is2Handed], [MaxWeight], [MinWeight], [Name], [OB], [TiedToID], [Weight]) VALUES (102, 0, 0, 0, 0, N'General weapon', 0, NULL, 0)
GO
INSERT [dbo].[Weapons] ([ID], [Bonus], [Is2Handed], [MaxWeight], [MinWeight], [Name], [OB], [TiedToID], [Weight]) VALUES (103, 0, 0, 0, 0, N'rock', 0, NULL, 0)
GO
INSERT [dbo].[Weapons] ([ID], [Bonus], [Is2Handed], [MaxWeight], [MinWeight], [Name], [OB], [TiedToID], [Weight]) VALUES (104, 0, 0, 0, 0, N'General weapon', 0, NULL, 0)
GO
INSERT [dbo].[Weapons] ([ID], [Bonus], [Is2Handed], [MaxWeight], [MinWeight], [Name], [OB], [TiedToID], [Weight]) VALUES (105, 0, 0, 0, 0, N'rock', 0, NULL, 0)
GO
INSERT [dbo].[Weapons] ([ID], [Bonus], [Is2Handed], [MaxWeight], [MinWeight], [Name], [OB], [TiedToID], [Weight]) VALUES (106, 0, 0, 0, 0, N'General weapon', 0, NULL, 0)
GO
INSERT [dbo].[Weapons] ([ID], [Bonus], [Is2Handed], [MaxWeight], [MinWeight], [Name], [OB], [TiedToID], [Weight]) VALUES (107, 0, 0, 0, 0, N'rock', 0, NULL, 0)
GO
INSERT [dbo].[Weapons] ([ID], [Bonus], [Is2Handed], [MaxWeight], [MinWeight], [Name], [OB], [TiedToID], [Weight]) VALUES (108, 0, 0, 0, 0, N'General weapon', 0, NULL, 0)
GO
INSERT [dbo].[Weapons] ([ID], [Bonus], [Is2Handed], [MaxWeight], [MinWeight], [Name], [OB], [TiedToID], [Weight]) VALUES (109, 0, 0, 0, 0, N'General weapon', 0, NULL, 0)
GO
INSERT [dbo].[Weapons] ([ID], [Bonus], [Is2Handed], [MaxWeight], [MinWeight], [Name], [OB], [TiedToID], [Weight]) VALUES (110, 0, 0, 0, 0, N'General weapon', 0, NULL, 0)
GO
INSERT [dbo].[Weapons] ([ID], [Bonus], [Is2Handed], [MaxWeight], [MinWeight], [Name], [OB], [TiedToID], [Weight]) VALUES (111, 0, 0, 0, 0, N'rock', 0, NULL, 0)
GO
INSERT [dbo].[Weapons] ([ID], [Bonus], [Is2Handed], [MaxWeight], [MinWeight], [Name], [OB], [TiedToID], [Weight]) VALUES (112, 0, 0, 0, 0, N'General weapon', 0, NULL, 0)
GO
INSERT [dbo].[Weapons] ([ID], [Bonus], [Is2Handed], [MaxWeight], [MinWeight], [Name], [OB], [TiedToID], [Weight]) VALUES (113, 0, 0, 0, 0, N'General weapon', 0, NULL, 0)
GO
INSERT [dbo].[Weapons] ([ID], [Bonus], [Is2Handed], [MaxWeight], [MinWeight], [Name], [OB], [TiedToID], [Weight]) VALUES (114, 0, 0, 0, 0, N'General weapon', 0, NULL, 0)
GO
INSERT [dbo].[Weapons] ([ID], [Bonus], [Is2Handed], [MaxWeight], [MinWeight], [Name], [OB], [TiedToID], [Weight]) VALUES (115, 0, 0, 0, 0, N'General weapon', 0, NULL, 0)
GO
INSERT [dbo].[Weapons] ([ID], [Bonus], [Is2Handed], [MaxWeight], [MinWeight], [Name], [OB], [TiedToID], [Weight]) VALUES (116, 0, 0, 0, 0, N'General weapon', 0, NULL, 0)
GO
INSERT [dbo].[Weapons] ([ID], [Bonus], [Is2Handed], [MaxWeight], [MinWeight], [Name], [OB], [TiedToID], [Weight]) VALUES (117, 0, 0, 0, 0, N'Akume', 119, 68, 0)
GO
INSERT [dbo].[Weapons] ([ID], [Bonus], [Is2Handed], [MaxWeight], [MinWeight], [Name], [OB], [TiedToID], [Weight]) VALUES (118, 0, 0, 0, 0, N'New', 0, NULL, 0)
GO
SET IDENTITY_INSERT [dbo].[Weapons] OFF
GO
/****** Object:  Index [IX_Actions_ActionGroup_ID]    Script Date: 8/1/2021 12:02:59 AM ******/
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[Actions]') AND name = N'IX_Actions_ActionGroup_ID')
CREATE NONCLUSTERED INDEX [IX_Actions_ActionGroup_ID] ON [dbo].[Actions]
(
	[ActionGroup_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Actions_NextAction_ID]    Script Date: 8/1/2021 12:02:59 AM ******/
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[Actions]') AND name = N'IX_Actions_NextAction_ID')
CREATE NONCLUSTERED INDEX [IX_Actions_NextAction_ID] ON [dbo].[Actions]
(
	[NextAction_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Actors_BaseCharacter_ID]    Script Date: 8/1/2021 12:02:59 AM ******/
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[Actors]') AND name = N'IX_Actors_BaseCharacter_ID')
CREATE NONCLUSTERED INDEX [IX_Actors_BaseCharacter_ID] ON [dbo].[Actors]
(
	[BaseCharacter_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Actors_BaseCreature_ID]    Script Date: 8/1/2021 12:02:59 AM ******/
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[Actors]') AND name = N'IX_Actors_BaseCreature_ID')
CREATE NONCLUSTERED INDEX [IX_Actors_BaseCreature_ID] ON [dbo].[Actors]
(
	[BaseCreature_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Actors_Game_ID]    Script Date: 8/1/2021 12:02:59 AM ******/
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[Actors]') AND name = N'IX_Actors_Game_ID')
CREATE NONCLUSTERED INDEX [IX_Actors_Game_ID] ON [dbo].[Actors]
(
	[Game_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_ActorsActions_BaseAction_ID]    Script Date: 8/1/2021 12:02:59 AM ******/
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[ActorsActions]') AND name = N'IX_ActorsActions_BaseAction_ID')
CREATE NONCLUSTERED INDEX [IX_ActorsActions_BaseAction_ID] ON [dbo].[ActorsActions]
(
	[BaseAction_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_ActorsActions_Critical_ID]    Script Date: 8/1/2021 12:02:59 AM ******/
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[ActorsActions]') AND name = N'IX_ActorsActions_Critical_ID')
CREATE NONCLUSTERED INDEX [IX_ActorsActions_Critical_ID] ON [dbo].[ActorsActions]
(
	[Critical_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_ActorsActions_CurrentAttack_ID]    Script Date: 8/1/2021 12:02:59 AM ******/
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[ActorsActions]') AND name = N'IX_ActorsActions_CurrentAttack_ID')
CREATE NONCLUSTERED INDEX [IX_ActorsActions_CurrentAttack_ID] ON [dbo].[ActorsActions]
(
	[CurrentAttack_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_ActorsActions_Game_ID]    Script Date: 8/1/2021 12:02:59 AM ******/
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[ActorsActions]') AND name = N'IX_ActorsActions_Game_ID')
CREATE NONCLUSTERED INDEX [IX_ActorsActions_Game_ID] ON [dbo].[ActorsActions]
(
	[Game_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_ActorsActions_WhoIsActing_ID]    Script Date: 8/1/2021 12:02:59 AM ******/
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[ActorsActions]') AND name = N'IX_ActorsActions_WhoIsActing_ID')
CREATE NONCLUSTERED INDEX [IX_ActorsActions_WhoIsActing_ID] ON [dbo].[ActorsActions]
(
	[WhoIsActing_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_ActorsAttacks_Actor_ID]    Script Date: 8/1/2021 12:02:59 AM ******/
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[ActorsAttacks]') AND name = N'IX_ActorsAttacks_Actor_ID')
CREATE NONCLUSTERED INDEX [IX_ActorsAttacks_Actor_ID] ON [dbo].[ActorsAttacks]
(
	[Actor_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_ActorsAttacks_Attack_ID]    Script Date: 8/1/2021 12:02:59 AM ******/
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[ActorsAttacks]') AND name = N'IX_ActorsAttacks_Attack_ID')
CREATE NONCLUSTERED INDEX [IX_ActorsAttacks_Attack_ID] ON [dbo].[ActorsAttacks]
(
	[Attack_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Armors_TiedToID]    Script Date: 8/1/2021 12:02:59 AM ******/
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[Armors]') AND name = N'IX_Armors_TiedToID')
CREATE NONCLUSTERED INDEX [IX_Armors_TiedToID] ON [dbo].[Armors]
(
	[TiedToID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Attacks_CreatureOn_ID]    Script Date: 8/1/2021 12:02:59 AM ******/
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[Attacks]') AND name = N'IX_Attacks_CreatureOn_ID')
CREATE NONCLUSTERED INDEX [IX_Attacks_CreatureOn_ID] ON [dbo].[Attacks]
(
	[CreatureOn_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Attacks_NextRoundSuccess_ID]    Script Date: 8/1/2021 12:02:59 AM ******/
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[Attacks]') AND name = N'IX_Attacks_NextRoundSuccess_ID')
CREATE NONCLUSTERED INDEX [IX_Attacks_NextRoundSuccess_ID] ON [dbo].[Attacks]
(
	[NextRoundSuccess_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Attacks_Size_ID]    Script Date: 8/1/2021 12:02:59 AM ******/
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[Attacks]') AND name = N'IX_Attacks_Size_ID')
CREATE NONCLUSTERED INDEX [IX_Attacks_Size_ID] ON [dbo].[Attacks]
(
	[Size_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Attacks_ThisRoundSuccess_ID]    Script Date: 8/1/2021 12:02:59 AM ******/
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[Attacks]') AND name = N'IX_Attacks_ThisRoundSuccess_ID')
CREATE NONCLUSTERED INDEX [IX_Attacks_ThisRoundSuccess_ID] ON [dbo].[Attacks]
(
	[ThisRoundSuccess_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Attacks_Type_ID]    Script Date: 8/1/2021 12:02:59 AM ******/
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[Attacks]') AND name = N'IX_Attacks_Type_ID')
CREATE NONCLUSTERED INDEX [IX_Attacks_Type_ID] ON [dbo].[Attacks]
(
	[Type_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Attacks_UseCriticalInstead_ID]    Script Date: 8/1/2021 12:02:59 AM ******/
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[Attacks]') AND name = N'IX_Attacks_UseCriticalInstead_ID')
CREATE NONCLUSTERED INDEX [IX_Attacks_UseCriticalInstead_ID] ON [dbo].[Attacks]
(
	[UseCriticalInstead_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Attacks_WeaponUsed_ID]    Script Date: 8/1/2021 12:02:59 AM ******/
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[Attacks]') AND name = N'IX_Attacks_WeaponUsed_ID')
CREATE NONCLUSTERED INDEX [IX_Attacks_WeaponUsed_ID] ON [dbo].[Attacks]
(
	[WeaponUsed_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_AttacksAddCrits_AttackID]    Script Date: 8/1/2021 12:02:59 AM ******/
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[AttacksAddCrits]') AND name = N'IX_AttacksAddCrits_AttackID')
CREATE NONCLUSTERED INDEX [IX_AttacksAddCrits_AttackID] ON [dbo].[AttacksAddCrits]
(
	[AttackID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_AttacksAddCrits_Critical_ID]    Script Date: 8/1/2021 12:02:59 AM ******/
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[AttacksAddCrits]') AND name = N'IX_AttacksAddCrits_Critical_ID')
CREATE NONCLUSTERED INDEX [IX_AttacksAddCrits_Critical_ID] ON [dbo].[AttacksAddCrits]
(
	[Critical_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Creature_ConstitutionBonusChartValues_Chart_ID]    Script Date: 8/1/2021 12:02:59 AM ******/
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[Creature_ConstitutionBonusChartValues]') AND name = N'IX_Creature_ConstitutionBonusChartValues_Chart_ID')
CREATE NONCLUSTERED INDEX [IX_Creature_ConstitutionBonusChartValues_Chart_ID] ON [dbo].[Creature_ConstitutionBonusChartValues]
(
	[Chart_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Creature_LevelChartValues_Level_ID]    Script Date: 8/1/2021 12:02:59 AM ******/
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[Creature_LevelChartValues]') AND name = N'IX_Creature_LevelChartValues_Level_ID')
CREATE NONCLUSTERED INDEX [IX_Creature_LevelChartValues_Level_ID] ON [dbo].[Creature_LevelChartValues]
(
	[Level_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Creatures_AQRating_ID]    Script Date: 8/1/2021 12:02:59 AM ******/
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[Creatures]') AND name = N'IX_Creatures_AQRating_ID')
CREATE NONCLUSTERED INDEX [IX_Creatures_AQRating_ID] ON [dbo].[Creatures]
(
	[AQRating_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Creatures_Book_ID]    Script Date: 8/1/2021 12:02:59 AM ******/
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[Creatures]') AND name = N'IX_Creatures_Book_ID')
CREATE NONCLUSTERED INDEX [IX_Creatures_Book_ID] ON [dbo].[Creatures]
(
	[Book_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Creatures_Criticals_ID]    Script Date: 8/1/2021 12:02:59 AM ******/
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[Creatures]') AND name = N'IX_Creatures_Criticals_ID')
CREATE NONCLUSTERED INDEX [IX_Creatures_Criticals_ID] ON [dbo].[Creatures]
(
	[Criticals_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Creatures_CriticalsIgnore_ID]    Script Date: 8/1/2021 12:02:59 AM ******/
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[Creatures]') AND name = N'IX_Creatures_CriticalsIgnore_ID')
CREATE NONCLUSTERED INDEX [IX_Creatures_CriticalsIgnore_ID] ON [dbo].[Creatures]
(
	[CriticalsIgnore_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Creatures_HitMod_ID]    Script Date: 8/1/2021 12:02:59 AM ******/
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[Creatures]') AND name = N'IX_Creatures_HitMod_ID')
CREATE NONCLUSTERED INDEX [IX_Creatures_HitMod_ID] ON [dbo].[Creatures]
(
	[HitMod_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Creatures_IQ_ID]    Script Date: 8/1/2021 12:02:59 AM ******/
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[Creatures]') AND name = N'IX_Creatures_IQ_ID')
CREATE NONCLUSTERED INDEX [IX_Creatures_IQ_ID] ON [dbo].[Creatures]
(
	[IQ_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Creatures_LevelMod_ID]    Script Date: 8/1/2021 12:02:59 AM ******/
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[Creatures]') AND name = N'IX_Creatures_LevelMod_ID')
CREATE NONCLUSTERED INDEX [IX_Creatures_LevelMod_ID] ON [dbo].[Creatures]
(
	[LevelMod_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Creatures_MaxPace_ID]    Script Date: 8/1/2021 12:02:59 AM ******/
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[Creatures]') AND name = N'IX_Creatures_MaxPace_ID')
CREATE NONCLUSTERED INDEX [IX_Creatures_MaxPace_ID] ON [dbo].[Creatures]
(
	[MaxPace_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Creatures_MSRating_ID]    Script Date: 8/1/2021 12:02:59 AM ******/
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[Creatures]') AND name = N'IX_Creatures_MSRating_ID')
CREATE NONCLUSTERED INDEX [IX_Creatures_MSRating_ID] ON [dbo].[Creatures]
(
	[MSRating_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Creatures_Outlook_ID]    Script Date: 8/1/2021 12:02:59 AM ******/
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[Creatures]') AND name = N'IX_Creatures_Outlook_ID')
CREATE NONCLUSTERED INDEX [IX_Creatures_Outlook_ID] ON [dbo].[Creatures]
(
	[Outlook_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Creatures_Size_ID]    Script Date: 8/1/2021 12:02:59 AM ******/
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[Creatures]') AND name = N'IX_Creatures_Size_ID')
CREATE NONCLUSTERED INDEX [IX_Creatures_Size_ID] ON [dbo].[Creatures]
(
	[Size_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_CriticalAffects_Actor_ID]    Script Date: 8/1/2021 12:02:59 AM ******/
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[CriticalAffects]') AND name = N'IX_CriticalAffects_Actor_ID')
CREATE NONCLUSTERED INDEX [IX_CriticalAffects_Actor_ID] ON [dbo].[CriticalAffects]
(
	[Actor_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Weapons_TiedToID]    Script Date: 8/1/2021 12:02:59 AM ******/
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[Weapons]') AND name = N'IX_Weapons_TiedToID')
CREATE NONCLUSTERED INDEX [IX_Weapons_TiedToID] ON [dbo].[Weapons]
(
	[TiedToID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ActorsActions_BasePercent]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ActorsActions] ADD  CONSTRAINT [DF_ActorsActions_BasePercent]  DEFAULT ((1)) FOR [BasePercent]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ActorsActions_Bleeder]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ActorsActions] ADD  CONSTRAINT [DF_ActorsActions_Bleeder]  DEFAULT ((0)) FOR [Bleeder]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ActorsActions_Count]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ActorsActions] ADD  CONSTRAINT [DF_ActorsActions_Count]  DEFAULT ((0)) FOR [Count]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ActorsActions_CriticalGiven]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ActorsActions] ADD  CONSTRAINT [DF_ActorsActions_CriticalGiven]  DEFAULT ((0)) FOR [CriticalGiven]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ActorsActions_CurrentModifier]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ActorsActions] ADD  CONSTRAINT [DF_ActorsActions_CurrentModifier]  DEFAULT ((0)) FOR [CurrentModifier]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ActorsActions_EndTime]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ActorsActions] ADD  CONSTRAINT [DF_ActorsActions_EndTime]  DEFAULT ((0)) FOR [EndTime]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ActorsActions_HastedPercent]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ActorsActions] ADD  CONSTRAINT [DF_ActorsActions_HastedPercent]  DEFAULT ((0)) FOR [HastedPercent]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ActorsActions_Interrupted]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ActorsActions] ADD  CONSTRAINT [DF_ActorsActions_Interrupted]  DEFAULT ((0)) FOR [Interrupted]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ActorsActions_IsHasted]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ActorsActions] ADD  CONSTRAINT [DF_ActorsActions_IsHasted]  DEFAULT ((0)) FOR [IsHasted]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ActorsActions_IsSlowed]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ActorsActions] ADD  CONSTRAINT [DF_ActorsActions_IsSlowed]  DEFAULT ((0)) FOR [IsSlowed]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ActorsActions_LeftPercent]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ActorsActions] ADD  CONSTRAINT [DF_ActorsActions_LeftPercent]  DEFAULT ((0)) FOR [LeftPercent]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ActorsActions_LevelDifference]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ActorsActions] ADD  CONSTRAINT [DF_ActorsActions_LevelDifference]  DEFAULT ((0)) FOR [LevelDifference]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ActorsActions_StartTime]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ActorsActions] ADD  CONSTRAINT [DF_ActorsActions_StartTime]  DEFAULT ((0)) FOR [StartTime]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ActorsActions_TotalRounds]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ActorsActions] ADD  CONSTRAINT [DF_ActorsActions_TotalRounds]  DEFAULT ((0)) FOR [TotalRounds]
END
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_Actions_ActionGroups_ActionGroup_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[Actions]'))
ALTER TABLE [dbo].[Actions]  WITH CHECK ADD  CONSTRAINT [FK_Actions_ActionGroups_ActionGroup_ID] FOREIGN KEY([ActionGroup_ID])
REFERENCES [dbo].[ActionGroups] ([ID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_Actions_ActionGroups_ActionGroup_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[Actions]'))
ALTER TABLE [dbo].[Actions] CHECK CONSTRAINT [FK_Actions_ActionGroups_ActionGroup_ID]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_Actions_Actions_NextAction_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[Actions]'))
ALTER TABLE [dbo].[Actions]  WITH CHECK ADD  CONSTRAINT [FK_Actions_Actions_NextAction_ID] FOREIGN KEY([NextAction_ID])
REFERENCES [dbo].[Actions] ([ID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_Actions_Actions_NextAction_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[Actions]'))
ALTER TABLE [dbo].[Actions] CHECK CONSTRAINT [FK_Actions_Actions_NextAction_ID]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_Actors_Characters_BaseCharacter_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[Actors]'))
ALTER TABLE [dbo].[Actors]  WITH CHECK ADD  CONSTRAINT [FK_Actors_Characters_BaseCharacter_ID] FOREIGN KEY([BaseCharacter_ID])
REFERENCES [dbo].[Characters] ([ID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_Actors_Characters_BaseCharacter_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[Actors]'))
ALTER TABLE [dbo].[Actors] CHECK CONSTRAINT [FK_Actors_Characters_BaseCharacter_ID]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_Actors_Creatures_BaseCreature_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[Actors]'))
ALTER TABLE [dbo].[Actors]  WITH CHECK ADD  CONSTRAINT [FK_Actors_Creatures_BaseCreature_ID] FOREIGN KEY([BaseCreature_ID])
REFERENCES [dbo].[Creatures] ([ID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_Actors_Creatures_BaseCreature_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[Actors]'))
ALTER TABLE [dbo].[Actors] CHECK CONSTRAINT [FK_Actors_Creatures_BaseCreature_ID]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_Actors_Games_Game_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[Actors]'))
ALTER TABLE [dbo].[Actors]  WITH CHECK ADD  CONSTRAINT [FK_Actors_Games_Game_ID] FOREIGN KEY([Game_ID])
REFERENCES [dbo].[Games] ([ID])
ON DELETE CASCADE
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_Actors_Games_Game_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[Actors]'))
ALTER TABLE [dbo].[Actors] CHECK CONSTRAINT [FK_Actors_Games_Game_ID]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_ActorsActions_Actions_BaseAction_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[ActorsActions]'))
ALTER TABLE [dbo].[ActorsActions]  WITH CHECK ADD  CONSTRAINT [FK_ActorsActions_Actions_BaseAction_ID] FOREIGN KEY([BaseAction_ID])
REFERENCES [dbo].[Actions] ([ID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_ActorsActions_Actions_BaseAction_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[ActorsActions]'))
ALTER TABLE [dbo].[ActorsActions] CHECK CONSTRAINT [FK_ActorsActions_Actions_BaseAction_ID]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_ActorsActions_Actors_WhoIsActing_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[ActorsActions]'))
ALTER TABLE [dbo].[ActorsActions]  WITH CHECK ADD  CONSTRAINT [FK_ActorsActions_Actors_WhoIsActing_ID] FOREIGN KEY([WhoIsActing_ID])
REFERENCES [dbo].[Actors] ([ID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_ActorsActions_Actors_WhoIsActing_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[ActorsActions]'))
ALTER TABLE [dbo].[ActorsActions] CHECK CONSTRAINT [FK_ActorsActions_Actors_WhoIsActing_ID]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_ActorsActions_Attacks_CurrentAttack_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[ActorsActions]'))
ALTER TABLE [dbo].[ActorsActions]  WITH CHECK ADD  CONSTRAINT [FK_ActorsActions_Attacks_CurrentAttack_ID] FOREIGN KEY([CurrentAttack_ID])
REFERENCES [dbo].[Attacks] ([ID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_ActorsActions_Attacks_CurrentAttack_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[ActorsActions]'))
ALTER TABLE [dbo].[ActorsActions] CHECK CONSTRAINT [FK_ActorsActions_Attacks_CurrentAttack_ID]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_ActorsActions_CriticalAffects_Critical_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[ActorsActions]'))
ALTER TABLE [dbo].[ActorsActions]  WITH CHECK ADD  CONSTRAINT [FK_ActorsActions_CriticalAffects_Critical_ID] FOREIGN KEY([Critical_ID])
REFERENCES [dbo].[CriticalAffects] ([ID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_ActorsActions_CriticalAffects_Critical_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[ActorsActions]'))
ALTER TABLE [dbo].[ActorsActions] CHECK CONSTRAINT [FK_ActorsActions_CriticalAffects_Critical_ID]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_ActorsActions_Games_Game_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[ActorsActions]'))
ALTER TABLE [dbo].[ActorsActions]  WITH CHECK ADD  CONSTRAINT [FK_ActorsActions_Games_Game_ID] FOREIGN KEY([Game_ID])
REFERENCES [dbo].[Games] ([ID])
ON DELETE CASCADE
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_ActorsActions_Games_Game_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[ActorsActions]'))
ALTER TABLE [dbo].[ActorsActions] CHECK CONSTRAINT [FK_ActorsActions_Games_Game_ID]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_ActorsAttacks_Actors_Actor_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[ActorsAttacks]'))
ALTER TABLE [dbo].[ActorsAttacks]  WITH CHECK ADD  CONSTRAINT [FK_ActorsAttacks_Actors_Actor_ID] FOREIGN KEY([Actor_ID])
REFERENCES [dbo].[Actors] ([ID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_ActorsAttacks_Actors_Actor_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[ActorsAttacks]'))
ALTER TABLE [dbo].[ActorsAttacks] CHECK CONSTRAINT [FK_ActorsAttacks_Actors_Actor_ID]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_ActorsAttacks_Attacks_Attack_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[ActorsAttacks]'))
ALTER TABLE [dbo].[ActorsAttacks]  WITH CHECK ADD  CONSTRAINT [FK_ActorsAttacks_Attacks_Attack_ID] FOREIGN KEY([Attack_ID])
REFERENCES [dbo].[Attacks] ([ID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_ActorsAttacks_Attacks_Attack_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[ActorsAttacks]'))
ALTER TABLE [dbo].[ActorsAttacks] CHECK CONSTRAINT [FK_ActorsAttacks_Attacks_Attack_ID]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_Armors_Characters_TiedToID]') AND parent_object_id = OBJECT_ID(N'[dbo].[Armors]'))
ALTER TABLE [dbo].[Armors]  WITH CHECK ADD  CONSTRAINT [FK_Armors_Characters_TiedToID] FOREIGN KEY([TiedToID])
REFERENCES [dbo].[Characters] ([ID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_Armors_Characters_TiedToID]') AND parent_object_id = OBJECT_ID(N'[dbo].[Armors]'))
ALTER TABLE [dbo].[Armors] CHECK CONSTRAINT [FK_Armors_Characters_TiedToID]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_Attacks_Attack_CriticalTypes_UseCriticalInstead_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[Attacks]'))
ALTER TABLE [dbo].[Attacks]  WITH CHECK ADD  CONSTRAINT [FK_Attacks_Attack_CriticalTypes_UseCriticalInstead_ID] FOREIGN KEY([UseCriticalInstead_ID])
REFERENCES [dbo].[Attack_CriticalTypes] ([ID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_Attacks_Attack_CriticalTypes_UseCriticalInstead_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[Attacks]'))
ALTER TABLE [dbo].[Attacks] CHECK CONSTRAINT [FK_Attacks_Attack_CriticalTypes_UseCriticalInstead_ID]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_Attacks_Attack_Types_Type_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[Attacks]'))
ALTER TABLE [dbo].[Attacks]  WITH CHECK ADD  CONSTRAINT [FK_Attacks_Attack_Types_Type_ID] FOREIGN KEY([Type_ID])
REFERENCES [dbo].[Attack_Types] ([ID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_Attacks_Attack_Types_Type_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[Attacks]'))
ALTER TABLE [dbo].[Attacks] CHECK CONSTRAINT [FK_Attacks_Attack_Types_Type_ID]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_Attacks_Attacks_NextRoundSuccess_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[Attacks]'))
ALTER TABLE [dbo].[Attacks]  WITH CHECK ADD  CONSTRAINT [FK_Attacks_Attacks_NextRoundSuccess_ID] FOREIGN KEY([NextRoundSuccess_ID])
REFERENCES [dbo].[Attacks] ([ID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_Attacks_Attacks_NextRoundSuccess_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[Attacks]'))
ALTER TABLE [dbo].[Attacks] CHECK CONSTRAINT [FK_Attacks_Attacks_NextRoundSuccess_ID]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_Attacks_Attacks_ThisRoundSuccess_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[Attacks]'))
ALTER TABLE [dbo].[Attacks]  WITH CHECK ADD  CONSTRAINT [FK_Attacks_Attacks_ThisRoundSuccess_ID] FOREIGN KEY([ThisRoundSuccess_ID])
REFERENCES [dbo].[Attacks] ([ID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_Attacks_Attacks_ThisRoundSuccess_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[Attacks]'))
ALTER TABLE [dbo].[Attacks] CHECK CONSTRAINT [FK_Attacks_Attacks_ThisRoundSuccess_ID]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_Attacks_Creature_Sizes_Size_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[Attacks]'))
ALTER TABLE [dbo].[Attacks]  WITH CHECK ADD  CONSTRAINT [FK_Attacks_Creature_Sizes_Size_ID] FOREIGN KEY([Size_ID])
REFERENCES [dbo].[Creature_Sizes] ([ID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_Attacks_Creature_Sizes_Size_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[Attacks]'))
ALTER TABLE [dbo].[Attacks] CHECK CONSTRAINT [FK_Attacks_Creature_Sizes_Size_ID]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_Attacks_Creatures_CreatureOn_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[Attacks]'))
ALTER TABLE [dbo].[Attacks]  WITH CHECK ADD  CONSTRAINT [FK_Attacks_Creatures_CreatureOn_ID] FOREIGN KEY([CreatureOn_ID])
REFERENCES [dbo].[Creatures] ([ID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_Attacks_Creatures_CreatureOn_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[Attacks]'))
ALTER TABLE [dbo].[Attacks] CHECK CONSTRAINT [FK_Attacks_Creatures_CreatureOn_ID]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_Attacks_Weapons_WeaponUsed_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[Attacks]'))
ALTER TABLE [dbo].[Attacks]  WITH CHECK ADD  CONSTRAINT [FK_Attacks_Weapons_WeaponUsed_ID] FOREIGN KEY([WeaponUsed_ID])
REFERENCES [dbo].[Weapons] ([ID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_Attacks_Weapons_WeaponUsed_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[Attacks]'))
ALTER TABLE [dbo].[Attacks] CHECK CONSTRAINT [FK_Attacks_Weapons_WeaponUsed_ID]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_AttacksAddCrits_Attack_CriticalTypes_Critical_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[AttacksAddCrits]'))
ALTER TABLE [dbo].[AttacksAddCrits]  WITH CHECK ADD  CONSTRAINT [FK_AttacksAddCrits_Attack_CriticalTypes_Critical_ID] FOREIGN KEY([Critical_ID])
REFERENCES [dbo].[Attack_CriticalTypes] ([ID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_AttacksAddCrits_Attack_CriticalTypes_Critical_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[AttacksAddCrits]'))
ALTER TABLE [dbo].[AttacksAddCrits] CHECK CONSTRAINT [FK_AttacksAddCrits_Attack_CriticalTypes_Critical_ID]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_AttacksAddCrits_Attacks_AttackID]') AND parent_object_id = OBJECT_ID(N'[dbo].[AttacksAddCrits]'))
ALTER TABLE [dbo].[AttacksAddCrits]  WITH CHECK ADD  CONSTRAINT [FK_AttacksAddCrits_Attacks_AttackID] FOREIGN KEY([AttackID])
REFERENCES [dbo].[Attacks] ([ID])
ON DELETE CASCADE
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_AttacksAddCrits_Attacks_AttackID]') AND parent_object_id = OBJECT_ID(N'[dbo].[AttacksAddCrits]'))
ALTER TABLE [dbo].[AttacksAddCrits] CHECK CONSTRAINT [FK_AttacksAddCrits_Attacks_AttackID]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_Creature_ConstitutionBonusChartValues_Creature_ConsitutionBonusChart_Chart_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[Creature_ConstitutionBonusChartValues]'))
ALTER TABLE [dbo].[Creature_ConstitutionBonusChartValues]  WITH CHECK ADD  CONSTRAINT [FK_Creature_ConstitutionBonusChartValues_Creature_ConsitutionBonusChart_Chart_ID] FOREIGN KEY([Chart_ID])
REFERENCES [dbo].[Creature_ConsitutionBonusChart] ([ID])
ON DELETE CASCADE
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_Creature_ConstitutionBonusChartValues_Creature_ConsitutionBonusChart_Chart_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[Creature_ConstitutionBonusChartValues]'))
ALTER TABLE [dbo].[Creature_ConstitutionBonusChartValues] CHECK CONSTRAINT [FK_Creature_ConstitutionBonusChartValues_Creature_ConsitutionBonusChart_Chart_ID]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_Creature_LevelChartValues_Creature_LevelChart_Level_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[Creature_LevelChartValues]'))
ALTER TABLE [dbo].[Creature_LevelChartValues]  WITH CHECK ADD  CONSTRAINT [FK_Creature_LevelChartValues_Creature_LevelChart_Level_ID] FOREIGN KEY([Level_ID])
REFERENCES [dbo].[Creature_LevelChart] ([ID])
ON DELETE CASCADE
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_Creature_LevelChartValues_Creature_LevelChart_Level_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[Creature_LevelChartValues]'))
ALTER TABLE [dbo].[Creature_LevelChartValues] CHECK CONSTRAINT [FK_Creature_LevelChartValues_Creature_LevelChart_Level_ID]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_Creatures_Books_Book_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[Creatures]'))
ALTER TABLE [dbo].[Creatures]  WITH CHECK ADD  CONSTRAINT [FK_Creatures_Books_Book_ID] FOREIGN KEY([Book_ID])
REFERENCES [dbo].[Books] ([ID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_Creatures_Books_Book_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[Creatures]'))
ALTER TABLE [dbo].[Creatures] CHECK CONSTRAINT [FK_Creatures_Books_Book_ID]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_Creatures_Creature_ConsitutionBonusChart_HitMod_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[Creatures]'))
ALTER TABLE [dbo].[Creatures]  WITH CHECK ADD  CONSTRAINT [FK_Creatures_Creature_ConsitutionBonusChart_HitMod_ID] FOREIGN KEY([HitMod_ID])
REFERENCES [dbo].[Creature_ConsitutionBonusChart] ([ID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_Creatures_Creature_ConsitutionBonusChart_HitMod_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[Creatures]'))
ALTER TABLE [dbo].[Creatures] CHECK CONSTRAINT [FK_Creatures_Creature_ConsitutionBonusChart_HitMod_ID]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_Creatures_Creature_CriticalCodes_Criticals_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[Creatures]'))
ALTER TABLE [dbo].[Creatures]  WITH CHECK ADD  CONSTRAINT [FK_Creatures_Creature_CriticalCodes_Criticals_ID] FOREIGN KEY([Criticals_ID])
REFERENCES [dbo].[Creature_CriticalCodes] ([ID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_Creatures_Creature_CriticalCodes_Criticals_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[Creatures]'))
ALTER TABLE [dbo].[Creatures] CHECK CONSTRAINT [FK_Creatures_Creature_CriticalCodes_Criticals_ID]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_Creatures_Creature_CriticalIgnores_CriticalsIgnore_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[Creatures]'))
ALTER TABLE [dbo].[Creatures]  WITH CHECK ADD  CONSTRAINT [FK_Creatures_Creature_CriticalIgnores_CriticalsIgnore_ID] FOREIGN KEY([CriticalsIgnore_ID])
REFERENCES [dbo].[Creature_CriticalIgnores] ([ID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_Creatures_Creature_CriticalIgnores_CriticalsIgnore_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[Creatures]'))
ALTER TABLE [dbo].[Creatures] CHECK CONSTRAINT [FK_Creatures_Creature_CriticalIgnores_CriticalsIgnore_ID]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_Creatures_Creature_IQs_IQ_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[Creatures]'))
ALTER TABLE [dbo].[Creatures]  WITH CHECK ADD  CONSTRAINT [FK_Creatures_Creature_IQs_IQ_ID] FOREIGN KEY([IQ_ID])
REFERENCES [dbo].[Creature_IQs] ([ID])
ON DELETE CASCADE
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_Creatures_Creature_IQs_IQ_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[Creatures]'))
ALTER TABLE [dbo].[Creatures] CHECK CONSTRAINT [FK_Creatures_Creature_IQs_IQ_ID]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_Creatures_Creature_LevelChart_LevelMod_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[Creatures]'))
ALTER TABLE [dbo].[Creatures]  WITH CHECK ADD  CONSTRAINT [FK_Creatures_Creature_LevelChart_LevelMod_ID] FOREIGN KEY([LevelMod_ID])
REFERENCES [dbo].[Creature_LevelChart] ([ID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_Creatures_Creature_LevelChart_LevelMod_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[Creatures]'))
ALTER TABLE [dbo].[Creatures] CHECK CONSTRAINT [FK_Creatures_Creature_LevelChart_LevelMod_ID]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_Creatures_Creature_Outlook_Outlook_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[Creatures]'))
ALTER TABLE [dbo].[Creatures]  WITH CHECK ADD  CONSTRAINT [FK_Creatures_Creature_Outlook_Outlook_ID] FOREIGN KEY([Outlook_ID])
REFERENCES [dbo].[Creature_Outlook] ([ID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_Creatures_Creature_Outlook_Outlook_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[Creatures]'))
ALTER TABLE [dbo].[Creatures] CHECK CONSTRAINT [FK_Creatures_Creature_Outlook_Outlook_ID]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_Creatures_Creature_Pace_MaxPace_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[Creatures]'))
ALTER TABLE [dbo].[Creatures]  WITH CHECK ADD  CONSTRAINT [FK_Creatures_Creature_Pace_MaxPace_ID] FOREIGN KEY([MaxPace_ID])
REFERENCES [dbo].[Creature_Pace] ([ID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_Creatures_Creature_Pace_MaxPace_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[Creatures]'))
ALTER TABLE [dbo].[Creatures] CHECK CONSTRAINT [FK_Creatures_Creature_Pace_MaxPace_ID]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_Creatures_Creature_Sizes_Size_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[Creatures]'))
ALTER TABLE [dbo].[Creatures]  WITH CHECK ADD  CONSTRAINT [FK_Creatures_Creature_Sizes_Size_ID] FOREIGN KEY([Size_ID])
REFERENCES [dbo].[Creature_Sizes] ([ID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_Creatures_Creature_Sizes_Size_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[Creatures]'))
ALTER TABLE [dbo].[Creatures] CHECK CONSTRAINT [FK_Creatures_Creature_Sizes_Size_ID]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_Creatures_Creature_SpeedChart_AQRating_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[Creatures]'))
ALTER TABLE [dbo].[Creatures]  WITH CHECK ADD  CONSTRAINT [FK_Creatures_Creature_SpeedChart_AQRating_ID] FOREIGN KEY([AQRating_ID])
REFERENCES [dbo].[Creature_SpeedChart] ([ID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_Creatures_Creature_SpeedChart_AQRating_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[Creatures]'))
ALTER TABLE [dbo].[Creatures] CHECK CONSTRAINT [FK_Creatures_Creature_SpeedChart_AQRating_ID]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_Creatures_Creature_SpeedChart_MSRating_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[Creatures]'))
ALTER TABLE [dbo].[Creatures]  WITH CHECK ADD  CONSTRAINT [FK_Creatures_Creature_SpeedChart_MSRating_ID] FOREIGN KEY([MSRating_ID])
REFERENCES [dbo].[Creature_SpeedChart] ([ID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_Creatures_Creature_SpeedChart_MSRating_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[Creatures]'))
ALTER TABLE [dbo].[Creatures] CHECK CONSTRAINT [FK_Creatures_Creature_SpeedChart_MSRating_ID]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_CriticalAffects_Actors_Actor_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[CriticalAffects]'))
ALTER TABLE [dbo].[CriticalAffects]  WITH CHECK ADD  CONSTRAINT [FK_CriticalAffects_Actors_Actor_ID] FOREIGN KEY([Actor_ID])
REFERENCES [dbo].[Actors] ([ID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_CriticalAffects_Actors_Actor_ID]') AND parent_object_id = OBJECT_ID(N'[dbo].[CriticalAffects]'))
ALTER TABLE [dbo].[CriticalAffects] CHECK CONSTRAINT [FK_CriticalAffects_Actors_Actor_ID]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_Weapons_Characters_TiedToID]') AND parent_object_id = OBJECT_ID(N'[dbo].[Weapons]'))
ALTER TABLE [dbo].[Weapons]  WITH CHECK ADD  CONSTRAINT [FK_Weapons_Characters_TiedToID] FOREIGN KEY([TiedToID])
REFERENCES [dbo].[Characters] ([ID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_Weapons_Characters_TiedToID]') AND parent_object_id = OBJECT_ID(N'[dbo].[Weapons]'))
ALTER TABLE [dbo].[Weapons] CHECK CONSTRAINT [FK_Weapons_Characters_TiedToID]
GO
USE [master]
GO
ALTER DATABASE [RMSSNew] SET  READ_WRITE 
GO
