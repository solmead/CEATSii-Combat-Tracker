using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;

namespace CombatTracker.Entities.Current
{
    public class Game
    {

        public Game()
        {
            this.Actors = new List<Actor>();
            this.GameActions = new List<BaseAction>();
            //this.GamesPlayers = new HashSet<GamesPlayer>();
        }

        private string[] _colors = { "255,0,0", "0,255,0", "0,0,255", "0,255,255", "128,128,128", "255,128,0", "0,128,255", "128,255,0", "128,0,255", "255,0,128", "0,255,128"};

        public int ID { get; set; }
        public string Name { get; set; }
        public Guid? GM_ID { get; set; }
        public double CurrentTime { get; set; }
        
        public virtual List<Actor> Actors { get; set; }
        
        public virtual List<BaseAction> GameActions { get; set; }
        //public virtual ICollection<GamesPlayer> GamesPlayers { get; set; }

        
        public List<string> Colors
        {
            get { return _colors.ToList(); }
        }
        
        [NotMapped]
        public BaseAction NextAction => ActionsSorted().FirstOrDefault();

        [NotMapped]
        public BaseAction LastAction => ActionsSorted().LastOrDefault();

        public List<BaseAction> ActionsSorted()
        {
            var list = (from a in GameActions orderby a.EndTime select a).ToList();
            var first = list.FirstOrDefault();
            var last = list.LastOrDefault();
            if ((last != null) && (first != null))
            {
                var MP = 1;
                double rt;
                if (Math.Abs(last.EndTime - first.EndTime) < 0.000001)
                {
                    rt = MP / (0.000001);
                }
                else
                {
                    rt = MP / (last.EndTime - first.EndTime);
                }

                foreach (var item in list)
                {

                    var left = (item.EndTime - first.EndTime) * rt;
                    item.LeftPercent = left;
                }
            }

            return list;
        }

    }
}
