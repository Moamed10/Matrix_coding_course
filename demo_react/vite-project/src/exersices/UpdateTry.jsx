// import React, { useState } from "react";

// const UpdateTry = () => {
//   const [cars, setCars] = useState([]);
//   const [carYear, setCarYear] = useState(new Date().getFullYear());
//   const [carMake, setCarMake] = useState("");
//   const [carModel, setCarModel] = useState("");
//   function handelAddCar() {
//     const newCar = { year: carYear, make: carMake, model: carModel };
//     setCars((c) => [...c, newCar]);
//     setCarYear(new Date().getFullYear());
//     setCarMake("");
//     setCarModel("");
//   }

//   function handelRemoveCar(index) {}

//   function handelMakeChange(event) {
//     setCarMake(event.target.value);
//   }
//   function handelModelhange(event) {
//     setCarModel(event.target.value);
//   }
//   function handelYearhange(event) {
//     setCarYear(event.target.value);
//   }

//   return (
//     <div>
//       <h2>cars object </h2>
//       <ul>
//         {cars.map((car, index) => (
//           <li key={index}>
//             {car.make} {car.model} {car.year}
//           </li>
//         ))}
//       </ul>
//       <input type="number" value={carYear} onChange={handelYearhange} /> <br />
//       <input
//         type="text"
//         value={carMake}
//         onChange={handelMakeChange}
//         placeholder="enter car make"
//       />{" "}
//       <br />
//       <input
//         type="text"
//         value={carModel}
//         onChange={handelModelhange}
//         placeholder="enter car model"
//       />
//       <br />
//       <button onClick={handelAddCar}>add carr</button>
//     </div>
//   );
// };

// export default UpdateTry;
