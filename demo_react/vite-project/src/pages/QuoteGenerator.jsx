import React, { useState, useEffect } from "react";
import axios from "axios";
import "./QuoteGenerator.css";

const QuoteGenerator = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  // Fetch quote function
  const fetchQuote = async () => {
    try {
      const response = await axios.get(
        "https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?",
        {
          params: {
            method: "getQuote", // The method to get a quote
            format: "jsonp", // For JSONP response format
            lang: "en", // Language set to English
            jsonp: "?", // JSONP callback
          },
          headers: {
            Accept: "application/json", // Accept JSON response
          },
        }
      );

      // For JSONP, the result will be inside the callback
      const data = response.data;

      // Set the quote and author
      setQuote(data.quoteText);
      setAuthor(data.quoteAuthor || "Unknown");
    } catch (error) {
      console.error("Error fetching the quote:", error);
      setQuote("Oops! Something went wrong. Try again!");
      setAuthor("");
    }
  };

  useEffect(() => {
    fetchQuote(); // Fetch a quote when the component mounts
  }, []);

  return (
    <div className="quote-container">
      <div className="quote-box">
        <p className="quote-text">"{quote}"</p>
        <p className="quote-author">- {author}</p>
        <button className="new-quote-button" onClick={fetchQuote}>
          New Quote
        </button>
      </div>
    </div>
  );
};

export default QuoteGenerator;
