

module entities.reference {

    // $Classes/Enums/Interfaces(filter)[template][separator]
    // filter (optional): Matches the name or full name of the current item. * = match any, wrap in [] to match attributes or prefix with : to match interfaces or base classes.
    // template: The template to repeat for each matched item
    // separator (optional): A separator template that is placed between all templates e.g. $Properties[public $name: $Type][, ]

    // More info: http://frhagn.github.io/Typewriter/

    
    export class ActionDefinition {
        
        // ID
        public id: number = 0;
        // ACTIONGROUP_ID
        public actionGroup_ID: number = null;
        // NAME
        public name: string = null;
        // BASEPERCENT
        public basePercent: number = 0;
        // ISATTACK
        public isAttack: boolean = false;
        // ISSPELL
        public isSpell: boolean = false;
        // NEXTACTION_ID
        public nextAction_ID: number = null;
        // TYPE
        public type: BaseActionType = null;
        // TYPESTRING
        public typeString: string = null;
        // ACTIONGROUP
        public actionGroup: ActionGroup = null;
        // NEXTACTION
        public nextAction: ActionDefinition = null;
    }
}