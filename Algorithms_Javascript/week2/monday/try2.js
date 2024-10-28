function shiftArray(arr) {
    if (arr.length === 0) return arr; // Handle empty array case

    const n = arr.length;
    const lastElement = arr[n - 1]; // Get the last element

    // Shift elements to the right
    for (let i = n - 1; i > 0; i--) {
        arr[i] = arr[i - 1]; // Move each element to the right
    }
    arr[0] = lastElement; // Place the last element in the first position

    return arr; // Return the modified array
}

console.log(shiftArray([2, 1, 6, 4, -7])); // Output: [-7, 2, 1, 6, 4]
