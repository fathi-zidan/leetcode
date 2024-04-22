const num = [1,2,1]
const largestPerimeter = (num)=>{
    let sum =0;
    const sortedNum = num.sort((a,b)=>a-b)
    for (let i = 0; i < sortedNum.length-1; i++) {
        const firstSum =sortedNum[i]+sortedNum[i+1];

        if(firstSum > sortedNum[i+2]){
             sum += sortedNum[i];
        }
    }
    return sum;
}
console.log(largestPerimeter(num)) 