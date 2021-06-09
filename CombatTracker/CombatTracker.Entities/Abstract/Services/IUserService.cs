using CombatTracker.Entities.Security;
using CombatTracker.Entities.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace CombatTracker.Entities.Abstract.Services
{
    public interface IUserService
    {
        Task<bool> Logout();
        Task<ApplicationUser> AuthenticateAsync(string username, string password, bool rememberMe = true);
        Task<IEnumerable<ApplicationUser>> GetAllAsync();
        Task<ApplicationUser> GetByIdAsync(string id);
        Task<ApplicationUser> GetByUserNameAsync(string username);
        Task<ApplicationUser> GetByEmailAsync(string email);
        Task<ApplicationUser> CreateAsync(RegisterModel user, string password);
        Task UpdateAsync(ApplicationUser user, string password = null);
        Task DeleteAsync(string id);
    }
}
