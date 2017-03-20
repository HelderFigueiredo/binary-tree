/**
 * References:
 * http://cslibrary.stanford.edu/110/BinaryTrees.html
 * https://www.ime.usp.br/~pf/algoritmos/aulas/bint.html
 */

function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

function newNode(data) {
    return new Node(data);
}

function lookup(node, target) {
    if (node === null) {
        return false;
    } else {
        if (target === node.data) {
            return true;
        } else {
            if (target < node.data) {
                return lookup(node.left, target);
            } else {
                return lookup(node.right, target);
            }
        }
    }
}

function insert(node, data) {
    if (node === null) {
        return newNode(data);
    } else {
        if (data <= node.data) {
            node.left = insert(node.left, data);
        } else {
            node.right = insert(node.right, data);
        }
        return node;
    }
}

function printTree(node) {
    if (node === null) {
        return;
    }
    printTree(node.left);
    console.log(node.data);
    printTree(node.right);
}

function printValues(tree) {
    let stack = [],
        x = {},
        t = 0,
        temp = [];
    
    stack.push(tree);
    
    while (true) {
        
        x = stack.pop();
        
        if (x !== null) {

            stack.push(x);
            stack.push(x.left);

        } else {
            
            if (stack.length === 0) {
                break;
            }
            x = stack.pop();
            temp.push(x.data);
            stack.push(x.right);

        }
    }

    console.log(temp.join(', '));
}

function maxDepth(node) {
    if (node === null) {
        return 0;
    } else {
        lDepth = maxDepth(node.left);
        rDepth = maxDepth(node.right);

        if (lDepth > rDepth) {
            return lDepth + 1;
        } else {
            return rDepth + 1;
        }
    }
        
}

let tree = newNode(3);
let n = 10;

for (var i = 0; i < n; i++) {
    let value = Math.ceil(Math.random() * n);
    if (!lookup(tree, value)) {
        insert(tree, value);
    }
}

printValues(tree);
console.log('Depth:', maxDepth(tree));
console.log(
    'Does the tree contain the number 3?', 
    lookup(tree, 3) ? 'yes' : 'no'
);
