/*import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/meal.jpg"; // ← add your image in /src/assets/

const HeroSection = () => {
  return (
    <section className="bg-orange-50  fixed min-h-screen m-10 mx-auto left-0 w-full z-50 px-8 md:px-20">
      <div className="w-full max-w-7xl flex flex-col-reverse md:flex-row items-center">
        {/* Left Text Section */
       /* <motion.div
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
        /*<motion.div
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
import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/meal.jpg"; // ← add your image in /src/assets/

const HeroSection = () => {
  return (
    <section className="bg-orange-50 mx-auto min-h-screen flex items-center justify-center w-full px-8 md:px-20">
      <div className="w-full max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        {/* Left Text Section */}
        <motion.div
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

        {/* Right Image Section */}
        <motion.div
          className="md:w-1/2 flex justify-center"
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

