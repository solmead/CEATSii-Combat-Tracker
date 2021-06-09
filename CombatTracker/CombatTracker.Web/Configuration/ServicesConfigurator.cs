using CombatTracker.Web.Models.Services;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Utilities.FileExtensions;
using Utilities.FileExtensions.Services;

namespace CombatTracker.Web.Configuration
{
    public static class ServicesConfigurator
    {
        public static IServiceCollection RegisterSystemServices(this IServiceCollection services)
        {



            //services.AddScoped<IDatabaseConfig, DatabaseConfig>();
            services.AddScoped<IServerServices, ServerFileServices>();

            //services.AddScoped<ISessionContext, SessionContext>();

            services.AddScoped<IFileHandling, LocalFileHandler>();

            //services.AddScoped<IServerSettings, ServerSettings>();

            ///TODO: move into pdf service
            //services.AddScoped<IPdfCreation, PdfCreator>();

            //services.AddScoped<ProtoService>();

            return services;
        }

    }
}
