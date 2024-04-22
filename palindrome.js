const palindrome = (num)=>{
    if(num<0){
        return false
    }
    const strNum=num.toString()
    let left = 0
    let right = strNum.length-1
    while(left < right){
        if(strNum[left] !== strNum[right]){
            return false
        }
        left++;
        right--;
    }
    return true
}
console.log(palindrome(121))
console.log(palindrome(-121))
console.log(palindrome(1000021))
//The time complexity of this corrected implementation is O(n/2), which is equivalent to O(n), where n is the number of digits in the input number num. This is because the algorithm iterates through half of the digits in the number to check if it's a palindrome
