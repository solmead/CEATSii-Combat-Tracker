

module entities.reference {


    export enum CriticalLevels {
        Same,
        A,
        B,
        C,
        D,
        E
    }

    export enum CharacterType {

        NPC,
        PC
    }

    export enum ActorActionType {
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

    export enum ActionProblem {
        IsOK,
        IsWarning,
        IsError
    }

    export enum ActionTypeEnum {
        None,
        Current,
        Proposed,
        Next,
        Effect
    }

    export enum BaseActionType {
        None,
        Normal,
        Attack,
        Spell,
        Prep,
        Movement
    }

    export enum ParryType {
        Fine,
        Must_Parry,
        No_Parry
    }

}