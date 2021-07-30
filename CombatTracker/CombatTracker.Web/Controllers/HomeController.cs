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

    //[RoutePrefix("Home")]
    //[Route("{action = index}")]
public class HomeController : BaseController
    {
        public HomeController(ISessionContext sessionContext) : base(sessionContext)
        {

        }
        [AllowAnonymous]
        public IActionResult Index()
        {
            return RedirectToAction("App", "Dashboard");
            //return View();
            //
            //return Redirect("/dist/CEATSiiApp");
        }
        [AllowAnonymous]
        public IActionResult Test()
        {
            return View();
        }
         public IActionResult Privacy()
        {
            return View();
        }

        [AllowAnonymous]
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
