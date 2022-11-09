using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using CombatTracker.Entities.Current;
using CombatTracker.Entities.Reference;
using CombatTracker.Entities.Reference.Actions;
using CombatTracker.Entities.Reference.Attacks;
using CombatTracker.Entities.Reference.Base;
using CombatTracker.Entities.Utilities;

namespace CombatTracker.Entities.Abstract.Services
{
    public interface IGameService
    {
        Game CurrentGame { get; set; }

        //int LookupRefractoryNegative(int levelDifference, int roundNumber);
        //int LookupRefractoryRoundsToZero(int levelDifference);

        Actor CreateActorFrom(IActable person, int? rolledInit = null);


        void SetModifierOnAction(BaseAction action, int modifier);
        void SetAttackOnAction(BaseAction action, int attackId);

        BaseAction SaveAction(BaseAction action);

        BaseAction ProposeActionUnconscious(Actor actor);
        BaseAction ProposeAction(BaseAction previousAction, ActionDefinition action, Actor whom, int modifier = 0, int? attackId = null);
        BaseAction ProposeActionContinue(BaseAction previousAction, Actor whom);
        BaseAction AddBleedEffect(Actor whom, int bleedRate);
        BaseAction AddCriticalEffect(Actor whom, CriticalEffect crit, int rounds);
        BaseAction AddPsychicEffect(Actor whom, int psychicLevel);
        BaseAction AddSpellEffect(Actor effectedActor, Actor caster, string spellName, int rounds = 1, int hastePercent = 0);
        void RemoveEffect(BaseAction action);
        //void RemoveFirstCriticalEffect(Actor whom);
        //void RemoveAllCriticalEffects(Actor whom);
        void RemoveCriticalsFromActor(Actor whom, int count);
        void RemoveActor(Actor actor);
        void RemoveAction(BaseAction action);
        BaseAction DoProposedAction(Actor whom);

        void RecalculateActionsTime(Actor actor);


        MoveNextResult MoveToNextAction();


        //void SetActionTime(Actor actor, BaseAction action, double? referenceTime = null);
        //double GetTimeRequired(Actor actor, double baseTime, int modifier, bool isAttack, Attack currentAttack);
        //double GetTimeRequiredNonEncumbered(Actor actor, double baseTime);
        //double GetTimeRequiredForSpells(Actor actor, double baseTime);

        //void RemoveCriticalsFromActor(Actor actor, int count);
        //void RemoveCriticalFromActor(Actor actor);

        //void AddCriticalToActor(Actor actor, CriticalEffect crit, int rounds);
        //void AddRoundsCriticalAffectsToActor(Actor actor, CriticalEffect cAffect, int rounds);


        void SetCurrentAction(Actor actor, BaseAction action);
        void SetProposedAction(Actor actor, BaseAction action);
        void SetFutureAction(Actor actor, BaseAction action);
        BaseAction GetCurrentAction(Actor actor);
        BaseAction GetProposedAction(Actor actor);
        BaseAction GetFutureAction(Actor actor);


        //Task AddMessageAsync(int gameId, string text, MessageTypeEnum messageType = MessageTypeEnum.Normal);

        List<Message> GetMessages();


        void ResetGame();
    }
}
