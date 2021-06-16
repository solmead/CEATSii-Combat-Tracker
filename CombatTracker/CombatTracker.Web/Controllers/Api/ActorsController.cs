using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CombatTracker.Entities.Abstract.Repos;
using CombatTracker.Entities.Abstract.Services;
using CombatTracker.Entities.Current;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CombatTracker.Web.Controllers.Api
{

    [ApiVersion("1.0")]
    [ApiExplorerSettings(GroupName = "v1")]
    public class ActorsController : BaseApiController
    {
        public readonly IGameRepository _gameRepository;

        public ActorsController(IGameRepository gameRepository,
            ISessionContext sessionContext) : base(sessionContext)
        {
            _gameRepository = gameRepository;
        }

        [HttpGet("[action]/{gameId}")]
        public List<Actor> GetActorsInGame(int gameId)
        {
            return _gameRepository.GetActors(gameId);
        }

        [HttpGet("[action]/{id}")]
        public Actor GetActor(int id)
        {
            return _gameRepository.GetActor(id);
        }

        [Authorize]
        [HttpPost("SaveActor")]
        public Actor SaveActor([FromBody] Actor actor)
        {
            return _gameRepository.SaveActor(actor);
        }

        [Authorize]
        [HttpDelete("[action]/{id}")]
        public void DeleteActor(int id)
        {
            _gameRepository.DeleteActor(id);
        }

    }
}