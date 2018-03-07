using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using CombatTracker.Entities.Current;
using CombatTracker.Entities.Reference.Attacks;
using CombatTracker.Entities.Reference.Attacks.Charts;
using CombatTracker.Entities.Repositories;
using CombatTracker.Entities.Reference;
using Utilities.Caching;
using CombatTracker.Domain.Reference.Attacks;

namespace CombatTracker.Domain.Repositories
{
    public class CombatRepository : ICombatRepository
    {

        private TrackerContext db;
        private readonly IChartRepository _chartRepository;

        public CombatRepository(TrackerContext context, IChartRepository chartRepository)
        {
            db = context;
            _chartRepository = chartRepository;
        }


        public List<Armor> GetArmors()
        {
            return Cache.GetItem<List<Armor>>(CacheArea.Global, "Armors", () =>
            {
                return (from a in db.Armors
                        select new Armor()
                        {
                            CharacterId = a.CharacterId,
                            DB = a.DB,
                            Description = a.Description,
                            ID = a.ID,
                            MovingManeuverMod = a.MovingManeuverMod,
                            Type = a.Type
                        }).ToList();
            }, "combatItems");

        }


        public List<Armor> GetArmors(int characterId)
        {
            return (from a in GetArmors()
                    where a.CharacterId == characterId
                    select a).ToList();

        }

        public Armor GetArmor(int id)
        {
            return (from a in GetArmors()
                    where a.ID == id
                    select a).FirstOrDefault();
        }

        public Armor SaveArmor(Armor armor)
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

            var items = GetArmors();
            if (!items.Contains(armor))
            {
                items.Add(armor);
            }

            return GetArmor(armor.ID);
        }

        public void DeleteArmor(Armor armor)
        {

            var items = GetArmors();
            if (items.Contains(armor))
            {
                items.Remove(armor);
            }
            var car = (from c in db.Armors where c.ID == armor.ID select c).FirstOrDefault();
            if (car != null)
            {
                db.Armors.Remove(car);
                db.SaveChanges();
            }
        }

        public void DeleteArmor(int id)
        {
            var armor = GetArmor(id);
            if (armor != null)
            {
                DeleteArmor(armor);
            }
        }

        public List<Weapon> GetWeapons()
        {
            return Cache.GetItem<List<Weapon>>(CacheArea.Global, "Weapons", () =>
            {
                return (from w in db.Weapons
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
                        }).ToList();
            }, "combatItems");

        }
        public List<Weapon> GetWeapons(int characterId)
        {
            return (from a in GetWeapons()
                    where a.CharacterId == characterId
                    select a).ToList();
        }

        public Weapon GetWeapon(int id)
        {
            return (from a in GetWeapons()
                    where a.ID == id
                    select a).FirstOrDefault();
        }

        public Weapon SaveWeapon(Weapon weapon)
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

            var items = GetWeapons();
            if (!items.Contains(weapon))
            {
                items.Add(weapon);
            }

            return GetWeapon(weapon.ID);
        }

        public void DeleteWeapon(Weapon weapon)
        {
            var items = GetWeapons();
            if (items.Contains(weapon))
            {
                items.Remove(weapon);
            }
            var car = (from c in db.Weapons where c.ID == weapon.ID select c).FirstOrDefault();
            if (car != null)
            {
                db.Weapons.Remove(car);
                db.SaveChanges();
            }
        }

        public void DeleteWeapon(int id)
        {
            var weapon = GetWeapon(id);
            if (weapon != null)
            {
                DeleteWeapon(weapon);
            }
        }




        public List<Attack> GetAttacks()
        {
            return Cache.GetItem<List<Attack>>(CacheArea.Global, "Attacks", () =>
            {
                var list = (from a in db.Attacks
                            select new Attack()
                            {
                                ID = a.ID,
                                AdditionalCritsIsOr = a.AdditionalCritsIsOr,
                                AttackType_ID = a.Type_ID,
                                CreatureOn_ID = a.CreatureOn_ID,
                                DamageMultiplier = a.DamageMultiplier,
                                MaxOB = a.MaxOB,
                                NextRoundSuccess_ID = a.NextRoundSuccess_ID,
                                Number = a.Number,
                                OB = a.OB,
                                ParentAttack_ID = a.ParentAttack_ID,
                                PercentChance = a.PercentChance,
                                SizeRating_ID = a.Size_ID,
                                ThisRoundSuccess_ID = a.ThisRoundSuccess_ID,
                                UseCriticalInstead_ID = a.UseCriticalInstead_ID,
                                WeaponUsed_ID = a.WeaponUsed_ID,
                                CriticalLevelString = a.CriticalLevel
                            }).ToList();

                list.ForEach((attack)=>{
                    attack.AttackType = _chartRepository.GetAttackType(attack.AttackType_ID);
                    var ids = (from aa in db.AttacksAddCrits
                               where aa.AttackID == attack.ID
                               select aa.Critical_ID).ToList();
                    attack.AdditionalCrits = (from id in ids select _chartRepository.GetCriticalType(id)).ToList();

                    if (attack.WeaponUsed_ID.HasValue)
                    {
                        attack.WeaponUsed = GetWeapon(attack.WeaponUsed_ID.Value);
                    }
                    if (attack.NextRoundSuccess_ID.HasValue) {
                        attack.NextRoundSuccess = (from a in list
                                                   where a.ID == attack.NextRoundSuccess_ID
                                                   select a).FirstOrDefault();
                    }
                    if (attack.SizeRating_ID.HasValue)
                    {
                        attack.SizeRating = _chartRepository.GetSizeRating(attack.SizeRating_ID.Value);
                    }
                    if (attack.ThisRoundSuccess_ID.HasValue)
                    {
                        attack.ThisRoundSuccess = (from a in list
                                                   where a.ID == attack.ThisRoundSuccess_ID
                                                   select a).FirstOrDefault();
                    }
                    if (attack.UseCriticalInstead_ID.HasValue)
                    {
                        attack.CriticalUseInstead = _chartRepository.GetCriticalType(attack.UseCriticalInstead_ID.Value);
                    }

                });
                return list;
            }, "combatItems");
        }

        public List<Attack> GetAttacksOnCreature(int creatureId)
        {
            return (from a in GetAttacks()
                    where a.CreatureOn_ID == creatureId
                    select a).ToList();
        }

        public List<Attack> GetAttacksOnActor(int actorId)
        {
            var ids = (from aa in db.ActorsAttacks
                       where aa.Actor_ID == actorId
                       select aa.Attack_ID).ToList();
            return (from id in ids select GetAttack(id)).ToList();
        }

        public Attack GetAttack(int id)
        {
            return (from a in GetAttacks()
                    where a.ID == id
                    select a).FirstOrDefault();
        }


        public Attack SaveAttack(Attack attack)
        {
            if (attack.NextRoundSuccess != null) {
                SaveAttack(attack.NextRoundSuccess);
                attack.NextRoundSuccess_ID = attack.NextRoundSuccess.ID;
            }
            if (attack.ThisRoundSuccess != null)
            {
                SaveAttack(attack.ThisRoundSuccess);
                attack.ThisRoundSuccess_ID = attack.ThisRoundSuccess.ID;
            }


            var item = (from c in db.Attacks where c.ID == attack.ID select c).FirstOrDefault();
            if (item == null)
            {
                item = new DbAttack();
                db.Attacks.Add(item);
            }
            item.AdditionalCritsIsOr = attack.AdditionalCritsIsOr;
            item.CreatureOn_ID = attack.CreatureOn_ID;
            item.CriticalLevel = attack.CriticalLevelString;
            item.DamageMultiplier = attack.DamageMultiplier;
            item.MaxOB = attack.MaxOB;
            item.NextRoundSuccess_ID = attack.NextRoundSuccess_ID;
            item.Number = attack.Number;
            item.OB = attack.OB;
            item.PercentChance = attack.PercentChance;
            item.Size_ID = attack.SizeRating_ID;
            item.ThisRoundSuccess_ID = attack.ThisRoundSuccess_ID;
            item.Type_ID = attack.AttackType.ID;
            item.UseCriticalInstead_ID = attack.UseCriticalInstead_ID;
            item.WeaponUsed_ID = attack.WeaponUsed_ID;

            db.SaveChanges();
            attack.ID = item.ID;

            foreach(var ac in attack.AdditionalCrits) {
                var ac2 = (from aCrit in item.AdditionalCrits where aCrit.Critical_ID == ac.ID select aCrit).FirstOrDefault();
                if (ac2 == null) {
                    ac2 = new DbAttacksAddCrit()
                    {
                        AttackID = attack.ID,
                        Critical_ID = ac.ID
                    };
                    db.AttacksAddCrits.Add(ac2);
                }
            }
            var ids = (from aCrit in attack.AdditionalCrits select aCrit.ID).ToList();
            var oldList = (from aCrit in item.AdditionalCrits where !ids.Contains(aCrit.Critical_ID) select aCrit).ToList();
            foreach (var aCrit in oldList)
            {
                db.AttacksAddCrits.Remove(aCrit);
            }
            db.SaveChanges();


            var items = GetAttacks();
            if (!items.Contains(attack))
            {
                items.Add(attack);
            }

            return GetAttack(attack.ID);


        }


        public Attack SaveAttack(Actor actor, Attack attack)
        {
            var att = SaveAttack(attack);

            var actoratt = (from aa in db.ActorsAttacks
                            where aa.Actor_ID == actor.ID && aa.Attack_ID == attack.ID
                            select aa).FirstOrDefault();
            if (actoratt == null) {
                actoratt = new Models.DbActorsAttack()
                {
                    Actor_ID = actor.ID,
                    Attack_ID = attack.ID
                };
                db.ActorsAttacks.Add(actoratt);
                db.SaveChanges();
                if (!actor.Attacks.Contains(attack))
                {
                    actor.Attacks.Add(attack);
                }
            }
            return att;
        }

        public void DeleteAttack(Attack attack)
        {

            var items = GetAttacks();
            if (items.Contains(attack))
            {
                items.Remove(attack);
            }

            var actoratts = (from aa in db.ActorsAttacks
                            where aa.Attack_ID == attack.ID
                            select aa).ToList();
            
            db.ActorsAttacks.RemoveRange(actoratts);

            var car = (from c in db.Attacks where c.ID == attack.ID select c).FirstOrDefault();
            if (car != null)
            {
                db.Attacks.Remove(car);
            }

            db.SaveChanges();
        }

        public void DeleteAttack(int id)
        {
            var item = GetAttack(id);
            if (item != null)
            {
                DeleteAttack(item);
            }
        }


    }
}
