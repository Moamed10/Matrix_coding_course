// import React, { useState } from "react";

// const UpdateList = () => {
//   const [food, setFood] = useState(["apple", "banana"]);
//   const [newFood, setNewFood] = useState(""); // State for the input field

//   function addFood() {
//     if (newFood.trim()) {
//       setFood((f) => [...f, newFood]);
//       setNewFood(""); // Clear the input field
//     }
//   }

//   function removeFood(index) {
//     setFood(food.filter((_, i) => i !== index)); // Correct the equality check
//   }

//   return (
//     <div>
//       <h1>Food List</h1>
//       <ul>
//         {food.map((foodItem, index) => (
//           <li key={index} onClick={() => removeFood(index)}>
//             {foodItem}
//           </li>
//         ))}
//       </ul>
//       <input
//         type="text"
//         placeholder="Add food"
//         value={newFood}
//         onChange={(e) => setNewFood(e.target.value)} // Handle input change
//       />
//       <button onClick={addFood}>Add Food</button>
//     </div>
//   );
// };
