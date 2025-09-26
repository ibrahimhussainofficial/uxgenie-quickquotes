import { useState } from "react";

const QuoteCard = ({ quote, author, onSave }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`"${quote.text}" — ${quote.author}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div className="relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md text-center">
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 px-2 py-1 text-sm bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          {copied ? "✓" : "Copy"}
        </button>

        <p className="text-lg italic">“{quote}”</p>
        <p className="mt-2 font-semibold">- {author}</p>
        <button
          onClick={onSave}
          className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600"
        >
          Save to Favorites
        </button>
      </div>
    </>
  );
};

export default QuoteCard;
