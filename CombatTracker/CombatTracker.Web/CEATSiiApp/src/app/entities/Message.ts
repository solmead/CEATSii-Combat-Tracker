




    import * as Enums from './EnumDefinitions'
    import MessageTypeEnum = Enums.EnumDefinitions.MessageTypeEnum;
    export class Message {
        id: number;
        game_ID: number;
        messageType: MessageTypeEnum;
        messageTypeString: string;
        whom: string;
        whomColor: string;
        action: string;
        gameTime: number;
        reverseOrder: boolean;
        beginText: string;
        betweenText: string;
        endText: string;


        constructor() {
        }
    }





