import { useState } from "react";

export default function MyComponent() {
  const [name, SetName] = useState(); // Initialize the name state
  const UpdateName = () => {
    SetName("mohamed"); // Update the state using the setter function
  };

  const [age, setAge] = useState(0);
  const UpdateAge = () => {
    setAge(age + 1);
  };
  const UpdateAge1 = () => {
    setAge(age - 1);
  };

  return (
    <div>
      <p>name : {name}</p>
      <button onClick={UpdateName}> set name</button>

      <p>age : {age}</p>
      <button onClick={UpdateAge}> + age </button>
      <button onClick={UpdateAge1}> - age </button>
    </div>
  );
}
