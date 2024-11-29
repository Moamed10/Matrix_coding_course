import { useState } from "react";

export default function Onchange() {
  const [name, SetName] = useState("guest");
  function handealer(event) {
    SetName(event.target.value);
  }
  const [number, SetNumber] = useState(0);

  function handealer1(event) {
    SetNumber(event.target.value);
  }
  const [paynemnt, SetPaynemnt] = useState("");
  function paynemnthandelaer(event) {
    SetPaynemnt(event.target.value);
  }

  return (
    <>
      <div>
        <input type="text" onChange={handealer} placeholder={name} />
        <h1>{name}</h1>
        <input type="number" onChange={handealer1} placeholder={number} />
        <h1>{number}</h1>
        <select value={paynemnt} onChange={paynemnthandelaer}>
          <option value="mastercard"> mastercard</option>
          <option value="visa"> visa </option>
        </select>
        <p>{paynemnt}</p>
      </div>
    </>
  );
}
