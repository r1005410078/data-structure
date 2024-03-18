// Definition for a binary tree node.
#[derive(Debug, PartialEq, Eq)]
pub struct TreeNode {
    pub val: i32,
    pub left: Option<Rc<RefCell<TreeNode>>>,
    pub right: Option<Rc<RefCell<TreeNode>>>,
}

impl TreeNode {
    #[inline]
    pub fn new(val: i32) -> Self {
        TreeNode {
            val,
            left: None,
            right: None,
        }
    }
}

struct Solution;

use std::cell::RefCell;
use std::rc::Rc;
impl Solution {
    pub fn convert_bst(root: Option<Rc<RefCell<TreeNode>>>) -> Option<Rc<RefCell<TreeNode>>> {
        let mut pre = 0;
        Self::traversal(&root, &mut pre);
        root
    }

    pub fn traversal(cur: &Option<Rc<RefCell<TreeNode>>>, pre: &mut i32) {
        if cur.is_none() {
            return;
        }
        let mut node = cur.as_ref().unwrap().borrow_mut();
        Self::traversal(&node.right, pre);
        *pre += node.val;
        node.val = *pre;
        Self::traversal(&node.left, pre);
    }
}
