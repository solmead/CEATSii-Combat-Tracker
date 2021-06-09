using CombatTracker.Entities.Abstract.Services;
using CombatTracker.Entities.Current;
using CombatTracker.Entities.Reference;
using CombatTracker.Entities.Reference.Actions;
using System;
using System.Collections.Generic;
using System.Text;

namespace CombatTracker.Services.Services.Types
{
    public class PrepActionService : IActionServices
    {
        public BaseAction GetSpecialAction(ActorActionType action, Actor whom, Game game, int count = 0)
        {
            throw new NotImplementedException();
        }

        public BaseAction GetStandardAction(ActionDefinition action, BaseAction prevAction, Actor whom, Game game)
        {

            var sa = new BaseAction();
            sa.BasePercent = action.BasePercent;
            sa.BaseAction_ID = action.ID;
            sa.Base = action;
            sa.WhoIsActing = whom;
            sa.WhoIsActing_ID = whom.ID;
            sa.Type = ActorActionType.Prep;
            sa.State = ActionProblem.IsOK;
            sa.CharacterAction = true;
            sa.Count = 0;
            if (prevAction?.Type == ActorActionType.Prep)
            {
                sa.Count = prevAction.Count + 1;
            }
            sa.Name = action.Name + " Round " + sa.Count ;

            return sa;
        }

        public MoveNextResult ProcessAction(BaseAction action, Actor whom, IGameService gameService)
        {
            return new MoveNextResult()
            {
                Response = ResponseEnum.ChooseNextAction
            };
        }

        public BaseAction RefreshData(BaseAction action, Actor whom, Game game)
        {
            return action;
        }

        public BaseAction EndEffect(BaseAction action, Actor whom)
        {
            return action;
        }
    }
}
