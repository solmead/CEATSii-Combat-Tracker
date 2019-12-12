
namespace CombatTracker.Entities.Reference
{
    public partial class Weapon
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public int MinWeight { get; set; }
        public int MaxWeight { get; set; }
        public int Weight { get; set; }
        public int Bonus { get; set; }
        public bool Is2Handed { get; set; }
        public int OB { get; set; }
        public int? CharacterId { get; set; }



        public override string ToString()
        {
            return Name;
        }
    }
    
}
