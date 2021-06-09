﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CombatTracker.Entities.Abstract.Services;
using CombatTracker.Entities.Reference;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Utilities.Caching;

namespace CombatTracker.Web.Controllers.Api
{
    [ApiController]
    [Produces("application/json")]
    [Route("api/Settings")]
    public class SettingsController : BaseController
    {

        public SettingsController(
            ISessionContext sessionContext) : base(sessionContext)
        {

        }

        //public static MySettings settings
        //{
        //    get
        //    {
        //        return Cache.GetItem<MySettings>(CacheArea.Session, "MySettings", new MySettings());
        //    }
        //    set
        //    {
        //        Cache.SetItem<MySettings>(CacheArea.Session, "MySettings", value);
        //    }
        //}

        //[AllowAnonymous]
        //[HttpGet("[action]")]
        //public MySettings GetSetting()
        //{
        //    try
        //    {
        //        return settings;
        //    }
        //    catch (Exception ex)
        //    {

        //    }
        //    return null;
        //}

        //[HttpPost("[action]")]
        //public void SetGameType(GameType gameType)
        //{
        //    settings.GameSystem = gameType;
        //}


    }
}