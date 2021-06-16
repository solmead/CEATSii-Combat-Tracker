using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CombatTracker.Entities.Abstract.Repos;
using CombatTracker.Entities.Abstract.Services;
using CombatTracker.Entities.Reference;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CombatTracker.Web.Controllers.Api
{

    [ApiVersion("1.0")]
    [ApiExplorerSettings(GroupName = "v1")]
    [Authorize]
    public class CharactersController : BaseApiController
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
        [HttpGet("[action]/{id}")]
        public Character GetCharacter(int id)
        {
            return _characterRepository.GetCharacter(id);
        }
        [HttpPost("SaveCharacter")]
        public Character SaveCharacter([FromBody] Character character)
        {
            return _characterRepository.SaveCharacter(character);
        }
        [HttpDelete("[action]/{id}")]
        public void DeleteCharacter(int id)
        {
            _characterRepository.DeleteCharacter(id);
        }




    }
}