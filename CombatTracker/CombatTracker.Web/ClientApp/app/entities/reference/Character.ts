

module entities.reference {

    // $Classes/Enums/Interfaces(filter)[template][separator]
    // filter (optional): Matches the name or full name of the current item. * = match any, wrap in [] to match attributes or prefix with : to match interfaces or base classes.
    // template: The template to repeat for each matched item
    // separator (optional): A separator template that is placed between all templates e.g. $Properties[public $name: $Type][, ]

    // More info: http://frhagn.github.io/Typewriter/

    
    export class Character {
        
        // ID
        public id: number = 0;
        // NAME
        public name: string = null;
        // LEVEL
        public level: number = 0;
        // BASEINITITIVE
        public baseInititive: number = 0;
        // HITPOINTS
        public hitPoints: number = 0;
        // EXHAUSTIONPOINTS
        public exhaustionPoints: number = 0;
        // POWERPOINTS
        public powerPoints: number = 0;
        // TYPE
        public type: CharacterType = null;
        // STRENGTHBONUS
        public strengthBonus: number = 0;
        // PERCENTREQUIREDADRENALDB
        public percentRequiredAdrenalDB: number = 0;
        // WALKSPEED
        public walkSpeed: number = 0;
        // ARMORS
        public armors: Armor[] = [];
        // WEAPONS
        public weapons: Weapon[] = [];
        // ROLLEDINITITIVE
        public rolledInititive: number = 0;
        // TYPESTRING
        public typeString: string = null;
    }
}