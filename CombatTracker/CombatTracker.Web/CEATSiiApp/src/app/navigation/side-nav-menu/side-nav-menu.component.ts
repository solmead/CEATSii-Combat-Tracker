import { Component } from '@angular/core';
import { AuthenticationService } from '@/services';
import { EncounterService } from '@/services';
import { ApplicationUser } from '@/entities';

@Component({
  selector: 'side-nav-menu',
  templateUrl: './side-nav-menu.component.html',
  styleUrls: ['./side-nav-menu.component.less'],
  providers: [EncounterService]
})
/** side-nav-menu component*/
export class SideNavMenuComponent {
  currentUser: ApplicationUser;
  /** side-nav-menu ctor */
  constructor(public gameView: EncounterService,
    private authenticationService: AuthenticationService) {

    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  //get gameTypes(): Array<any> {
  //  var lst = EnumEx.getNamesAndValues(GameType);
  //  return lst;
  //}

  //onChange(newValue: GameType) {
  //  //this.gameView.setGameType(newValue);
  //}

  //get systemSettings(): MySettings {
  //    return this.gameView.systemSettings;
  //}
  //public setGameType(value: GameType) {
  //    this.gameView.setGameType(value);
  //}

  //set gameSystem(gType: string) {
  //    var gt = <GameType><any>GameType[<any>gType];
  //    this.gameView.gameSystem = gt;
  //}


  //  get selectedActor(): Actor {
  //    return this.gameView.selectedActor;
  //  }
  //  selectActor(actor: Actor) {
  //    this.gameView.selectedActor = actor;
  //  }

  //  get actors(): Array<Actor> {
  //    return this.gameView.actors;
  //  }

  //  get game(): Game {
  //    return this.gameView.currentGame;
  //  }
}
