using System;
using System.Collections.Generic;
using System.Text;
using CombatTracker.Entities.Current;
using CombatTracker.Entities.Reference;
using CombatTracker.Entities.Reference.Attacks;
using CombatTracker.Entities.Reference.Creatures;

namespace CombatTracker.Entities.Repositories
{
    public interface ICombatRepository
    {


        List<Armor> GetArmors();
        List<Armor> GetArmors(int characterId);
        Armor GetArmor(int id);
        Armor SaveArmor(Armor armor);
        void DeleteArmor(Armor armor);
        void DeleteArmor(int id);

        List<Weapon> GetWeapons();
        List<Weapon> GetWeapons(int characterId);
        Weapon GetWeapon(int id);
        Weapon SaveWeapon(Weapon weapon);
        void DeleteWeapon(Weapon weapon);
        void DeleteWeapon(int id);



        List<Attack> GetAttacks();
        List<Attack> GetAttacksOnCreature(int creatureId);
        List<Attack> GetAttacksOnActor(int actorId);
        Attack GetAttack(int id);
        Attack SaveAttack(Attack attack);
        Attack SaveAttack(Actor actor, Attack attack);
        void DeleteAttack(Attack attack);
        void DeleteAttack(int id);

    }
}
