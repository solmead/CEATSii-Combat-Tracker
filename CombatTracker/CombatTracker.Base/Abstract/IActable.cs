using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using CombatTracker.Base.Reference;
//CombatTracker.Base
namespace CombatTracker.Base.Abstract
{
    public interface IActable
    {
        string GetName();
        int GetLevel();
        int GetBaseInititive();
        int GetRolledInititive();
        int GetHitsTotal(int? roll = null, int? characterLevel = null);
        int GetExaustionTotal(int? roll = null);
        int GetPowerPointsTotal(int? roll = null);
        CharacterType GetActorType();
        IArmor GetArmor();
        double GetBaseMove();
        int GetStrengthBonus();
        double GetPercentRequiredAdrenalDB();
        List<IAttack> GetAttacks();
        double GetWalkSpeed();

        string GetCriticalIgnores();
        string GetCriticalModified();


    }
}
