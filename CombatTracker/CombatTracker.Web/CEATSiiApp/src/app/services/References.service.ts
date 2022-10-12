import { Injectable } from '@angular/core';
import * as Enums from '@/entities/EnumDefinitions'
import { ReferenceRepository } from '@/repositories';
import { ActionGroup, Actor, Attack } from '@/entities';
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
import { iTreeNode } from '@/elements/treeview/itreenode';
import { MutexLock } from '@/_helpers/Lock';
import { whenTrue } from '@/_helpers/Tasks';

export class treeEntry implements iTreeNode {

    public action: ActionDefinition = null;
    public attack: Attack = null;

    public children: Array<treeEntry> = new Array<treeEntry>();

    public parent: treeEntry;

    //private _isSelected: boolean = false;
    //public isOpen: boolean = false;

    public constructor(public code:string, public text:string) {

    }

    //public get isSelected():boolean {
    //    return this._isSelected;
    //}
    //public set isSelected(value: boolean) {
    //    this.treeTop.clearSelected();

    //    this._isSelected = true;
    //    this.openNode();

    //}

    //public openNode() {
    //    this.isOpen = true;
    //    if (this.parent != null) {
    //        this.parent.openNode();
    //    }
    //}

    //private clearSelected() {
    //    this._isSelected = false;
    //    this.children.forEach((child) => {
    //        child.clearSelected();
    //    });
    //}

    //public get treeTop(): treeEntry {
    //    if (this.parent == null) {
    //        return this;
    //    }
    //    return this.parent.treeTop;
    //}

    public addChild(node: treeEntry) {
        this.children.push(node);
        node.parent = this;
    }

    public findNode(action: ActionDefinition, attack: Attack = null):treeEntry {
        if (this.action != null && this.action.id == action.id &&
            (attack == null ||
                (this.attack != null && attack.id == this.attack.id))) {
            return this;
        }
        var node: treeEntry = null;
        this.children.forEach((n) => {
            node = node || n.findNode(action, attack);
        });
        return node;
    }

    //public getSelected(): treeEntry {
    //    if (this.isSelected) {
    //        return this;
    //    }
    //    var node: treeEntry = null;
    //    this.children.forEach((n) => {
    //        node = node || n.getSelected();
    //    });
    //    return node;
    //}



}


@Injectable({ providedIn: 'root' } )
export class ReferencesService {

    public ActionGroups: Array<ActionGroup> = null;
    public ConstitutionBonusCharts: Array<ConstitutionBonusChart> = null;
    public CriticalCodes: Array<CriticalCode> = null;
    public CriticalIgnores: Array<CriticalIgnore> = null;
    public IQs: Array<IQ> = null;
    public LevelCharts: Array<LevelChart> = null;
    public Outlooks: Array<Outlook> = null;
    public Paces: Array<Pace> = null;
    public SizeRatings: Array<SizeRating> = null;
    public SpeedCharts: Array<SpeedChart> = null;
    public AttackTypes: Array<AttackType> = null;
    public CriticalTypes: Array<CriticalType> = null;
    public WeaponTypes: Array<WeaponType> = null;
    public Books: Array<Book> = null;
    public PsychicRefractoryPeriodEntrys: Array<PsychicRefractoryPeriodEntry> = null;


    private _actionTree: treeEntry = null;
    private _attackNodes: Array<treeEntry> = new Array<treeEntry>();
    private treeLock = new MutexLock();

    constructor(private referenceRepo: ReferenceRepository) {
        this.refreshAsync();

    }

    private async buildActionTreeAsync(): Promise<void> {

        await whenTrue(() => this.ActionGroups != null);

        this._actionTree = new treeEntry("Top", "Top");

        this.ActionGroups.forEach((group) => {
            var agNode = new treeEntry("group_" + group.id, group.name);
            this._actionTree.children.push(agNode);

            group.actions.forEach((act) => {
                var actNode = new treeEntry("action_" + act.id, act.name);
                actNode.action = act;
                agNode.addChild(actNode);
                if (act.isAttack) {
                    this._attackNodes.push(actNode);
                }
            });
        });
    }

    public async getActionTreeAsync(actor: Actor): Promise<treeEntry> {
        if (this._actionTree == null) {
            await this.treeLock.LockAreaAsync(async ():Promise<void> => {
                if (this._actionTree == null) {
                    await this.buildActionTreeAsync();
                }
            });
        }
       // debugger;
        //var sel = this._actionTree.getSelected();
        if (actor != null) {
            this._attackNodes.forEach((node) => {
                node.children = new Array<treeEntry>();


                actor.attacks.forEach((att) => {
                    var n = new treeEntry("attack_" + att.id, att.name);
                    n.action = node.action;
                    n.attack = att;
                    node.addChild(n);
                });
            });
        }
        //if (sel != null) {
        //    var nd = this._actionTree.findNode(sel.action, sel.attack);
        //    if (nd != null) {
        //        nd.isSelected = true;
        //    }
        //}

        return this._actionTree;
    }


    public async refreshAsync():Promise<void> {
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

