using CombatTracker.Entities.Reference.Creatures;
using CombatTracker.Base.Security;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authorization.Infrastructure;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace CombatTracker.Authorization
{
    public class CreatureIsOwnerAuthorizationHandler
                : AuthorizationHandler<OperationAuthorizationRequirement, Creature>
    {
        UserManager<ApplicationUser> _userManager;

        public CreatureIsOwnerAuthorizationHandler(UserManager<ApplicationUser>
            userManager)
        {
            _userManager = userManager;
        }

        protected override Task
            HandleRequirementAsync(AuthorizationHandlerContext context,
                                   OperationAuthorizationRequirement requirement,
                                   Creature resource)
        {
            if (context.User == null || resource == null)
            {
                return Task.CompletedTask;
            }

            // If not asking for CRUD permission, return.

            if (requirement.Name != Constants.OperationNames.Create.ToString() &&
                requirement.Name != Constants.OperationNames.Read.ToString() &&
                requirement.Name != Constants.OperationNames.Update.ToString() &&
                requirement.Name != Constants.OperationNames.Delete.ToString())
            {
                return Task.CompletedTask;
            }

            var cudAccess = resource.Status != Entities.Reference.CreatureStatus.InCompendium && resource.OwnerID?.ToString() == _userManager.GetUserId(context.User);

            var rAccess = (resource.Status == Entities.Reference.CreatureStatus.InCompendium) && requirement.Name == Constants.OperationNames.Read.ToString();


            if (cudAccess || rAccess)
            {
                context.Succeed(requirement);
            }

            return Task.CompletedTask;
        }
    }
}
