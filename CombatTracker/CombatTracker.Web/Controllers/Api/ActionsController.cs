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
    public class ActionsController : BaseApiController
    {

        public readonly IGameRepository _gameRepository;

        public ActionsController(IGameRepository gameRepository, 
            ISessionContext sessionContext) : base(sessionContext)
        {
            _gameRepository = gameRepository;
        }


        [HttpGet("[action]/{actorId}")]
        public List<BaseAction> GetActionsOnActor(int actorId)
        {
            return _gameRepository.GetActionsOnActor(actorId);
        }
        [HttpGet("[action]/{gameId}")]
        public List<BaseAction> GetActionsInGame(int gameId)
        {
            var lst = _gameRepository.GetActionsInGame(gameId);
            var s = Newtonsoft.Json.JsonConvert.SerializeObject(lst);
            return lst;
        }
        [HttpGet("[action]/{id}")]
        public BaseAction GetAction(int id)
        {
            return _gameRepository.GetAction(id);
        }
        [HttpPost("SaveAction")]
        public BaseAction SaveAction([FromBody] BaseAction action)
        {
            return _gameRepository.SaveAction(action);
        }
        [HttpDelete("[action]/{id}")]
        public void DeleteAction(int id)
        {
            _gameRepository.DeleteAction(id);
        }

    }
}