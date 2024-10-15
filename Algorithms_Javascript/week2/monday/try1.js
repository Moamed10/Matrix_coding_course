function largestOfFour(arr) {
    let result = []; // Initialize an empty array to store the largest numbers

    // Outer loop to iterate through each sub-array
    for (let i = 0; i < arr.length; i++) {
        let max = arr[i][0]; // Assume the first number in the sub-array is the largest

        // Inner loop to find the largest number in the current sub-array
        for (let j = 1; j < arr[i].length; j++) {
            if (arr[i][j] > max) {
                max = arr[i][j]; // Update max if we find a bigger number
            }
        }

        result.push(max); // After finding the largest, add it to the result array
    }

    return result; // Return the array of largest numbers
}

let array1 = [[100, 50, 55], [22, 33, 44, 55, 2], [12, 123, 1234, 22], [-1, 34, 5555, 3]];
console.log(largestOfFour(array1)); // Output: [100, 55, 1234, 5555]
