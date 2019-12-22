using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CombatTracker.Entities.Reference;
using CombatTracker.Entities.Reference.Actions;
using CombatTracker.Entities.Reference.Attacks.Charts;
using CombatTracker.Entities.Reference.Creatures.Charts;
using CombatTracker.Entities.Reference.Magic;
using CombatTracker.Entities.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CombatTracker.Web.Controllers.Api
{
    [Produces("application/json")]
    [Route("api/Reference")]
    public class ReferenceController : Controller
    {

        public readonly IChartRepository _chartRepository;

        public ReferenceController(IChartRepository chartRepository)
        {
            _chartRepository = chartRepository;
        }


        [HttpGet("[action]")]
        public List<ActionGroup> GetActionGroups()
        {
            return _chartRepository.GetActionGroups();
        }
        [HttpGet("[action]")]
        public List<ActionDefinition> GetActions(int groupId)
        {
            return _chartRepository.GetActions(groupId);
        }
        [HttpGet("[action]")]
        public List<ConstitutionBonusChart> GetConstitutionBonusCharts()
        {
            return _chartRepository.GetConstitutionBonusCharts();
        }
        [HttpGet("[action]")]
        public List<CriticalCode> GetCriticalCodes()
        {
            return _chartRepository.GetCriticalCodes();
        }
        [HttpGet("[action]")]
        public List<CriticalIgnore> GetCriticalIgnores()
        {
            return _chartRepository.GetCriticalIgnores();
        }
        [HttpGet("[action]")]
        public List<IQ> GetIQs()
        {
            return _chartRepository.GetIQs();
        }
        [HttpGet("[action]")]
        public List<LevelChart> GetLevelCharts()
        {
            return _chartRepository.GetLevelCharts();
        }
        [HttpGet("[action]")]
        public List<Outlook> GetOutlooks()
        {
            return _chartRepository.GetOutlooks();
        }
        [HttpGet("[action]")]
        public List<Pace> GetPaces()
        {
            return _chartRepository.GetPaces();
        }
        [HttpGet("[action]")]
        public List<SizeRating> GetSizeRatings()
        {
            return _chartRepository.GetSizeRatings();
        }
        [HttpGet("[action]")]
        public List<SpeedChart> GetSpeedCharts()
        {
            return _chartRepository.GetSpeedCharts();
        }
        [HttpGet("[action]")]
        public List<AttackType> GetAttackTypes()
        {
            return _chartRepository.GetAttackTypes();
        }
        [HttpGet("[action]")]
        public List<CriticalType> GetCriticalTypes()
        {
            return _chartRepository.GetCriticalTypes();
        }
        [HttpGet("[action]")]
        public List<WeaponType> GetWeaponTypes()
        {
            return _chartRepository.GetWeaponTypes();
        }
        [HttpGet("[action]")]
        public List<Book> GetBooks()
        {
            return _chartRepository.GetBooks();
        }
        [HttpGet("[action]")]
        public List<PsychicRefractoryPeriodEntry> GetPsychicRefractoryPeriodEntries()
        {
            return _chartRepository.GetPsychicRefractoryPeriodEntries();
        }





    }
}