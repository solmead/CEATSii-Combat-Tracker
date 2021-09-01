using CombatTracker.Entities.Abstract.Services;
using CombatTracker.Entities.Current;
using CombatTracker.Entities.Reference;
using CombatTracker.Entities.Reference.Actions;
using System;
using System.Collections.Generic;
using System.Text;

namespace CombatTracker.Services.Services.Types
{
    public class DeathActionService : IActionServices
    {
        public BaseAction GetSpecialAction(ActorActionType action, Actor whom, Game game, int count = 0)
        {
            var sa = new BaseAction();
            sa.Name = whom.Name + " is Unconcious";
            sa.BasePercent = 1;
            //sa.WhoIsActing = whom;
            sa.WhoIsActing_ID = whom.ID;
            sa.Type = ActorActionType.Death;
            sa.State = ActionProblem.IsOK;
            sa.CharacterAction = true;
            sa.Reoccuring = whom.HitsRemaining <= 0;
            return sa;
        }


        public void CheckActionValid(BaseAction action)
        {
            action.CharacterAction = true;
            action.Reoccuring = true;
        }
        public BaseAction GetStandardAction(ActionDefinition action, BaseAction prevAction, Actor whom, Game game)
        {
            throw new Exception("Should never be called");
        }

        public MoveNextResult ProcessAction(BaseAction action, Actor whom, IGameService gameService)
        {
            action.Reoccuring = whom.HitsRemaining <= 0;
            if (whom.HitsRemaining < -whom.ConstitutionStat) {
                action.Name = whom.Name + " is Dead";
                action.Count += 1;
                action.Note = "Rounds of Death:" + action.Count;
            }

            TimeCalc.SetActionTime(whom, action, gameService.CurrentGame);
            gameService.SaveAction(action);

            return new MoveNextResult()
            {
                Response = ResponseEnum.AutoAdvance
            };
        }

        public BaseAction RefreshData(BaseAction action, Actor whom, Game game)
        {
            action.Reoccuring = whom.HitsRemaining <= 0;

            return action;
        }

        public BaseAction EndEffect(BaseAction action, Actor whom)
        {
            return action;
        }
    }
}
