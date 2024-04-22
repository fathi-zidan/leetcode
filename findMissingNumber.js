const findMissingNumber = (arr)=>{
    const hashMap = {}
    //inserting to an obj is an  O(1) operation, so we can use it as a set here.
    //so the for loop here will take  O(n), n:length of the array
    for(let item of arr) {
        hashMap[item] = true;
        // console.log(item)
    }
    //loop is O(m), where m is the range of numbers from 1 to arr.length + 1. In this case, m is equal to arr.length + 1
    for (let i = 1; i < arr.length+1; i++) {
        if (!hashMap[i]) {
            return i;   
        }
        
    }
    return -1;

}
//which is O(n) + O(m). However, since m is proportional to n in this scenario, the dominant term is O(n) and hence the time complexity becomes O(n).
console.log(findMissingNumber([1,2,3,5,6,7])) // Output: 4