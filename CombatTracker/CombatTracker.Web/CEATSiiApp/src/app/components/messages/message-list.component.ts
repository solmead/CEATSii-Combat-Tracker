import { Component, Input } from '@angular/core';
import { Message } from '@/entities';
import '@/_helpers/DateEx';

@Component({
    selector: 'message-list',
    templateUrl: './message-list.component.html',
    styleUrls: ['./message-list.component.less']
})
/** MessageList component*/
export class MessageListComponent {


    @Input() messages: Array<Message> = new Array<Message>();

    /** MessageList ctor */
    constructor() {
        
    }

    msgColor(msg: Message): string {
        return "rgb(" + msg.whomColor + ")";
    }

    currentTime(msg: Message):string {
        return '' + Math.floor(msg.gameTime * 100) / 100;
    }

    cssClasses(msg: Message): string {
        var cStr = "MessageEntry " + msg.messageTypeString;

        

        return cStr;
    }
}