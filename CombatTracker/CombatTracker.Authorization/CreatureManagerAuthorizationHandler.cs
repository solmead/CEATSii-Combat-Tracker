using CombatTracker.Entities.Reference.Creatures;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authorization.Infrastructure;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace CombatTracker.Authorization
{
    public class CreatureManagerAuthorizationHandler :
        AuthorizationHandler<OperationAuthorizationRequirement, Creature>
    {
        protected override Task
            HandleRequirementAsync(AuthorizationHandlerContext context,
                                   OperationAuthorizationRequirement requirement,
                                   Creature resource)
        {
            if (context.User == null || resource == null)
            {
                return Task.CompletedTask;
            }

            // If not asking for approval/reject, return.
            //if (requirement.Name != Constants.OperationNames.Approve.ToString() &&
            //    requirement.Name != Constants.OperationNames.Reject.ToString())
            //{
            //    return Task.CompletedTask;
            //}

            var validRole = context.User.IsInRole(Constants.SecurityRoles.Compendium.ToString());


            var cudAccess = (resource.Status != Entities.Reference.CreatureStatus.Personal);

            //var rAccess = (resource.Status == Entities.Reference.CreatureStatus.InCompendium) && requirement.Name == Constants.OperationNames.Read.ToString();


            // Managers can approve or reject.
            if (validRole && cudAccess)
            {
                context.Succeed(requirement);
            }

            return Task.CompletedTask;
        }
    }
}
