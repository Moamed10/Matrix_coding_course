// 5. Remove the Negative
let X = [1, -2, 4, 1];

for (let i = 0; i < X.length; i++) {
    if (X[i] < 0) {
        X.splice(i, 1);
        i--; 
    }
}

console.log(X); // 
