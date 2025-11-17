import AddressAutocomplete from "./components/AddressAutocomplete";

function Home() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Search Recipes Near You</h2>

      <AddressAutocomplete />

      {/* Your existing recipe search bar */}
      {/* <RecipeSearch /> */}
    </div>
  );
}

export default Home;
