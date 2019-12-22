using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;

namespace CombatTracker.Entities.Security
{
    public class User
    {

        public User()
        {

        }

        public string UserName { get; set; }
        public string Id { get; set; }
        public string Email { get; set; }


    }
}
