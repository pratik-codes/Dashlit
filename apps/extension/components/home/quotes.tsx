import React, { useState, useEffect } from 'react';

interface QuoteItem {
  quote: string;
  author: string;
}

interface QuotesProps {
  quotes: QuoteItem[];
}

const Quotes: React.FC<QuotesProps> = ({ quotes }) => {
  const [randomQuote, setRandomQuote] = useState<QuoteItem | null>(null);

  useEffect(() => {
    if (quotes.length > 0) {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setRandomQuote(quotes[randomIndex]);
    }
  }, [quotes]);

  return (
    <div className="absolute bottom-0 mb-2 flex items-center justify-center w-full">
      {randomQuote ? (
        <div className="relative p-6 text-white rounded-lg shadow-lg transition-transform transform hover:scale-105 group flex items-center justify-center">
          <div className="text-center">
            <p className="text-lg mb-2">"{randomQuote.quote}"</p>
            <p className="inset-0 flex items-center justify-center text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
              - {randomQuote.author}
            </p>
          </div>
        </div>
      ) : (
        <p className="text-lg text-gray-400">No quotes available.</p>
      )}
    </div>
  );
};

export default Quotes;
