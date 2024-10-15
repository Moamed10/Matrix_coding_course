let str = "The quick brown fox jumped over the lazy dog";

function largestlength(arr) {
    let array = arr.split(" ");
    let max = array[0].length; 
    
    for (let x = 1; x < array.length; x++) {
        if (array[x].length > max) { 
            max = array[x].length; 
        }
    }
    
    return max;
}

console.log(largestlength(str));

