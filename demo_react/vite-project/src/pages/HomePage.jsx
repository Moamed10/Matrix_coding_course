import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router";
const HomePage = () => {
  const [users, setUsers] = useState([]); // Initialize users as an empty array

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((result) => {
        setUsers(result.data);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
      });
  }, []);

  return (
    <div>
      <h1>HomePage</h1>
      <ul>
        {users.length > 0 ? (
          users.map((user) => <li key={user.id}> {user.email} <Link to={}>
          
          </Link></li>)
        ) : (
          <li>Loading users...</li> // Display while data is being fetched
        )}
      </ul>
    </div>
  );
};

export default HomePage;
