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

        public EncounterController(ICreatureRepository creatureRepository,
            ICharacterRepository characterRepository, 
            IGameRepository gameRepository,
            IGameService gameService)
        {
            _gameRepository = gameRepository;
            _creatureRepository = creatureRepository;
            _characterRepository = characterRepository;
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


    }
}