using CombatTracker.Entities.Abstract.Services;
using CombatTracker.Entities.Current;
using CombatTracker.Entities.Reference;
using CombatTracker.Entities.Reference.Actions;
using System;
using System.Collections.Generic;
using System.Text;

namespace CombatTracker.Services.Services.Types
{
    public class AttackActionService : IActionServices
    {
        public BaseAction GetSpecialAction(ActorActionType action, Actor whom, Game game, int count = 0)
        {
            throw new NotImplementedException();
        }

        public BaseAction GetStandardAction(ActionDefinition action, BaseAction prevAction, Actor whom, Game game)
        {

            var sa = new BaseAction();
            sa.Name = action.Name;
            sa.BasePercent = action.BasePercent;
            sa.BaseAction_ID = action.ID;
            sa.Base = action;
            //sa.WhoIsActing = whom;
            sa.WhoIsActing_ID = whom.ID;
            sa.Type = ActorActionType.Attack;
            sa.State = ActionProblem.IsOK;
            sa.CharacterAction = true;


            return sa;
        }

        public MoveNextResult ProcessAction(BaseAction action, Actor whom, IGameService gameService)
        {
            return new MoveNextResult()
            {
                Response = ResponseEnum.ChooseNextAction
            };
            //throw new NotImplementedException();
        }

        public BaseAction RefreshData(BaseAction action, Actor whom, Game game)
        {
            return action;
            //throw new NotImplementedException();
        }

        public BaseAction EndEffect(BaseAction action, Actor whom)
        {
            return action;
        }

        public void CheckActionValid(BaseAction action)
        {
            action.CharacterAction = true;
            action.Reoccuring = false;
        }
    }
}
