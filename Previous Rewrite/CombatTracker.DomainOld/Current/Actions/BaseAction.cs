using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using CombatTracker.Domain.Reference;
using CombatTracker.Domain.Reference.Attacks;

namespace CombatTracker.Domain.Current.Actions
{
    [Table("ActorsAction")]
    public abstract class BaseAction
    {
        public int ID { get; set; }
        public int Game_ID { get; set; }
        public int WhoIsActing_ID { get; set; }
        public int? BaseAction_ID { get; set; }
        public int? CurrentAttack_ID { get; set; }
        public string Name { get; set; }
        public double StartTime { get; set; }
        public double EndTime { get; set; }
        public ActorActionType Type { get; set; }
        public double BasePercent { get; set; }
        public bool Interrupted { get; set; }
        public string Note { get; set; }
        public ActionProblem State { get; set; }
        public int CurrentModifier { get; set; }
        public bool CriticalGiven { get; set; }
        public double LeftPercent { get; set; }
        public ActionTypeEnum ActionType { get; set; }

        [ForeignKey("BaseAction_ID")]
        public virtual Reference.Actions.Action Base { get; set; }
        [ForeignKey("WhoIsActing_ID")]
        public virtual Actor WhoIsActing { get; set; }
        [ForeignKey("CurrentAttack_ID")]
        public virtual Attack CurrentAttack { get; set; }
        //[ForeignKey("Game_ID")]
        //public virtual Game Game { get; set; }


        public abstract bool CharacterAction { get; }
        public abstract void HandleAction(RmssDbContext db, double currentTime);
        public abstract void RefreshData();



        public BaseAction(double startTime, Reference.Actions.Action baseAction = null)
        {
            BasePercent = 0.001;
            Name = "";
            StartTime = startTime;
            EndTime = startTime;
            Note = "";
            State = ActionProblem.IsOK;
            CurrentModifier = 0;
            if (baseAction != null)
            {
                Name = baseAction.Name;
                BasePercent = baseAction.BasePercent;
            }
        }

        public String Color
        {
            get 
            { 
                var col = "";
                col = col + WhoIsActing.Color;
                if (ActionType == ActionTypeEnum.Current)
                {
                    col = col + ",1";
                }
                if (ActionType == ActionTypeEnum.Next)
                {
                    col = col + ",0.5";
                }
                if (ActionType == ActionTypeEnum.Proposed)
                {
                    col = col + ",0.33";
                }
                if (ActionType == ActionTypeEnum.None)
                {
                    col = col + ",0";
                }


                return col;
            }
        }


        public double PercentageCompleted(double currentTime)
        {
            return (currentTime - StartTime) / (EndTime - StartTime);
        }

        public virtual bool Reoccuring
        {
            get { return false; }
        }


        public override string ToString()
        {
            return Name;
        }



    }
}
