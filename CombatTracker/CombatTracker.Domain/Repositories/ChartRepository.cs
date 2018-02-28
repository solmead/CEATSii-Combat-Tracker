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
            throw new NotImplementedException();
        }

        public LevelChart GetLevelChart(int id)
        {
            throw new NotImplementedException();
        }

        public LevelChart GetLevelChart(string name)
        {
            throw new NotImplementedException();
        }

        public List<Outlook> GetOutlooks()
        {
            throw new NotImplementedException();
        }

        public Outlook GetOutlook(int id)
        {
            throw new NotImplementedException();
        }

        public Outlook GetOutlook(string name)
        {
            throw new NotImplementedException();
        }

        public List<Pace> GetPaces()
        {
            throw new NotImplementedException();
        }

        public Pace GetPace(int id)
        {
            throw new NotImplementedException();
        }

        public Pace GetPace(string name)
        {
            throw new NotImplementedException();
        }

        public List<SizeRating> GetSizeRatings()
        {
            throw new NotImplementedException();
        }

        public SizeRating GetSizeRating(int id)
        {
            throw new NotImplementedException();
        }

        public SizeRating GetSizeRating(string name)
        {
            throw new NotImplementedException();
        }

        public List<SpeedChart> GetSpeedCharts()
        {
            throw new NotImplementedException();
        }

        public SpeedChart GetSpeedChart(int id)
        {
            throw new NotImplementedException();
        }

        public SpeedChart GetSpeedChart(string name)
        {
            throw new NotImplementedException();
        }

        public List<AttackType> GetAttackTypes()
        {
            throw new NotImplementedException();
        }

        public AttackType GetAttackType(int id)
        {
            throw new NotImplementedException();
        }

        public AttackType GetAttackType(string name)
        {
            throw new NotImplementedException();
        }

        public List<CriticalType> GetCriticalTypes()
        {
            throw new NotImplementedException();
        }

        public CriticalType GetCriticalType(int id)
        {
            throw new NotImplementedException();
        }

        public CriticalType GetCriticalType(string name)
        {
            throw new NotImplementedException();
        }

        public List<WeaponType> GetWeaponTypes()
        {
            throw new NotImplementedException();
        }

        public WeaponType GetWeaponType(int id)
        {
            throw new NotImplementedException();
        }

        public WeaponType GetWeaponType(string name)
        {
            throw new NotImplementedException();
        }

        public List<Book> GetBooks()
        {
            throw new NotImplementedException();
        }

        public Book GetBook(int id)
        {
            throw new NotImplementedException();
        }

        public Book GetBook(string name)
        {
            throw new NotImplementedException();
        }

        public List<PsychicRefractoryPeriodEntry> GetPsychicRefractoryPeriodEntries()
        {
            throw new NotImplementedException();
        }
    }
}
