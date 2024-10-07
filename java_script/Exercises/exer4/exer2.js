let person = {
    name: "Alice",     // Name of the person
    age: 30,          // Age of the person
    gender: "Female"   // Gender of the person
};


let creatperson = function(person){
    return (`hello ${person.name} you are ${person.age} old and you are  ${person.gender} `)
}


console.log(creatperson(person))