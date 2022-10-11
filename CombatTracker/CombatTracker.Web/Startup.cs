using CombatTracker.Web.Configuration;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Utilities.Caching.AspNetCore.Configuration;
using Microsoft.AspNetCore.SignalR;
using CombatTracker.Web.Hubs;
using System;
using CombatTracker.Domain;
using CombatTracker.Authorization;
using Microsoft.EntityFrameworkCore;

namespace CombatTracker.Web
{
    public class Startup
    {
        private readonly IWebHostEnvironment _env;
        private readonly IConfiguration _configuration;
        public Startup(IWebHostEnvironment env, IConfiguration configuration)
        {
            _env = env;
            _configuration = configuration;
        }



        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {


            services.RegisterSiteServices(_configuration);
            services.ConfigureCache();


            services.AddDatabaseDeveloperPageExceptionFilter();

            // In production, the Angular files will be served from this directory
            //services.AddSpaStaticFiles(configuration =>
            //{
            //    configuration.RootPath = "dist/CEATSiiApp";
            //});
            //services.AddSpaStaticFiles(configuration =>
            //{
            //    configuration.RootPath = "CEATSiiApp/dist";
            //});


        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, ILogger _logger)
        {
            _logger.LogInformation("Beginning app Configure");
            //Database.Initilize();
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseMigrationsEndPoint();
                //app.UseSwagger();
                //app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "CombatTracker.Web v1"));
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                //c.SwaggerEndpoint("/swagger/v2/swagger.json", "CombatTracker.Web API v2");
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "CombatTracker.Web API v1");
                c.DisplayOperationId();
                c.DisplayRequestDuration();
            });

            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            //if (!env.IsDevelopment())
            //{
            //    app.UseSpaStaticFiles();
            //}


            app.UseCors(x => x
                .AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader());



            app.UseAuthentication();
            app.UseAuthorization();


            app.UseSession();



            //app.UseIdentityServer();






            app.UseEndpoints(endpoints =>
            {
                endpoints.MapHub<EncounterHub>("/hubs/EncounterHub");
                endpoints.MapControllers();
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
                endpoints.MapRazorPages();
            });


            //app.UseSpa(spa =>
            //{
            //    // To learn more about options for serving an Angular SPA from ASP.NET Core,
            //    // see https://go.microsoft.com/fwlink/?linkid=864501

            //    spa.Options.SourcePath = "CEATSiiApp";

            //    if (env.IsDevelopment())
            //    {
            //        spa.UseAngularCliServer(npmScript: "start");
            //    }
            //});

            app.InitCache();


            CombatTracker.Domain.Configuration.Configurator.InitilizeDatabase(app, _configuration).Wait();

            //using (var serviceScope = app.ApplicationServices.CreateScope())
            //{
            //    var services = serviceScope.ServiceProvider;
            //    try
            //    {
            //        Console.WriteLine("Getting Tracker Context");
            //        var context = services.GetRequiredService<TrackerContext>();
            //        Console.WriteLine("Migrating Tracker Context");
            //        context.Database.Migrate();
            //        //DbInitializer.Initialize(context);

            //        // requires using Microsoft.Extensions.Configuration;
            //        Console.WriteLine("Getting Configuration");
            //        var config = services.GetRequiredService<IConfiguration>();
            //        // Set password with the Secret Manager tool.
            //        // dotnet user-secrets set SeedUserPW <pw>

            //        var testUserPw = config["SeedUserPW"];
            //        testUserPw = testUserPw ?? "testPassword1!";

            //        Console.WriteLine("Seeding Data");
            //        SeedData.Initialize(services, testUserPw).Wait();
            //    }
            //    catch (Exception ex)
            //    {
            //        Console.WriteLine("Hmm an error has occurred in db initilization");// + ex.ToString());
            //        Console.WriteLine("");
            //        var logger = services.GetRequiredService<ILogger<Program>>();
            //        logger.LogError(ex, "An error occurred while seeding the database.");
            //    }
            //}




            _logger.LogInformation("Starting App Finished");
        }
    }
}
