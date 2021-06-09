using System;
using System.Collections.Generic;
using System.Text;
using CombatTracker.Entities.Current;
using CombatTracker.Entities.Reference;

namespace CombatTracker.Entities.Abstract.Repos
{
    public interface ICharacterRepository
    {



        List<Character> GetCharacters();
        Character GetCharacter(int id);
        Character GetCharacter(string name);
        Character SaveCharacter(Character character);
        void DeleteCharacter(Character character);
        void DeleteCharacter(int id);




    }
}
