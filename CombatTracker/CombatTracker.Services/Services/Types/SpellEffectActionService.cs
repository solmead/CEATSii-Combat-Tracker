using CombatTracker.Entities.Current;
using CombatTracker.Entities.Reference;
using CombatTracker.Entities.Reference.Actions;
using CombatTracker.Entities.Service;
using System;
using System.Collections.Generic;
using System.Text;

namespace CombatTracker.Services.Services.Types
{
    public class SpellEffectActionService : IActionServices
    {
        public BaseAction GetSpecialAction(ActorActionType action, Actor whom, Game game, int count = 0)
        {
            var sa = new BaseAction();
            sa.Name = null;
            sa.Note = null;
            sa.BasePercent = 1;
            sa.WhoIsActing = whom;
            sa.WhoIsActing_ID = whom.ID;
            sa.Type = ActorActionType.SpellEffect;
            sa.ActionType = ActionTypeEnum.Effect;
            sa.State = ActionProblem.IsOK;
            sa.CharacterAction = false;

            return sa;
        }

        public BaseAction GetStandardAction(ActionDefinition action, BaseAction prevAction, Actor whom, Game game)
        {
            return null;
        }

        public MoveNextResult ProcessAction(BaseAction action, Actor whom, IGameService gameService)
        {
            if (action.IsHasted || action.IsSlowed)
            {
                whom.PercentAction /= (action.HastedPercent / 100);
                gameService.RecalculateActionsTime(whom);
            }

            return new MoveNextResult()
            {
                Response = ResponseEnum.DisplayMessage,
                Message = "Spell Ended"
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
