import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20 pt-16">
      {/* Animated Background Blobs */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full blur-3xl opacity-30"
      />
      <motion.div
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [360, 180, 0],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 -right-20 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full blur-3xl opacity-20"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-block">
              <span className="text-sm uppercase tracking-wider text-pink-600 dark:text-pink-400 font-semibold">New Collection 2026</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black leading-tight">
              <span className="block bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent drop-shadow-2xl">
                Discover Your
              </span>
              <br />
              <motion.span 
                className="block text-gray-900 dark:text-white"
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
            
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg">
              Elevate your wardrobe with our curated collection of premium essentials. 
              Crafted for comfort, designed for elegance.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(236, 72, 153, 0.4)",
                  y: -5
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-10 py-5 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 text-white font-bold rounded-full overflow-hidden shadow-2xl"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <span className="relative z-10 flex items-center gap-2">
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
              </motion.button>
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  y: -5
                }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 border-3 border-gray-900 dark:border-white text-gray-900 dark:text-white font-bold rounded-full backdrop-blur-md bg-white/10 hover:bg-white/20 dark:bg-black/10 dark:hover:bg-black/20 transition-all shadow-xl"
              >
                Explore More
              </motion.button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-gray-200 dark:border-gray-800">
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">Free Shipping</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">On orders over $100</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">Easy Returns</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">30-day guarantee</p>
              </div>
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
            className="relative h-[600px] lg:h-[700px]"
            style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
          >
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
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
              className="absolute top-8 right-8 backdrop-blur-md bg-white/20 dark:bg-gray-800/40 rounded-2xl px-8 py-4 shadow-2xl border border-white/30"
            >
              <p className="text-2xl font-black bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">-30% OFF</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
