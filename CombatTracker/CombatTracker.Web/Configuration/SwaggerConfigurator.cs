using CombatTracker.Web.Models.Conventions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerGen;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
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

                c.SwaggerDoc("v1",
                    new OpenApiInfo
                    {
                        Version = "v1",
                        Title = "v1 API",
                        Description = "v1 API Description"
                    });

                // Add a SwaggerDoc for v2 
                //c.SwaggerDoc("v2",
                //    new OpenApiInfo
                //    {
                //        Version = "v2",
                //        Title = "v2 API",
                //        Description = "v2 API Description"
                //    });

                //c.ExampleFilters();

                // Set the comments path for the Swagger JSON and UI.
                //var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
                //var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
                //c.IncludeXmlComments(xmlPath);
                // Uses full schema names to avoid v1/v2/v3 schema collisions
                // see: https://github.com/domaindrivendev/Swashbuckle/issues/442
                c.CustomSchemaIds(x => x.FullName);


                //c.SwaggerDoc("v1", new OpenApiInfo { Title = "CombatTracker.Web", Version = "v1" });

                c.OperationFilter<RemoveVersionFromParameter>();
                c.DocumentFilter<ReplaceVersionWithExactValueInPath>();

                // Ensure the routes are added to the right Swagger doc
                c.DocInclusionPredicate((version, desc) =>
                {
                    if (!desc.TryGetMethodInfo(out MethodInfo methodInfo))                        return false;


                    var versions = methodInfo.DeclaringType                    .GetCustomAttributes(true)                    .OfType<ApiExplorerSettingsAttribute>()                    .Select(attr => attr.GroupName);

                    var maps = methodInfo                    .GetCustomAttributes(true)                    .OfType<ApiExplorerSettingsAttribute>()                    .Select(attr => attr.GroupName)                    .ToArray();                    if (versions.Any() || maps.Any())
                    {
                        return (maps.Any() && maps.Any(v => $"{v.ToString()}" == version) || (!versions.Any() || versions.Any(v => $"{v.ToString()}" == version)));
                    }                    var versions2 = methodInfo.DeclaringType                    .GetCustomAttributes(true)                    .OfType<ApiVersionAttribute>()                    .SelectMany(attr => attr.Versions);



                    //ApiExplorerSettings

                    var maps2 = methodInfo                    .GetCustomAttributes(true)                    .OfType<MapToApiVersionAttribute>()                    .SelectMany(attr => attr.Versions)                    .ToArray();

                    return versions2.Any(v => $"v{v.ToString()}" == version)
                                  && (!maps2.Any() || maps2.Any(v => $"v{v.ToString()}" == version));
                });

            });
            return services;
        }
    }
}
