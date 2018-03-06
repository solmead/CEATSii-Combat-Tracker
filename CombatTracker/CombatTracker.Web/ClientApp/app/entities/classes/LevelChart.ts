



    import * as Enums from '../classes/EnumDefinitions'
    import { LevelChartValue } from '../classes/LevelChartValue';
    export interface LevelChart {
        id: number;
        name: string;
        levelChartValues: LevelChartValue[];
    }
