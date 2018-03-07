




    import * as Enums from '../classes/EnumDefinitions'
    import { Attack } from '../classes/Attack';
import { Book } from '../classes/Book';
import { ConstitutionBonusChart } from '../classes/ConstitutionBonusChart';
import { CriticalCode } from '../classes/CriticalCode';
import { CriticalIgnore } from '../classes/CriticalIgnore';
import { IQ } from '../classes/IQ';
import { LevelChart } from '../classes/LevelChart';
import { Outlook } from '../classes/Outlook';
import { Pace } from '../classes/Pace';
import { SizeRating } from '../classes/SizeRating';
import { SpeedChart } from '../classes/SpeedChart';
    export interface Creature {
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
    }
