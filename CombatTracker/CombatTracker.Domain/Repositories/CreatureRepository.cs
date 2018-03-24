using System;
using System.Collections.Generic;
using System.Text;
using CombatTracker.Entities.Reference.Attacks;
using CombatTracker.Entities.Reference.Creatures;
using System.Linq;
using CombatTracker.Entities.Current;
using CombatTracker.Entities.Reference;
using CombatTracker.Entities.Repositories;
using Utilities.Caching;
using CombatTracker.Domain.Reference.Creatures;
using Microsoft.EntityFrameworkCore;

namespace CombatTracker.Domain.Repositories
{
    public class CreatureRepository : ICreatureRepository
    {

        private TrackerContext db;
        private readonly ICombatRepository _combatRepository;
        private readonly IChartRepository _chartRepository;

        public CreatureRepository(TrackerContext context, 
                                  ICombatRepository combatRepository,
                                  IChartRepository chartRepository)
        {
            db = context;
            _combatRepository = combatRepository;
            _chartRepository = chartRepository;
        }


        public List<Creature> GetCreatures()
        {

            return Cache.GetItem<List<Creature>>(CacheArea.Global, "Creatures", () =>
            {
                var chars = (from cbc in db.Creatures
                             orderby cbc.TypeName
                             select new Creature()
                             {
                                 ID = cbc.ID,
                                 AT = cbc.AT,
                                 BaseHits = cbc.BaseHits,
                                 BaseLevel = cbc.BaseLevel,
                                 BaseMove = cbc.BaseMove,
                                 DB = cbc.DB,
                                 AQRating_ID = cbc.AQRating_ID,
                                 Book_ID = cbc.Book_ID,
                                 CriticalsIgnore_ID = cbc.CriticalsIgnore_ID,
                                 Criticals_ID = cbc.Criticals_ID,
                                 Description = cbc.Description,
                                 Habitat = cbc.Habitat,
                                 HitMod_ID = cbc.HitMod_ID,
                                 IQ_ID = cbc.IQ_ID,
                                 LevelMod_ID = cbc.LevelMod_ID,
                                 MaxEncountered = cbc.MaxEncountered,
                                 MaxPace_ID = cbc.MaxPace_ID,
                                 MinEncountered = cbc.MinEncountered,
                                 MMBonus = cbc.MMBonus,
                                 MSRating_ID = cbc.MSRating_ID,
                                 Outlook_ID = cbc.Outlook_ID,
                                 PageNumber = cbc.PageNumber,
                                 Size_ID = cbc.Size_ID,
                                 TypeName = cbc.TypeName,
                                 GameTypeString = cbc.GameType
                             }).ToList();

                chars.ForEach((c) => {
                    c.AQRating = _chartRepository.GetSpeedChart(c.AQRating_ID);
                    c.Attacks = _combatRepository.GetAttacksOnCreature(c.ID);
                    c.Book = _chartRepository.GetBook(c.Book_ID);
                    c.CriticalIgnore = _chartRepository.GetCriticalIgnore(c.CriticalsIgnore_ID);
                    c.Criticals = _chartRepository.GetCriticalCode(c.Criticals_ID);
                    c.HitMod = _chartRepository.GetConstitutionBonusChart(c.HitMod_ID);
                    c.IQ = _chartRepository.GetIQ(c.IQ_ID);
                    c.LevelMod = _chartRepository.GetLevelChart(c.LevelMod_ID);
                    c.MaxPace = _chartRepository.GetPace(c.MaxPace_ID);
                    c.MSRating = _chartRepository.GetSpeedChart(c.MSRating_ID);
                    c.Outlook = _chartRepository.GetOutlook(c.Outlook_ID);
                    c.Size = _chartRepository.GetSizeRating(c.Size_ID);
                });
                chars = chars.OrderBy((c) => c.TypeName).ToList();
                return chars;
            }, "creatures");
        }

        public Creature GetCreature(int id)
        {
            return (from c in GetCreatures() where c.ID == id select c).FirstOrDefault();
        }

        public Creature GetCreature(string name)
        {
            return (from c in GetCreatures() where c.TypeName == name select c).FirstOrDefault();
        }

        public Creature SaveCreature(Creature creature)
        {

            var q = (from c in db.Creatures select c).Include(b => b.Attacks);
            var car = (from c in q where c.ID == creature.ID select c).FirstOrDefault();
            if (car == null)
            {
                car = new DbCreature();
                db.Creatures.Add(car);
            }
            car.AT = creature.AT;
            car.BaseHits = creature.BaseHits;
            car.BaseLevel = creature.BaseLevel;
            car.BaseMove = creature.BaseMove;
            car.DB = creature.DB;
            car.AQRating_ID = creature.AQRating_ID;
            car.Book_ID = creature.Book_ID;
            car.CriticalsIgnore_ID = creature.CriticalsIgnore_ID;
            car.Criticals_ID = creature.Criticals_ID;
            car.Description = creature.Description;
            car.Habitat = creature.Habitat;
            car.HitMod_ID = creature.HitMod_ID;
            car.IQ_ID = creature.IQ_ID;
            car.LevelMod_ID = creature.LevelMod_ID;
            car.MaxEncountered = creature.MaxEncountered;
            car.MaxPace_ID = creature.MaxPace_ID;
            car.MinEncountered = creature.MinEncountered;
            car.MMBonus = creature.MMBonus;
            car.MSRating_ID = creature.MSRating_ID;
            car.Outlook_ID = creature.Outlook_ID;
            car.PageNumber = creature.PageNumber;
            car.Size_ID = creature.Size_ID;
            car.TypeName = creature.TypeName;
            car.GameType = creature.GameTypeString;

            db.SaveChanges();
            creature.ID = car.ID;



            foreach (var att in creature.Attacks)
            {
                att.CreatureOn_ID = creature.ID;
                _combatRepository.SaveAttack(att);
            }
            var ids = (from arm in creature.Attacks select arm.ID).ToList();
            var oldList = (from arm in car.Attacks where !ids.Contains(arm.ID) select arm).ToList();
            foreach (var att in oldList)
            {
                _combatRepository.DeleteAttack(att.ID);
            }

            CacheSystem.Instance.ClearTaggedCache("creatures");
            return GetCreature(creature.ID);
        }

        public void DeleteCreature(Creature creature)
        {

            var car = (from c in db.Creatures where c.ID == creature.ID select c).FirstOrDefault();
            if (car != null)
            {
                db.Creatures.Remove(car);
                db.SaveChanges();
            }
            CacheSystem.Instance.ClearTaggedCache("creatures");
        }

        public void DeleteCreature(int id)
        {
            var car = (from c in db.Creatures where c.ID == id select c).FirstOrDefault();
            if (car != null)
            {
                db.Creatures.Remove(car);
                db.SaveChanges();
            }
            CacheSystem.Instance.ClearTaggedCache("creatures");
        }

    }
}
