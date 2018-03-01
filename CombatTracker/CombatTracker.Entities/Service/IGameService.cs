using System;
using System.Collections.Generic;
using System.Text;
using CombatTracker.Entities.Current;
using CombatTracker.Entities.Reference;
using CombatTracker.Entities.Reference.Actions;
using CombatTracker.Entities.Reference.Attacks;
using CombatTracker.Entities.Reference.Base;

namespace CombatTracker.Entities.Service
{
    public interface IGameService
    {
        Game CurrentGame { get; }

        int LookupRefractoryNegative(int levelDifference, int roundNumber);
        int LookupRefractoryRoundsToZero(int levelDifference);

        Actor CreateActorFrom(IActable person);


        BaseAction GetStandardAction(ActionDefinition action, BaseAction prevAction, Actor whom, double referenceTime);
        BaseAction GetSpecialAction(ActorActionType action, Actor whom, double referenceTime);


        void TriggerActorDeath(Actor actor, double referenceTime);
        void ChangeActorInit(Actor actor, double referenceTime);

        void ChangeCurrentAction(Actor actor, BaseAction newAction);

        void SetActionTime(Actor actor, BaseAction action, double referenceTime);
        double GetTimeRequired(Actor actor, double baseTime, int modifier, bool isAttack, Attack currentAttack);
        double GetTimeRequiredNonEncumbered(Actor actor, double baseTime);
        double GetTimeRequiredForSpells(Actor actor, double baseTime);

        void RemoveCriticalsFromActor(Actor actor, int count);
        void RemoveCriticalFromActor(Actor actor);

        void AddCriticalToActor(Actor actor, CriticalEffect crit, int rounds);
        void AddRoundsCriticalAffectsToActor(Actor actor, CriticalEffect cAffect, int rounds, double referenceTime);



        void SetCurrentAction(Actor actor, BaseAction action);
        void SetProposedAction(Actor actor, BaseAction action);
        void SetFutureAction(Actor actor, BaseAction action);

    }
}
