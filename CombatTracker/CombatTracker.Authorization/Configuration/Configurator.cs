using CombatTracker.Authorization.Services;
using CombatTracker.Entities.Abstract.Services;
using CombatTracker.Entities.Security;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;

namespace CombatTracker.Authorization.Configuration
{
    public static class Configurator
    {
        public static IServiceCollection RegisterIdentityHandler(this IServiceCollection services)
        {

            //IIdentityRepository<AppUser<string>, AppRole<string>, string>
            services.AddScoped<ISessionContext, SessionContext>();
            services.AddScoped<IUserService, UserService>();
            //services.AddScoped<IIdentityRepository<AppUser<string>, AppRole<string>, string>, IdentityRepository>();


            // Authorization handlers.
            services.AddScoped<IAuthorizationHandler,
                                  CreatureIsOwnerAuthorizationHandler>();

            services.AddSingleton<IAuthorizationHandler,
                                  CreatureAdministratorsAuthorizationHandler>();

            services.AddSingleton<IAuthorizationHandler,
                                  CreatureManagerAuthorizationHandler>();

            return services;
        }
    }
}
