using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CombatTracker.Web.Configuration
{
    public static class SwaggerConfigurator
    {



        public static IServiceCollection RegisterSwagger(this IServiceCollection services)
        {

            services.AddSwaggerGen(c =>
            {
                c.ResolveConflictingActions(apiDescriptions => apiDescriptions.First());
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "CombatTracker.Web", Version = "v1" });

            });
            return services;
        }
    }
}
