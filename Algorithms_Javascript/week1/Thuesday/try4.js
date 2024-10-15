let arr = []

for(let x=0; x <100;x++){
    if(x== 0 || x ==1 ){
        arr[x] = x
    }else{
        arr[x] = arr[x-1] + arr[x-2]
    }
}

console.log(arr)