using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CombatTracker.Web.Models.Settings
{
    public class SiteSettings
    {
        public string Secret { get; set; }
        public string DocumentsDirectory { get; set; }
        public string DocumentsUrlDirectory { get; set; }
        public string TempFileLocation { get; set; }
        public string SitePathBase { get; set; }
        public string CORSAllowedOrigins { get; set; } = "https://localhost:44381";
    }
}
