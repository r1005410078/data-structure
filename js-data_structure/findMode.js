let pre,
  count = 0,
  maxCount = 0;

function findMode(cur, result = []) {
  if (cur.left) {
    findMode(cur.left, result);
  }

  if (!pre) count = 1;
  else if (pre.val === cur.val) {
    count++;
  } else {
    count = 1;
  }

  pre = cur;

  if (count === maxCount) {
    result.push(cur.val);
  } else if (count > maxCount) {
    result.splice(0, result.length);
    result.push(cur.val);
    maxCount = count;
  }

  if (cur.right) {
    findMode(cur.right, result);
  }

  return result;
}

let case1 = {
  val: 7,
  left: {
    val: 4,
    left: {
      val: 4,
    },
    right: {
      val: 5,
      right: {
        val: 5,
      },
    },
  },
  right: {
    val: 8,
    left: {
      val: 6,
      left: {
        val: 6,
      },
    },
    right: {
      val: 8,
      right: {
        val: 8,
      },
    },
  },
};

let case2 = new TreeNode(0);

const data = findMode(case2);

console.log(data);

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
