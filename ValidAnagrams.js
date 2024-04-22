//given two string see if they are anagrams or not
const  isAnagram = (str1, str2) => {
    if (str1.length !== str2.length){
        return false
    }
    const hashMap1 = {};
    const hashMap2 = {};
    for (let i = 0; i < str1.length; i++) {
        if (hashMap1[str1[i]]) {
            hashMap1[str1[i]] += 1;
        }else{
            hashMap1[str1[i]] = 1;
        }
    }
    for (let j = 0; j < str1.length; j++) {
        if (hashMap2[str1[j]]) {
            hashMap2[str1[j]] += 1;
        }else{
            hashMap2[str1[j]] = 1;
        }
    }
    for (const key in hashMap1) {
       if (!(key in hashMap2) || hashMap1[key] !== hashMap2[key]) {
        return false 
       }

    }
    return true
    // console.log(hashMap1)
    // console.log(hashMap2)
}
console.log(isAnagram("listen", "silent")) 