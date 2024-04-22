function twoSum(arr, target) {
    const hashmap = {}
    for (let i = 0; i < arr.length; i++) {
        const complement = target - arr[i];
        if (hashmap.hasOwnProperty(complement)) {
            return [hashmap[complement], i];
        }
     hashmap[arr[i]] = i;
    }
    return [];
}
// time complexity : O(n), space complexity: O(1). n:is the length of the array
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6)); 