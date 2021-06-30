using CombatTracker.Entities.Abstract.Services;
using CombatTracker.Web.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace CombatTracker.Web.Controllers
{
    public class DashboardController : BaseController
    {
        public DashboardController(ISessionContext sessionContext) : base(sessionContext)
        {

        }
        [AllowAnonymous]
        [HttpGet("Dashboard/App/{*stuff}")]
        public IActionResult App()
        {
            return View();
        }
        
    }
}
