namespace Combat.Domain
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class ActorsAttack
    {
        public int ID { get; set; }

        public int Actor_ID { get; set; }

        public int Attack_ID { get; set; }

        public virtual Actor Actor { get; set; }

        public virtual Attack Attack { get; set; }
    }
}
