let sum = 0;

for(let x = 200; x <= 2700; x++) {
    if((x%3==0 || x%5==0) && !(x%3 ==0 && x%5==0)){
        sum += x
    } 
}

console.log(sum);
