// FeaturedCarousel.jsx

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const recipes = [
  {
    id: 1,
    title: "Creamy Garlic Pasta",
    time: "20 min",
    healthy: "450 kcal",
    difficulty: "Easy",
    image: "/food/meal.jpg", // replace
  },
  {
    id: 2,
    title: "Margherita Pizza",
    time: "15 min",
    healthy: "300 kcal",
    difficulty: "Medium",
    image: "/food/meal1.webp", // replace
  },
  {
    id: 3,
    title: "Paneer Butter Masala",
    time: "30 min",
    healthy: "550 kcal",
    difficulty: "Medium",
    image: "/food/meal.jpg", // replace
  },
  {
    id: 4,
    title: "Veggie Burger",
    time: "18 min",
    healthy: "320 kcal",
    difficulty: "Easy",
    image: "/food/meal1.webp", // replace
  },
];

export default function FeaturedCarousel() {
  return (
    <div className= "max-w-6xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-6">Featured Recipes</h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1.2}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500 }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3.2 },
        }}
      >
        {recipes.map((recipe) => (
          <SwiperSlide key={recipe.id}>
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition duration-300">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="h-44 w-full object-cover"
              />

              <div className="p-4">
                <h3 className="font-semibold text-lg">{recipe.title}</h3>

                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>⏱ {recipe.time}</span>
                  <span>🔥 {recipe.healthy}</span>
                  <span>⭐ {recipe.difficulty}</span>
                </div>

                <button className="mt-4 w-full py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition">
                  View Recipe
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
