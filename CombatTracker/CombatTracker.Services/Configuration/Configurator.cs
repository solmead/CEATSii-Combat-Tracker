using CombatTracker.Entities.Abstract.Repos;
using CombatTracker.Entities.Abstract.Services;
using CombatTracker.Services.Services;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CombatTracker.Services.Configuration
{
    public static class Configurator
    {
        public static IServiceCollection RegisterServices(this IServiceCollection services, IConfiguration configuration)
        {


            services.AddTransient<IGameService, GameServices>();
            services.AddTransient<IActionServices, ActionServices>();
            services.AddTransient<INotificationService, NotificationService>();

            //NotificationService : INotificationService
            return services;
        }
    }
}
