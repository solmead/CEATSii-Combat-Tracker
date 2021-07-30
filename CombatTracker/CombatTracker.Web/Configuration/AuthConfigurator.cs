using CombatTracker.Domain;
using CombatTracker.Entities.Security;
using CombatTracker.Web.Models.Services;
using CombatTracker.Web.Models.Settings;
using IdentityServer4.Services;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CombatTracker.Web.Configuration
{
    public static class AuthConfigurator
    {
        public static IServiceCollection RegisterAuthServices(this IServiceCollection services, SiteSettings settings)
        {
            //services.TryAddTransient<IClaimsService, CustomClaimsService>();


            services.AddDefaultIdentity<ApplicationUser>(options => options.SignIn.RequireConfirmedAccount = true)
                .AddRoles<IdentityRole>()
                .AddEntityFrameworkStores<TrackerContext>();



            //services.AddIdentityServer()
            //    .AddApiAuthorization<ApplicationUser, TrackerContext>();

            //services.AddAuthentication()
            //    .AddIdentityServerJwt();


            return services;
        }
    }
}
