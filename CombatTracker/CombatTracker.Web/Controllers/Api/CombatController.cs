using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CombatTracker.Entities.Abstract.Repos;
using CombatTracker.Entities.Abstract.Services;
using CombatTracker.Entities.Current;
using CombatTracker.Entities.Reference;
using CombatTracker.Entities.Reference.Attacks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CombatTracker.Web.Controllers.Api
{
    [ApiVersion("1.0")]
    [ApiExplorerSettings(GroupName = "v1")]
    [Authorize]
    public class CombatController : BaseApiController
    {

        public readonly ICombatRepository _combatRepository;
        public readonly IGameRepository _gameRepository;

        public CombatController(ICombatRepository combatRepository,
            IGameRepository gameRepository,
            ISessionContext sessionContext) : base(sessionContext)
        {
            _combatRepository = combatRepository;
            _gameRepository = gameRepository;
        }
        

        [HttpDelete("[action]/{id}")]
        public void DeleteArmor(int id)
        {
            _combatRepository.DeleteArmor(id);
        }
        

        [HttpDelete("[action]/{id}")]
        public void DeleteAttack(int id)
        {
            _combatRepository.DeleteAttack(id);
        }
        

        [HttpDelete("[action]/{id}")]
        public void DeleteWeapon(int id)
        {
            _combatRepository.DeleteWeapon(id);
        }

        [HttpGet("[action]/{id}")]
        public Armor GetArmor(int id)
        {
            return _combatRepository.GetArmor(id);
        }

        [HttpGet("[action]")]
        public List<Armor> GetArmors()
        {
            return _combatRepository.GetArmors();
        }

        [HttpGet("[action]/{characterId}")]
        public List<Armor> GetArmorsOnCharacter(int characterId)
        {
            return _combatRepository.GetArmors(characterId);
        }

        [HttpGet("[action]/{id}")]
        public Attack GetAttack(int id)
        {
            return _combatRepository.GetAttack(id);
        }

        [HttpGet("[action]")]
        public List<Attack> GetAttacks()
        {
            return _combatRepository.GetAttacks();
        }

        [HttpGet("[action]/{actorId}")]
        public List<Attack> GetAttacksOnActor(int actorId)
        {
            return _combatRepository.GetAttacksOnActor(actorId);
        }

        [HttpGet("[action]/{creatureId}")]
        public List<Attack> GetAttacksOnCreature(int creatureId)
        {
            return _combatRepository.GetAttacksOnCreature(creatureId);
        }

        [HttpGet("[action]/{id}")]
        public Weapon GetWeapon(int id)
        {
            return _combatRepository.GetWeapon(id);
        }

        [HttpGet("[action]")]
        public List<Weapon> GetWeapons()
        {
            return _combatRepository.GetWeapons();
        }

        [HttpGet("[action]/{characterId}")]
        public List<Weapon> GetWeaponsOnCharacter(int characterId)
        {
            return _combatRepository.GetWeapons(characterId);
        }

        [HttpPost("SaveArmor")]
        public Armor SaveArmor([FromBody] Armor armor)
        {
            return _combatRepository.SaveArmor(armor);
        }

        [HttpPost("SaveAttack")]
        public Attack SaveAttack([FromBody] Attack attack)
        {
            return _combatRepository.SaveAttack(attack);
        }

        [HttpPost("SaveAttackOnActor/{actorId}")]
        public Attack SaveAttackOnActor(int actorId, [FromBody]  Attack attack)
        {
            var actor = _gameRepository.GetActor(actorId);
            return _combatRepository.SaveAttack(actor, attack);
        }

        [HttpPost("SaveWeapon")]
        public Weapon SaveWeapon([FromBody] Weapon weapon)
        {
            return _combatRepository.SaveWeapon(weapon);
        }
    }
}