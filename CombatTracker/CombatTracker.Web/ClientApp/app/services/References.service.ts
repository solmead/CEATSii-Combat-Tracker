import { Injectable } from '@angular/core';
import * as Enums from '../entities/EnumDefinitions'
import { ReferenceRepository } from '../repositories/Reference.repository';
import { ActionGroup } from '../entities/ActionGroup';
import { ActionDefinition } from '../entities/ActionDefinition';
import { ConstitutionBonusChart } from '../entities/ConstitutionBonusChart';
import { CriticalCode } from '../entities/CriticalCode';
import { CriticalIgnore } from '../entities/CriticalIgnore';
import { IQ } from '../entities/IQ';
import { LevelChart } from '../entities/LevelChart';
import { Outlook } from '../entities/Outlook';
import { Pace } from '../entities/Pace';
import { SizeRating } from '../entities/SizeRating';
import { SpeedChart } from '../entities/SpeedChart';
import { AttackType } from '../entities/AttackType';
import { CriticalType } from '../entities/CriticalType';
import { WeaponType } from '../entities/WeaponType';
import { Book } from '../entities/Book';
import { PsychicRefractoryPeriodEntry } from '../entities/PsychicRefractoryPeriodEntry';




@Injectable()
export class ReferencesService {

    public ActionGroups: Array<ActionGroup>;
    public ConstitutionBonusCharts: Array<ConstitutionBonusChart>;
    public CriticalCodes: Array<CriticalCode>;
    public CriticalIgnores: Array<CriticalIgnore>;
    public IQs: Array<IQ>;
    public LevelCharts: Array<LevelChart>;
    public Outlooks: Array<Outlook>;
    public Paces: Array<Pace>;
    public SizeRatings: Array<SizeRating>;
    public SpeedCharts: Array<SpeedChart>;
    public AttackTypes: Array<AttackType>;
    public CriticalTypes: Array<CriticalType>;
    public WeaponTypes: Array<WeaponType>;
    public Books: Array<Book>;
    public PsychicRefractoryPeriodEntrys: Array<PsychicRefractoryPeriodEntry>;


    constructor(private referenceRepo: ReferenceRepository) {
        this.refresh();
        
    }

    public refresh = async () => {
        this.referenceRepo.getActionGroups()
            .subscribe((items) => {
                this.ActionGroups = items;
            });

        this.referenceRepo.getConstitutionBonusCharts()
            .subscribe((items) => {
                this.ConstitutionBonusCharts = items;
            });

        this.referenceRepo.getCriticalCodes()
            .subscribe((items) => {
                this.CriticalCodes = items;
            });


        this.referenceRepo.getCriticalIgnores()
            .subscribe((items) => {
                this.CriticalIgnores = items;
            });


        this.referenceRepo.getIQs()
            .subscribe((items) => {
                this.IQs = items;
            });


        this.referenceRepo.getLevelCharts()
            .subscribe((items) => {
                this.LevelCharts = items;
            });


        this.referenceRepo.getOutlooks()
            .subscribe((items) => {
                this.Outlooks = items;
            });


        this.referenceRepo.getPaces()
            .subscribe((items) => {
                this.Paces = items;
            });


        this.referenceRepo.getSizeRatings()
            .subscribe((items) => {
                this.SizeRatings = items;
            });


        this.referenceRepo.getSpeedCharts()
            .subscribe((items) => {
                this.SpeedCharts = items;
            });


        this.referenceRepo.getAttackTypes()
            .subscribe((items) => {
                this.AttackTypes = items;
            });


        this.referenceRepo.getCriticalTypes()
            .subscribe((items) => {
                this.CriticalTypes = items;
            });


        this.referenceRepo.getWeaponTypes()
            .subscribe((items) => {
                this.WeaponTypes = items;
            });


        this.referenceRepo.getBooks()
            .subscribe((items) => {
                this.Books = items;
            });


        this.referenceRepo.getPsychicRefractoryPeriodEntries()
            .subscribe((items) => {
                this.PsychicRefractoryPeriodEntrys = items;
            });


        
    }
    
}

