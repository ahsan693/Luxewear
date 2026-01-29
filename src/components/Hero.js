import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20 pt-20 sm:pt-16">
      {/* Static Background Blobs */}
      <div
        className="absolute top-20 -left-20 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full blur-3xl opacity-20 sm:opacity-30"
      />
      <div
        className="absolute bottom-20 -right-20 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full blur-3xl opacity-15 sm:opacity-20"
      />
      
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-8 sm:py-12 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="inline-block">
              <span className="text-xs sm:text-sm uppercase tracking-wider text-pink-600 dark:text-pink-400 font-semibold bg-pink-100 dark:bg-pink-900/30 px-4 py-2 rounded-full">New Collection 2026</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-black leading-[1.1] sm:leading-tight">
              <span className="block bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent drop-shadow-2xl">
                Discover Your
              </span>
              <motion.span 
                className="block text-gray-900 dark:text-white mt-2"
                animate={{ 
                  textShadow: [
                    "0px 0px 0px rgba(0,0,0,0)",
                    "0px 5px 20px rgba(236, 72, 153, 0.3)",
                    "0px 0px 0px rgba(0,0,0,0)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Perfect Style
              </motion.span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
              Elevate your wardrobe with our curated collection of premium essentials. 
              Crafted for comfort, designed for elegance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#products"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(236, 72, 153, 0.4)",
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 sm:px-10 sm:py-4 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 text-white text-base sm:text-lg font-bold rounded-full overflow-hidden shadow-2xl w-full sm:w-auto text-center"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Shop Now
                  <motion.svg 
                    className="w-5 h-5"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </span>
              </motion.a>
              <motion.a
                href="#features"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 sm:px-10 sm:py-4 text-base sm:text-lg border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white font-bold rounded-full backdrop-blur-md bg-white/10 hover:bg-white/20 dark:bg-black/10 dark:hover:bg-black/20 transition-all shadow-xl w-full sm:w-auto text-center"
              >
                Explore More
              </motion.a>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4 sm:gap-8 pt-6 sm:pt-8 mt-2 sm:mt-4">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-4 sm:p-5 shadow-lg border border-pink-100 dark:border-pink-900/30"
              >
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                  <p className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">Free Shipping</p>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">On orders over $100</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-4 sm:p-5 shadow-lg border border-purple-100 dark:border-purple-900/30"
              >
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">Easy Returns</p>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">30-day guarantee</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ 
              scale: 1.02,
              rotateY: 5,
              transition: { duration: 0.3 }
            }}
            className="relative h-[450px] sm:h-[550px] lg:h-[700px] mt-8 lg:mt-0"
            style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
          >
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
              <motion.img 
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80"
                alt="Fashion Collection"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-500/30 via-transparent to-pink-500/20"></div>
            </div>
            
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 200,
                delay: 0.8
              }}
              whileHover={{ 
                scale: 1.1,
                rotate: 5,
                boxShadow: "0 25px 50px rgba(236, 72, 153, 0.5)"
              }}
              className="absolute top-4 right-4 sm:top-8 sm:right-8 backdrop-blur-md bg-white/90 dark:bg-gray-800/90 rounded-2xl px-5 py-3 sm:px-8 sm:py-4 shadow-2xl border border-white/30"
            >
              <p className="text-xl sm:text-2xl font-black bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">-30% OFF</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
