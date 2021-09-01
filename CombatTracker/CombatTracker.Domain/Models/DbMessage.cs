using CombatTracker.Entities.Reference;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CombatTracker.Domain.Models
{
    [Table("Messages")]
    public class DbMessage
    {

        public int ID { get; set; }
        public int Game_ID { get; set; }

        public string MessageType { get; set; }

        public double GameTime { get; set; }


        public string Whom { get; set; }
        public string WhomColor { get; set; }

        public string Action { get; set; }

        public bool ReverseOrder { get; set; }

        public string BeginText { get; set; }
        public string BetweenText { get; set; }
        public string EndText { get; set; }


        [ForeignKey("Game_ID")]
        public virtual DbGame Game { get; set; }
    }
}
