import { iTreeNode } from ".";


export class TreeNode {

    private _isSelected: boolean = false;
    public isOpen: boolean = false;

    public children = new Array<TreeNode>();


    public constructor(public node: iTreeNode, public parent: TreeNode = null) {
        node.children.forEach((child) => {
            this.children.push(new TreeNode(child, this));
        });
    }

    public check() {
        var missing = false;
        this.children.forEach((child) => {
            var it = this.node.children.find((n) => n.code == child.code);
            if (!it) {
                missing = true;
            } else {
                child.check();
            }
        });
        if (missing) {
            debugger;
            this.children = new Array<TreeNode>();
            this.node.children.forEach((child) => {
                this.children.push(new TreeNode(child, this));
            });
        } 



    }



    get text(): string {
        return this.node.text;
    }
    get code(): string {
        return this.node.code;
    }


    public get isSelected(): boolean {
        return this._isSelected;
    }
    public set isSelected(value: boolean) {
        this.treeTop.clearSelected();

        this._isSelected = true;
        this.openNode();

    }

    public openNode() {
        this.isOpen = true;
        if (this.parent != null) {
            this.parent.openNode();
        }
    }

    private clearSelected() {
        this._isSelected = false;
        this.children.forEach((child) => {
            child.clearSelected();
        });
    }

    public get treeTop(): TreeNode {
        if (this.parent == null) {
            return this;
        }
        return this.parent.treeTop;
    }

    public getSelected(): TreeNode {
        if (this.isSelected) {
            return this;
        }
        var node: TreeNode = null;
        this.children.forEach((n) => {
            node = node || n.getSelected();
        });
        return node;
    }

    public findNode(code: string): TreeNode {
        if (this.code == code) {
            return this;
        }
        var node: TreeNode = null;
        this.children.forEach((n) => {
            node = node || n.findNode(code);
        });
        return node;
    }
}


export class TreeModel {

    public cid: string = "code";
    public lid: string = "text";
    public cnid: string = "children";
    public className: any = null;
    public showTitle: boolean = true;
    public treeTitle: string = "";
    public treeNodeId: string = "";
    public iconExpand: string = "keyboard_arrow_right";
    public iconCollapse: string = "keyboard_arrow_down";
    public iconNeutral: string = "";

    public constructor(public treeTop: TreeNode) {

    }


    public findNode(code: string): TreeNode {
        return this.treeTop.findNode(code);
    }

    public getSelected(): TreeNode {
        return this.treeTop.getSelected();
    }


}