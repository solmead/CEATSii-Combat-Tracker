using CombatTracker.Entities.Abstract.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CombatTracker.Web.Controllers
{
    //[Authorize]
    [Produces("application/json")]
    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    [Route("api/v{version:apiVersion}/[controller]")] //DO NOT MODIFY: Routing scheme for all api controllers inheriting from this class.
    [ApiController]
    public abstract class BaseApiController : Controller
    {



        protected ISessionContext _sessionContext { get; private set; }

        protected BaseApiController(ISessionContext sessionContext)
        {
            _sessionContext = sessionContext;
            ViewBag.SessionContext = _sessionContext;
        }

        public override async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
        {
            var user = await _sessionContext.GetCurrentUserAsync();
            await base.OnActionExecutionAsync(context, next);
            return;
        }
    }
}
