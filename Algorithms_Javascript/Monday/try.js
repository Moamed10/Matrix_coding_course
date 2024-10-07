
const num = [2,-1,4,-3]

for(let x= 0 ; num.length > x;x++ ){
    if(num[x] < 0){
        num[x] = num[x].toString()
    }
}


console.log(num)