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
using CombatTracker.Domain.Reference.Players;

namespace CombatTracker.Domain.Repositories
{
    public class CreatureRepository : ICreatureRepository
    {

        private TrackerContext db;
        private readonly ICombatRepository _combatRepository;

        public CreatureRepository(TrackerContext context, ICombatRepository combatRepository)
        {
            db = context;
            _combatRepository = combatRepository;
        }


        public List<Creature> GetCreatures()
        {
            throw new NotImplementedException();
        }

        public Creature GetCreature(int id)
        {
            return (from c in GetCreatures() where c.ID == id select c).FirstOrDefault();
        }

        public Creature GetCreature(string name)
        {
            return (from c in GetCreatures() where c.TypeName == name select c).FirstOrDefault();
        }

        public Creature SaveCreature(Creature character)
        {
            throw new NotImplementedException();
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
