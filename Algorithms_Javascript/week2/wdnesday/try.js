function big(str) {
    let arr = str.toLowerCase().split(' '); // Step 1: Convert to lowercase and split into words
    let word = ''; // String to hold the final result

    for (let x in arr) {
        // Capitalize the first letter of each word, add the rest of the word unchanged
        word += arr[x][0].toUpperCase() + arr[x].slice(1) ;
    }

    return word; // Trim to remove the trailing space at the end
}

console.log(big("I'm a little TEAPOT"));
// Output: "I'm A Little Teapot"
