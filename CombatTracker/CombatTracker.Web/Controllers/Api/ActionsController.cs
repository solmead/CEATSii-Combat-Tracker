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
        private readonly IActionServices _actionServices;

        public ActionsController(IGameRepository gameRepository, 
            ISessionContext sessionContext,
            IActionServices actionServices) : base(sessionContext)
        {
            _gameRepository = gameRepository;
            _actionServices = actionServices;
        }


        [HttpGet("[action]/{actorId}")]
        public List<BaseAction> GetActionsOnActor(int actorId)
        {
            var lst =  _gameRepository.GetActionsOnActor(actorId);

            lst.ForEach((act) =>
            {
                _actionServices.CheckActionValid(act);
            });

            return lst;
        }
        [HttpGet("[action]/{gameId}")]
        public List<BaseAction> GetActionsInGame(int gameId)
        {
            var lst = _gameRepository.GetActionsInGame(gameId);
            lst.ForEach((act) =>
            {
                _actionServices.CheckActionValid(act);
            });
            //var s = Newtonsoft.Json.JsonConvert.SerializeObject(lst);
            return lst;
        }
        [HttpGet("[action]/{id}")]
        public BaseAction GetAction(int id)
        {
            return _gameRepository.GetAction(id);
        }
        [Authorize]
        [HttpPost("SaveAction")]
        public BaseAction SaveAction([FromBody] BaseAction action)
        {
            return _gameRepository.SaveAction(action);
        }
        [Authorize]
        [HttpDelete("[action]/{id}")]
        public void DeleteAction(int id)
        {
            _gameRepository.DeleteAction(id);
        }

    }
}