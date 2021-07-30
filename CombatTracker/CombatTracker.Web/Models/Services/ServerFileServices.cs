using CombatTracker.Web.Models.Settings;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.AspNetCore.Mvc.Routing;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Utilities.FileExtensions.Services;

namespace CombatTracker.Web.Models.Services
{
    public class ServerFileServices : IServerServices
    {
        protected readonly IUrlHelperFactory _urlHelperFactory;
        protected readonly IActionContextAccessor _actionContextAccessor;
        protected readonly SiteSettings _siteSettings;
        protected readonly IWebHostEnvironment _webHostEnvironment;
        protected readonly IHttpContextAccessor _httpContextAccessor;

        public ServerFileServices(IWebHostEnvironment webHostEnvironment,
            IUrlHelperFactory urlHelperFactory,
                   IActionContextAccessor actionContextAccessor,
                   IHttpContextAccessor httpContextAccessor,
                   IOptions<SiteSettings> siteSettings)
        {
            _urlHelperFactory = urlHelperFactory;
            _actionContextAccessor = actionContextAccessor;
            _siteSettings = siteSettings.Value;
            _webHostEnvironment = webHostEnvironment;
            _httpContextAccessor = httpContextAccessor;
        }

        public string GetTempDirectory()
        {
            return _siteSettings.DocumentsDirectory + "\\Temp\\";
        }

        public string GetUrl(string path)
        {
            IUrlHelper url = _urlHelperFactory.GetUrlHelper(_actionContextAccessor.ActionContext);
            var bu = url.Content(path);
            return bu;
        }

        public string GetUrl(string action, object parameters)
        {
            IUrlHelper url = _urlHelperFactory.GetUrlHelper(_actionContextAccessor.ActionContext);

            var actionUrl = url.Action(action, parameters);
            return actionUrl;
        }

        public string GetUrlRoute(string route, object parameters)
        {
            IUrlHelper url = _urlHelperFactory.GetUrlHelper(_actionContextAccessor.ActionContext);

            var actionUrl = url.RouteUrl(route, parameters);
            return actionUrl;
        }

        public string MapPath(string path)
        {
            path = path.Trim();
            path = path.Replace('\\', Path.DirectorySeparatorChar);
            path = path.Replace('/', Path.DirectorySeparatorChar);

            var dirPath = "" + Path.PathSeparator + Path.DirectorySeparatorChar;
            var netPath = "" + Path.DirectorySeparatorChar + Path.DirectorySeparatorChar;


            if (path.StartsWith(netPath) || path.Contains(dirPath))
            {
                return path;
            }

            path = path.Replace(netPath, "" + Path.DirectorySeparatorChar);


            if (path.First() == '~')
            {
                path = path.Substring(1);
            }

            if (path.First() != Path.DirectorySeparatorChar)
            {
                path = Path.DirectorySeparatorChar + path;
            }
            if (path.ToUpper().StartsWith(Path.DirectorySeparatorChar + "DOCUMENTS"))
            {
                if (_siteSettings.DocumentsDirectory.Contains(netPath) || _siteSettings.DocumentsDirectory.Contains("." + Path.DirectorySeparatorChar) || _siteSettings.DocumentsDirectory.Contains(dirPath))
                {
                    path = path.Substring(10);
                    var finPath = Path.Join(_siteSettings.DocumentsDirectory, path);
                    return finPath;
                }
            }
            //path.Contains(".\\") ||



            //if (_siteSettings.DocumentsPath.Contains("\\\\") || _siteSettings.DocumentsPath.Contains(".\\") || _siteSettings.DocumentsPath.Contains(":\\"))
            //{
            //    //app.UseFileServer(new FileServerOptions
            //    //{
            //    //    FileProvider = new PhysicalFileProvider(settings.DocumentsPath),
            //    //    RequestPath = new PathString("/Documents"),
            //    //    EnableDirectoryBrowsing = false
            //    //});
            //}





            //string webRootPath = _webHostEnvironment.WebRootPath;
            string contentRootPath = _webHostEnvironment.ContentRootPath;

            //string path = "";
            //path = Path.Combine(webRootPath, "CSS");



            return Path.Join(contentRootPath, path);

            //throw new NotImplementedException();
            //throw new NotImplementedException();
        }
    }
}