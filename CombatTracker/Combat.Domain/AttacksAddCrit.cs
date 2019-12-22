namespace Combat.Domain
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class AttacksAddCrit
    {
        public int ID { get; set; }

        public int? AttackID { get; set; }

        public int Critical_ID { get; set; }

        public virtual Attack_CriticalTypes Attack_CriticalTypes { get; set; }

        public virtual Attack Attack { get; set; }
    }
}
