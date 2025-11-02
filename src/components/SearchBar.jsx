import React, { useState } from "react";

function SearchBar({ setQuery }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    setQuery(input);
    setInput("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center mt-6 mb-4"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search recipe..."
        className="p-2 w-64 rounded-l-md border border-gray-400 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white"
      />
      <button
        type="submit"
        className="bg-green-600 text-white px-4 rounded-r-md hover:bg-green-700"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
