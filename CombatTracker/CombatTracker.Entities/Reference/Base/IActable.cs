﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using CombatTracker.Entities.Reference.Attacks;

namespace CombatTracker.Entities.Reference.Base
{
    public interface IActable
    {
        string GetName();
        int GetLevel();
        int GetBaseInititive();
        int GetRolledInititive();
        int GetHitsTotal(int roll, int characterLevel);
        int GetExaustionTotal(int roll);
        int GetPowerPointsTotal(int roll);
        CharacterType GetActorType();
        Armor GetArmor();
        double GetBaseMove();
        int GetStrengthBonus();
        double GetPercentRequiredAdrenalDB();
        List<Attack> GetAttacks();



    }
}