using System;

namespace CombatTracker.Authorization
{
    public class Constants
    {
        public enum OperationNames
        {
            Create,
            Read,
            Update,
            Delete,
            Approve,
            Reject
        }
        public enum SecurityRoles
        {
            None,
            Normal,
            Compendium,
            Admin
        }

    }
}
