
using System.Collections.Generic;
using CombatTracker.Entities.Current;
using CombatTracker.Entities.Reference;
using CombatTracker.Entities.Repositories;

namespace CombatTracker.Domain.Repositories
{
    public class CharacterRepository : ICharacterRepository
    {

        private TrackerContext db;

        public CharacterRepository(TrackerContext context)
        {
            db = context;
        }

        public List<Character> GetCharacters()
        {
            throw new System.NotImplementedException();
        }

        public Character GetCharacter(int id)
        {
            throw new System.NotImplementedException();
        }

        public Character GetCharacter(string name)
        {
            throw new System.NotImplementedException();
        }

        public Character SaveCharacter(Character character)
        {
            throw new System.NotImplementedException();
        }

        public void DeleteCharacter(Character character)
        {
            throw new System.NotImplementedException();
        }

        public void DeleteCharacter(int id)
        {
            throw new System.NotImplementedException();
        }

        public List<Armor> GetArmors(int characterId)
        {
            throw new System.NotImplementedException();
        }

        public Armor GetArmor(int id)
        {
            throw new System.NotImplementedException();
        }

        public Armor SaveArmor(Armor armor)
        {
            throw new System.NotImplementedException();
        }

        public void DeleteArmor(Armor armor)
        {
            throw new System.NotImplementedException();
        }

        public void DeleteArmor(int id)
        {
            throw new System.NotImplementedException();
        }

        public List<Weapon> GetWeapons(int characterId)
        {
            throw new System.NotImplementedException();
        }

        public Weapon GetWeapon(int id)
        {
            throw new System.NotImplementedException();
        }

        public Weapon SaveWeapon(Weapon weapon)
        {
            throw new System.NotImplementedException();
        }

        public void DeleteWeapon(Weapon weapon)
        {
            throw new System.NotImplementedException();
        }

        public void DeleteWeapon(int id)
        {
            throw new System.NotImplementedException();
        }
    }
}
