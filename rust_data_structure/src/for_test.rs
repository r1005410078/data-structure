use std::vec;

pub fn for_test_2() -> Vec<String> {
    let mut arr = vec![];
    for i in 1..=4 {
        for j in i + 1..=4 {
            arr.push(format!("{} {}", i, j));
        }
    }
    arr
}

pub struct Solution;

impl Solution {
    pub fn combine(n: i32, k: i32) -> Vec<Vec<i32>> {
        let mut arr = vec![];
        let mut path = vec![];
        Solution::process(n, k, 1, &mut arr, &mut path);

        return arr;
    }

    fn process(n: i32, k: i32, j: i32, arr: &mut Vec<Vec<i32>>, path: &mut Vec<i32>) {
        let len = path.len() as i32;
        if len == k {
            arr.push(path.clone());
            return;
        }

        //[1, 4)
        for i in j..=n - (k - len) + 1 {
            path.push(i as i32);
            Solution::process(n, k, i + 1, arr, path);
            path.pop();
        }
    }
}

#[cfg(test)]
mod test {
    use super::*;

    #[test]
    fn combine_test() {
        assert_eq!(
            Solution::combine(4, 2),
            vec![[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]
        )
    }
}
