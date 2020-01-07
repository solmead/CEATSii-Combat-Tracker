﻿using CombatTracker.Entities.Security;
using CombatTracker.Entities.Service;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CombatTracker.Web.Controllers
{
    [Authorize]
    public class BaseController : Controller
    {

        protected ISessionContext _sessionContext { get; private set; }

        protected BaseController(ISessionContext sessionContext)
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