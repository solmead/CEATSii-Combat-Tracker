using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CombatTracker.Base.Reference
{

    public enum MessageTypeEnum
    {
        Normal,
        Warning,
        Alert
    }
    public enum SecurityRoles
    {
        None,
        Normal,
        Compendium,
        Admin
    }
    public enum CharacterType
    {

        NPC,
        PC
    }


}
