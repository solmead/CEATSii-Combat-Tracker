using CombatTracker.Domain.Repositories;
using CombatTracker.Entities.Abstract.Repos;
using CombatTracker.Entities.Reference;
using CombatTracker.Entities.Security;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
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



        public static async Task InitilizeDatabase(IApplicationBuilder app, IConfiguration config)
        {
            Console.WriteLine("Initilizing Database");
            using (var serviceScope = app.ApplicationServices.CreateScope())
            {
                var services = serviceScope.ServiceProvider;
                try
                {
                    Console.WriteLine("Calling Seed Data");
                    await SeedData(services, config);

                }
                catch (Exception ex)
                {
                    Console.WriteLine("Hmm an error has occurred in db initilization");// + ex.ToString());
                    Console.WriteLine("");
                    var logger = services.GetRequiredService<ILogger>();
                    logger.LogError(ex, "An error occurred while seeding the database.");
                }
            }
        }

        private static async Task SeedData(IServiceProvider serviceProvider, IConfiguration config)
        {
            Console.WriteLine("--> Attempting to apply migrations...");
            var context = serviceProvider.GetService<TrackerContext>();
            try
            {
                var cs = context.Database.GetConnectionString();
                Console.WriteLine($"Connection String: {cs}");

                context.Database.Migrate();
            }
            catch (Exception ex)
            {
                Console.WriteLine($"--> Could not run migrations: {ex.Message}");
            }

            var testUserPw = config["SeedUserPW"];
            testUserPw = testUserPw ?? "testPassword1!";

            Console.WriteLine("Seeding Data");
            await InitializeUsers(serviceProvider, testUserPw);


        }
        public static async Task InitializeUsers(IServiceProvider serviceProvider, string testUserPw)
        {
            Console.WriteLine("Initilizing Users in DB");
            //using (var context = new TrackerContext(
            //    serviceProvider.GetRequiredService<DbContextOptions<TrackerContext>>()))
            //{
            // For sample purposes seed both with the same password.
            // Password is set with the following:
            // dotnet user-secrets set SeedUserPW <pw>
            // The admin user can do anything

            var adminID = await EnsureUser(serviceProvider, testUserPw, "admin");
            await EnsureRole(serviceProvider, adminID, SecurityRoles.Admin.ToString());

            // allowed user can create and edit creatures
            var managerID = await EnsureUser(serviceProvider, testUserPw, "compendium");
            await EnsureRole(serviceProvider, managerID, SecurityRoles.Compendium.ToString());

            // normal user
            var normalID = await EnsureUser(serviceProvider, testUserPw, "normal");
            await EnsureRole(serviceProvider, normalID, SecurityRoles.Normal.ToString());

            //    SeedDB(context, adminID);
            //}
        }

        private static async Task<string> EnsureUser(IServiceProvider serviceProvider,
                                                    string testUserPw, string UserName)
        {
            var userManager = serviceProvider.GetService<UserManager<ApplicationUser>>();

            var user = await userManager.FindByNameAsync(UserName);
            if (user == null)
            {
                user = new ApplicationUser
                {
                    UserName = UserName,
                    Email = UserName + "@solmead.com",
                    NormalizedEmail = UserName + "@solmead.com",
                    EmailConfirmed = true
                };
                await userManager.CreateAsync(user, testUserPw);
            }

            if (user == null)
            {
                throw new Exception("The password is probably not strong enough!");
            }

            return user.Id;
        }

        private static async Task<IdentityResult> EnsureRole(IServiceProvider serviceProvider,
                                                                      string uid, string role)
        {
            IdentityResult IR = null;
            var roleManager = serviceProvider.GetService<RoleManager<IdentityRole>>();

            if (roleManager == null)
            {
                throw new Exception("roleManager null");
            }

            if (!await roleManager.RoleExistsAsync(role))
            {
                IR = await roleManager.CreateAsync(new IdentityRole(role));
            }

            var userManager = serviceProvider.GetService<UserManager<ApplicationUser>>();

            var user = await userManager.FindByIdAsync(uid);

            if (user == null)
            {
                throw new Exception("The testUserPw password was probably not strong enough!");
            }

            IR = await userManager.AddToRoleAsync(user, role);

            return IR;
        }

    }
}
