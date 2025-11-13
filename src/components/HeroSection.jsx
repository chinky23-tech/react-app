/*import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/bg.png"; // ← add your image in /src/assets/

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-start min-h-screen bg-orange-50 bg-cover bg-center px-8 md:px-20">
      <div className="w-full max-w-7xl flex flex-col-reverse md:flex-row items-center">
        {/* Left Text Section */
      /*</div> <motion.div
          className="md:w-1/2 text-center md:text-left space-y-6"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-orange-600 dark:text-orange-400 leading-tight">
            Discover Delicious Recipes <br />
            Made <span className="text-green-700 dark:text-green-500">Just for You</span>
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl">
            Explore quick, easy, and healthy dishes from around the world. Perfect for every occasion.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-green-800 transition"
          >
            Find Recipes 🍲
          </motion.button>
        </motion.div>

        {/* Right Image Section */
       /* <motion.div
          className="md:w-1/2 mb-10 md:mb-0 flex justify-center"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.img
            src={heroImage}
            alt="Chef cooking delicious food"
            className="w-80 md:w-[420px] drop-shadow-2xl rounded-xl"
            whileHover={{ rotate: 3, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

*/

/*import React from "react";
import mealImage from "../assets/food1.jpeg"
const HeroSection = () => {
  return (
    <section className="w-full min-h-screen bg-orange-50 pt-20 flex flex-col md:flex-row items-center justify-between overflow-hidden">
      
      
      <div className="relative md:w-1/2 w-full h-[60vh] md:h-screen flex flex-col justify-center px-8 sm:px-12 z-10 bg-linear-to-l from-orange-100 via-orange-100 to-transparent">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-orange-600 mb-4 leading-tight drop-shadow-sm">
          Taste the <span className="text-green-700">Joy of Cooking</span> 🍲
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-md">
          Explore mouthwatering recipes that turn your ingredients into magic —
          quick, easy, and delicious!
        </p>

        <div className="flex flex-wrap gap-4">
          <button className="bg-green-700 text-white py-3 px-6 rounded-full font-semibold hover:bg-green-800 transition-all shadow-md hover:shadow-lg">
            Get Started
          </button>
          <button className="border-2 border-orange-500 text-orange-500 py-3 px-6 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition-all shadow-md hover:shadow-lg">
            Explore Recipes
          </button>
        </div>
      </div>

      
      <div className="relative md:w-1/2 w-full h-[40vh] md:h-screen">
        <img
          src={mealImage}
          
          alt="Delicious Meal"
          className="w-full h-full object-cover"
        />
        {/* Optional gradient fade to blend image with text area 
        <div className="absolute inset-0 bg-linear-to-l from-transparent via-orange-50/50 to-orange-100"></div>
      </div>
    </section>
  );
};

export default HeroSection;

*/
import React from "react";
import mealImage from "../assets/food1.jpeg";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-orange-50 pt-20 flex flex-col md:flex-row items-center justify-between overflow-hidden">
      
      {/* BACKGROUND IMAGE (visible only on mobile for blending) */}
      <img
        src={mealImage}
        alt="Delicious Meal"
        className="absolute inset-0 w-full h-full object-cover md:hidden"
      />
      
      {/* Gradient overlay for mobile */}
      <div className="absolute inset-0 bg-linear-to-b from-orange-50/90 via-orange-50/70 to-transparent md:hidden"></div>

      {/* LEFT SIDE — Text */}
      <div className="relative md:w-1/2 w-full h-[60vh] md:h-screen flex flex-col justify-center px-8 sm:px-12 z-10 bg-linear-to-l md:from-orange-100 md:via-orange-100 md:to-transparent">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-orange-600 mb-4 leading-tight drop-shadow-sm">
          Taste the <span className="text-green-700">Joy of Cooking</span> &#x1F372;

        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-md">
          Explore mouthwatering recipes that turn your ingredients into magic —
          quick, easy, and delicious!
        </p>

        <div className="flex flex-wrap gap-4">
          <button className="bg-green-700 text-white py-3 px-6 rounded-full font-semibold hover:bg-green-800 transition-all shadow-md hover:shadow-lg">
            Get Started
          </button>
          <button className="border-2 border-orange-500 text-orange-500 py-3 px-6 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition-all shadow-md hover:shadow-lg">
            Explore Recipes
          </button>
        </div>
      </div>

      {/* RIGHT SIDE — Image (desktop only) */}
      <div className="relative hidden md:block md:w-1/2 h-screen">
        <img
          src={mealImage}
          alt="Delicious Meal"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-l from-transparent via-orange-50/50 to-orange-100"></div>
      </div>
    </section>
  );
};

export default HeroSection;
