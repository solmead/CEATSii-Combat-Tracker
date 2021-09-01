using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using CombatTracker.Entities.Current;
using CombatTracker.Entities.Reference;
using Utilities.Caching;
using CombatTracker.Domain.Reference.Players;
using Microsoft.EntityFrameworkCore;
using CombatTracker.Entities.Abstract.Repos;
using Utilities.Poco;

namespace CombatTracker.Domain.Repositories
{
    public class CharacterRepository : ICharacterRepository
    {

        private TrackerContext db;
        private readonly ICombatRepository _combatRepository;

        public CharacterRepository(TrackerContext context, ICombatRepository combatRepository)
        {
            db = context;
            _combatRepository = combatRepository;
        }

        public List<Character> GetCharacters()
        {
            return Cache.GetItem<List<Character>>(CacheArea.Global, "Characters", () =>
            {
                var chars = (from cbc in db.Characters
                             orderby cbc.Name
                        select new Character()
                        {
                            ID = cbc.ID,
                            BaseInititive = cbc.BaseInititive,
                            ExhaustionPoints = cbc.ExhaustionPoints,
                            HitPoints = cbc.HitPoints,
                            Level = cbc.Level,
                            Name = cbc.Name,
                            PercentRequiredAdrenalDB = cbc.PercentRequiredAdrenalDB,
                            PowerPoints = cbc.PowerPoints,
                            StrengthBonus = cbc.StrengthBonus,
                            TypeString = cbc.Type,
                            WalkSpeed = cbc.WalkSpeed,
                            GameTypeString = cbc.GameType
                        }).ToList();


                chars.ForEach((c)=>{
                    c.Armors = _combatRepository.GetArmors(c.ID);
                    c.Weapons = _combatRepository.GetWeapons(c.ID);
                });

                chars = chars.OrderBy((c) => c.Name).ToList();
                return chars;
            }, "characters");
        }

        public Character GetCharacter(int id)
        {
            return (from c in GetCharacters() where c.ID == id select c).FirstOrDefault();
        }

        public Character GetCharacter(string name)
        {
            return (from c in GetCharacters() where c.Name == name select c).FirstOrDefault();
        }

        public Character SaveCharacter(Character character)
        {
            var q = (from c in db.Characters select c).Include(b => b.Armors).Include(b => b.Weapons);
            var car = (from c in q where c.ID == character.ID select c).FirstOrDefault();
            if (car==null) {
                car = new DbCharacter();
                db.Characters.Add(car);
            }
            car.BaseInititive = character.BaseInititive;
            car.ExhaustionPoints = character.ExhaustionPoints;
            car.HitPoints = character.HitPoints;
            car.Level = character.Level;
            car.Name = character.Name;
            car.PercentRequiredAdrenalDB = character.PercentRequiredAdrenalDB;
            car.PowerPoints = character.PowerPoints;
            car.StrengthBonus = character.StrengthBonus;
            car.Type = character.TypeString;
            car.WalkSpeed = character.WalkSpeed;
            car.GameType = character.GameTypeString;

            db.SaveChanges();
            character.ID = car.ID;



            foreach(var armor in character.Armors) {
                armor.CharacterId = character.ID;
                _combatRepository.SaveArmor(armor);
            }
            var ids = (from arm in character.Armors select arm.ID).ToList();
            var oldList = (from arm in car.Armors where !ids.Contains(arm.ID) select arm).ToList();
            foreach(var armor in oldList) {
                _combatRepository.DeleteArmor(armor.ID);
            }

            foreach (var weapon in character.Weapons)
            {
                weapon.CharacterId = character.ID;
                _combatRepository.SaveWeapon(weapon);
            }
            ids = (from arm in character.Weapons select arm.ID).ToList();
            var oldList2 = (from arm in car.Weapons where !ids.Contains(arm.ID) select arm).ToList();
            foreach (var weapon in oldList2)
            {
                _combatRepository.DeleteWeapon(weapon.ID);
            }

            Cache.Instance.ClearTaggedCache("characters");
            //Cache.Instance.ClearTaggedCache("combatItems");
            return GetCharacter(character.ID);
        }

        public void DeleteCharacter(Character character)
        {
            var car = (from c in db.Characters where c.ID == character.ID select c).FirstOrDefault();
            if (car != null)
            {
                db.Characters.Remove(car);
                db.SaveChanges();
            }
            Cache.Instance.ClearTaggedCache("characters");
        }

        public void DeleteCharacter(int id)
        {
            var car = (from c in db.Characters where c.ID == id select c).FirstOrDefault();
            if (car != null)
            {
                db.Characters.Remove(car);
                db.SaveChanges();
            }
            Cache.Instance.ClearTaggedCache("characters");
        }


    }
}
