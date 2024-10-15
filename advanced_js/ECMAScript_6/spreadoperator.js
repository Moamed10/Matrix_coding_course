// let num = [3,2,3,4,2,]
// let names = ['mo','ahmed','laieth']
// let arr = [...num,...fruit,'eggs',...names];

//reversed and copy
// const morning = {
//     breakfast: "oatmeal",
//     lunch: "peanut butter and jelly"
//   }
  
//   const dinner = "mac and cheese"
  
//   const backpackingMeals = {
//       ...morning,
//       dinner
//   }
//   console.log(backpackingMeals) //output: {breakfast: "oatmeal", lunch: "peanut butter and jelly", dinner: "mac and cheese"}
function sumAll(restParameters) { 
    sum =0// restParameters is the name for the arraylet sum = 0;
    for (let parameter of restParameters) sum += parameter
    return sum
  }


console.log(sumAll([3,4,3,21,3, -3]))