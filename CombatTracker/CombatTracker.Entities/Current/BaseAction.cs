using System;
using System.Text;
using CombatTracker.Entities.Reference;
using CombatTracker.Entities.Reference.Actions;
using CombatTracker.Entities.Reference.Attacks;

namespace CombatTracker.Entities.Current
{
    public class BaseAction
    {
        public BaseAction()
        {
            BasePercent = 0.001;
            Name = "";
            StartTime = 0;
            EndTime = 0;
            Note = "";
            State = ActionProblem.IsOK;
            CurrentModifier = 0;
            Reoccuring = false;
        }
        public BaseAction(double startTime, ActionDefinition actionDef = null)
        {
            BasePercent = 0.001;
            Name = "";
            StartTime = startTime;
            EndTime = startTime;
            Note = "";
            State = ActionProblem.IsOK;
            CurrentModifier = 0;
            Reoccuring = false;
            if (actionDef != null)
            {
                Name = actionDef.Name;
                BasePercent = actionDef.BasePercent;
            }
        }


        public int ID { get; set; }
        public string Name { get; set; }
        public double StartTime { get; set; }
        public double EndTime { get; set; }
        public ActorActionType Type { get; set; }
        public string TypeString
        {
            get => Type.ToString();
            set => Type = (ActorActionType)Enum.Parse(typeof(ActorActionType), value);
        }
        public double BasePercent { get; set; }
        public bool Interrupted { get; set; }
        public string Note { get; set; }
        public ActionProblem State { get; set; }
        public string StateString
        {
            get => State.ToString();
            set => State = (ActionProblem)Enum.Parse(typeof(ActionProblem), value);
        }
        public int CurrentModifier { get; set; }
        public bool CriticalGiven { get; set; }
        public double LeftPercent { get; set; }
        public ActionTypeEnum ActionType { get; set; }
        public string ActionTypeString
        {
            get => ActionType.ToString();
            set => ActionType = (ActionTypeEnum)Enum.Parse(typeof(ActionTypeEnum), value);
        }
        public bool Reoccuring { get; set; }
        public bool CharacterAction { get; set; }


        public ActionDefinition Base { get; set; }
        public Actor WhoIsActing { get; set; }
        public Attack CurrentAttack { get; set; }


        public int Game_ID { get; set; }

        public int WhoIsActing_ID { get; set; }

        public int? BaseAction_ID { get; set; }

        public int? CurrentAttack_ID { get; set; }


        
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
