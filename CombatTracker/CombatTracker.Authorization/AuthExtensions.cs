using CombatTracker.Base.Security;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;

namespace CombatTracker.Authorization
{
    public static class AuthExtensions
    {


        public static ApplicationUser AsUser(this IdentityUser user)
        {
            if (user == null)
            {
                return null;
            }
            var us = new ApplicationUser();


            us.UserName = user.UserName;
            us.Id = user.Id;
            us.Email = user.Email;



            return us;
        }

    }
}
