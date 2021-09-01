using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CombatTracker.Entities.Abstract.Repos;
using CombatTracker.Entities.Abstract.Services;
using CombatTracker.Entities.Current;
using CombatTracker.Entities.Reference;
using CombatTracker.Entities.Utilities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CombatTracker.Web.Controllers.Api
{
    [ApiVersion("1.0")]
    [ApiExplorerSettings(GroupName = "v1")]
    [Authorize]
    public class EncounterController : BaseApiController
    {
        private readonly ICreatureRepository _creatureRepository;
        private readonly ICharacterRepository _characterRepository;
        private readonly IGameRepository _gameRepository;
        private readonly IGameService _gameService;
        private readonly IChartRepository _chartRepository;

        public EncounterController(ICreatureRepository creatureRepository,
            ICharacterRepository characterRepository, 
            IGameRepository gameRepository,
            IChartRepository chartRepository,
            IGameService gameService,
            ISessionContext sessionContext) : base(sessionContext)
        {
            _gameRepository = gameRepository;
            _creatureRepository = creatureRepository;
            _characterRepository = characterRepository;
            _chartRepository = chartRepository;
            _gameService = gameService;
        }

        [AllowAnonymous]
        [HttpGet("GetCurrentGame")]
        public Game GetCurrentGame()
        {
            return _gameService.CurrentGame;
        }

        [AllowAnonymous]
        [HttpPost("SetCurrentGame/{gameId}")]
        public Game SetCurrentGame(int gameId)
        {
            var gm = _gameRepository.GetGame(gameId);
            _gameService.CurrentGame = gm;
            return gm;
        }

        [AllowAnonymous]
        [HttpGet("GetMessages")]
        public List<Message> GetMessages()
        {
            return _gameService.GetMessages();
        }


        [HttpPost("CreateActorFromCreature/{creatureId}")]
        public Actor CreateActorFromCreature(int creatureId)
        {
            var person = _creatureRepository.GetCreature(creatureId);
            var actor = _gameService.CreateActorFrom(person);


            return actor;
        }

        [HttpPost("CreateActorFromCharacter/{characterId}")]
        public Actor CreateActorFromCharacter(int characterId, int? rolledInit = null)
        {
            var person = _characterRepository.GetCharacter(characterId);
            var actor = _gameService.CreateActorFrom(person, rolledInit);


            return actor;
        }

        [HttpPost("MoveToNext")]
        public MoveNextResult MoveToNext(bool none = false)
        {
            return _gameService.MoveToNextAction();
        }

        [HttpPost("ProposeActionUnconscious")]
        public BaseAction ProposeActionUnconscious(int actorId)
        {
            var actor = _gameRepository.GetActor(actorId);
            return _gameService.ProposeActionUnconscious(actor);
        }

        [HttpPost("ProposeAction")]
        public BaseAction ProposeAction(int actionDefId, int whomId, int modifier = 0, int? attackId = null)
        {
            var actor = _gameRepository.GetActor(whomId);
            var actionDef = _chartRepository.GetAction(actionDefId);
            var acts = _gameRepository.GetActionsOnActor(whomId);
            var curact = (from act in acts where act.ActionType == ActionTypeEnum.Current select act).FirstOrDefault();
            return _gameService.ProposeAction(curact, actionDef, actor, modifier, attackId);
        }

        [HttpPost("ProposeActionContinue")]
        public BaseAction ProposeActionContinue(int previousActionId, int whomId)
        {
            var actor = _gameRepository.GetActor(whomId);
            var action = _gameRepository.GetAction(previousActionId);
            return _gameService.ProposeActionContinue(action, actor);
        }

        [HttpPost("AddBleedEffect")]
        public BaseAction AddBleedEffect(int whomId, int bleedRate)
        {
            var actor = _gameRepository.GetActor(whomId);
            return _gameService.AddBleedEffect(actor, bleedRate);
        }

        [HttpPost("AddCriticalEffect")]
        public BaseAction AddCriticalEffect(int whomId, [FromBody] CriticalEffect crit, int rounds)
        {
            var actor = _gameRepository.GetActor(whomId);
            return _gameService.AddCriticalEffect(actor, crit, rounds);
        }

        [HttpPost("AddPsychicEffect")]
        public BaseAction AddPsychicEffect(int whomId, int psychicLevel)
        {
            var actor = _gameRepository.GetActor(whomId);
            return _gameService.AddPsychicEffect(actor, psychicLevel);
        }

        [HttpPost("AddSpellEffect")]
        public BaseAction AddSpellEffect(int effectedActorId, int casterId, string spellName, int rounds, int hastePercent)
        {
            var effected = _gameRepository.GetActor(effectedActorId);
            var caster = _gameRepository.GetActor(casterId);
            return _gameService.AddSpellEffect(effected, caster, spellName, rounds, hastePercent);
        }

        [HttpDelete("RemoveEffect/{actionId}")]
        public void RemoveEffect(int actionId)
        {

            var action = _gameRepository.GetAction(actionId);
            _gameService.RemoveEffect(action);
        }

        [HttpDelete("RemoveActor/{actorId}")]
        public void RemoveActor(int actorId)
        {

            var actor = _gameRepository.GetActor(actorId);
            _gameService.RemoveActor(actor);
        }

        [HttpDelete("RemoveAction/{actionId}")]
        public void RemoveAction(int actionId)
        {

            var action = _gameRepository.GetAction(actionId);
            _gameService.RemoveAction(action);
        }

        [HttpDelete("RemoveCriticalsFromActor/{whomId}")]
        public void RemoveCriticalsFromActor(int whomId, int count = 1)
        {
            var actor = _gameRepository.GetActor(whomId);
            _gameService.RemoveCriticalsFromActor(actor, count);
        }
        
        [HttpPost("DoProposedAction/{whomId}")]
        public void DoProposedAction(int whomId)
        {
            var actor = _gameRepository.GetActor(whomId);
            _gameService.DoProposedAction(actor);
        }

        [HttpPost("SetModifierOnAction")]
        public void SetModifierOnAction(int actionId, int modifier)
        {

            var action = _gameRepository.GetAction(actionId);
            _gameService.SetModifierOnAction(action, modifier);
        }

        [HttpPost("SetAttackOnAction")]
        public void SetAttackOnAction(int actionId, int attackId)
        {

            var action = _gameRepository.GetAction(actionId);
            _gameService.SetAttackOnAction(action, attackId);
        }


    }
}