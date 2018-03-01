using System;
using System.Collections.Generic;
using System.Text;
using CombatTracker.Entities.Reference;
using CombatTracker.Entities.Reference.Attacks;
using CombatTracker.Entities.Reference.Creatures;

namespace CombatTracker.Entities.Repositories
{
    public interface ICreatureRepository
    {
        List<Creature> GetCreatures();
        Creature GetCreature(int id);
        Creature GetCreature(string name);
        Creature SaveCreature(Creature character);
        void DeleteCreature(Creature character);
        void DeleteCreature(int id);

        List<Attack> GetAttacks(int creatureId);
        Attack GetAttack(int id);
        Attack SaveAttack(Attack attack);
        void DeleteAttack(Attack attack);
        void DeleteAttack(int id);
        
    }
}
