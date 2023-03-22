using System;
using System.Collections.Generic;
using System.Text;
using CombatTracker.Base.Reference;
using CombatTracker.Entities.Reference;
using CombatTracker.Entities.Reference.Actions;
using CombatTracker.Entities.Reference.Attacks.Charts;
using CombatTracker.Entities.Reference.Creatures.Charts;
using CombatTracker.Entities.Reference.Magic;

namespace CombatTracker.Entities.Abstract.Repos
{
    public interface IChartRepository
    {

        List<ActionGroup> GetActionGroups();
        ActionGroup GetActionGroup(int id);
        ActionGroup GetActionGroup(string name);


        List<ActionDefinition> GetActions(int groupId);
        ActionDefinition GetAction(int id);
        ActionDefinition GetAction(string name);


        List<ConstitutionBonusChart> GetConstitutionBonusCharts();
        ConstitutionBonusChart GetConstitutionBonusChart(int id);
        ConstitutionBonusChart GetConstitutionBonusChart(string name);

        List<CriticalCode> GetCriticalCodes();
        CriticalCode GetCriticalCode(int id);
        CriticalCode GetCriticalCode(string name);

        List<CriticalIgnore> GetCriticalIgnores();
        CriticalIgnore GetCriticalIgnore(int id);
        CriticalIgnore GetCriticalIgnore(string name);

        List<IQ> GetIQs();
        IQ GetIQ(int id);
        IQ GetIQ(string name);

        List<LevelChart> GetLevelCharts();
        LevelChart GetLevelChart(int id);
        LevelChart GetLevelChart(string name);

        List<Outlook> GetOutlooks();
        Outlook GetOutlook(int id);
        Outlook GetOutlook(string name);

        List<Pace> GetPaces();
        Pace GetPace(int id);
        Pace GetPace(string name);

        List<SizeRating> GetSizeRatings();
        SizeRating GetSizeRating(int id);
        SizeRating GetSizeRating(string name);

        List<SpeedChart> GetSpeedCharts();
        SpeedChart GetSpeedChart(int id);
        SpeedChart GetSpeedChart(string name);

        List<AttackType> GetAttackTypes();
        AttackType GetAttackType(int id);
        AttackType GetAttackType(string name);

        List<CriticalType> GetCriticalTypes();
        CriticalType GetCriticalType(int id);
        CriticalType GetCriticalType(string name);

        List<WeaponType> GetWeaponTypes();
        WeaponType GetWeaponType(int id);
        WeaponType GetWeaponType(string name);

        List<Book> GetBooks();
        Book GetBook(int id);
        Book GetBook(string name);

        List<PsychicRefractoryPeriodEntry> GetPsychicRefractoryPeriodEntries();






    }
}
