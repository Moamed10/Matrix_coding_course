let chek = function(names, name) {
    let found = false; 

    for (let x = 0; x < names.length; ++x) {
        if (name === names[x]) {
            found = true; 
            break;  
        }
    }

    if (found) {
        console.log("true");
    } else {
        console.log("not true");
    }
}

let words = ['mo', 'ahmed', 'mark', 'ibrahim'];

chek(words, "ahmed");
//  6


let are = []

for(let x =1; 20 >= x; ++x){
    if(x %2 ==0){
        are.push(x);
    }
}

console.log(are)