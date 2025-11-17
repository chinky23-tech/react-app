import { useState, useEffect } from "react";

export default function AddressAutocomplete() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (query.length < 3) {
      setSuggestions([]);
      return;
    }

    const timer = setTimeout(() => {
      fetchSuggestions(query);
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  const fetchSuggestions = async (text) => {
    try {
      const apiUrl = `http://localhost:5000/proxy?url=${encodeURIComponent(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${text}&key=YOUR_API_KEY&components=country:in`
      )}`;

      const res = await fetch(apiUrl);
      const data = await res.json();

      setSuggestions(data.predictions || []);
      setIsOpen(true);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSelect = (address) => {
    setQuery(address);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      <input
        className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="Enter your location…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {isOpen && suggestions.length > 0 && (
        <div className="absolute w-full bg-white border mt-2 rounded-lg shadow z-50">
          {suggestions.map((item) => (
            <div
              key={item.place_id}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-sm"
              onClick={() => handleSelect(item.description)}
            >
              {item.description}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
