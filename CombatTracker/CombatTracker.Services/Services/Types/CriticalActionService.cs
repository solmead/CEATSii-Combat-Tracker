using CombatTracker.Entities.Current;
using CombatTracker.Entities.Reference;
using CombatTracker.Entities.Reference.Actions;
using CombatTracker.Entities.Service;
using System;
using System.Collections.Generic;
using System.Text;

namespace CombatTracker.Services.Services.Types
{
    public class CriticalActionService : IActionServices
    {
        public BaseAction GetSpecialAction(ActorActionType action, Actor whom, Game game, int count = 0)
        {
            throw new NotImplementedException();
        }

        public BaseAction GetStandardAction(ActionDefinition action, BaseAction prevAction, Actor whom, Game game)
        {
            throw new NotImplementedException();
        }

        public MoveNextResult ProcessAction(BaseAction action, Actor whom, IGameService gameService)
        {
            return new MoveNextResult()
            {
                Response = ResponseEnum.DisplayMessage,
                Message = "Bleed at " + action.Bleeder
            };
            throw new NotImplementedException();
        }

        public BaseAction RefreshData(BaseAction action, Actor whom, Game game)
        {
            throw new NotImplementedException();
        }

        public BaseAction EndEffect(BaseAction action, Actor whom)
        {
            return action;
        }
    }
}
