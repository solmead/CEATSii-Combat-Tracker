
module entities.reference {

    // $Classes/Enums/Interfaces(filter)[template][separator]
    // filter (optional): Matches the name or full name of the current item. * = match any, wrap in [] to match attributes or prefix with : to match interfaces or base classes.
    // template: The template to repeat for each matched item
    // separator (optional): A separator template that is placed between all templates e.g. $Properties[public $name: $Type][, ]

    // More info: http://frhagn.github.io/Typewriter/

    
    export class BaseAction {
        
        // ID
        public id: number = 0;
        // NAME
        public name: string = null;
        // STARTTIME
        public startTime: number = 0;
        // ENDTIME
        public endTime: number = 0;
        // TYPE
        public type: ActorActionType = null;
        // TYPESTRING
        public typeString: string = null;
        // BASEPERCENT
        public basePercent: number = 0;
        // INTERRUPTED
        public interrupted: boolean = false;
        // NOTE
        public note: string = null;
        // STATE
        public state: ActionProblem = null;
        // STATESTRING
        public stateString: string = null;
        // CURRENTMODIFIER
        public currentModifier: number = 0;
        // CRITICALGIVEN
        public criticalGiven: boolean = false;
        // LEFTPERCENT
        public leftPercent: number = 0;
        // ACTIONTYPE
        public actionType: ActionTypeEnum = null;
        // ACTIONTYPESTRING
        public actionTypeString: string = null;
        // BASE
        public base: ActionDefinition = null;
        // WHOISACTING
        public whoIsActing: Actor = null;
        // CURRENTATTACK
        public currentAttack: Attack = null;
        // GAME_ID
        public game_ID: number = 0;
        // WHOISACTING_ID
        public whoIsActing_ID: number = 0;
        // BASEACTION_ID
        public baseAction_ID: number = null;
        // CURRENTATTACK_ID
        public currentAttack_ID: number = null;
        // COLOR
        public color: string = null;
    }
}