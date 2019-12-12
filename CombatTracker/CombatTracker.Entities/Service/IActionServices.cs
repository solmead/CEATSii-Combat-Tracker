using CombatTracker.Entities.Current;
using CombatTracker.Entities.Reference;
using CombatTracker.Entities.Reference.Actions;
using System;
using System.Collections.Generic;
using System.Text;

namespace CombatTracker.Entities.Service
{
    public interface IActionServices
    {
        BaseAction GetStandardAction(ActionDefinition action, BaseAction prevAction, Actor whom, Game game);
        BaseAction GetSpecialAction(ActorActionType action, Actor whom, Game game, int count=0);


        MoveNextResult ProcessAction(BaseAction action, Actor whom, IGameService gameService);
        BaseAction RefreshData(BaseAction action, Actor whom, Game game);

        BaseAction EndEffect(BaseAction action, Actor whom);

    }
}
