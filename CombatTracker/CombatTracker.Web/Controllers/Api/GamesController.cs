using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CombatTracker.Entities.Current;
using CombatTracker.Entities.Reference;
using CombatTracker.Entities.Reference.Attacks.Charts;
using CombatTracker.Entities.Repositories;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CombatTracker.Web.Controllers.Api
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class GamesController : Controller
    {

        public readonly IGameRepository _gameRepository;

        public GamesController(IGameRepository gameRepository)
        {
            _gameRepository = gameRepository;
        }
        
        // GET: /<controller>/
        [HttpGet("[action]")]
        public List<Game> GetGames(GameType gameType = GameType.RMSS)
        {
            var list = _gameRepository.GetGames();

            list = (from i in list where i.GameType == gameType select i).ToList();
            return list;

        }

        [HttpGet("[action]")]
        public Game GetGame(int id)
        {
            return _gameRepository.GetGame(id);
        }

        [HttpPost("[action]")]
        public Game SaveGame([FromBody] Game game)
        {
            return _gameRepository.SaveGame(game);
        }

        [HttpDelete("[action]")]
        public void DeleteGame(int id)
        {
            _gameRepository.DeleteGame(id);
        }
    }
}
