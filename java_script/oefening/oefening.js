// for loop from 1 to 136
// Check if the number is odd
// if yes Print the odd number
// else do nothing

const numbers = [5, 3, 9, 1, 7];
let max = numbers[0]; // Assume the first element is the max

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}
console.log(max); // Output: 9
