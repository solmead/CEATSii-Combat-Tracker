namespace Combat.Domain
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class GamesPlayer
    {
        public int ID { get; set; }

        public int Game_ID { get; set; }

        public Guid Player_ID { get; set; }

        public virtual Game Game { get; set; }
    }
}
