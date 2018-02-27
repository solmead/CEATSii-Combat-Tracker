//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using CombatTracker.Domain.Current.Actions;

namespace CombatTracker.Domain.Current
{
    public partial class Game
    {
        public Game()
        {
            this.Actors = new HashSet<Actor>();
            this.GameActions = new HashSet<BaseAction>();
            //this.GamesPlayers = new HashSet<GamesPlayer>();
        }

        private string[] _colors = {
                                       "255,0,0", "0,255,0", "0,0,255", "0,255,255", "128,128,128", "255,128,0",
                                       "0,128,255", "128,255,0", "128,0,255", "255,0,128", "0,255,128"
                                   };

        public int ID { get; set; }
        public string Name { get; set; }
        public Guid? GM_ID { get; set; }
        public double CurrentTime { get; set; }

        [InverseProperty("Game_ID")]
        public virtual ICollection<Actor> Actors { get; set; }
        [InverseProperty("Game_ID")]
        public virtual ICollection<BaseAction> GameActions { get; set; }
        //public virtual ICollection<GamesPlayer> GamesPlayers { get; set; }

        [NotMapped]
        public List<string> Colors
        {
            get { return _colors.ToList(); }
        }

        public static Game LoadByName(RmssDbContext db, string name)
        {
            return (from sc in db.Games where sc.Name == name select sc).FirstOrDefault();
        }

        [NotMapped]
        public BaseAction NextAction
        {
            get { return ActionsSorted().FirstOrDefault(); }
        }

        [NotMapped]
        public BaseAction LastAction
        {
            get { return ActionsSorted().LastOrDefault(); }
        }

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
                    rt = MP/(0.000001);
                }
                else
                {
                    rt = MP/(last.EndTime - first.EndTime);
                }

                foreach (var item in list)
                {

                    var left = (item.EndTime - first.EndTime)*rt;
                    item.LeftPercent = left;
                }
            }

            return list;
        }

    }

}