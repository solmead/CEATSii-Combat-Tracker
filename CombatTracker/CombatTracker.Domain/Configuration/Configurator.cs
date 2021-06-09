using CombatTracker.Domain.Repositories;
using CombatTracker.Entities.Abstract.Repos;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CombatTracker.Domain.Configuration
{
    public static class Configurator
    {
        public static IServiceCollection RegisterRepositories(this IServiceCollection services, IConfiguration configuration)
        {


            services.AddDbContext<TrackerContext>(options =>
                options.UseSqlServer(configuration.GetConnectionString("DefaultConnection")));
            //services.AddDatabaseDeveloperPageExceptionFilter();


            services.AddTransient<ICombatRepository, CombatRepository>();
            services.AddTransient<ICharacterRepository, CharacterRepository>();
            services.AddTransient<IChartRepository, ChartRepository>();
            services.AddTransient<ICreatureRepository, CreatureRepository>();
            services.AddTransient<IGameRepository, GameRepository>();

            return services;
        }
    }
}
