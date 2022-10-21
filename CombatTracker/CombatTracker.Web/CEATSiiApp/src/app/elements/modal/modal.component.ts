import { Component, ElementRef, Input, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import * as $ from 'jquery';
import { ModalService } from './modal.service';

@Component({
    selector: 'modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnInit, OnDestroy {
    @Input() id: string;
    @Input() title: string;
    @Input() width: string;

    @Output() openEvent = new EventEmitter();
    @Output() closedEvent = new EventEmitter();

    private element: JQuery;
    //private dialog: JQuery;

    

    constructor(private modalService: ModalService, private el: ElementRef) {
        this.element = $(el.nativeElement);
    }

    ngOnInit(): void {
        let modal = this;

        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
        
        this.element.appendTo('body');
        this.modalService.add(this);
    }

    // remove self from modal service when directive is destroyed
    ngOnDestroy(): void {
        this.modalService.remove(this.id);
        this.element.remove();
    }

    // open modal
    open(): void {
        //this.dialog.dialog("open");

        this.element.show();
        this.element.children().show();
        $('body').addClass('modal-open');
        this.openEvent.emit();
    }

    // close modal
    close(): void {
        //this.dialog.dialog("close");
        this.element.hide();
        $('body').removeClass('modal-open');
        this.closedEvent.emit();
    }
    
}