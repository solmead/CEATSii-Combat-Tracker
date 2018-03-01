using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using CombatTracker.Entities.Current;
using CombatTracker.Entities.Reference;
using CombatTracker.Entities.Repositories;
using Utilities.Caching;
using CombatTracker.Domain.Reference.Players;

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
            return Cache.GetItem<List<Character>>(CacheArea.Global, "Characters", () =>
            {
                return (from cbc in db.Characters
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
                            Weapons = (from w in cbc.Weapons
                                       select new Weapon()
                                       {
                                           ID = w.ID,
                                           Bonus = w.Bonus,
                                           CharacterId = w.CharacterId,
                                           Is2Handed = w.Is2Handed,
                                           MaxWeight = w.MaxWeight,
                                           MinWeight = w.MinWeight,
                                           Name = w.Name,
                                           OB = w.OB,
                                           Weight = w.Weight
                                       }).ToList(),
                            Armors = (from a in cbc.Armors
                                      select new Armor()
                                      {
                                          CharacterId = a.CharacterId,
                                          DB = a.DB,
                                          Description = a.Description,
                                          ID = a.ID,
                                          MovingManeuverMod = a.MovingManeuverMod,
                                          Type = a.Type
                                      }).ToList()
                        }).ToList();
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
            var car = (from c in db.Characters where c.ID == character.ID select c).FirstOrDefault();
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

            db.SaveChanges();
            character.ID = car.ID;



            foreach(var armor in character.Armors) {
                armor.CharacterId = character.ID;
                SaveTheArmor(armor);
            }
            var ids = (from arm in character.Armors select arm.ID).ToList();
            var oldList = (from arm in car.Armors where !ids.Contains(arm.ID) select arm).ToList();
            foreach(var armor in oldList) {
                DeleteArmor(armor.ID);
            }

            foreach (var weapon in character.Weapons)
            {
                weapon.CharacterId = character.ID;
                SaveTheWeapon(weapon);
            }
            ids = (from arm in character.Weapons select arm.ID).ToList();
            var oldList2 = (from arm in car.Weapons where !ids.Contains(arm.ID) select arm).ToList();
            foreach (var weapon in oldList2)
            {
                DeleteWeapon(weapon.ID);
            }

            CacheSystem.Instance.ClearTaggedCache("characters");
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
            CacheSystem.Instance.ClearTaggedCache("characters");
        }

        public void DeleteCharacter(int id)
        {
            var car = (from c in db.Characters where c.ID == id select c).FirstOrDefault();
            if (car != null)
            {
                db.Characters.Remove(car);
                db.SaveChanges();
            }
            CacheSystem.Instance.ClearTaggedCache("characters");
        }

        public List<Armor> GetArmors(int characterId)
        {
            var car = GetCharacter(characterId);
            return car.Armors.ToList();
        }

        public Armor GetArmor(int id)
        {
            var cId = (from a in db.Armors where a.ID == id select a.CharacterId).FirstOrDefault();
            var car = GetCharacter(cId ?? 0);
            return (from a in car.Armors where a.ID == id select a).FirstOrDefault();
        }

        public Armor SaveArmor(Armor armor)
        {
            var id = SaveArmor(armor);
            CacheSystem.Instance.ClearTaggedCache("characters");
            return GetArmor(armor.ID);
        }
        private int SaveTheArmor(Armor armor)
        {
            var arm = (from c in db.Armors where c.ID == armor.ID select c).FirstOrDefault();
            if (arm == null)
            {
                arm = new DbArmor();
                db.Armors.Add(arm);
            }
            arm.CharacterId = armor.CharacterId;
            arm.DB = armor.DB;
            arm.Description = armor.Description;
            arm.MovingManeuverMod = armor.MovingManeuverMod;
            arm.Type = armor.Type;

            db.SaveChanges();
            armor.ID = arm.ID;
            return armor.ID;
        }

        public void DeleteArmor(Armor armor)
        {

            var car = (from c in db.Armors where c.ID == armor.ID select c).FirstOrDefault();
            if (car != null)
            {
                db.Armors.Remove(car);
                db.SaveChanges();
            }
        }

        public void DeleteArmor(int id)
        {

            var car = (from c in db.Armors where c.ID == id select c).FirstOrDefault();
            if (car != null)
            {
                db.Armors.Remove(car);
                db.SaveChanges();
            }
        }

        public List<Weapon> GetWeapons(int characterId)
        {
            var car = GetCharacter(characterId);
            return car.Weapons.ToList();
        }

        public Weapon GetWeapon(int id)
        {
            var cId = (from a in db.Weapons where a.ID == id select a.CharacterId).FirstOrDefault();
            var car = GetCharacter(cId ?? 0);
            return (from a in car.Weapons where a.ID == id select a).FirstOrDefault();
        }

        public Weapon SaveWeapon(Weapon weapon)
        {
            var id = SaveTheWeapon(weapon);

            CacheSystem.Instance.ClearTaggedCache("characters");
            return GetWeapon(weapon.ID);
        }
        private int SaveTheWeapon(Weapon weapon)
        {
            var item = (from c in db.Weapons where c.ID == weapon.ID select c).FirstOrDefault();
            if (item == null)
            {
                item = new DbWeapon();
                db.Weapons.Add(item);
            }
            item.CharacterId = weapon.CharacterId;
            item.Bonus = weapon.Bonus;
            item.Is2Handed = weapon.Is2Handed;
            item.MaxWeight = weapon.MaxWeight;
            item.MinWeight = weapon.MinWeight;
            item.Name = weapon.Name;
            item.OB = weapon.OB;
            item.Weight = weapon.Weight;
                

            db.SaveChanges();
            weapon.ID = item.ID;
            return weapon.ID;
        }

        public void DeleteWeapon(Weapon weapon)
        {

            var car = (from c in db.Weapons where c.ID == weapon.ID select c).FirstOrDefault();
            if (car != null)
            {
                db.Weapons.Remove(car);
                db.SaveChanges();
            }
        }

        public void DeleteWeapon(int id)
        {

            var car = (from c in db.Weapons where c.ID == id select c).FirstOrDefault();
            if (car != null)
            {
                db.Weapons.Remove(car);
                db.SaveChanges();
            }
        }
    }
}
