using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using CombatTracker.Entities.Current;
using CombatTracker.Entities.Reference;
using CombatTracker.Entities.Reference.Actions;
using CombatTracker.Entities.Reference.Attacks;
using CombatTracker.Entities.Reference.Base;
using CombatTracker.Entities.Repositories;
using CombatTracker.Entities.Service;

namespace CombatTracker.Services.Services
{
    public class GameServices : IGameService
    {
        private readonly IChartRepository _chartRepository;

        public GameServices(IChartRepository chartRepository)
        {
            _chartRepository = chartRepository;
        }


        public Game CurrentGame { get; }

        public int LookupRefractoryNegative(int levelDifference, int roundNumber)
        {
            var periods = _chartRepository.GetPsychicRefractoryPeriodEntries();

            var mods = (from rl in periods
                        where rl.LevelMin <= levelDifference && levelDifference <= rl.LevelMax
                orderby rl.RoundNumber
                select rl).ToList();

            foreach (var rm in mods)
            {
                if (rm.RoundNumber == roundNumber)
                {
                    return rm.Mod;
                }
            }

            var lMod = mods.Last().Mod;
            var rnd = mods.Last().RoundNumber;
            while (lMod < 0 && rnd < roundNumber)
            {
                rnd++;
                lMod = lMod + 5;
            }
            if (lMod > 0)
            {
                lMod = 0;
            }
            return lMod;
        }

        public int LookupRefractoryRoundsToZero(int levelDifference)
        {
            var periods = _chartRepository.GetPsychicRefractoryPeriodEntries();
            var mods = (from rl in periods
                        where rl.LevelMin <= levelDifference && levelDifference <= rl.LevelMax
                orderby rl.RoundNumber
                select rl).ToList();

            if (!mods.Any())
            {
                return 0;
            }

            var lMod = mods.Last().Mod;
            var rnd = mods.Last().RoundNumber;
            while (lMod < 0)
            {
                rnd++;
                lMod = lMod + 5;
            }
            return rnd;
        }

        public Actor CreateActorFrom(IActable person)
        {
            throw new NotImplementedException();
        }

        public BaseAction GetStandardAction(ActionDefinition action, BaseAction prevAction, Actor whom, double referenceTime)
        {
            throw new NotImplementedException();
        }

        public BaseAction GetSpecialAction(ActorActionType action, Actor whom, double referenceTime)
        {
            throw new NotImplementedException();
        }

        public void TriggerActorDeath(Actor actor, double referenceTime)
        {
            throw new NotImplementedException();
        }

        public void ChangeActorInit(Actor actor, double referenceTime)
        {
            throw new NotImplementedException();
        }

        public void ChangeCurrentAction(Actor actor, BaseAction newAction)
        {
            throw new NotImplementedException();
        }

        public void SetActionTime(Actor actor, BaseAction action, double referenceTime)
        {
            throw new NotImplementedException();
        }

        public double GetTimeRequired(Actor actor, double baseTime, int modifier, bool isAttack, Attack currentAttack)
        {
            throw new NotImplementedException();
        }

        public double GetTimeRequiredNonEncumbered(Actor actor, double baseTime)
        {
            throw new NotImplementedException();
        }

        public double GetTimeRequiredForSpells(Actor actor, double baseTime)
        {
            throw new NotImplementedException();
        }

        public void RemoveCriticalsFromActor(Actor actor, int count)
        {
            throw new NotImplementedException();
        }

        public void RemoveCriticalFromActor(Actor actor)
        {
            throw new NotImplementedException();
        }

        public void AddCriticalToActor(Actor actor, CriticalEffect crit, int rounds)
        {
            throw new NotImplementedException();
        }

        public void AddRoundsCriticalAffectsToActor(Actor actor, CriticalEffect cAffect, int rounds, double referenceTime)
        {
            throw new NotImplementedException();
        }
    }
}
