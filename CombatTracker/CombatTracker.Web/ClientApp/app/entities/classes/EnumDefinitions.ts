


    export module EnumDefinitions {

            export enum GameType {
                RMSS = 0,
                DnD5e = 1
            }
    
            export enum CriticalLevels {
                Same = 0,
                A = 1,
                B = 2,
                C = 3,
                D = 4,
                E = 5
            }
    
            export enum CharacterType {
                NPC = 0,
                PC = 1
            }
    
            export enum ActorActionType {
                None = 0,
                Normal = 1,
                Attack = 2,
                Spell = 3,
                Prep = 4,
                Movement = 5,
                Bleed = 6,
                Critical = 7,
                Death = 8,
                Psychic = 9,
                SpellEffect = 10
            }
    
            export enum ActionProblem {
                IsOK = 0,
                IsWarning = 1,
                IsError = 2
            }
    
            export enum ActionTypeEnum {
                None = 0,
                Current = 1,
                Proposed = 2,
                Next = 3,
                Effect = 4
            }
    
            export enum BaseActionType {
                None = 0,
                Normal = 1,
                Attack = 2,
                Spell = 3,
                Prep = 4,
                Movement = 5
            }
    
            export enum ParryType {
                Fine = 0,
                Must_Parry = 1,
                No_Parry = 2
            }
    
    }