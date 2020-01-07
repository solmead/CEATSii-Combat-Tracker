using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CombatTracker.Entities.Reference;
using CombatTracker.Entities.Repositories;
using CombatTracker.Entities.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CombatTracker.Web.Controllers.Api
{

    [ApiController]
    [Produces("application/json")]
    [Route("api/Characters")]
    public class CharactersController : BaseController
    {

        public readonly ICharacterRepository _characterRepository;

        public CharactersController(ICharacterRepository characterRepository,
            ISessionContext sessionContext) : base(sessionContext)
        {
            _characterRepository = characterRepository;
        }


        [HttpGet("[action]")]
        public List<Character> GetCharacters()
        {

            var list = _characterRepository.GetCharacters();

            //list = (from i in list where i.GameType == gameType select i).ToList();
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