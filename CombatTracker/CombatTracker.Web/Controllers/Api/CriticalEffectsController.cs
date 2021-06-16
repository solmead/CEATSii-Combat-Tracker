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
    [Authorize]
    public class CriticalEffectsController : BaseApiController
    {

        public readonly IGameRepository _gameRepository;

        public CriticalEffectsController(IGameRepository gameRepository,
            ISessionContext sessionContext) : base(sessionContext)
        {
            _gameRepository = gameRepository;
        }



        [HttpGet("[action]/{actorId}")]
        public List<CriticalEffect> GetCriticalEffects(int actorId)
        {
            return _gameRepository.GetCriticalEffects(actorId);
        }
        [HttpGet("[action]/{id}")]
        public CriticalEffect GetCriticalEffect(int id)
        {
            return _gameRepository.GetCriticalEffect(id);
        }
        [HttpPost("SaveCriticalEffect")]
        public CriticalEffect SaveCriticalEffect([FromBody] CriticalEffect criticalEffect)
        {
            return _gameRepository.SaveCriticalEffect(criticalEffect);
        }
        [HttpDelete("[action]/{id}")]
        public void DeleteCriticalEffect(int id)
        {
            _gameRepository.DeleteCriticalEffect(id);
        }

    }
}