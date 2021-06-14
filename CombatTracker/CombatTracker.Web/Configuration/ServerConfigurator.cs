﻿using CombatTracker.Web.Models.Conventions;
using CombatTracker.Web.Models.Settings;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.AspNetCore.Mvc.Routing;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;

namespace CombatTracker.Web.Configuration
{
    public static class ServerConfigurator
    {
        public static IServiceCollection RegisterBaseServices(this IServiceCollection services, IConfiguration configuration)
        {

            services.AddTransient((qf) =>
            {
                return configuration;
            });

            //services.AddSingleton<SiteSettings>((serviceProvider) => new SiteSettings(configuration));

            services.Configure<SiteSettings>(configuration.GetSection(nameof(SiteSettings)));


            services.AddHttpContextAccessor();
            //services.AddActionContextAccessor();
            // Add useful interface for accessing the HttpContext outside a controller.
            //services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
            // Add useful interface for accessing the ActionContext outside a controller.
            services.AddSingleton<IActionContextAccessor, ActionContextAccessor>();


            // Add useful interface for accessing the IUrlHelper outside a controller.
            services.AddScoped(x => x
                    .GetRequiredService<IUrlHelperFactory>()
                    .GetUrlHelper(x.GetRequiredService<IActionContextAccessor>().ActionContext));


            services.AddScoped(sp => sp.GetRequiredService<IHttpContextAccessor>().HttpContext);

            services.AddDistributedMemoryCache();
            services.AddSession(options =>
            {
                options.IdleTimeout = TimeSpan.FromMinutes(5);
                options.Cookie.HttpOnly = true;
                options.Cookie.IsEssential = true;
            });



            services.AddCors();

            services.AddControllersWithViews(c => {
                        //c.Conventions.Add(new ApiExplorerGroupPerVersionConvention()); // decorate Controllers to distinguish SwaggerDoc (v1, v2, etc.)
                        //c.Conventions.Add(new ApiExplorerGroupPerVersionMethodConvention()); // decorate Controllers to distinguish SwaggerDoc (v1, v2, etc.)                    })
                    .AddJsonOptions(options =>
                            options.JsonSerializerOptions.PropertyNamingPolicy = null)
                    .AddNewtonsoftJson(options => {
                        options.UseMemberCasing();
                    });
            services.AddRazorPages();
            services.AddApiVersioning(o =>
            {
                o.AssumeDefaultVersionWhenUnspecified = true;
                o.DefaultApiVersion = new ApiVersion(1, 0);
            });
            //services.AddGrpc();

            //    services.Configure<RazorViewEngineOptions>(o =>
            //    {
            //        o.ViewLocationFormats.Add
            //("/Views/Shared/Bundles/{0}" + RazorViewEngine.ViewExtension);
            //        o.ViewLocationFormats.Add
            //("/Views/Shared/EditorTemplates/{0}" + RazorViewEngine.ViewExtension);
            //    });
            // In production, the Angular files will be served from this directory
            

            return services;
        }
    }
}
