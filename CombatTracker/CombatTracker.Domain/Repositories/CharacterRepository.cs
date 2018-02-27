
using System.Collections.Generic;
using CombatTracker.Entities.Current;
using CombatTracker.Entities.Repositories;

namespace CombatTracker.Domain.Repositories
{
    public class CharacterRepository:ICharacterRepository
    {
        public List<Game> GetGames()
        {
            throw new System.NotImplementedException();
        }

        public Game GetGame(int id)
        {
            throw new System.NotImplementedException();
        }

        public Game GetGame(string name)
        {
            throw new System.NotImplementedException();
        }
    }
}
