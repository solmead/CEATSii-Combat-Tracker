var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import * as $ from 'jquery';
import { ModalService } from './modal.service';
var ModalComponent = /** @class */ (function () {
    //private dialog: JQuery;
    function ModalComponent(modalService, el) {
        this.modalService = modalService;
        this.el = el;
        this.openEvent = new EventEmitter();
        this.closedEvent = new EventEmitter();
        this.element = $(el.nativeElement);
    }
    ModalComponent.prototype.ngOnInit = function () {
        var modal = this;
        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
        this.element.appendTo('body');
        this.modalService.add(this);
    };
    // remove self from modal service when directive is destroyed
    ModalComponent.prototype.ngOnDestroy = function () {
        this.modalService.remove(this.id);
        this.element.remove();
    };
    // open modal
    ModalComponent.prototype.open = function () {
        //this.dialog.dialog("open");
        this.element.show();
        this.element.children().show();
        $('body').addClass('modal-open');
        this.openEvent.emit();
    };
    // close modal
    ModalComponent.prototype.close = function () {
        //this.dialog.dialog("close");
        this.element.hide();
        $('body').removeClass('modal-open');
        this.closedEvent.emit();
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ModalComponent.prototype, "id", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ModalComponent.prototype, "title", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ModalComponent.prototype, "width", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], ModalComponent.prototype, "openEvent", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], ModalComponent.prototype, "closedEvent", void 0);
    ModalComponent = __decorate([
        Component({
            selector: 'modal',
            templateUrl: './modal.component.html',
            styleUrls: ['./modal.component.css']
        }),
        __metadata("design:paramtypes", [ModalService, ElementRef])
    ], ModalComponent);
    return ModalComponent;
}());
export { ModalComponent };
//# sourceMappingURL=modal.component.js.map