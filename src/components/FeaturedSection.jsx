import React from "react";

// Dummy recipe data (same structure as MongoDB will use)
const recipes = [
  {
    _id: "1",
    title: "Creamy Garlic Pasta",
    time: "20 min",
    healthy: "450 kcal",
    image: "/food/mac & cheese.webp",
    difficulty: "Easy",
  },
  {
    _id: "2",
    title: "Grilled Chicken Bowl",
    time: "30 min",
    healthy: "520 kcal",
    image: "/food/meal.jpg",
    difficulty: "Medium",
  },
  {
    _id: "3",
    title: "Veggie Salad Mix",
    time: "10 min",
    healthy: "300 kcal",
    image: "/food/salad.jpg",
    difficulty: "Easy",
  },
];
  

const FeaturedSection = () => {
  return (
    <section
      id="featured"
      className="w-full bg-orange-50 py-16 px-6 md:px-12 lg:px-20"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-600">
          Featured Recipes
        </h2>
        <p className="text-gray-600 mt-2 text-lg">
          Quick, delicious & healthy choices picked just for you!
        </p>
      </div>

      {/* Recipe Cards Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <div
            key={recipe._id}
            className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition hover:-translate-y-1"
          >
        
            <div className="w-full h-48 overflow-hidden">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>

            <div className="p-5">
              <h3 className="text-xl font-semibold text-orange-600">
                {recipe.title}
              </h3>

              <div className="flex items-center justify-between mt-3 text-sm text-gray-600">
                <span>⏱ {recipe.time}</span>
                <span>🔥 {recipe.healthy}</span>
                <span className="bg-green-100 text-green-600 px-2 py-1 rounded-md">
                  {recipe.difficulty}
                </span>
              </div>

            {/* <button className="w-full mt-5 bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 transition">*/}
         <div className="mt-5 mb-0">
            <button className="w-full bg-orange-600 text-white py-2  hover:bg-orange-700 transition rounded-b-2xl">

                View Recipe
              </button>
              </div>
              </div>
            </div>
         
        ))}
      </div>
    </section>
  );
};

export default FeaturedSection;
