import { Injectable } from '@angular/core';
import * as Enums from '@/entities/EnumDefinitions'
import { ReferenceRepository } from '@/repositories';
import { ActionGroup } from '@/entities';
import { ActionDefinition } from '@/entities';
import { ConstitutionBonusChart } from '@/entities';
import { CriticalCode } from '@/entities';
import { CriticalIgnore } from '@/entities';
import { IQ } from '@/entities';
import { LevelChart } from '@/entities';
import { Outlook } from '@/entities';
import { Pace } from '@/entities';
import { SizeRating } from '@/entities';
import { SpeedChart } from '@/entities';
import { AttackType } from '@/entities';
import { CriticalType } from '@/entities';
import { WeaponType } from '@/entities';
import { Book } from '@/entities';
import { PsychicRefractoryPeriodEntry } from '@/entities';




@Injectable({ providedIn: 'root' } )
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

