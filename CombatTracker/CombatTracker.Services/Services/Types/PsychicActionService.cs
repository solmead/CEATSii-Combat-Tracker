using CombatTracker.Entities.Current;
using CombatTracker.Entities.Reference;
using CombatTracker.Entities.Reference.Actions;
using System;
using System.Linq;
using System.Collections.Generic;
using System.Text;
using CombatTracker.Entities.Abstract.Repos;
using CombatTracker.Entities.Abstract.Services;

namespace CombatTracker.Services.Services.Types
{
    public class PsychicActionService : IActionServices
    {
        private IChartRepository _chartRepository;

        public PsychicActionService(IChartRepository chartRepository)
        {
            _chartRepository = chartRepository;
        }

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

        public BaseAction GetSpecialAction(ActorActionType action, Actor whom, Game game, int count = 0)
        {
            var sa = new BaseAction();
            sa.Count = 0;
            sa.LevelDifference = whom.Level - count;
            sa.TotalRounds = LookupRefractoryRoundsToZero(sa.LevelDifference);
            sa.Name = "Psychic Recovery";
            sa.Note = "Round " + sa.Count + " of " + sa.TotalRounds;
            sa.BasePercent = 1;
            //sa.WhoIsActing = whom;
            sa.WhoIsActing_ID = whom.ID;
            sa.Type = ActorActionType.Psychic;
            sa.ActionType = ActionTypeEnum.Effect;
            sa.State = ActionProblem.IsOK;
            sa.CharacterAction = false;
            sa.Reoccuring = true;

            sa.StartTime = game.CurrentTime;
            sa.EndTime = TimeCalc.GetTimeRequiredForSpells(whom, game.BaseRoundTime) + game.CurrentTime;
            whom.CritNegatives += LookupRefractoryNegative(sa.LevelDifference, sa.Count);


            return sa;
        }

        public void CheckActionValid(BaseAction action)
        {
            action.CharacterAction = false;
            action.Reoccuring = action.Count <= action.TotalRounds;
        }

        public BaseAction GetStandardAction(ActionDefinition action, BaseAction prevAction, Actor whom, Game game)
        {
            throw new NotImplementedException();
        }

        public MoveNextResult ProcessAction(BaseAction action, Actor whom, IGameService gameService)
        {
            whom.CritNegatives -= LookupRefractoryNegative(action.LevelDifference, action.Count);
            action.Count += 1;
            action.Reoccuring = action.Count <= action.TotalRounds;
            whom.CritNegatives += LookupRefractoryNegative(action.LevelDifference, action.Count);
            action.EndTime = TimeCalc.GetTimeRequiredForSpells(whom, gameService.CurrentGame.BaseRoundTime) + gameService.CurrentGame.CurrentTime;
            action.Note = "Round " + action.Count + " of " + action.TotalRounds;

            gameService.SaveAction(action);

            return new MoveNextResult()
            {
                Response = ResponseEnum.AutoAdvance
            };
        }

        public BaseAction RefreshData(BaseAction action, Actor whom, Game game)
        {
            return action;
        }

        public BaseAction EndEffect(BaseAction action, Actor whom)
        {
            whom.CritNegatives -= LookupRefractoryNegative(action.LevelDifference, action.Count);
            return action;
        }
    }
}
