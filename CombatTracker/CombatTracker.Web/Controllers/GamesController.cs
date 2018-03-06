using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CombatTracker.Entities.Current;
using CombatTracker.Entities.Repositories;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CombatTracker.Web.Controllers
{
    [Route("api/[controller]")]
    public class GameController : Controller
    {

        public readonly IGameRepository _gameRepository;

        public GameController(IGameRepository gameRepository)
        {
            _gameRepository = gameRepository;
        }

        // GET: /<controller>/
        [HttpGet("[action]")]
        public List<Game> GetGames()
        {
            return _gameRepository.GetGames();
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

    }
}
