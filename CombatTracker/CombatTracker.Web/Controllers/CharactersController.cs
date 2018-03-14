using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CombatTracker.Entities.Reference;
using CombatTracker.Entities.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CombatTracker.Web.Controllers
{
    [Produces("application/json")]
    [Route("api/Characters")]
    public class CharactersController : Controller
    {

        public readonly ICharacterRepository _characterRepository;

        public CharactersController(ICharacterRepository characterRepository)
        {
            _characterRepository = characterRepository;
        }


        [HttpGet("[action]")]
        public List<Character> GetCharacters(GameType gameType = GameType.RMSS)
        {
            
            var list = _characterRepository.GetCharacters();

            list = (from i in list where i.GameType == gameType select i).ToList();
            return list;
        }
        [HttpGet("[action]")]
        public Character GetCharacter(int id)
        {
            return _characterRepository.GetCharacter(id);
        }
        [HttpPost("[action]")]
        public Character SaveCharacter([FromBody] Character character)
        {
            return _characterRepository.SaveCharacter(character);
        }
        [HttpDelete("[action]")]
        public void DeleteCharacter(int id)
        {
            _characterRepository.DeleteCharacter(id);
        }




    }
}