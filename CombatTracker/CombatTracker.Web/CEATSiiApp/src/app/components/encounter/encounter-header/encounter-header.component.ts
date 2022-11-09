import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EncounterService } from '@/services';
import { ModalService } from '@/elements/modal/modal.service';
import { Game } from '@/entities';
import { EnumDefinitions } from '@/entities/EnumDefinitions';
import ViewTypeEnum = EnumDefinitions.ViewTypeEnum;

@Component({
  selector: 'app-encounter-header',
  templateUrl: './encounter-header.component.html',
  styleUrls: ['./encounter-header.component.less']
})
export class EncounterHeaderComponent implements OnInit {

    constructor(public gameView: EncounterService,
        private modalService: ModalService,
        private router: Router 
    ) {

    }

  ngOnInit(): void {
  }

    public get game(): Game {
        return this.gameView.currentGame;
    }


    get viewType(): ViewTypeEnum {
        return this.gameView.viewType;
    }

    get isGM(): boolean {
        return this.viewType == ViewTypeEnum.GM;
    }

    get isPlayer(): boolean {
        return this.viewType == ViewTypeEnum.Player;
    }

    get isViewOnly(): boolean {
        return this.viewType == ViewTypeEnum.Overview;
    }


    async editEncounter() {
        this.modalService.open('editGame-modal');
    }

    async onSave(): Promise<void> {
        this.modalService.close('editGame-modal');
    }

    async deleteEncounter() {
        this.modalService.open('deleteGame-modal');
    }
    async confirmDeleteEncounter(): Promise<void> {
        await this.gameView.deleteCurrentEncounter();
        this.modalService.close('deleteGame-modal');
        this.router.navigate(['/home']);
    }


    async resetEncounter(): Promise<void> {
        this.modalService.open('resetGame-modal');
    }

    async confirmResetEncounter(): Promise<void> {

        await this.gameView.resetCurrentEncounter();
        this.modalService.close('resetGame-modal');


    }
}
