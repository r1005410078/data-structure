pub struct Solution;

impl Solution {
    pub fn combination_sum3(k: i32, n: i32) -> Vec<Vec<i32>> {
        let mut path = vec![];
        let mut result = vec![];

        Solution::process(k, n, &mut path, &mut result, 1);
        result
    }

    fn process(k: i32, n: i32, path: &mut Vec<i32>, result: &mut Vec<Vec<i32>>, start_index: i32) {
        let len = path.len() as i32;
        if k == len {
            if n == 0 {
                result.push(path.clone());
            }
            return;
        }

        for i in start_index..=9 - (k - len) + 1 {
            path.push(i);

            if n < 0 {
                path.pop();
                return;
            }

            Solution::process(k, n - i, path, result, i + 1);
            path.pop();
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn combination_sum_test() {
        assert_eq!(Solution::combination_sum3(3, 7), vec![[1, 2, 4]]);
        assert_eq!(
            Solution::combination_sum3(3, 9),
            vec![[1, 2, 6], [1, 3, 5], [2, 3, 4]]
        );
    }
}
