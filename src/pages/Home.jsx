import { useState, useEffect } from "react";
import QuoteCard from "../components/QuoteCard";

const Home = () => {
  const [quote, setQuote] = useState(null);

  const fetchQuote = async () => {
    const res = await fetch("https://api.quotable.io/random");
    const data = await res.json();
    setQuote({ text: data.content, author: data.author });
  };

  const saveToFavorites = () => {
    let saved = JSON.parse(localStorage.getItem("favorites")) || [];
    saved.push(quote);
    localStorage.setItem("favorites", JSON.stringify(saved));
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center mt-8">
        {quote && (
          <QuoteCard
            quote={quote.text}
            author={quote.author}
            onSave={saveToFavorites}
          />
        )}
        <button
          onClick={fetchQuote}
          className="mt-6 px-4 py-2 bg-green-500 text-white rounded-lg"
        >
          New Quote
        </button>
      </div>
    </>
  );
};

export default Home;
