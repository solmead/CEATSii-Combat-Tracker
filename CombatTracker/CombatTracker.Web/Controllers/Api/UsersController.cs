using CombatTracker.Entities.Abstract.Services;
using CombatTracker.Entities.Security;
using CombatTracker.Entities.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Utilities.Poco;

namespace CombatTracker.Web.Controllers.Api
{
    [ApiController]
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class UsersController : BaseController
    {

        private readonly IUserService _userService;

        public UsersController(
            IUserService userService,
            ISessionContext sessionContext) : base(sessionContext)
        {
            _userService = userService;
        }

        [AllowAnonymous]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status403Forbidden)]
        [HttpGet("CurrentUser")]
        public async Task<ActionResult<ApplicationUser>> CurrentUser()
        {
            var us = await _sessionContext.GetCurrentUserAsync();

            if (us==null)
            {
                return Ok(null);
            }
            return Ok(us);
        }

        [HttpPost("logout")]
        public async Task<ActionResult<bool>> Logout()
        {
            var success = await _userService.Logout();


            return Ok(success);
        }

        [AllowAnonymous]
        [HttpPost("authenticate")]
        public async Task<ActionResult<ApplicationUser>> Authenticate([FromBody]AuthenticateModel model)
        {
            var user = await _userService.AuthenticateAsync(model.Username, model.Password, model.RememberMe);

            if (user == null)
                return BadRequest(new { message = "Username or password is incorrect" });

            return Ok(user);
        }


        [AllowAnonymous]
        [HttpPost("register")]
        public async Task<ActionResult<ApplicationUser>> Register([FromBody]RegisterModel model)
        {
            // map model to entity
            //var user = _mapper.Map<User>(model);

            try
            {
                // create user
                var user = await _userService.CreateAsync(model, model.Password);
                return Ok();
            }
            catch (Exception ex)
            {
                // return error message if there was an exception
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpGet("GetAll")]
        [Authorize(Roles="Admin")]
        public async Task<ActionResult<List<ApplicationUser>>> GetAll()
        {
            var users = await _userService.GetAllAsync();
            return Ok(users);
        }

        [HttpGet("GetById/{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult<ApplicationUser>> GetById(string id)
        {
            var user = await _userService.GetByIdAsync(id);
            return Ok(user);
        }

        [HttpPut("Update/{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult<ApplicationUser>> Update(string id, [FromBody]UpdateModel model)
        {
            var user = await _userService.GetByIdAsync(id);


            model.CopyInto(user);


            //// map model to entity and set id
            //var user = _mapper.Map<User>(model);
            //user.Id = id;

            try
            {
                // update user
                await _userService.UpdateAsync(user, model.Password);
                return Ok();
            }
            catch (Exception ex)
            {
                // return error message if there was an exception
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpDelete("Delete/{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> Delete(string id)
        {
            await _userService.DeleteAsync(id);
            return Ok();
        }

        [AllowAnonymous]
        [HttpPost("ForgotPassword")]
        public async Task<ActionResult<bool>> ForgotPassword(string email)
        {
            var user = await _userService.GetByEmailAsync(email);


            return Ok(true);
        }


    }
}
