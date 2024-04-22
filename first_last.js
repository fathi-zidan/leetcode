const first_last = (arr,target)=>{
    let start = -1;
    for (let i = 0; i < arr.length; i++) {
       if(arr[i]===target){
        start = i;
        while (i+1<arr.length && arr[i + 1] === target) {
            i++;
        }
        return [start,i]
    }
}
return[-1,-1]
}
console.log(first_last([4,5,6,7,8,9,9,9],9))