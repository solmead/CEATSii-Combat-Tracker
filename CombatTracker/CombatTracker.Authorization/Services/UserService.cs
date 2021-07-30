using CombatTracker.Entities.Abstract.Services;
using CombatTracker.Entities.Reference;
using CombatTracker.Entities.Security;
using CombatTracker.Entities.ViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Encodings.Web;
using System.Threading.Tasks;
using Utilities.EnumExtensions;


namespace CombatTracker.Authorization.Services
{
    public class UserService : IUserService
    {
        private readonly UserManager<ApplicationUser> _usermanager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly ISessionContext _sessionContext;
        private readonly ILogger<RegisterModel> _logger;



        public UserService(UserManager<ApplicationUser> usermanager,
            SignInManager<ApplicationUser> signInManager,
            ILogger<RegisterModel> logger,
            ISessionContext sessionContext)
        {
            _usermanager = usermanager;
            _signInManager = signInManager;
            _sessionContext = sessionContext;
            _logger = logger;
        }


        public async Task<ApplicationUser> AuthenticateAsync(string username, string password, bool rememberMe = true)
        {
            var result = await _signInManager.PasswordSignInAsync(username, password, rememberMe, lockoutOnFailure: false);
            if (result.Succeeded)
            {
                var usr = await GetByUserNameAsync(username);
                _sessionContext.SetCurrentUser(usr);
                //var us = await _sessionContext.GetCurrentUserAsync();
                return usr;
            }
            if (result.RequiresTwoFactor)
            {
                throw new Exception("Two Factor Not Supported");
                //return RedirectToPage("./LoginWith2fa", new { ReturnUrl = returnUrl, RememberMe = Input.RememberMe });
            }
            if (result.IsLockedOut)
            {
                throw new Exception("User account locked out.");
                //_logger.LogWarning("User account locked out.");
                //return RedirectToPage("./Lockout");
            }
            else
            {
                //throw new Exception("Invalid login attempt.");
                return null;
                //ModelState.AddModelError(string.Empty, "Invalid login attempt.");
                //return Page();
            }


        }

        public async Task<ApplicationUser> CreateAsync(RegisterModel ruser, string password)
        {
            var user = await GetByUserNameAsync(ruser.Username);
            if (user==null)
            {
                user = await GetByEmailAsync(ruser.Email);
            }
            if (user == null)
            {
                user = new ApplicationUser
                {
                    UserName = ruser.Username,
                    Email = ruser.Email,
                    EmailConfirmed = true
                };
                var result = await _usermanager.CreateAsync(user, ruser.Password);
                if (result.Succeeded)
                {
                    _logger.LogInformation("User created a new account with password.");
                    await _signInManager.SignInAsync(user, isPersistent: false);
                }
            } else
            {
                throw new Exception("User already exists");
            }

            if (user == null)
            {
                throw new Exception("The password is probably not strong enough!");
            }

            return await GetByUserNameAsync(user.UserName);
        }

        public async Task DeleteAsync(string id)
        {
            var user = await GetByIdAsync(id);
            await _usermanager.DeleteAsync(user);
        }

        public async Task<IEnumerable<ApplicationUser>> GetAllAsync()
        {
            var rList = new List<ApplicationUser>();
            var roles = SecurityRoles.None;
            foreach (var r in roles.GetWithOrder()) {
                var lst = await _usermanager.GetUsersInRoleAsync(r.ToString());
                rList.AddRange(lst);
            }

            foreach(var u in rList) {
                var roleList = await _usermanager.GetRolesAsync(u);
                u.Roles = roleList.Select((r) => r.ToEnum<SecurityRoles>()).ToList();
            }



            return rList;
        }

        public async Task<ApplicationUser> GetByEmailAsync(string email)
        {
            var user = await _usermanager.FindByEmailAsync(email);
            if (user != null)
            {
                var roles = await _usermanager.GetRolesAsync(user);
                user.Roles = roles.Select((r) => r.ToEnum<SecurityRoles>()).ToList();
            }
            return user;
        }

        public async Task<ApplicationUser> GetByIdAsync(string id)
        {
            var user = await _usermanager.FindByIdAsync(id);
            if (user != null)
            {
                var roles = await _usermanager.GetRolesAsync(user);
                user.Roles = roles.Select((r) => r.ToEnum<SecurityRoles>()).ToList();
            }
            return user;
        }

        public async Task<ApplicationUser> GetByUserNameAsync(string username)
        {
            var user = await _usermanager.FindByNameAsync(username);
            if (user != null)
            {
                var roles = await _usermanager.GetRolesAsync(user);
                user.Roles = roles.Select((r) => r.ToEnum<SecurityRoles>()).ToList();
            }
            return user;
        }

        public async Task<bool> Logout()
        {
            await _signInManager.SignOutAsync();
            return true;
        }

        public async Task UpdateAsync(ApplicationUser userParam, string password = null)
        {
            var user = await _usermanager.FindByIdAsync(userParam.Id);

            if (user == null)
                throw new Exception("User not found");

            // update username if it has changed
            if (!string.IsNullOrWhiteSpace(userParam.UserName) && userParam.UserName != user.UserName)
            {
                var exuser = await _usermanager.FindByNameAsync(userParam.UserName);
                // throw error if the new username is already taken
                if (exuser!=null)
                    throw new Exception("Username " + userParam.UserName + " is already taken");

                user.UserName = userParam.UserName;
                await _usermanager.SetUserNameAsync(user, user.UserName);
            }
            // update username if it has changed
            if (!string.IsNullOrWhiteSpace(userParam.Email) && userParam.Email != user.Email)
            {
                var exuser = await _usermanager.FindByEmailAsync(userParam.Email);
                // throw error if the new username is already taken
                if (exuser != null)
                    throw new Exception("Email " + userParam.Email + " is already taken");

                user.Email = userParam.Email;
                await _usermanager.SetEmailAsync(user, user.Email);
            }

            // update password if provided
            if (!string.IsNullOrWhiteSpace(password))
            {
                await _usermanager.RemovePasswordAsync(user);
                await _usermanager.AddPasswordAsync(user, password);
            }



        }
    }
}
