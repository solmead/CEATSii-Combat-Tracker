using CombatTracker.Entities.Security;
using CombatTracker.Entities.Service;
using CombatTracker.Entities.ViewModels;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Utilities.EnumExtensions;


namespace CombatTracker.Authorization.Services
{
    public class UserService : IUserService
    {
        private readonly UserManager<ApplicationUser> _usermanager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly ISessionContext _sessionContext;



        public UserService(UserManager<ApplicationUser> usermanager,
            SignInManager<ApplicationUser> signInManager,
            ISessionContext sessionContext)
        {
            _usermanager = usermanager;
            _signInManager = signInManager;
            _sessionContext = sessionContext;
        }


        public async Task<ApplicationUser> AuthenticateAsync(string username, string password)
        {
            var result = await _signInManager.PasswordSignInAsync(username, password, false, lockoutOnFailure: false);
            if (result.Succeeded)
            {
                var usr = await _usermanager.FindByNameAsync(username);
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
                throw new Exception("Invalid login attempt.");
                //ModelState.AddModelError(string.Empty, "Invalid login attempt.");
                //return Page();
            }


        }

        public async Task<ApplicationUser> CreateAsync(RegisterModel user, string password)
        {
            var exuser = await _usermanager.FindByNameAsync(user.Username);
            if (exuser==null)
            {
                exuser = await _usermanager.FindByEmailAsync(user.Email);
            }
            if (exuser == null)
            {
                exuser = new ApplicationUser
                {
                    UserName = user.Username,
                    Email = user.Email,
                    EmailConfirmed = true
                };
                var result = await _usermanager.CreateAsync(exuser, user.Password);
                
            } else
            {
                throw new Exception("User already exists");
            }

            if (exuser == null)
            {
                throw new Exception("The password is probably not strong enough!");
            }

            return await _usermanager.FindByNameAsync(exuser.UserName);
        }

        public async Task DeleteAsync(string id)
        {
            var user = await _usermanager.FindByIdAsync(id);
            await _usermanager.DeleteAsync(user);
        }

        public async Task<IEnumerable<ApplicationUser>> GetAllAsync()
        {
            var rList = new List<ApplicationUser>();
            var roles = Constants.SecurityRoles.None;
            foreach (var r in roles.GetWithOrder()) {
                var lst = await _usermanager.GetUsersInRoleAsync(r.ToString());
                rList.AddRange(lst);
            }

            return rList;
        }

        public async Task<ApplicationUser> GetByEmailAsync(string email)
        {
            var user = await _usermanager.FindByEmailAsync(email);
            return user;
        }

        public async Task<ApplicationUser> GetByIdAsync(string id)
        {
            var user = await _usermanager.FindByIdAsync(id);
            return user;
        }

        public async Task<ApplicationUser> GetByUserNameAsync(string username)
        {
            var user = await _usermanager.FindByNameAsync(username);
            return user;
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
