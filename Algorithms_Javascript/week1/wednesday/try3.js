let a = 0, b = 1, sum = 0;

while (a < 1000000) {
    sum += a;
    let next = a + b;  // Calculate the next Fibonacci number
    a = b;             // Move `a` to `b`
    b = next;          // Move `b` to the new Fibonacci number
}

console.log(`Sum of Fibonacci numbers below 1,000,000 is: ${sum}`);
