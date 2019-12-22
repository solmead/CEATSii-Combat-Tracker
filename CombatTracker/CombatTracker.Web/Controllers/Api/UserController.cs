using CombatTracker.Entities.Security;
using CombatTracker.Entities.Service;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CombatTracker.Web.Controllers.Api
{
    public class UserController : BaseController
    {


        public UserController(
            ISessionContext sessionContext) : base(sessionContext)
        {

        }


        [HttpGet]
        public User CurrentUser()
        {
            return _sessionContext.CurrentUser;
        }




    }
}
