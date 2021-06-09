using System;
using System.Collections.Generic;
using System.Text;
using CombatTracker.Entities.Reference;
using CombatTracker.Entities.Reference.Attacks;
using CombatTracker.Entities.Reference.Creatures;

namespace CombatTracker.Entities.Abstract.Repos
{
    public interface ICreatureRepository
    {
        List<Creature> GetCreatures();
        Creature GetCreature(int id);
        Creature GetCreature(string name);
        Creature SaveCreature(Creature character);
        void DeleteCreature(Creature character);
        void DeleteCreature(int id);


    }
}
