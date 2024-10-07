// 1. Print 1 - 135


for(let x =0 ; 134 >= x;x++){
    console.log(x)
}

// 2. Print Odd Numbers 1 - 135

for(let x =0 ; 134 >= x;x++){
    if(x%2){
        console.log(x)


    }
}

//  3. Sum of Printed Numbers
let aa = 0

for(let x =0 ; 134 >= x;x++){
   aa +=x
   console.log(`${x} : ${aa}`)
}
// 4. Print the elements of an array

const num = [1,4,2,12];
for(let x = 0;num.length >= x ;x++){
    console.log(num[x])
}
// 5. Find Max

var max = num[0]
for(let x = 0;num.length >= x ;x++){
    if(num[x] > max){
        max=num[x]
    }
}
console.log(max)

// 6. Get Average

total = 0
for(let x=0;num.length >x;x++){
    total += num[x]
    console.log(total)
}
average = total / num.length

console.log(average)
//  7. Eliminate the Negatives

const num1 = [2,-1,4,-3]

for(let x= 0 ; num.length > x;x++ ){
    if(num1[x] < 0){
        num1[x] = 0
    }
}


console.log(num1)


//  8. Number to String


for(let x= 0 ; num.length > x;x++ ){
    if(num1[x] < 0){
        num1[x] = num[x].toString()
    }
}


console.log(num1)