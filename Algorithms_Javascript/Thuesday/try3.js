// 2. Shift the Values

let array =  [2,1,6,4,-7];

console.log(array.reverse())

// 3. FizzBuzz

let arr = []; 

for (let x = 1; x <= 135; x++) {
    if (x % 3 === 0 && x % 5 === 0) {
        arr.push('FizzBuzz');
    }
    else if (x % 3 === 0) {
        arr.push('Fizz');
    }
    else if (x % 5 === 0) {
        arr.push('Buzz');
    }
    else {
        arr.push(x);
    }
}

console.log(arr); 
