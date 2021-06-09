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

    [ApiController]
    [Route("api/[controller]")]
    public class ActorsController : BaseController
    {
        public readonly IGameRepository _gameRepository;

        public ActorsController(IGameRepository gameRepository,
            ISessionContext sessionContext) : base(sessionContext)
        {
            _gameRepository = gameRepository;
        }

        [HttpGet("[action]")]
        public List<Actor> GetActors(int gameId)
        {
            return _gameRepository.GetActors(gameId);
        }

        [HttpGet("[action]")]
        public Actor GetActor(int id)
        {
            return _gameRepository.GetActor(id);
        }

        [HttpPost("[action]")]
        public Actor SaveActor([FromBody] Actor actor)
        {
            return _gameRepository.SaveActor(actor);
        }

        [HttpDelete("[action]")]
        public void DeleteActor(int id)
        {
            _gameRepository.DeleteActor(id);
        }

    }
}