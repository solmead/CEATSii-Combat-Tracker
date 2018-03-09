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
    public class CriticalEffectsController : Controller
    {

        public readonly IGameRepository _gameRepository;

        public CriticalEffectsController(IGameRepository gameRepository)
        {
            _gameRepository = gameRepository;
        }



        [HttpGet("[action]")]
        public List<CriticalEffect> GetCriticalEffects(int actorId)
        {
            return _gameRepository.GetCriticalEffects(actorId);
        }
        [HttpGet("[action]")]
        public CriticalEffect GetCriticalEffect(int id)
        {
            return _gameRepository.GetCriticalEffect(id);
        }
        [HttpPost("[action]")]
        public CriticalEffect SaveCriticalEffect([FromBody] CriticalEffect criticalEffect)
        {
            return _gameRepository.SaveCriticalEffect(criticalEffect);
        }
        [HttpDelete("[action]")]
        public void DeleteCriticalEffect(int id)
        {
            _gameRepository.DeleteCriticalEffect(id);
        }

    }
}