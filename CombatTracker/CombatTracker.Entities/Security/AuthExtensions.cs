using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;

namespace CombatTracker.Entities.Security
{
    public static class AuthExtensions
    {


        public static User AsUser(this IdentityUser user)
        {
            if (user==null)
            {
                return null;
            }
            var us = new User();


            us.UserName = user.UserName;
            us.Id = user.Id;
            us.Email = user.Email;



            return us;
        }

    }
}
