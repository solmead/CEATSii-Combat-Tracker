using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CombatTracker.Entities.Current;
using CombatTracker.Entities.Reference;
using CombatTracker.Entities.Reference.Attacks;
using CombatTracker.Entities.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CombatTracker.Web.Controllers
{
    [Produces("application/json")]
    [Route("api/Combat")]
    public class CombatController : Controller
    {

        public readonly ICombatRepository _combatRepository;
        public readonly IGameRepository _gameRepository;

        public CombatController(ICombatRepository combatRepository,
            IGameRepository gameRepository)
        {
            _combatRepository = combatRepository;
            _gameRepository = gameRepository;
        }
        

        [HttpDelete("[action]")]
        public void DeleteArmor(int id)
        {
            _combatRepository.DeleteArmor(id);
        }
        

        [HttpDelete("[action]")]
        public void DeleteAttack(int id)
        {
            _combatRepository.DeleteAttack(id);
        }
        

        [HttpDelete("[action]")]
        public void DeleteWeapon(int id)
        {
            _combatRepository.DeleteWeapon(id);
        }

        [HttpGet("[action]")]
        public Armor GetArmor(int id)
        {
            return _combatRepository.GetArmor(id);
        }

        [HttpGet("[action]")]
        public List<Armor> GetArmors()
        {
            return _combatRepository.GetArmors();
        }

        [HttpGet("[action]")]
        public List<Armor> GetArmorsOnCharacter(int characterId)
        {
            return _combatRepository.GetArmors(characterId);
        }

        [HttpGet("[action]")]
        public Attack GetAttack(int id)
        {
            return _combatRepository.GetAttack(id);
        }

        [HttpGet("[action]")]
        public List<Attack> GetAttacks()
        {
            return _combatRepository.GetAttacks();
        }

        [HttpGet("[action]")]
        public List<Attack> GetAttacksOnActor(int actorId)
        {
            return _combatRepository.GetAttacksOnActor(actorId);
        }

        [HttpGet("[action]")]
        public List<Attack> GetAttacksOnCreature(int creatureId)
        {
            return _combatRepository.GetAttacksOnCreature(creatureId);
        }

        [HttpGet("[action]")]
        public Weapon GetWeapon(int id)
        {
            return _combatRepository.GetWeapon(id);
        }

        [HttpGet("[action]")]
        public List<Weapon> GetWeapons()
        {
            return _combatRepository.GetWeapons();
        }

        [HttpGet("[action]")]
        public List<Weapon> GetWeaponsOnCharacter(int characterId)
        {
            return _combatRepository.GetWeapons(characterId);
        }

        [HttpPost("[action]")]
        public Armor SaveArmor([FromBody] Armor armor)
        {
            return _combatRepository.SaveArmor(armor);
        }

        [HttpPost("[action]")]
        public Attack SaveAttack([FromBody] Attack attack)
        {
            return _combatRepository.SaveAttack(attack);
        }

        [HttpPost("[action]")]
        public Attack SaveAttackOnActor(int actorId, [FromBody]  Attack attack)
        {
            var actor = _gameRepository.GetActor(actorId);
            return _combatRepository.SaveAttack(actor, attack);
        }

        [HttpPost("[action]")]
        public Weapon SaveWeapon([FromBody] Weapon weapon)
        {
            return _combatRepository.SaveWeapon(weapon);
        }
    }
}