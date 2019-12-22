using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CombatTracker.Entities.Reference
{
    public class MySettings
    {
        public GameType GameSystem { get; set; }
        public string GameSystemString
        {
            get => GameSystem.ToString();
            set => GameSystem = (GameType)Enum.Parse(typeof(GameType), value);
        }

    }
}
