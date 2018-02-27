using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CombatTracker.Entities.Reference.Base
{
    public abstract class ReferenceEntry
    {
            public int ID { get; set; }
            public string Name { get; set; }
            public string Abbreviation { get; set; }
    }
}
