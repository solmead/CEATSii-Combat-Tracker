using System;
using System.Collections.Generic;
using System.Text;
using CombatTracker.Entities.Reference.Attacks;
using CombatTracker.Entities.Reference.Creatures;
using CombatTracker.Entities.Repositories;

namespace CombatTracker.Domain.Repositories
{
    public class CreatureRepository : ICreatureRepository
    {

        private TrackerContext db;

        public CreatureRepository(TrackerContext context)
        {
            db = context;
        }


        public List<Creature> GetCreatures()
        {
            throw new NotImplementedException();
        }

        public Creature GetCreature(int id)
        {
            throw new NotImplementedException();
        }

        public Creature GetCreature(string name)
        {
            throw new NotImplementedException();
        }

        public Creature SaveCreature(Creature character)
        {
            throw new NotImplementedException();
        }

        public void DeleteCreature(Creature character)
        {
            throw new NotImplementedException();
        }

        public void DeleteCreature(int id)
        {
            throw new NotImplementedException();
        }

        public List<Attack> GetAttacks(int creatureId)
        {
            throw new NotImplementedException();
        }

        public Attack GetAttack(int id)
        {
            throw new NotImplementedException();
        }

        public Attack SaveAttack(Attack attack)
        {
            throw new NotImplementedException();
        }

        public void DeleteAttack(Attack attack)
        {
            throw new NotImplementedException();
        }

        public void DeleteAttack(int id)
        {
            throw new NotImplementedException();
        }
    }
}
