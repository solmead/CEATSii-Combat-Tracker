using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using CombatTracker.Entities.Service;
using Microsoft.AspNetCore.Mvc;

namespace CombatTracker.Web.Controllers
{
    public class HomeController : BaseController
    {
        public HomeController(ISessionContext sessionContext) : base(sessionContext)
        {

        }
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Error()
        {
            ViewData["RequestId"] = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
            return View();
        }
    }
}
