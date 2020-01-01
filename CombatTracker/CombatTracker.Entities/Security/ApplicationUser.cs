using CombatTracker.Entities.Reference;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CombatTracker.Entities.Security
{
    public class ApplicationUser : IdentityUser
    {


        public override string Id { get => base.Id; set => base.Id = value; }
        public override string Email { get => base.Email; set => base.Email = value; }
        public override string PhoneNumber { get => base.PhoneNumber; set => base.PhoneNumber = value; }
        public override string UserName { get => base.UserName; set => base.UserName = value; }

        public override string SecurityStamp { get => base.SecurityStamp; set => base.SecurityStamp = value; }

        [NotMapped]
        public List<SecurityRoles> Roles { get; set; }


    }
}
