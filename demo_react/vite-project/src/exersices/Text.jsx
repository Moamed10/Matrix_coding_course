import { useState } from "react";

export default function Text() {
  const [text, SetText] = useState("empty");

  const inputchange = (event) => {
    SetText(event.target.value);
  };

  const clear = () => {
    SetText("empty"); // Reset text to "empty"
  };

  return (
    <div>
      <h1>{text}</h1>
      <input
        type="text"
        placeholder="type text"
        value={text} // Show the current `text` state in the input
        onChange={inputchange}
      />
      {text !== "" ? <button onClick={clear}>Clear</button> : null}
    </div>
  );
}
