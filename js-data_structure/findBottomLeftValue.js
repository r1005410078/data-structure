function findBottomLeftValue(node) {
  let data = [];
  process(node, 1, data);

  let max = data[0];
  for (let i = 1; i < data.length; i++) {
    const el = data[i];
    if (el.lever > max.lever) {
      max = el;
    }
  }

  return max?.val;
}

function process(node, lever = 1, data = []) {
  if (!node) return undefined;

  if (!node.left && !node.right) {
    data.push({ lever, val: node.val });
  }

  process(node.left, lever + 1, data);
  process(node.right, lever + 1, data);
}

let num = findBottomLeftValue({
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
    },
  },
  right: {
    val: 3,
    left: {
      val: 5,
    },
    right: {
      val: 6,
    },
  },
});

console.log(num);
