import React from "react";

const QUOTES = [
  {
    quote: "Perseverance is failing 19 times and succeeding the 20th.",
    author: "Julie Andrews",
  },
  {
    quote:
      "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    author: "Aristotle",
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    quote:
      "The two most important days in your life are the day you are born and the day you find out why.",
    author: "Mark Twain",
  },
  {
    quote:
      "Kindness is the language which the deaf can hear and the blind can see.",
    author: "Mark Twain",
  },
  {
    quote: "Whether you think you can or you think you can’t, you’re right.",
    author: "Henry Ford",
  },
  {
    quote: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
  },
  {
    quote: "I have no special talent. I am only passionately curious.",
    author: "Albert Einstein",
  },
  {
    quote:
      "When a flower doesn't bloom, you fix the environment in which it grows, not the flower.",
    author: "Alexander Den Heijer",
  },
  {
    quote: "Everything you’ve ever wanted is on the other side of fear.",
    author: "George Addair",
  },
];

window.onload = function init() {
  randomizeQuote();
};

function randomizeQuote() {
  let randomIndex = Math.floor(Math.random() * QUOTES.length);
  let randomQuoteData = QUOTES[randomIndex];

  document.getElementById("text").innerText = "“" + randomQuoteData.quote + "”";
  document.getElementById("author").innerText = "— " + randomQuoteData.author;
}

function QuoteGenerator() {
  return (
    <div id="quote-box">
      <button
        id="new-quote"
        onClick={randomizeQuote}
        style={{
          position: "fixed",
          zIndex: 10,
        }}
      >
        Show me a new quote 🙌
      </button>
      <div className="center">
        <div className="quote-box">
          <div id="text"></div>
        </div>
      </div>
      <div className="info">
        <div id="author"></div>
        <a
          id="tweet-quote"
          href="https://twitter.com/intent/tweet"
          target="_blank"
        >
          Tweet this quote ➤
        </a>
      </div>
    </div>
  );
}

export default QuoteGenerator;
