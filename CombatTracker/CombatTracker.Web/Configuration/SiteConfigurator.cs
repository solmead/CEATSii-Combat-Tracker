using CombatTracker.Web.Models.Settings;
using CombatTracker.Domain.Configuration;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CombatTracker.Services.Configuration;
using CombatTracker.Authorization.Configuration;

namespace CombatTracker.Web.Configuration
{
    public static class SiteConfigurator
    {
        public static IServiceCollection RegisterSiteServices(this IServiceCollection services, IConfiguration configuration)
        {
			var siteSettings = configuration.GetSection(nameof(SiteSettings))
													 .Get<SiteSettings>();


			services
				.RegisterBaseServices(configuration)
				.RegisterSystemServices()
				.RegisterServices(configuration)
				.RegisterRepositories(configuration)
				.RegisterIdentityHandler()
				.ConfigureLogging()
				.RegisterAuthServices(siteSettings)
				.RegisterSwagger();




			return services;
		}
    }
}
