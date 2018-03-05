
module entities.reference {

    // $Classes/Enums/Interfaces(filter)[template][separator]
    // filter (optional): Matches the name or full name of the current item. * = match any, wrap in [] to match attributes or prefix with : to match interfaces or base classes.
    // template: The template to repeat for each matched item
    // separator (optional): A separator template that is placed between all templates e.g. $Properties[public $name: $Type][, ]

    // More info: http://frhagn.github.io/Typewriter/

    
    export class Actor {
        
        // ID
        public id: number = 0;
        // NAME
        public name: string = null;
        // TYPE
        public type: CharacterType = null;
        // TYPESTRING
        public typeString: string = null;
        // LEVEL
        public level: number = 0;
        // HITSTOTAL
        public hitsTotal: number = 0;
        // HITSREMAINING
        public hitsRemaining: number = 0;
        // BASEINITITIVE
        public baseInititive: number = 0;
        // ROLLEDINITITIVE
        public rolledInititive: number = 0;
        // EXHAUSTIONTOTAL
        public exhaustionTotal: number = 0;
        // EXHAUSTIONREMAINING
        public exhaustionRemaining: number = 0;
        // POWERPOINTSTOTAL
        public powerPointsTotal: number = 0;
        // POWERPOINTSREMAINING
        public powerPointsRemaining: number = 0;
        // ISCONCENTRATING
        public isConcentrating: boolean = false;
        // ISMOVING
        public isMoving: boolean = false;
        // SUPRISED
        public suprised: boolean = false;
        // USINGADRENALDB
        public usingAdrenalDB: boolean = false;
        // PERCENTREQUIREDADRENALDB
        public percentRequiredAdrenalDB: number = 0;
        // PERCENTACTION
        public percentAction: number = 0;
        // STRENGTHBONUS
        public strengthBonus: number = 0;
        // CRITNEGATIVES
        public critNegatives: number = 0;
        // NEXTSPELLTIME
        public nextSpellTime: number = 0;
        // CONSTITUTIONSTAT
        public constitutionStat: number = 0;
        // MOVEMENT
        public movement: number = 0;
        // COLOR
        public color: string = null;
        // GAME_ID
        public game_ID: number = 0;
        // BASECREATURE_ID
        public baseCreature_ID: number = null;
        // BASECHARACTER_ID
        public baseCharacter_ID: number = null;
        // CURRENTARMOR_ID
        public currentArmor_ID: number = null;
        // CURRENTARMOR
        public currentArmor: Armor = null;
        // GAME
        public game: Game = null;
        // ATTACKS
        public attacks: Attack[] = [];
        // CRITICALEFFECTS
        public criticalEffects: CriticalEffect[] = [];
        // INITITIVE
        public inititive: number = 0;
        // BASE
        //public base: IActable = null;
        // CURRENTACTION
        public currentAction: BaseAction = null;
        // PROPOSEDACTION
        public proposedAction: BaseAction = null;
        // FUTUREACTION
        public futureAction: BaseAction = null;
        // STUNROUNDS
        public stunRounds: number = 0;
        // PARRYROUNDS
        public parryRounds: number = 0;
        // NEGATIVEROUNDS
        public negativeRounds: number = 0;
        // CURRENTCRITS
        public currentCrits: CriticalEffect = null;
        // NEGATIVES
        public negatives: number = 0;
    }
}