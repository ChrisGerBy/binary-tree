const Node = require('./node');

class BinaryTree {
    constructor(){
        this.root = null;
    }

    insert(data) {
        const node = new Node(data);
        if (!this.root) {
            this.root = node;
        } else {
            this.insertNode(this.root, node);
        }
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode)
            }
        }
    }

    findMinNode() {
        if (!this.root) {
            return 'The tree is empty';
        } else {
            let current = this.root;
            while (current.left !== null) {
                current = current.left;
            }
            console.log(current.data);
        }

    }

    findMaxNode() {
        if (!this.root) {
            return 'The tree is empty';
        } else {
            let current = this.root;
            while (current.right !== null) {
                current = current.right;
            }
            console.log(current.data)
        }

    }

    // getRootNode()
    // inorder(node)
    // preorder(node)
    // postoder(node)
    // search(node, data)
};

const bin = new BinaryTree();
bin.insert(5);
bin.insert(4);
bin.insert(8);
bin.findMinNode(); // 4
bin.findMaxNode(); // 8