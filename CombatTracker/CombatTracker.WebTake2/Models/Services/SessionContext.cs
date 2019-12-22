using CombatTracker.Entities.Security;
using CombatTracker.Entities.Service;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;
using Utilities.Caching;
using System.Security.Claims;
using Microsoft.AspNetCore.Identity;
using System.Threading.Tasks;

namespace CombatTracker.Web.Models.Services
{
    public class SessionContext : ISessionContext
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public SessionContext(IHttpContextAccessor httpContextAccessor, UserManager<IdentityUser> userManager)
        {
            _httpContextAccessor = httpContextAccessor;
            _userManager = userManager;
        }
        public async Task<User> GetCurrentUserAsync()
        {
            return await Cache.GetItemAsync<User>(CacheArea.Session, "CurrentUser", async () => 
            {
                var user = await _userManager.GetUserAsync(_httpContextAccessor.HttpContext.User);
                return user.AsUser();
            });
        }
        
        public User CurrentUser { 
            get
            {
                return Cache.GetItem<User>(CacheArea.Session, "CurrentUser", null);
            }
        }

        public void SetCurrentUser(User user)
        {
            throw new NotImplementedException();
        }
    }
}
