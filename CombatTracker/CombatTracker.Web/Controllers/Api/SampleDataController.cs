using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CombatTracker.Entities.Service;
using CombatTracker.Web.Factories;
using Microsoft.AspNetCore.Mvc;

namespace CombatTracker.Web.Controllers.Api
{
    [Route("api/[controller]")]
    public class SampleDataController : BaseController
    {
        private static string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };


        public SampleDataController(
            ISessionContext sessionContext) : base(sessionContext)
        {

        }

        [HttpGet("[action]")]
        public IEnumerable<WeatherForecast> WeatherForecasts()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                DateFormatted = DateTime.Now.AddDays(index).ToString("d"),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            });
        }

        
    }
}
