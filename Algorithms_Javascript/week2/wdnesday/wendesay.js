let titleCase = "sHoRt the AnD sToUt"

function firstletter(str){
    let array = str.toLowerCase().split(" ");
    for (let index = 0; index < array.length; index++) {
        array[index] = array[index][0].toUpperCase() + array[index].slice(1)
        if (array[index].toLowerCase() === "the" || array[index].toLowerCase() === "of") {
            array[index] = array[index].toUpperCase();
        }

        

    }
    return array.join(' ')


}


console.log(firstletter(titleCase))