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
        BaseAction GetStandardAction(ActionDefinition action, BaseAction prevAction, Actor whom);
        BaseAction GetSpecialAction(ActorActionType action, Actor whom);


        BaseAction ProcessAction(BaseAction action, Actor whom, Game game);
        BaseAction RefreshData(BaseAction action, Actor whom, Game game);

    }
}
