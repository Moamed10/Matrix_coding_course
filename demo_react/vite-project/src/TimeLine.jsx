import axios from "axios";
import React from "react";
import { useState } from "react";
import { Await } from "react-router";

const TimeLine = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [data, setData] = useState("");

  const HandelForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/users", {
        name,
        message,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const fetch = async () => {
    const response = await axios.get("http://localhost:5000/users");
    console.log(response.data.data);
  };
  fetch();

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:5000/users");
  //     console.log(response.data.data); // Access the user data
  //     setData(response.data.data); // Assuming you have a state called data
  //   } catch (error) {
  //     console.error("Failed to fetch posts:", error);
  //   }
  // };

  return (
    <div>
      <form onSubmit={HandelForm}>
        <input
          type="name"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="test"
          placeholder="Meassage"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <button type="submit">post</button>
      </form>
    </div>
  );
};

export default TimeLine;
