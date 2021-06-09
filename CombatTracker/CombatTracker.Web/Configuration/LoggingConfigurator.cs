using CombatTracker.Web.Models.Services;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Utilities.Logging;

namespace CombatTracker.Web.Configuration
{
    public static class LoggingConfigurator
    {
        public static IServiceCollection ConfigureLogging(this IServiceCollection services)
        {

            services.AddScoped<ILogUserRepository, LogUserRepository>();

            services.AddTransient<ILogger>((qf) =>
            {
                var lg = new NLog.Extensions.Logging.NLogLoggerFactory();
                var lgg = lg.CreateLogger("");

                var g = new GenericLogger(lgg);
                return g;
            });

            services.AddLogging();




            var sp = services.BuildServiceProvider();
            // This will succeed.
            var logUserRepo = sp.GetService<ILogUserRepository>();

            Utilities.Logging.Startup.Init(logUserRepo);

            return services;
        }
    }
}
