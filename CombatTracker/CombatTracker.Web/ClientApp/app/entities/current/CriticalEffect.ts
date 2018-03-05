
module entities.reference {

    // $Classes/Enums/Interfaces(filter)[template][separator]
    // filter (optional): Matches the name or full name of the current item. * = match any, wrap in [] to match attributes or prefix with : to match interfaces or base classes.
    // template: The template to repeat for each matched item
    // separator (optional): A separator template that is placed between all templates e.g. $Properties[public $name: $Type][, ]

    // More info: http://frhagn.github.io/Typewriter/

    
    export class CriticalEffect {
        
        // ID
        public id: number = 0;
        // ISSTUNNED
        public isStunned: boolean = false;
        // PARRY
        public parry: ParryType = null;
        // PARRYSTRING
        public parryString: string = null;
        // PARRYNEGATIVE
        public parryNegative: number = 0;
        // NEGATIVE
        public negative: number = 0;
        // TIMESTART
        public timeStart: number = 0;
        // TIMEEND
        public timeEnd: number = 0;
        // ACTOR_ID
        public actor_ID: number = 0;
    }
}