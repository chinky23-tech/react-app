import React from "react";

function RecipeCard({ meal }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl overflow-hidden hover:scale-105 transform transition duration-300">
      <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{meal.strMeal}</h2>
        <a
          href={meal.strSource || meal.strYoutube}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-blue-600 dark:text-blue-400 hover:underline"
        >
          View Recipe →
        </a>
      </div>
    </div>
  );
}

export default RecipeCard;
