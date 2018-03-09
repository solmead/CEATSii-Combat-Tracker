import { Injectable } from '@angular/core';
import * as Enums from '../classes/EnumDefinitions'
import { CharactersRepository } from '../../entities/apis/Characters.repository';
import { Character } from '../classes/Character';

@Injectable()
export class CharactersView {
    public characters: Array<Character> = new Array<Character>();

    public selected: Character;


    constructor(private charRepo: CharactersRepository) {
        this.refresh();
    }

    public refresh = async () => {
        this.characters = await this.charRepo.getCharactersAsync();

    }
}