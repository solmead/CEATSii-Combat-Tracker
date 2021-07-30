import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ActionDefinition, Attack, BaseAction } from '@/entities';
import { treeEntry } from '@/services';
import { TreeModel, iTreeNode, TreeNode } from '@/elements/treeview';
import { Actor } from '@/entities';
import { delay, MutexLock } from '@/_helpers';
import { EnumDefinitions } from '@/entities/EnumDefinitions';


import ActionTypeEnum = EnumDefinitions.ActionTypeEnum;
import ActorActionType = EnumDefinitions.ActorActionType;

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


    public mods = [-40, -30, -20, -10, 0, 10, 20, 30];


    private mutex = new MutexLock(60000);

    public currentModifier: number = 0;

    private _treeTop: TreeNode = null;
    private _treeModel: TreeModel = null;

    //selectedAction
    /** action-edit ctor */
    constructor() {
        
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
        //this._treeModel = null;
        if (this.actionTree == null) {
            this._treeTop = null;
        } else {
            if (this._treeTop == null) {
                this._treeTop = new TreeNode(this.actionTree);
            } else {
                this._treeTop.check();
            }
            //this._treeTop = new TreeNode(this.actionTree);


            var attack: Attack = null;
            if (this.selectedAction != null) {
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

    

    doAction() {
        this.onDoAction.next(this.selectedAction);
    }

    onTreeSelect(node: TreeNode) {
       
        var n2 = <treeEntry><any>(node.node);

        var pAction = new ProposeAction(this.selectedAction.whoIsActing, n2.action, n2.attack, this.selectedAction.currentModifier);
        this.onProposeAction.next(pAction);
    }
    onModSelected() {
        var pAction = new ProposeAction(this.selectedAction.whoIsActing, this.selectedAction.base, this.selectedAction.currentAttack, this.currentModifier);
        this.onProposeAction.next(pAction);
    }
}