using System;
using System.Collections.Generic;
using System.Text;
using CombatTracker.Entities.Current;
using CombatTracker.Entities.Reference;

namespace CombatTracker.Entities.Repositories
{
    public interface ICharacterRepository
    {



        List<Character> GetCharacters();
        Character GetCharacter(int id);
        Character GetCharacter(string name);
        Character SaveCharacter(Character character);
        void DeleteCharacter(Character character);
        void DeleteCharacter(int id);

        List<Armor> GetArmors(int characterId);
        Armor GetArmor(int id);
        Armor SaveArmor(Armor armor);
        void DeleteArmor(Armor armor);
        void DeleteArmor(int id);

        List<Weapon> GetWeapons(int characterId);
        Weapon GetWeapon(int id);
        Weapon SaveWeapon(Weapon weapon);
        void DeleteWeapon(Weapon weapon);
        void DeleteWeapon(int id);



    }
}
