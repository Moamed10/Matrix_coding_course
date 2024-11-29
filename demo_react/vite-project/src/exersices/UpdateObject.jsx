import { useState } from "react";

export default function ObjectUpdate() {
  const carinfo = {
    make: "BMW",
    model: "X5",
    year: 2024,
  };
  const [car, setCar] = useState(carinfo);
  function yearHandler(e) {
    setCar((prevCar) => ({ ...prevCar, year: e.target.value }));
  }

  function modelHandler(event) {
    setCar({ ...car, model: event.target.value });
  }
  function makeHandler(event) {
    setCar({ ...car, make: event.target.value });
  }
  console.log(car);

  return (
    <div>
      <h1>
        brand : {car.make} model : {car.model} year {car.year}{" "}
      </h1>

      <input type="number" value={car.year} onChange={yearHandler} />

      <input type="text" value={car.make} onChange={makeHandler} />

      <input type="text" value={car.model} onChange={modelHandler} />
    </div>
  );
}
