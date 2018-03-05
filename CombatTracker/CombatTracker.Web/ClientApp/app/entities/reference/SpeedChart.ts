

module entities.reference {

    // $Classes/Enums/Interfaces(filter)[template][separator]
    // filter (optional): Matches the name or full name of the current item. * = match any, wrap in [] to match attributes or prefix with : to match interfaces or base classes.
    // template: The template to repeat for each matched item
    // separator (optional): A separator template that is placed between all templates e.g. $Properties[public $name: $Type][, ]

    // More info: http://frhagn.github.io/Typewriter/

    
    export class SpeedChart {
        
        // MSBASEDB
        public msBaseDB: number = 0;
        // MSFLEEEVADE
        public msFleeEvade: number = 0;
        // AQCHARGELUNGE
        public aqChargeLunge: number = 0;
        // AQINITIATIVE
        public aqInitiative: number = 0;
    }
}