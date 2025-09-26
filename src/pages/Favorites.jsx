import { useState, useEffect } from "react";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(saved);
  }, []);

  const removeQuote = (index) => {
    const updated = favorites.filter((_, i) => i !== index);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">⭐ Favorite Quotes</h2>
        {favorites.length === 0 ? (
          <p>No favorites yet.</p>
        ) : (
          <div className="space-y-4">
            {favorites.map((q, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
              >
                <p className="italic">“{q.text}”</p>
                <p className="mt-2 font-semibold">- {q.author}</p>
                <button
                  onClick={() => removeQuote(i)}
                  className="mt-2 px-3 py-1 bg-red-500 text-white rounded-md"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Favorites;
