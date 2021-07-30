import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, QueryList, SimpleChanges, ViewChildren } from '@angular/core';
import { whenTrue } from '../../_helpers';
import { iTreeNode } from './itreenode';
import { TreeModel, TreeNode } from './treemodel';

@Component({
    selector: 'app-treeview',
    templateUrl: './treeview.component.html',
    styleUrls: ['./treeview.component.less']
})
/** treeview component*/
export class TreeviewComponent implements OnInit, OnChanges, AfterViewInit {
    @ViewChildren("options") options: QueryList<ElementRef>;
    //[treeModel]
    //(onSelect)

    @Input() treeModel: TreeModel;
    @Output() onSelect = new EventEmitter<TreeNode>();

    TREEVIEW_SUFFIX: string = "_treeView";
    ICON_SUFFIX: string = "_icon";
    ARIA_EXPANDED: string = "aria-expanded";
    DATA_CHILDCOUNT = "data-childcount";
    DATA_LID: string = "data-lid";
    DATA_CODE: string = "data-code";
    DATA_ISFIRST: string = "data-first";
    DATA_ISLAST: string = "data-last";
    TAB_INDEX: string = "tabindex";

    viewInitted = false;

    /** treeview ctor */
    constructor(private el: ElementRef) {
        //debugger;
    }


    ngOnInit() {
       
    }
    ngAfterViewInit(): void {
        this.viewInitted = true;
    }
    ngOnChanges(changes: SimpleChanges) {
        
        this.OnChanges();
    }

    private async OnChanges(): Promise<void> {

        await whenTrue(() => this.viewInitted );

        var sel = this.treeModel.getSelected();
        if (sel != null) {
            this.options.some((eleRef: ElementRef, index: number, optionsarray: ElementRef[]): boolean => {
                let code = eleRef.nativeElement.getAttribute("data-code");
                if (sel.code == code) {
                    this.scrollIntoViewSmoothly(eleRef);
                }

                return false;
            });
        }
    }

    public get model(): TreeModel {
        return this.treeModel;
    }
    public get items(): Array<TreeNode> {
        return this.treeModel.treeTop.children;
    }
    toggleSelection($event: any, item: TreeNode) {
        item.isOpen = !item.isOpen;
        if (item.children.length == 0) {
            item.isSelected = true;
            this.onSelect.next(item);
        }
    }



    scrollIntoViewSmoothly(eleRef: ElementRef) {
        eleRef.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }

    getExpandCollapseClass(item: TreeNode) {
        if (item == null || item.children == null || item.children.length == 0) {
            return this.model.iconNeutral;
        }
        if (item.isOpen) {
            return this.model.iconCollapse;
        }
        return this.model.iconExpand;

    }

    isChildrenExists(items: TreeNode[]) {
        return (items != null && items.length > 0) ? true : false;
    }
    getTreeItemId(item: TreeNode, treeId: string) {
        return item.code + "_" + treeId + this.TREEVIEW_SUFFIX;
    }
    getIconId(item: TreeNode, treeId: string) {
        let itemId = this.getTreeItemId(item, treeId);
        return itemId + "_" + this.ICON_SUFFIX;
    }

    //determines if the current node has children or not
    getChildCount(item: TreeNode) {
        if (item != null && item.code != null) {
            let items = item.children;
            return (Array.isArray(items) ? items.length : 0)
        }
        return "0";
    }

    collapsedState(item: TreeNode) {
        return item.isOpen;
        //if (item != null && item.children != null && item.children.length > 0) {
        //    //item.ariaExpanded = "false";
        //    return "false"
        //}
        ////item.ariaExpanded = null;
        //return null;

    }
}