function thirdHighest(input) {
    if (input.length < 3) {
        return "Array must contain at least three distinct numbers";
    }
    
    let first = -Infinity;
    let second = -Infinity;
    let third = -Infinity;

    for (var i = 0; i < input.length; i++) {
        // Ignore duplicates
        if (input[i] === first || input[i] === second || input[i] === third) {
            continue;
        }

        if (input[i] > first) {
            third = second;
            second = first;
            first = input[i];
        } else if (input[i] > second) {
            third = second;
            second = input[i];
        } else if (input[i] > third) {
            third = input[i];
        }
    }
    
    // Handle case where there are not enough distinct numbers
    return third === -Infinity ? "Not enough distinct numbers" : third;
}

console.log(thirdHighest([2, 5, 3, 1, 4])); // Output: 3
console.log(thirdHighest([5, 5, 5])); // Output: Not enough distinct numbers
console.log(thirdHighest([5])); // Output: Array must contain at least three distinct numbers
