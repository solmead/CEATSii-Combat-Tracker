using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CombatTracker.Entities.Reference;
using CombatTracker.Entities.Reference.Creatures;
using CombatTracker.Entities.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CombatTracker.Web.Controllers.Api
{
    [Produces("application/json")]
    [Route("api/Creature")]
    public class CreaturesController : Controller
    {
        public readonly ICreatureRepository _creatureRepository;

        public CreaturesController(ICreatureRepository creatureRepository)
        {
            _creatureRepository = creatureRepository;
        }


        [HttpGet("[action]")]
        public List<Creature> GetCreatures(GameType gameType = GameType.RMSS)
        {
            var list = _creatureRepository.GetCreatures();

            list = (from i in list where i.GameType == gameType select i).ToList();
            return list;
        }

        [HttpGet("[action]")]
        public Creature GetCreature(int id)
        {
            return _creatureRepository.GetCreature(id);
        }

        [HttpPost("[action]")]
        public Creature SaveCreature([FromBody] Creature creature)
        {
            return _creatureRepository.SaveCreature(creature);
        }

        [HttpDelete("[action]")]
        public void DeleteCreature(int id)
        {
            _creatureRepository.DeleteCreature(id);
        }


    }
}