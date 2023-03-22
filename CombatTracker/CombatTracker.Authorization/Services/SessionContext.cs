using CombatTracker.Base.Security;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;
using Utilities.Caching;
using System.Security.Claims;
using Microsoft.AspNetCore.Identity;
using System.Threading.Tasks;
using CombatTracker.Authorization;
using CombatTracker.Entities.Abstract.Services;
using System.Linq;
using CombatTracker.Entities.Reference;
using Utilities.EnumExtensions;
using CombatTracker.Base.Reference;

namespace CombatTracker.Authorization.Services
{
    public class SessionContext : ISessionContext
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public SessionContext(IHttpContextAccessor httpContextAccessor, UserManager<ApplicationUser> userManager)
        {
            _httpContextAccessor = httpContextAccessor;
            _userManager = userManager;
        }
        public async Task<ApplicationUser> GetCurrentUserAsync()
        {
            return await Cache.GetItemAsync(CacheArea.Session, "CurrentUser", async () =>
            {
                var uName = _httpContextAccessor.HttpContext.User?.Identity?.Name;
                if (string.IsNullOrWhiteSpace(uName))
                {
                    return null;
                }


                var user = await _userManager.FindByNameAsync(uName);
                if (user != null)
                {
                    var roles = await _userManager.GetRolesAsync(user);
                    user.Roles = roles.Select((r) => r.ToEnum<SecurityRoles>()).ToList();
                }
                //return user;



                //var user = await _userManager.GetUserAsync(_httpContextAccessor.HttpContext.User);
                return user;//.AsUser();
            });
        }

        public ApplicationUser CurrentUser
        {
            get
            {
                return Cache.GetItem<ApplicationUser>(CacheArea.Session, "CurrentUser", null);
            }
        }

        public void SetCurrentUser(ApplicationUser user)
        {

            Cache.SetItem<ApplicationUser>(CacheArea.Session, "CurrentUser", user);
        }
    }
}
