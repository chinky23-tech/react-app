import { useState } from "react";

export default function AddressAutocomplete() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // Dummy suggestions for practice
  const sampleAddresses = [
    "New Delhi, India",
    "Delhi Cantt, India",
    "South Delhi, India",
    "Delhi Aerocity",
    "Connaught Place, Delhi"
  ];

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (!value.trim()) {
      setSuggestions([]);
      return;
    }

    const filtered = sampleAddresses.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(filtered);
  };

  const handleSelect = (address) => {
    setQuery(address);
    setSuggestions([]);
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10 relative">
      <input
        type="text"
        placeholder="Enter your address"
        value={query}
        onChange={handleChange}
        className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
      />

      {suggestions.length > 0 && (
        <ul className="absolute left-0 right-0 bg-white shadow-lg rounded-xl mt-2 z-50 overflow-hidden">
          {suggestions.map((item, index) => (
            <li
              key={index}
              onClick={() => handleSelect(item)}
              className="p-3 hover:bg-blue-100 cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
