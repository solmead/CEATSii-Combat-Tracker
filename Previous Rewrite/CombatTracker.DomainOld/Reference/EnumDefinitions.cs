using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CombatTracker.Domain.Reference
{
    public enum CriticalLevels
    {
        Same,
        A,
        B,
        C,
        D,
        E
    }

    public enum CharacterType
    {

        NPC,
        PC
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
        Effect
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

    
}
