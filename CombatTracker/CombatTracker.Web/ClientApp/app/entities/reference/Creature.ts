

module entities.reference {

    // $Classes/Enums/Interfaces(filter)[template][separator]
    // filter (optional): Matches the name or full name of the current item. * = match any, wrap in [] to match attributes or prefix with : to match interfaces or base classes.
    // template: The template to repeat for each matched item
    // separator (optional): A separator template that is placed between all templates e.g. $Properties[public $name: $Type][, ]

    // More info: http://frhagn.github.io/Typewriter/

    
    export class Creature {
        
        // ID
        public id: number = 0;
        // TYPENAME
        public typeName: string = null;
        // BASELEVEL
        public baseLevel: number = 0;
        // SIZE_ID
        public size_ID: number = 0;
        // BASEMOVE
        public baseMove: number = 0;
        // MMBONUS
        public mmBonus: number = 0;
        // MINENCOUNTERED
        public minEncountered: number = 0;
        // MAXENCOUNTERED
        public maxEncountered: number = 0;
        // BASEHITS
        public baseHits: number = 0;
        // AT
        public at: number = 0;
        // DB
        public db: number = 0;
        // PAGENUMBER
        public pageNumber: number = 0;
        // DESCRIPTION
        public description: string = null;
        // HABITAT
        public habitat: string = null;
        // LEVELMOD_ID
        public levelMod_ID: number = 0;
        // MSRATING_ID
        public msRating_ID: number = 0;
        // AQRATING_ID
        public aqRating_ID: number = 0;
        // MAXPACE_ID
        public maxPace_ID: number = 0;
        // HITMOD_ID
        public hitMod_ID: number = 0;
        // CRITICALS_ID
        public criticals_ID: number = 0;
        // CRITICALSIGNORE_ID
        public criticalsIgnore_ID: number = 0;
        // OUTLOOK_ID
        public outlook_ID: number = 0;
        // IQ_ID
        public iQ_ID: number = 0;
        // BOOK_ID
        public book_ID: number = 0;
        // ATTACKS
        public attacks: Attack[] = [];
        // BOOK
        public book: Book = null;
        // HITMOD
        public hitMod: ConstitutionBonusChart = null;
        // CRITICALS
        public criticals: CriticalCode = null;
        // CRITICALIGNORE
        public criticalIgnore: CriticalIgnore = null;
        // IQ
        public iq: IQ = null;
        // LEVELMOD
        public levelMod: LevelChart = null;
        // OUTLOOK
        public outlook: Outlook = null;
        // MAXPACE
        public maxPace: Pace = null;
        // SIZE
        public size: SizeRating = null;
        // AQRATING
        public aqRating: SpeedChart = null;
        // MSRATING
        public msRating: SpeedChart = null;
    }
}