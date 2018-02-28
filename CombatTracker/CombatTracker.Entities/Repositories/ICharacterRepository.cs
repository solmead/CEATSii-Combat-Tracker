using System;
using System.Collections.Generic;
using System.Text;
using CombatTracker.Entities.Current;
using CombatTracker.Entities.Reference;

namespace CombatTracker.Entities.Repositories
{
    public interface ICharacterRepository
    {


        List<Game> GetGames();
        Game GetGame(int id);
        Game GetGame(string name);

        List<Character> GetCharacters();
        Character GetCharacter(int id);
        Character GetCharacter(string name);
        Character Save(Character character);
        void Delete(Character character);




    }
}
