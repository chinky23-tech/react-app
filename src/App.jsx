/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className='text-red-600'>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App*/

import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import RecipeCard from "./components/RecipeCard";
import NavBar  from "./components/NavBar";

function App() {

  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    fetchRecipes();
  }, [query]);

  const fetchRecipes = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      const data = await res.json();
      setRecipes(data.meals || []);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  return (
  <>
  <NavBar />
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white m-14 transition-all">
      <h1 className="text-4xl font-bold text-center pt-8">🍳 Recipe Finder</h1>
      <SearchBar setQuery={setQuery} />
      <div className="grid gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {recipes.length > 0 ? (
          recipes.map((meal) => <RecipeCard key={meal.idMeal} meal={meal} />)
        ) : (
          <p className="text-center col-span-full text-gray-500">No recipes found 😔</p>
        )}
      </div>
    </div>
   </>
 
  );
}

export default App;

