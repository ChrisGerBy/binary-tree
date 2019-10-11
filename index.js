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

    remove(data) {
        const removeNode = function(node, data) {
            if (node === null) {
                return null;
            }
            if (node.data === data) {
                // node has no children
                if (node.left === null & node.right === null) {
                    return null;
                }
                // node has no left children
                if (node.left === null) {
                    return node.right;
                }
                // node has no right children
                if (node.right === null) {
                    return node.left;
                }

                // node has two children
                let temp = node.right;
                while (temp.left !== null) {
                    temp = temp.left;
                }
                node.data = temp.data;
                node.right = removeNode(node.right, temp.data);
                return node;

            } else if (data < node.data) {
                node.left = removeNode(node.left, data);
                return node;
            } else {
                node.right = removeNode(node.right, data);
                return node;
            }
        };
        this.root = removeNode(this.root, data);
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
bin.insert(7);
console.log(bin);
bin.findMinNode(); // 4
bin.findMaxNode(); // 8
bin.remove(8);
console.log(bin);