using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using CombatTracker.Entities.Reference;
using CombatTracker.Entities.Reference.Attacks.Charts;
using CombatTracker.Entities.Reference.Creatures.Charts;
using CombatTracker.Entities.Reference.Magic;
using CombatTracker.Entities.Repositories;
using Utilities.Caching;

namespace CombatTracker.Domain.Repositories
{
    public class ChartRepository :IChartRepository
    {

        private TrackerContext db;

        public ChartRepository(TrackerContext context)
        {
            db = context;
        }


        public List<ConstitutionBonusChart> GetConstitutionBonusCharts()
        {
            return Cache.GetItem<List<ConstitutionBonusChart>>(CacheArea.Global, "ConstitutionBonusCharts", () =>
            {
                return (from cbc in db.Creature_ConsitutionBonusChart
                    select new ConstitutionBonusChart()
                    {
                        ID = cbc.ID,
                        Code = cbc.Code,
                        BonusExhaustion = cbc.BonusExhaustion,
                        PerLevelDifference = cbc.PerLevelDifference,
                        ConstitutionBonusChartValues = (from v in cbc.Values
                            select new ConstitutionBonusChartValues()
                            {
                                ID = v.ID,
                                Min = v.Min,
                                Max = v.Max,
                                Mod = v.Mod
                            }).ToList()
                    }).ToList();
            }, "charts");
        }

        public ConstitutionBonusChart GetConstitutionBonusChart(int id)
        {
            return (from c in GetConstitutionBonusCharts() where c.ID == id select c).FirstOrDefault();
        }

        public ConstitutionBonusChart GetConstitutionBonusChart(string name)
        {
            return (from c in GetConstitutionBonusCharts() where c.Code == name select c).FirstOrDefault();
        }

        public List<CriticalCode> GetCriticalCodes()
        {
            return Cache.GetItem<List<CriticalCode>>(CacheArea.Global, "CriticalCodes", () =>
            {
                return (from cbc in db.Creature_CriticalCodes
                    select new CriticalCode()
                    {
                        ID = cbc.ID,
                        Name = cbc.Name,
                        Abbreviation = cbc.Abbreviation
                    }).ToList();
            }, "charts");
        }

        public CriticalCode GetCriticalCode(int id)
        {
            return (from c in GetCriticalCodes() where c.ID == id select c).FirstOrDefault();
        }

        public CriticalCode GetCriticalCode(string name)
        {
            return (from c in GetCriticalCodes() where c.Name == name select c).FirstOrDefault();
        }

        public List<CriticalIgnore> GetCriticalIgnores()
        {

            return Cache.GetItem<List<CriticalIgnore>>(CacheArea.Global, "CriticalIgnores", () =>
            {
                return (from cbc in db.Creature_CriticalIgnores
                    select new CriticalIgnore()
                    {
                        ID = cbc.ID,
                        Name = cbc.Name,
                        Abbreviation = cbc.Abbreviation
                    }).ToList();
            }, "charts");
        }

        public CriticalIgnore GetCriticalIgnore(int id)
        {
            return (from c in GetCriticalIgnores() where c.ID == id select c).FirstOrDefault();
        }

        public CriticalIgnore GetCriticalIgnore(string name)
        {
            return (from c in GetCriticalIgnores() where c.Name == name select c).FirstOrDefault();
        }

        public List<IQ> GetIQs()
        {

            return Cache.GetItem<List<IQ>>(CacheArea.Global, "IQs", () =>
            {
                return (from cbc in db.Creature_IQs
                    select new IQ()
                    {
                        ID = cbc.ID,
                        Name = cbc.Name,
                        Abbreviation = cbc.Abbreviation
                    }).ToList();
            }, "charts");
        }

        public IQ GetIQ(int id)
        {
            return (from c in GetIQs() where c.ID == id select c).FirstOrDefault();
        }

        public IQ GetIQ(string name)
        {
            return (from c in GetIQs() where c.Name == name select c).FirstOrDefault();
        }

        public List<LevelChart> GetLevelCharts()
        {
            return Cache.GetItem<List<LevelChart>>(CacheArea.Global, "LevelCharts", () =>
            {
                return (from cbc in db.Creature_LevelChart
                    select new LevelChart()
                    {
                        ID = cbc.ID,
                        Name = cbc.Name,
                        LevelChartValues = (from v in cbc.Values
                                            select new LevelChartValue()
                                            {
                                                ID = v.ID,
                                                Min = v.Min,
                                                Max = v.Max,
                                                Mod = v.Mod
                                            }).ToList()
                    }).ToList();
            }, "charts");
        }

        public LevelChart GetLevelChart(int id)
        {
            return (from c in GetLevelCharts() where c.ID == id select c).FirstOrDefault();
        }

        public LevelChart GetLevelChart(string name)
        {
            return (from c in GetLevelCharts() where c.Name == name select c).FirstOrDefault();
        }

        public List<Outlook> GetOutlooks()
        {

            return Cache.GetItem<List<Outlook>>(CacheArea.Global, "Outlooks", () =>
            {
                return (from cbc in db.Creature_Outlook
                        select new Outlook()
                    {
                        ID = cbc.ID,
                        Name = cbc.Name,
                        Abbreviation = cbc.Abbreviation
                    }).ToList();
            }, "charts");
        }

        public Outlook GetOutlook(int id)
        {
            return (from c in GetOutlooks() where c.ID == id select c).FirstOrDefault();
        }

        public Outlook GetOutlook(string name)
        {
            return (from c in GetOutlooks() where c.Name == name select c).FirstOrDefault();
        }

        public List<Pace> GetPaces()
        {
            return Cache.GetItem<List<Pace>>(CacheArea.Global, "Paces", () =>
            {
                return (from cbc in db.Creature_Pace
                        select new Pace()
                    {
                        ID = cbc.ID,
                        Name = cbc.Name,
                        Abbreviation = cbc.Abbreviation
                    }).ToList();
            }, "charts");
        }

        public Pace GetPace(int id)
        {
            return (from c in GetPaces() where c.ID == id select c).FirstOrDefault();
        }

        public Pace GetPace(string name)
        {
            return (from c in GetPaces() where c.Name == name select c).FirstOrDefault();
        }

        public List<SizeRating> GetSizeRatings()
        {
            return Cache.GetItem<List<SizeRating>>(CacheArea.Global, "SizeRatings", () =>
            {
                return (from cbc in db.Creature_Sizes
                    select new SizeRating()
                    {
                        ID = cbc.ID,
                        Name = cbc.Name,
                        Abbreviation = cbc.Abbreviation
                    }).ToList();
            }, "charts");
        }

        public SizeRating GetSizeRating(int id)
        {
            return (from c in GetSizeRatings() where c.ID == id select c).FirstOrDefault();
        }

        public SizeRating GetSizeRating(string name)
        {
            return (from c in GetSizeRatings() where c.Name == name select c).FirstOrDefault();
        }

        public List<SpeedChart> GetSpeedCharts()
        {
            return Cache.GetItem<List<SpeedChart>>(CacheArea.Global, "SpeedCharts", () =>
            {
                return (from cbc in db.Creature_SpeedChart
                    select new SpeedChart()
                    {
                        ID = cbc.ID,
                        Name = cbc.Name,
                        Abbreviation = cbc.Abbreviation,
                        AQChargeLunge = cbc.AQChargeLunge,
                        AQInitiative = cbc.AQInitiative,
                        MSBaseDB = cbc.MSBaseDB,
                        MSFleeEvade = cbc.MSFleeEvade
                    }).ToList();
            }, "charts");
        }

        public SpeedChart GetSpeedChart(int id)
        {
            return (from c in GetSpeedCharts() where c.ID == id select c).FirstOrDefault();
        }

        public SpeedChart GetSpeedChart(string name)
        {
            return (from c in GetSpeedCharts() where c.Name == name select c).FirstOrDefault();
        }

        public List<AttackType> GetAttackTypes()
        {

            return Cache.GetItem<List<AttackType>>(CacheArea.Global, "AttackTypes", () =>
            {
                return (from cbc in db.Attack_Types
                    select new AttackType()
                    {
                        ID = cbc.ID,
                        Name = cbc.Name,
                        Abbreviation = cbc.Abbreviation,
                        HasDB = cbc.HasDB,
                        HasSize = cbc.HasSize
                    }).ToList();
            }, "charts");
        }

        public AttackType GetAttackType(int id)
        {
            return (from c in GetAttackTypes() where c.ID == id select c).FirstOrDefault();
        }

        public AttackType GetAttackType(string name)
        {
            return (from c in GetAttackTypes() where c.Name == name select c).FirstOrDefault();
        }

        public List<CriticalType> GetCriticalTypes()
        {
            return Cache.GetItem<List<CriticalType>>(CacheArea.Global, "CriticalTypes", () =>
            {
                return (from cbc in db.Attack_CriticalTypes
                    select new CriticalType()
                    {
                        ID = cbc.ID,
                        Name = cbc.Name,
                        Abbreviation = cbc.Abbreviation
                    }).ToList();
            }, "charts");
        }

        public CriticalType GetCriticalType(int id)
        {
            return (from c in GetCriticalTypes() where c.ID == id select c).FirstOrDefault();
        }

        public CriticalType GetCriticalType(string name)
        {
            return (from c in GetCriticalTypes() where c.Name == name select c).FirstOrDefault();
        }

        public List<WeaponType> GetWeaponTypes()
        {
            return Cache.GetItem<List<WeaponType>>(CacheArea.Global, "WeaponTypes", () =>
            {
                return (from cbc in db.Attack_CriticalTypes
                    select new WeaponType()
                    {
                        ID = cbc.ID,
                        Name = cbc.Name,
                        Abbreviation = cbc.Abbreviation
                    }).ToList();
            }, "charts");
        }

        public WeaponType GetWeaponType(int id)
        {
            return (from c in GetWeaponTypes() where c.ID == id select c).FirstOrDefault();
        }

        public WeaponType GetWeaponType(string name)
        {
            return (from c in GetWeaponTypes() where c.Name == name select c).FirstOrDefault();
        }

        public List<Book> GetBooks()
        {
            return Cache.GetItem<List<Book>>(CacheArea.Global, "Books", () =>
            {
                return (from cbc in db.Books
                    select new Book()
                    {
                        ID = cbc.ID,
                        Name = cbc.Name
                    }).ToList();
            }, "charts");
        }

        public Book GetBook(int id)
        {
            return (from c in GetBooks() where c.ID == id select c).FirstOrDefault();
        }

        public Book GetBook(string name)
        {
            return (from c in GetBooks() where c.Name == name select c).FirstOrDefault();
        }

        public List<PsychicRefractoryPeriodEntry> GetPsychicRefractoryPeriodEntries()
        {
            return Cache.GetItem<List<PsychicRefractoryPeriodEntry>>(CacheArea.Global, "PsychicRefractoryPeriodEntrys", () =>
            {
                return (from cbc in db.PsychicRefractoryPeriodMods
                    select new PsychicRefractoryPeriodEntry()
                    {
                        ID = cbc.ID,
                        LevelMin = cbc.LevelMin,
                        LevelMax = cbc.LevelMax,
                        Mod = cbc.Mod,
                        RoundNumber = cbc.RoundNumber
                    }).ToList();
            }, "charts");
        }
    }
}
