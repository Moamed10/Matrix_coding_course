function sumall(array){
    sum =0
    let bigger;
    let smaller;
    if(array[0]> array[1]){
        bigger = array[0]
        smaller = array[1]
    }else{
        bigger = array[1]
        smaller = array[0]
    }
    for(let x = smaller ; x <= bigger ; x++){
        sum+=x

    }
    return sum



}



let array1 = [5,10]


console.log(sumall(array1))