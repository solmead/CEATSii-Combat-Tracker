﻿

module entities.reference {

    // $Classes/Enums/Interfaces(filter)[template][separator]
    // filter (optional): Matches the name or full name of the current item. * = match any, wrap in [] to match attributes or prefix with : to match interfaces or base classes.
    // template: The template to repeat for each matched item
    // separator (optional): A separator template that is placed between all templates e.g. $Properties[public $name: $Type][, ]

    // More info: http://frhagn.github.io/Typewriter/

    
    export class ConstitutionBonusChart {
        
        // ID
        public id: number = 0;
        // CODE
        public code: string = null;
        // PERLEVELDIFFERENCE
        public perLevelDifference: number = 0;
        // BONUSEXHAUSTION
        public bonusExhaustion: number = 0;
        // CONSTITUTIONBONUSCHARTVALUES
        public constitutionBonusChartValues: ConstitutionBonusChartValues[] = [];
    }
}