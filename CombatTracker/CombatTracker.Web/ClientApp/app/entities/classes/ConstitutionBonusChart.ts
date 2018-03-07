




    import * as Enums from '../classes/EnumDefinitions'
    import { ConstitutionBonusChartValues } from '../classes/ConstitutionBonusChartValues';
    export interface ConstitutionBonusChart {
        id: number;
        code: string;
        perLevelDifference: number;
        bonusExhaustion: number;
        constitutionBonusChartValues: ConstitutionBonusChartValues[];
    }
