import React from "react";
import { motion } from "framer-motion";
import Footer from "../Components/Footer";
const Home = () => {
  return (
    <div>
      {/* Hero section */}
      <section className="bg-gradient-to-r from-purple-500 via-blue-500 to-red-500 text-white py-20">
        <div className="container mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-4"
          >
            Welcome to our Website!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg"
          >
            Discover amazing features and services we offer.
          </motion.p>
        </div>
      </section>

      {/* About us/contact us section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-8"
          >
            About Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg mb-8"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel
            odio et turpis aliquam fermentum. Ut vel erat id nulla mollis
            ultrices vel id est. Quisque consequat purus at fermentum.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md shadow-lg"
          >
            Contact Us
          </motion.button>
        </div>
      </section>

      {/* Image gallery section */}

      <Footer></Footer>
    </div>
  );
};

export default Home;
