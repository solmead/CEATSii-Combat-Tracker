import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ActionDefinition, Attack, BaseAction } from '@/entities';
import { AuthenticationService, EncounterService, treeEntry } from '@/services';
import { ModalService } from '@/elements/modal/modal.service';
import { TreeModel, iTreeNode, TreeNode } from '@/elements/treeview';
import { Actor } from '@/entities';
import { delay, MutexLock } from '@/_helpers';
import { EnumDefinitions } from '@/entities/EnumDefinitions';


import ActionTypeEnum = EnumDefinitions.ActionTypeEnum;
import ActorActionType = EnumDefinitions.ActorActionType;
import ViewTypeEnum = EnumDefinitions.ViewTypeEnum;

export class ProposeAction {
    constructor(public actor: Actor, public action: ActionDefinition, public attack:Attack = null, public modifier: number = 0) {

    }
}



@Component({
    selector: 'action-edit',
    templateUrl: './action-edit.component.html',
    styleUrls: ['./action-edit.component.less']
})
/** action-edit component*/
export class ActionEditComponent implements OnInit, OnChanges {


    @Input() selectedAction: BaseAction;
    @Input() actionTree: treeEntry;


    @Output() onProposeAction = new EventEmitter<ProposeAction>();
    @Output() onDoAction = new EventEmitter<BaseAction>();
    @Output() onSaved = new EventEmitter<Actor>();


    public mods = [-40, -30, -20, -10, 0, 10, 20, 30];


    private mutex = new MutexLock(60000);

    public currentModifier: number = 0;

    private _treeTop: TreeNode = null;
    private _treeModel: TreeModel = null;

    //selectedAction
    /** action-edit ctor */
    constructor(public gameView: EncounterService,
        private modalService: ModalService) {
        
    }

    //get currentModifier(): number {
    //    if (this.selectedAction != null) {
    //        return this.selectedAction.currentModifier;
    //    }
    //    return 0;
    //}

    get isDoAble(): boolean {
        if (this.selectedAction != null) {
            return this.selectedAction.actionType == ActionTypeEnum.Proposed || this.selectedAction.actionType == ActionTypeEnum.Next;
        }
        return false;
    }

    get treeModel(): TreeModel {
        if (this._treeModel == null) {
            this._treeModel = new TreeModel(this.currentActionTree);
        }
        //tm.items = this.currentActionTree.children;
        //debugger;
        return this._treeModel;
    }
    get currentActionTree(): TreeNode {
        if (this._treeTop == null) {
            this.refreshTree();
        }

        if (this._treeTop == null) {
            return new TreeNode(new treeEntry("",""));
        }

        var sel = this._treeTop.getSelected();
        if (sel == null) {
            this.refreshTree();
        }


        return this._treeTop;
    }

    private refreshTree() {
        if (this.actionTree == null) {
            this._treeTop = null;
        } else {
            if (this._treeTop == null) {
                this._treeTop = new TreeNode(this.actionTree);
            } else {
                this._treeTop.check();
                if (this._treeModel != null) {
                    this._treeModel = new TreeModel(this._treeTop);
                    this._treeModel.lastChecked = this._treeTop.lastChecked;
                }
            }
            //this._treeTop = new TreeNode(this.actionTree);


            var attack: Attack = null;
            if (this.selectedAction != null && this.selectedAction.base != null) {
                if (this.selectedAction.base.isAttack) {
                    attack = this.selectedAction.currentAttack;
                }
                var selectedNode = this.actionTree.findNode(this.selectedAction.base, attack);
                if (selectedNode != null) {
                    var sNode = this._treeTop.findNode(selectedNode.code);
                    if (sNode != null) {
                        sNode.isSelected = true;
                    } else {
                        debugger;
                    }
                }
            } else {
                var selNode = this._treeTop.getSelected();
                if (selNode != null) {
                    selNode.isSelected = false;
                }
            }
            
        }

        //debugger;
    }




    ngOnInit() {
        if (this.selectedAction != null) {
            this.currentModifier = this.selectedAction.currentModifier;
        } else {
            this.currentModifier = 0;
        }
        //this.checkAction();
    }

    ngOnChanges(changes: SimpleChanges) {
        
        if (this.selectedAction != null) {
            this.currentModifier = this.selectedAction.currentModifier;
        } else {
            this.currentModifier = 0;
        }

        this.refreshTree();
        //this.checkAction();
        
    }

    get whoIsActing():Actor {
        return this.selectedAction.whoIsActing;
    }

    doAction() {
        this.doSelectedAction(this.selectedAction);
    }

    onTreeSelect(node: TreeNode) {
        var n2 = <treeEntry><any>(node.node);
        var pAction = new ProposeAction(this.selectedAction.whoIsActing, n2.action, n2.attack, this.selectedAction.currentModifier);
        this.proposeAction(pAction);
    }
    onModSelected() {
        var pAction = new ProposeAction(this.selectedAction.whoIsActing, this.selectedAction.base, this.selectedAction.currentAttack, this.currentModifier);
        this.proposeAction(pAction);
    }


    get viewType(): ViewTypeEnum {
        return this.gameView.viewType;
    }

    get isGM(): boolean {
        return this.viewType == ViewTypeEnum.GM;
    }

    async doSelectedAction(action: BaseAction): Promise<void> {
        if (this.isGM) {
            var cur = action.whoIsActing.isActive;
            await this.gameView.doProposedActionAsync(action.whoIsActing);
            if (cur) {
                await this.gameView.moveToNextAsync();
            }
            this.onDoAction.next(action);
            this.onSaved.next(this.whoIsActing);
        }
    }

    async proposeAction(action: ProposeAction): Promise<void> {
        if (this.isGM) {
            var act = await this.gameView.proposeActionAsync(action.actor, action.action, action.attack, action.modifier);

            this.gameView.selectedAction = act;

            this.onProposeAction.next(action);
            this.onSaved.next(this.whoIsActing);
        }
    }

    onSave() {
        this.onSaved.next(this.whoIsActing);
        this.modalService.close('addDamage-modal');
        this.modalService.close('addSpell-modal');
        this.modalService.close('addManeuvering-modal');
    }

    async addDamage() {
        this.modalService.open('addDamage-modal');
    }

    async addSpell() {
        this.modalService.open('addSpell-modal');
    }

    async addStunned() {
        this.modalService.open('addManeuvering-modal');
    }




}