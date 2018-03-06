



    import * as Enums from '../classes/EnumDefinitions'
    import { ActionDefinition } from '../classes/ActionDefinition';
    export interface ActionGroup {
        id: number;
        name: string;
        actions: ActionDefinition[];
    }
