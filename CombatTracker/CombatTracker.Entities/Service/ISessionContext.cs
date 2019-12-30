using CombatTracker.Entities.Security;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace CombatTracker.Entities.Service
{
    public interface ISessionContext
    {
        Task<ApplicationUser> GetCurrentUserAsync();
        ApplicationUser CurrentUser { get; }
        void SetCurrentUser(ApplicationUser user);
    }
}
