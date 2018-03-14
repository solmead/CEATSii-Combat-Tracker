using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CombatTracker.Entities.Reference;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Utilities.Caching;

namespace CombatTracker.Web.Controllers
{
    [Produces("application/json")]
    [Route("api/Settings")]
    public class SettingsController : Controller
    {

        public static MySettings settings2
        {
            get
            {
                return Cache.GetItem<MySettings>(CacheArea.Session, "MySettings", new MySettings());
            }
            set
            {
                Cache.SetItem<MySettings>(CacheArea.Session, "MySettings", value);
            }
        }
        public static MySettings settings
        {
            get
            {
                return new MySettings();
            }
        }

        [HttpGet("[action]")]
        public MySettings GetSetting()
        {
            try
            {
                return settings2;
            }
            catch (Exception ex)
            {

            }
            return null;
        }

        [HttpPost("[action]")]
        public void SetGameType(GameType gameType)
        {
            settings2.GameSystem = gameType;
        }


    }
}