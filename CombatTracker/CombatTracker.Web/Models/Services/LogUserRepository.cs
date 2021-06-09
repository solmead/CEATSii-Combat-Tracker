using Utilities.FileExtensions.Services;
using Utilities.Logging;

namespace CombatTracker.Web.Models.Services
{
    public class LogUserRepository : ILogUserRepository
    {
        private readonly IServerServices _serverServices;

        public LogUserRepository(IServerServices serverServices)
        {
            _serverServices = serverServices;
        }


        public string CurrentUserName()
        {
            return "-";
        }

        public string MapPath(string path)
        {
            return _serverServices.MapPath(path);
        }

        public string UserHostAddress()
        {
            return "-";
        }
    }
}