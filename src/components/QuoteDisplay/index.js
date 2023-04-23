import React, { useState } from "react";

export default function Quote() {
  function getRandomInt(max) {
    const index = Math.floor(Math.random() * max);
    return index;
  }
  const [results, setResults] = useState({ text : "", author : ""});
  async function getQuote() {
    const response = await fetch("https://type.fit/api/quotes");

    const data = await response.json();
    console.log(data);
    // this accesses a random index of the array
    setResults(data[getRandomInt(data.length)]);
  }

  return (
    <div className="quote-container">
      <div className="quote">
        <p className = "quote-text">
          {results.text? results.text : "Fetch an inspirational quote to start your day!"}
        </p>
        <p className = "quote-author">
          {results.author ? results.author: null}
        </p>
      </div>
      <button className = "quote-button"onClick={() => getQuote()}>Get Quote</button>
    </div>
  );
}
