




    import * as Enums from './EnumDefinitions'
    import { Attack } from './Attack';
import { Book } from './Book';
import { ConstitutionBonusChart } from './ConstitutionBonusChart';
import { CriticalCode } from './CriticalCode';
import { CriticalIgnore } from './CriticalIgnore';
import { IQ } from './IQ';
import { LevelChart } from './LevelChart';
import { Outlook } from './Outlook';
import { Pace } from './Pace';
import { SizeRating } from './SizeRating';
import { SpeedChart } from './SpeedChart';
import GameType = Enums.EnumDefinitions.GameType;
    export class Creature {
        id: number;
        typeName: string;
        baseLevel: number;
        size_ID: number;
        baseMove: number;
        mmBonus: number;
        minEncountered: number;
        maxEncountered: number;
        baseHits: number;
        at: number;
        db: number;
        pageNumber: number;
        description: string;
        habitat: string;
        levelMod_ID: number;
        msRating_ID: number;
        aqRating_ID: number;
        maxPace_ID: number;
        hitMod_ID: number;
        criticals_ID: number;
        criticalsIgnore_ID: number;
        outlook_ID: number;
        iQ_ID: number;
        book_ID: number;
        gameType: GameType;
        gameTypeString: string;
        attacks: Attack[];
        book: Book;
        hitMod: ConstitutionBonusChart;
        criticals: CriticalCode;
        criticalIgnore: CriticalIgnore;
        iq: IQ;
        levelMod: LevelChart;
        outlook: Outlook;
        maxPace: Pace;
        size: SizeRating;
        aqRating: SpeedChart;
        msRating: SpeedChart;

        constructor() {
        }
    }


