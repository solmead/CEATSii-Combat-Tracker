using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CombatTracker.Entities.Current;
using CombatTracker.Entities.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CombatTracker.Web.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class ActionsController : Controller
    {

        public readonly IGameRepository _gameRepository;

        public ActionsController(IGameRepository gameRepository)
        {
            _gameRepository = gameRepository;
        }


        [HttpGet("[action]")]
        public List<BaseAction> GetActionsOnActor(int actorId)
        {
            return _gameRepository.GetActionsOnActor(actorId);
        }
        [HttpGet("[action]")]
        public List<BaseAction> GetActionsInGame(int gameId)
        {
            var lst = _gameRepository.GetActionsInGame(gameId);
            var s = Newtonsoft.Json.JsonConvert.SerializeObject(lst);
            return lst;
        }
        [HttpGet("[action]")]
        public BaseAction GetAction(int id)
        {
            return _gameRepository.GetAction(id);
        }
        [HttpPost("[action]")]
        public BaseAction SaveAction([FromBody] BaseAction action)
        {
            return _gameRepository.SaveAction(action);
        }
        [HttpDelete("[action]")]
        public void DeleteAction(int id)
        {
            _gameRepository.DeleteAction(id);
        }

    }
}