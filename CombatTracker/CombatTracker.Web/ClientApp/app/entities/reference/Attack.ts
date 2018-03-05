

module entities.reference {

    // $Classes/Enums/Interfaces(filter)[template][separator]
    // filter (optional): Matches the name or full name of the current item. * = match any, wrap in [] to match attributes or prefix with : to match interfaces or base classes.
    // template: The template to repeat for each matched item
    // separator (optional): A separator template that is placed between all templates e.g. $Properties[public $name: $Type][, ]

    // More info: http://frhagn.github.io/Typewriter/

    
    export class Attack {
        
        // ID
        public id: number = 0;
        // PERCENTCHANCE
        public percentChance: number = 0;
        // OB
        public ob: number = 0;
        // MAXOB
        public maxOB: number = 0;
        // NUMBER
        public number: number = 0;
        // DAMAGEMULTIPLIER
        public damageMultiplier: number = 0;
        // CRITICALLEVEL
        public criticalLevel: CriticalLevels = null;
        // CRITICALLEVELSTRING
        public criticalLevelString: string = null;
        // ADDITIONALCRITSISOR
        public additionalCritsIsOr: boolean = false;
        // ATTACKTYPE_ID
        public attackType_ID: number = 0;
        // SIZERATING_ID
        public sizeRating_ID: number = null;
        // USECRITICALINSTEAD_ID
        public useCriticalInstead_ID: number = null;
        // THISROUNDSUCCESS_ID
        public thisRoundSuccess_ID: number = null;
        // NEXTROUNDSUCCESS_ID
        public nextRoundSuccess_ID: number = null;
        // PARENTATTACK_ID
        public parentAttack_ID: number = null;
        // CREATUREON_ID
        public creatureOn_ID: number = null;
        // WEAPONUSED_ID
        public weaponUsed_ID: number = null;
        // CRITICALUSEINSTEAD
        public criticalUseInstead: CriticalType = null;
        // ATTACKTYPE
        public attackType: AttackType = null;
        // THISROUNDSUCCESS
        public thisRoundSuccess: Attack = null;
        // NEXTROUNDSUCCESS
        public nextRoundSuccess: Attack = null;
        // SIZERATING
        public sizeRating: SizeRating = null;
        // WEAPONUSED
        public weaponUsed: Weapon = null;
        // ADDITIONALCRITS
        public additionalCrits: CriticalType[] = [];
    }
}