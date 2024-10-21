function filterRange(arr, a, b) {
    return arr.filter(item => item >= a && item <= b);
}

// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);

// 2
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [john, pete, mary];

// let names = users.map(user => user.name).join(" , ");

// 3  let john = { name: "John", age: 25 }
let john = { name: "John", age: 25 }
let pete = { name: "Pete", age: 30 }
let mary = { name: "Mary", age: 29 }

let arr = [john, pete, mary];

function getAverageAge(users) {
    let totalAge = users.reduce((sum, user) => sum + user.age,);
    return totalAge / users.length;
}

console.log(getAverageAge(arr));  