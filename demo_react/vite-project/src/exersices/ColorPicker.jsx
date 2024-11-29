import { useState } from "react";

export default function ColorPicker() {
  const [color, setColor] = useState("#ffea00");

  function colorHandel(event) {
    setColor(event.target.value);
  }

  return (
    <div className="color-picker-container">
      <h1>color picker</h1>
      <div className="color-display" style={{ background: color }}>
        <p>selected color : {color} </p>
        <input type="color" value={color} onChange={colorHandel} />
      </div>
    </div>
  );
}
