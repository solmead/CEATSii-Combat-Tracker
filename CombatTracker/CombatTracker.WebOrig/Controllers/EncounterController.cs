using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CombatTracker.Entities.Current;
using CombatTracker.Entities.Repositories;
using CombatTracker.Entities.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CombatTracker.Web.Controllers
{
    [Produces("application/json")]
    [Route("api/Encounter")]
    public class EncounterController : Controller
    {
        private readonly ICreatureRepository _creatureRepository;
        private readonly ICharacterRepository _characterRepository;
        private readonly IGameRepository _gameRepository;
        private readonly IGameService _gameService;
        private readonly IChartRepository _chartRepository;

        public EncounterController(ICreatureRepository creatureRepository,
            ICharacterRepository characterRepository, 
            IGameRepository gameRepository,
            IChartRepository chartRepository,
            IGameService gameService)
        {
            _gameRepository = gameRepository;
            _creatureRepository = creatureRepository;
            _characterRepository = characterRepository;
            _chartRepository = chartRepository;
            _gameService = gameService;
        }

        [HttpGet("[action]")]
        public Game GetCurrentGame()
        {
            return _gameService.CurrentGame;
        }

        [HttpPost("[action]")]
        public Game SetCurrentGame(int gameId)
        {
            var gm = _gameRepository.GetGame(gameId);
            _gameService.CurrentGame = gm;
            return gm;
        }


        [HttpPost("[action]")]
        public Actor CreateActorFromCreature(int creatureId)
        {
            var person = _creatureRepository.GetCreature(creatureId);
            var actor = _gameService.CreateActorFrom(person);


            return actor;
        }

        [HttpPost("[action]")]
        public Actor CreateActorFromCharacter(int characterId, int? rolledInit = null)
        {
            var person = _characterRepository.GetCharacter(characterId);
            var actor = _gameService.CreateActorFrom(person, rolledInit);


            return actor;
        }

        [HttpPost("[action]")]
        public MoveNextResult MoveToNext(bool none = false)
        {

            return _gameService.MoveToNextAction();
        }

        [HttpPost("[action]")]
        public BaseAction ProposeActionUnconscious(int actorId)
        {
            var actor = _gameRepository.GetActor(actorId);
            return _gameService.ProposeActionUnconscious(actor);
        }

        [HttpPost("[action]")]
        public BaseAction ProposeAction(int actionDefId, int whomId, int modifier = 0, int? attackId = null)
        {
            var actor = _gameRepository.GetActor(whomId);
            var actionDef = _chartRepository.GetAction(actionDefId);
            return _gameService.ProposeAction(actionDef, actor, modifier, attackId);
        }

        [HttpPost("[action]")]
        public BaseAction ProposeActionContinue(int previousActionId, int whomId)
        {
            var actor = _gameRepository.GetActor(whomId);
            var action = _gameRepository.GetAction(previousActionId);
            return _gameService.ProposeActionContinue(action, actor);
        }

        [HttpPost("[action]")]
        public BaseAction AddBleedEffect(int whomId, int bleedRate)
        {
            var actor = _gameRepository.GetActor(whomId);
            return _gameService.AddBleedEffect(actor, bleedRate);
        }

        [HttpPost("[action]")]
        public BaseAction AddCriticalEffect(int whomId, [FromBody] CriticalEffect crit, int rounds)
        {
            var actor = _gameRepository.GetActor(whomId);
            return _gameService.AddCriticalEffect(actor, crit, rounds);
        }

        [HttpPost("[action]")]
        public BaseAction AddPsychicEffect(int whomId, int psychicLevel)
        {
            var actor = _gameRepository.GetActor(whomId);
            return _gameService.AddPsychicEffect(actor, psychicLevel);
        }

        [HttpPost("[action]")]
        public BaseAction AddSpellEffect(int effectedActorId, int casterId, string spellName, int rounds, int hastePercent)
        {
            var effected = _gameRepository.GetActor(effectedActorId);
            var caster = _gameRepository.GetActor(casterId);
            return _gameService.AddSpellEffect(effected, caster, spellName, rounds, hastePercent);
        }

        [HttpPost("[action]")]
        public void RemoveEffect(int actionId)
        {

            var action = _gameRepository.GetAction(actionId);
            _gameService.RemoveEffect(action);
        }

        [HttpPost("[action]")]
        public void RemoveCriticalsFromActor(int whomId, int count = 1)
        {
            var actor = _gameRepository.GetActor(whomId);
            _gameService.RemoveCriticalsFromActor(actor, count);
        }
        

        [HttpPost("[action]")]
        public void DoProposedAction(int whomId)
        {
            var actor = _gameRepository.GetActor(whomId);
            _gameService.DoProposedAction(actor);
        }

        [HttpPost("[action]")]
        public void SetModifierOnAction(int actionId, int modifier)
        {

            var action = _gameRepository.GetAction(actionId);
            _gameService.SetModifierOnAction(action, modifier);
        }

        [HttpPost("[action]")]
        public void SetAttackOnAction(int actionId, int attackId)
        {

            var action = _gameRepository.GetAction(actionId);
            _gameService.SetAttackOnAction(action, attackId);
        }


    }
}