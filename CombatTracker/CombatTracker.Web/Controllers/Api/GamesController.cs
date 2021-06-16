using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CombatTracker.Entities.Abstract.Repos;
using CombatTracker.Entities.Abstract.Services;
using CombatTracker.Entities.Current;
using CombatTracker.Entities.Reference;
using CombatTracker.Entities.Reference.Attacks.Charts;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CombatTracker.Web.Controllers.Api
{
    [ApiVersion("1.0")]
    [ApiExplorerSettings(GroupName = "v1")]
    [Authorize]
    public class GamesController : BaseApiController
    {

        public readonly IGameRepository _gameRepository;

        public GamesController(IGameRepository gameRepository,
            ISessionContext sessionContext) : base(sessionContext)
        {
            _gameRepository = gameRepository;
        }
        
        // GET: /<controller>/
        [HttpGet("[action]")]
        public List<Game> GetGames()
        {
            var list = _gameRepository.GetGames();

            //list = (from i in list where i.GameType == gameType select i).ToList();
            return list;

        }

        [HttpGet("[action]/{id}")]
        public Game GetGame(int id)
        {
            return _gameRepository.GetGame(id);
        }

        [HttpPost("SaveGame")]
        public Game SaveGame([FromBody] Game game)
        {
            return _gameRepository.SaveGame(game);
        }

        [HttpDelete("[action]/{id}")]
        public void DeleteGame(int id)
        {
            _gameRepository.DeleteGame(id);
        }
    }
}
