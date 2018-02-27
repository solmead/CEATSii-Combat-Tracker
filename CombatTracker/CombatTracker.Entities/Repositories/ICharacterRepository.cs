using System;
using System.Collections.Generic;
using System.Text;
using CombatTracker.Entities.Current;

namespace CombatTracker.Entities.Repositories
{
    public interface ICharacterRepository
    {


        List<Game> GetGames();
        Game GetGame(int id);
        Game GetGame(string name);


    }
}
