import React, { useState, useEffect } from "react";
import axios from "axios";

const QuoteGenerator = () => {
  const [quote, setQuote] = useState("");

  const fetchQuote = async () => {
    try {
      const response = await axios.get("https://api.kanye.rest/");
      setQuote(response.data.quote);
    } catch (error) {
      console.error("Error fetching the quote:", error);
      setQuote("Oops! Something went wrong. Try again!");
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div>
      <p>"{quote}"</p>
      <button onClick={fetchQuote}>New Quote</button>
    </div>
  );
};

export default QuoteGenerator;
