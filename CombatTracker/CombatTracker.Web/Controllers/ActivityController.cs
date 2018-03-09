using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CombatTracker.Entities.Current;
using CombatTracker.Entities.Reference;
using CombatTracker.Entities.Reference.Actions;
using CombatTracker.Entities.Reference.Attacks;
using CombatTracker.Entities.Reference.Base;
using CombatTracker.Entities.Repositories;
using CombatTracker.Entities.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CombatTracker.Web.Controllers
{
    [Produces("application/json")]
    [Route("api/Activity")]
    public class ActivityController : Controller
    {
        private readonly IGameService _gameService;
        private readonly IGameRepository _gameRepository;
        private readonly ICreatureRepository _creatureRepository;
        private readonly ICharacterRepository _characterRepository;

        public ActivityController(IGameService gameService,
            IGameRepository gameRepository,
            ICreatureRepository creatureRepository,
            ICharacterRepository characterRepositoryy)
        {
            _gameService = gameService;
            _gameRepository = gameRepository;
            _creatureRepository = creatureRepository;
            _characterRepository = characterRepositoryy;

        }

        //[HttpGet("[action]")]
        //public Game CurrentGame()
        //{
        //    return _gameService.CurrentGame;
        //}

        //[HttpPost("[action]")]
        //public void AddCriticalToActor(int actorId, CriticalEffect crit, int rounds)
        //{
        //    var actor = _gameRepository.GetActor(actorId);
        //    _gameService.AddCriticalToActor(actor, crit, rounds);
        //}

        //[HttpPost("[action]")]
        //public void AddRoundsCriticalAffectsToActor(int actorId, CriticalEffect cAffect, int rounds, double referenceTime)
        //{
        //    var actor = _gameRepository.GetActor(actorId);
        //    _gameService.AddRoundsCriticalAffectsToActor(actor, cAffect, rounds, referenceTime);
        //}
        //[HttpPost("[action]")]
        //public void ChangeActorInit(int actorId, double referenceTime)
        //{
        //    var actor = _gameRepository.GetActor(actorId);
        //    _gameService.ChangeActorInit(actor, referenceTime);
        //}

        //[HttpPost("[action]")]
        //public Actor CreateActorFromCreature(int creatureId)
        //{
        //    var person = _creatureRepository.GetCreature(creatureId);
        //    return _gameService.CreateActorFrom(person);
        //}
        //[HttpPost("[action]")]
        //public Actor CreateActorFromCharacter(int characterId)
        //{
        //    var person = _characterRepository.GetCharacter(characterId);
        //    return _gameService.CreateActorFrom(person);
        //}
        
        //[HttpPost("[action]")]
        //public void RemoveCriticalFromActor(int actorId)
        //{
        //    _gameService.RemoveCriticalFromActor(actor);
        //}

        //[HttpPost("[action]")]
        //public void RemoveCriticalsFromActor(int actorId, int count)
        //{
        //    _gameService.RemoveCriticalsFromActor(actor, count);
        //}
        
        //public void TriggerActorDeath(Actor actor, double referenceTime)
        //{
        //    _gameService.TriggerActorDeath(actor, referenceTime);
        //}
    }
}