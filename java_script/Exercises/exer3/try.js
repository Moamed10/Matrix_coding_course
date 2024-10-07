// 1Create an array of your favorite fruits. Use a `for` loop to log each fruit to the console.
const fruit=['orange','apple ','watermelon']
for(let x =0 ; fruit.length >= x ; ++x){
    console.log(fruit[x])
}

// Write a function that takes an array of numbers as a parameter and returns the average of those numbers.
let average= function(numbers){
    let count =0
    for(let x = 0; x < numbers.length; x++){
        count+= numbers[x];
    }
    let num = count/ numbers.length;
    return num;
}

let mynum = [4,3,21,4,6,7]

console.log(average(mynum))