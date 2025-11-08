import React, { useState } from "react";
import { useJsApiLoader, Autocomplete } from "@react-google-maps/api";

const libraries = ["places"];

const AddressAutocomplete = ({ onSelect }) => {
  const [autocomplete, setAutocomplete] = useState(null);
  const [inputValue, setInputValue] = useState("");

  // Load Google Maps API
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyA23Aml_CAzWkt4x4Tn67A6E7vW6VeliMQ", // 🔑 replace with your key
    libraries,
  });

  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    if (autocomplete) {
      const place = autocomplete.getPlace();
      const location = {
        address: place.formatted_address,
        lat: place.geometry?.location?.lat(),
        lng: place.geometry?.location?.lng(),
      };
      setInputValue(location.address);
      onSelect(location);
    }
  };

  if (!isLoaded) return <p>Loading Maps...</p>;

  return (
    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter your location..."
        className="w-full border p-2 rounded"
      />
    </Autocomplete>
  );
};

export default AddressAutocomplete;
