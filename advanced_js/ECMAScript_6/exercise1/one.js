// Exercise 1
let user = {
    name: "John",
    years: 30
  };
  
  let { name, years: age, isAdmin = false } = user;

// Exercise 2

const our_planet = 'earth'
const currentVisitorName = "Alice";
// Exercise 3

// it will say hello because it is true


const user1 = {
    name : 'jhon',
    surname : 'smith',
    
}

user1.name = 'pet'
delete user1["name"]
// Exercise 5
// yes it work because you cahnge the object

// Exercise 6
let salaries = {
    Fred: 100,
    Ted: 160,
    Ghaith: 130
  }
  let sum = 0;

  let allSalaries = Object.values(salaries);
for (let i = 0; i < allSalaries.length; i++) {
      sum += allSalaries[i];
  }
// Exercise 7
let a = 1
let b = 2

result = a + b < 4 ? 'below' : 'over';
// Exercise 8
let login= 'Employee'


let message =  login == 'Employee' ? 'Hello' : login == 'Director'? 'greeting' : login == ''? 'no log in' : ''

console.log(message)