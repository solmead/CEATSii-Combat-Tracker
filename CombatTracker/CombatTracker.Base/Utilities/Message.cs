using CombatTracker.Base.Reference;
using System;
using System.Collections.Generic;
using System.Text;

namespace CombatTracker.Base.Utilities
{
    public class Message
    {

        public int ID { get; set; }
        public int Game_ID { get; set; }

        public MessageTypeEnum MessageType { get; set; }

        public string MessageTypeString
        {
            get => MessageType.ToString();
            set => MessageType = (MessageTypeEnum)Enum.Parse(typeof(MessageTypeEnum), value);
        }

        public string Whom { get; set; }

        public string WhomColor { get; set; }

        public string Action { get; set; }
        public double GameTime { get; set; }
        public bool ReverseOrder { get; set; }

        public string BeginText { get; set; }
        public string BetweenText { get; set; }
        public string EndText { get; set; }
    }
}
