using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CombatTracker.Domain.Reference
{
    public static class MySettings
    {
        public static double BaseRoundTime
        {
            get { return Properties.Settings.Default.BaseRoundTime; }
        }

        public static void NotifyOutside(string message)
        {
            
        }
    }
}
