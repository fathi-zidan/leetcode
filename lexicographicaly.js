//Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz" Output: true
const words = ["hello","leetcode"]
const order = "hlabcdefgijkmnopqrstuvwxyz"
function  isAlienSorted(words, order) {
    let mapOrder = {};
    for (let i = 0; i < order.length; i++) {
        mapOrder[order[i]] = i;
    }
    for ( let i=0 ; i<words.length-1; i++ ) {
        let  word1 = words[i];
        let  word2 = words[i+1];
        let minLength = Math.min(word1.length,word2.length)
        let j;
        for ( j = 0 ;j<minLength; j++){
            if (mapOrder[word1[j]] < mapOrder[word2[j]]) {
                break;
            }
            if (mapOrder[word1[j]] > mapOrder[word2[j]]) {
                return false;
                
            }

        }
        // If all characters are equal up to the length of the shorter word,
        // but one word is shorter than the other, it should come first
        if (j == minLength && word1.length > word2.length) {
            return false;
        }
    }
    return true
}
console.log(isAlienSorted(words,order))
console.log(isAlienSorted(["word","world","row"],"worldabcefghijkmnpqstuvxyz"))
console.log(isAlienSorted(["apple","app"],"abcdefghijklmnopqrstuvwxyz"))
console.log(isAlienSorted(["kuvp","q"],"ngxlkthsjuoqcpavbfdermiywz"))



