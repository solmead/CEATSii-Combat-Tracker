using CombatTracker.Entities.Abstract.Services;
using CombatTracker.Entities.Current;
using CombatTracker.Entities.Reference;
using CombatTracker.Entities.Reference.Actions;
using System;
using System.Collections.Generic;
using System.Text;

namespace CombatTracker.Services.Services.Types
{
    public class BleedActionService : IActionServices
    {
        public BaseAction GetSpecialAction(ActorActionType action, Actor whom, Game game, int count = 0)
        {

            var sa = new BaseAction();
            sa.Bleeder = count;
            sa.Name = whom.Name + " bleeding at " + sa.Bleeder;
            sa.BasePercent = 1;
            sa.WhoIsActing = whom;
            sa.WhoIsActing_ID = whom.ID;
            sa.Type = ActorActionType.Bleed;
            sa.ActionType = ActionTypeEnum.Effect;
            sa.State = ActionProblem.IsOK;
            sa.CharacterAction = false;
            sa.Reoccuring = true;
            return sa;
        }

        public BaseAction GetStandardAction(ActionDefinition action, BaseAction prevAction, Actor whom, Game game)
        {
            throw new Exception("Should never be called");
        }

        public MoveNextResult ProcessAction(BaseAction action, Actor whom, IGameService gameService)
        {
            whom.HitsRemaining -= action.Bleeder;
            action.Count += 1;
            action.Note = "Rounds of Bleeding:" + action.Count;
            TimeCalc.SetActionTime(whom, action, gameService.CurrentGame);

            gameService.RecalculateActionsTime(whom);
            if (whom.HitsRemaining<=0)
            {
                var act = gameService.ProposeActionUnconscious(whom);
                gameService.DoProposedAction(whom);
            }

            return new MoveNextResult()
            {
                Response = ResponseEnum.DisplayMessage,
                Message = whom.Name + " Bleed at " + action.Bleeder
            };
        }

        public BaseAction RefreshData(BaseAction action, Actor whom, Game game)
        {
            action.Name = whom.Name + " bleeding at " + action.Bleeder;
            return action;
        }

        public BaseAction EndEffect(BaseAction action, Actor whom)
        {
            return action;
        }
    }
}
