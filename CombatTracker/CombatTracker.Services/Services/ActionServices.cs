using CombatTracker.Entities.Abstract.Repos;
using CombatTracker.Entities.Abstract.Services;
using CombatTracker.Entities.Current;
using CombatTracker.Entities.Reference;
using CombatTracker.Entities.Reference.Actions;
using CombatTracker.Services.Services.Types;
using System;
using System.Collections.Generic;
using System.Text;

namespace CombatTracker.Services.Services
{
    public class ActionServices : IActionServices
    {

        private IChartRepository _chartRepository;
        public ActionServices(IChartRepository chartRepository)
        {
            _chartRepository = chartRepository;
        }

        private IActionServices GetBasedOnType(BaseActionType action)
        {
            switch (action)
            {
                case BaseActionType.Attack:
                    return GetBasedOnType(ActorActionType.Attack);

                case BaseActionType.Movement:
                    return GetBasedOnType(ActorActionType.Movement);

                case BaseActionType.Normal:
                    return GetBasedOnType(ActorActionType.Normal);

                case BaseActionType.Prep:
                    return GetBasedOnType(ActorActionType.Prep);

                case BaseActionType.Spell:
                    return GetBasedOnType(ActorActionType.Spell);

                default:
                    return GetBasedOnType(ActorActionType.Normal);
            }
        }
        private IActionServices GetBasedOnType(ActorActionType action)
        {
            switch (action)
            {
                case ActorActionType.Attack:
                    return new AttackActionService();

                case ActorActionType.Bleed:
                    return new BleedActionService();

                case ActorActionType.Critical:
                    return new CriticalActionService();

                case ActorActionType.Death:
                    return new DeathActionService();

                case ActorActionType.Movement:
                    return new MovementActionService();

                case ActorActionType.Normal:
                    return new NormalActionService();

                case ActorActionType.Prep:
                    return new PrepActionService();

                case ActorActionType.Psychic:
                    return new PsychicActionService(_chartRepository);

                case ActorActionType.Spell:
                    return new SpellActionService();

                case ActorActionType.SpellEffect:
                    return new SpellEffectActionService();

                default:
                    return new NormalActionService();
            }
        }


        public void CheckActionValid(BaseAction action)
        {
            GetBasedOnType(action.Type).CheckActionValid(action);
        }

        public BaseAction GetStandardAction(ActionDefinition action, BaseAction prevAction, Actor whom, Game game)
        {
            return GetBasedOnType(action.Type).GetStandardAction(action, prevAction, whom,  game);
        }

        public BaseAction GetSpecialAction(ActorActionType action, Actor whom, Game game, int count = 0)
        {
            return GetBasedOnType(action).GetSpecialAction(action, whom,  game, count);
        }

        public MoveNextResult ProcessAction(BaseAction action, Actor whom, IGameService gameService)
        {
            return GetBasedOnType(action.Type).ProcessAction(action, whom, gameService);
        }

        public BaseAction RefreshData(BaseAction action, Actor whom, Game game)
        {
            return GetBasedOnType(action.Type).RefreshData(action, whom, game);
        }

        public BaseAction EndEffect(BaseAction action, Actor whom)
        {
            return GetBasedOnType(action.Type).EndEffect(action, whom);
        }
    }
}
