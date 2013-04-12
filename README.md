bfs-tree-layout
===================
Operations on nodes for balanced binary trees stored in bfs layout.  These are useful if you are building data structures, like binary search trees, implicitly (ie not storing pointers to subtrees).

BFS layout, unlike inorder layout, is much faster for performing binary searches and bounds queries.  The disadvantage is that it is much slower at inorder traversal.


## Install

    npm install inorder-tree-layout
    
## Example

Assume that the tree is filled in level order, and laid out in memory via an bfs traversal.  For example:

```
The tree:

          0
        /   \
       1     2
      / \   / \
     3   4 5   6
    / \  |
   7   8 9
```

With this picture in mind, here are some operations:


```javascript
var layout = require("bfs-tree-layout")

console.log(layout.left(10, 3))     //Prints:  7

console.log(layout.parent(10, 4))   //Prints:  1

console.log(layout.height(10, 2))   //Prints:  1

```

## API

```javascript
var layout = require("bfs-tree-layout")
```

**Conventions:**

* `n` is always the size of the tree
* `x` is the index of a node in the tree

### `layout.root(n)`
Returns the index of the root of a tree of size n.

### `layout.begin(n)`
Returns the index of the first node of the tree

### `layout.end(n)`
Returns the index of the last node in the tree

### `layout.height(n, x)`
Returns the height of node `x` in a tree of size `n`

### `layout.prev(n, x)`
Returns the predecessor of `x` in an in-order traversal

### `layout.next(n, x)`
Returns the successor of `x` in an in-order traversal

### `layout.parent(n, x)`
Returns the parent of `x` in a tree of size `n`

### `layout.left(n, x)`
Returns the left child of `x`

### `layout.right(n, x)`
Returns the right child of `x`


# Credits
(c) 2013 Mikola Lysenko. MIT License
