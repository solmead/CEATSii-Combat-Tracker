using CombatTracker.Entities.Current;
using CombatTracker.Entities.Reference;
using CombatTracker.Entities.Reference.Actions;
using CombatTracker.Entities.Service;
using System;
using System.Collections.Generic;
using System.Text;

namespace CombatTracker.Services.Services
{
    public class ActionServices : IActionServices
    {

        public ActionServices()
        {
        }


        public BaseAction GetStandardAction(ActionDefinition action, BaseAction prevAction, Actor whom)
        {


            throw new NotImplementedException();
        }

        public BaseAction GetSpecialAction(ActorActionType action, Actor whom)
        {
            throw new NotImplementedException();
        }

        public BaseAction ProcessAction(BaseAction action, Actor whom, Game game)
        {
            throw new NotImplementedException();
        }

        public BaseAction RefreshData(BaseAction action, Actor whom, Game game)
        {
            throw new NotImplementedException();
        }
    }
}
