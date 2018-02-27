using System;
using System.Text;
using CombatTracker.Entities.Reference;
using CombatTracker.Entities.Reference.Actions;
using CombatTracker.Entities.Reference.Attacks;

namespace CombatTracker.Entities.Current
{
    public class BaseAction
    {
        public BaseAction(double startTime, ActionDefinition baseAction = null)
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


        public int ID { get; set; }
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
        
        public ActionDefinition Base { get; set; }
        public Actor WhoIsActing { get; set; }
        public Attack CurrentAttack { get; set; }
        
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



    }
}
