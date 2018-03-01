using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CombatTracker.Domain.Repositories;
using CombatTracker.Entities.Repositories;
using CombatTracker.Entities.Service;
using CombatTracker.Services.Services;
using Microsoft.Extensions.DependencyInjection;

namespace CombatTracker.Web.Factories
{
    public static class ServiceExtensions
    {
        public static IServiceCollection RegisterServices(
            this IServiceCollection services)
        {
            services.AddTransient<ICombatRepository, CombatRepository>();
            services.AddTransient<ICharacterRepository, CharacterRepository>();
            services.AddTransient<IChartRepository, ChartRepository>();
            services.AddTransient<ICreatureRepository, CreatureRepository>();
            services.AddTransient<IGameRepository, GameRepository>();
            services.AddTransient<IGameService, GameServices>();

            return services;
        }

    }
}
