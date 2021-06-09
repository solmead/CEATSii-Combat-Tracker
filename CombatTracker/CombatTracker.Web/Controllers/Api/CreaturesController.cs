using System;
using System.Collections.Extensions;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mime;
using System.Threading.Tasks;
using CombatTracker.Authorization;
using CombatTracker.Entities.Abstract.Repos;
using CombatTracker.Entities.Abstract.Services;
using CombatTracker.Entities.Reference;
using CombatTracker.Entities.Reference.Creatures;
using CombatTracker.Entities.Security;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CombatTracker.Web.Controllers.Api
{
    [ApiController]
    [Produces("application/json")]
    [Route("api/Creature")]
    public class CreaturesController : BaseController
    {
        public readonly ICreatureRepository _creatureRepository;
        protected IAuthorizationService _authorizationService { get; }
        protected UserManager<ApplicationUser> _userManager { get; }

        public CreaturesController(ICreatureRepository creatureRepository,
            IAuthorizationService authorizationService,
            UserManager<ApplicationUser> userManager,
            ISessionContext sessionContext) : base(sessionContext)
        {
            _creatureRepository = creatureRepository;
            _userManager = userManager;
            _authorizationService = authorizationService;
        }


        [HttpGet("[action]")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<List<Creature>> GetCreatures()
        {
            var list = _creatureRepository.GetCreatures().AsQueryable();
            //list = (from i in list where i.GameType == gameType select i);
            //var currentUserId = _userManager.GetUserId(User);
            //list = list.Where(c => c.Status == CreatureStatus.InCompendium || c.OwnerID == currentUserId);

            list = (await list.WhereAsync(async c =>
            {
                var isAuthorized = await _authorizationService.AuthorizeAsync(User, c, ContactOperations.Read);

                return isAuthorized.Succeeded;

            })).AsQueryable();

            //await list.ForEachAsync(async (c) =>
            //{
            //    var isAuthorized = await _authorizationService.AuthorizeAsync( User, c, ContactOperations.Read);


            //});




            //var isAuthorized = User.IsInRole(SecurityRoles.Compendium.ToString()) ||
            //                   User.IsInRole(SecurityRoles.Admin.ToString());


            // Only approved contacts are shown UNLESS you're authorized to see them
            // or you are the owner.


            //if (!isAuthorized)
            //{
            //    list = list.Where(c => c.OwnerID == currentUserId);
            //}


            return await list.ToListAsync();
        }

        [HttpGet("[action]")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status403Forbidden)]
        public async Task<ActionResult<Creature>> GetCreature(int id)
        {
            var creature = _creatureRepository.GetCreature(id);


            // requires using ContactManager.Authorization;
            var isAuthorized = await _authorizationService.AuthorizeAsync(
                                                        User, creature,
                                                        ContactOperations.Read);
            if (!isAuthorized.Succeeded)
            {

                return Forbid();
            }

            return creature;
        }

        [HttpPost("[action]")]
        [Consumes(MediaTypeNames.Application.Json)]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status403Forbidden)]
        public async Task<ActionResult<Creature>> SaveCreature([FromBody] Creature creature)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            if (creature.OwnerID == null)
            {
                creature.OwnerID = _userManager.GetUserId(User);
            }
            AuthorizationResult isAuthorized = null;
            if (creature.ID == 0)
            {
                // requires using ContactManager.Authorization;
                isAuthorized = await _authorizationService.AuthorizeAsync(
                                                            User, creature,
                                                            ContactOperations.Create);
            } else
            {
                // requires using ContactManager.Authorization;
                isAuthorized = await _authorizationService.AuthorizeAsync(
                                                            User, creature,
                                                            ContactOperations.Update);
            }
            if (!isAuthorized.Succeeded)
            {

                return Forbid();
            }

            var cr = _creatureRepository.SaveCreature(creature);
            if (creature.ID==0)
            {
                return CreatedAtAction(nameof(GetCreature), new { id = cr.ID }, cr);
            }


            return Ok(cr);

        }

        [HttpDelete("[action]")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status403Forbidden)]
        public async Task<ActionResult> DeleteCreature(int id)
        {
            var creature = _creatureRepository.GetCreature(id);

            if (creature==null)
            {
                return BadRequest();
            }

            // requires using ContactManager.Authorization;
            var isAuthorized = await _authorizationService.AuthorizeAsync(
                                                        User, creature,
                                                        ContactOperations.Delete);
            if (!isAuthorized.Succeeded)
            {

                return Forbid();
            }
            _creatureRepository.DeleteCreature(id);

            return Ok();
        }


    }
}