using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CombatTracker.Entities.Reference
{
    public enum ViewTypeEnum
    {
        Overview,
        Player,
        GM
    }


    public enum ResponseEnum
    {
        ChooseNextAction,
        DisplayMessage,
        AutoAdvance
    }

    public enum GameType
    {
        RMSS,
        DnD5e
    }

    public enum DamageLevel
    {
        Healthy,
        Winded,
        Bloodied,
        Rough,
        Unconscious,
        Dead
    }



    public enum ActorActionType
    {
        None,
        Normal,
        Attack,
        Spell,
        Prep,
        Movement,
        Bleed,
        Critical,
        Death,
        Psychic,
        SpellEffect
    }

    public enum ActionProblem
    {
        IsOK,
        IsWarning,
        IsError
    }

    public enum ActionTypeEnum
    {
        None,
        Current,
        Proposed,
        Next,
        Effect,
        Interrupted,
        Completed
    }

    public enum BaseActionType
    {
        None,
        Normal,
        Attack,
        Spell,
        Prep,
        Movement
    }

    public enum ParryType
    {
        Fine,
        Must_Parry,
        No_Parry
    }


    public enum CreatureStatus
    {
        Personal,
        Proposed,
        InCompendium
    }


    public enum CriticalLevels
    {
        Same,
        A,
        B,
        C,
        D,
        E
    }
}
