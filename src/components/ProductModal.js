import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';

const ProductModal = ({ product, isOpen, onClose }) => {
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart, openCart } = useCart();

  if (!product) return null;

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const colors = [
    { name: 'Black', class: 'bg-black' },
    { name: 'White', class: 'bg-white border-2 border-gray-300' },
    { name: 'Navy', class: 'bg-blue-900' },
    { name: 'Gray', class: 'bg-gray-500' }
  ];

  // Generate multiple product images (in real app, these would come from product data)
  const productImages = [
    product.image,
    product.image.replace('w=500', 'w=600'),
    product.image.replace('h=600', 'h=700'),
    product.image.replace('fit=crop', 'fit=cover')
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30,
              duration: 0.4 
            }}
            className="fixed inset-4 md:inset-8 lg:inset-16 xl:inset-24 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl z-50 overflow-hidden"
          >
            <div className="h-full flex flex-col">
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-800">
                <motion.h2 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl font-bold text-gray-900 dark:text-white"
                >
                  Product Details
                </motion.h2>
                <motion.button
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto">
                <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-4 sm:gap-6 lg:gap-10 p-4 sm:p-6 lg:p-8 xl:p-10">
                  {/* Left Side - Image Gallery */}
                  <div className="space-y-4">
                    {/* Main Image */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800"
                    >
                      <motion.img
                        key={selectedImage}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        src={productImages[selectedImage]}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      {product.badge && (
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 }}
                          className="absolute top-4 left-4 bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-full font-semibold"
                        >
                          {product.badge}
                        </motion.div>
                      )}
                    </motion.div>

                    {/* Thumbnail Images */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="grid grid-cols-4 gap-3"
                    >
                      {productImages.map((img, index) => (
                        <motion.button
                          key={index}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSelectedImage(index)}
                          className={`aspect-square rounded-lg overflow-hidden ${
                            selectedImage === index
                              ? 'ring-2 ring-black dark:ring-white ring-offset-2'
                              : 'opacity-60 hover:opacity-100'
                          }`}
                        >
                          <img src={img} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                        </motion.button>
                      ))}
                    </motion.div>
                  </div>

                  {/* Right Side - Product Details */}
                  <div className="space-y-4 sm:space-y-6 lg:space-y-9">
                    {/* Product Name */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35 }}
                    >
                      <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        {product.name}
                      </h1>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-gray-600 dark:text-gray-400">(128 reviews)</span>
                      </div>
                    </motion.div>

                    {/* Price */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="flex items-baseline gap-3"
                    >
                      <span className="text-5xl font-bold text-gray-900 dark:text-white">
                        {product.price}
                      </span>
                      <span className="text-3xl text-gray-500 line-through">
                        {product.originalPrice}
                      </span>
                      <span className="px-3 py-1 bg-red-500 text-white text-sm font-semibold rounded-full">
                        SAVE {Math.round((1 - parseInt(product.price.replace('$', '')) / parseInt(product.originalPrice.replace('$', ''))) * 100)}%
                      </span>
                    </motion.div>

                    {/* Description */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.45 }}
                      className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                      <p>
                        Premium quality {product.name.toLowerCase()} crafted with attention to detail. 
                        Features comfortable fit, durable materials, and timeless style perfect for any occasion.
                      </p>
                    </motion.div>

                    {/* Color Selection */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="space-y-3"
                    >
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        Color: <span className="font-normal text-gray-600 dark:text-gray-400">{colors[selectedColor].name}</span>
                      </h3>
                      <div className="flex gap-3">
                        {colors.map((color, index) => (
                          <motion.button
                            key={index}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setSelectedColor(index)}
                            className={`w-10 h-10 rounded-full ${color.class} ${
                              selectedColor === index
                                ? 'ring-2 ring-offset-2 ring-black dark:ring-white'
                                : ''
                            }`}
                          />
                        ))}
                      </div>
                    </motion.div>

                    {/* Size Selection */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.55 }}
                      className="space-y-3"
                    >
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        Size: <span className="font-normal text-gray-600 dark:text-gray-400">{selectedSize}</span>
                      </h3>
                      <div className="grid grid-cols-6 gap-3">
                        {sizes.map((size) => (
                          <motion.button
                            key={size}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setSelectedSize(size)}
                            className={`py-3 rounded-lg font-semibold transition-colors ${
                              selectedSize === size
                                ? 'bg-black dark:bg-white text-white dark:text-black'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                            }`}
                          >
                            {size}
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>

                    {/* Quantity */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="space-y-3"
                    >
                      <h3 className="font-semibold text-gray-900 dark:text-white">Quantity</h3>
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center font-bold text-xl"
                        >
                          −
                        </button>
                        <span className="text-2xl font-semibold w-12 text-center">{quantity}</span>
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center font-bold text-xl"
                        >
                          +
                        </button>
                      </div>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.65 }}
                      className="grid grid-cols-2 gap-4 pt-4"
                    >
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="py-4 rounded-xl border-2 border-black dark:border-white text-black dark:text-white font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                      >
                        Add to Wishlist
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          addToCart(product, quantity, selectedSize, colors[selectedColor].name);
                          setIsAdded(true);
                          setTimeout(() => setIsAdded(false), 2000);
                        }}
                        className="py-4 rounded-xl bg-black dark:bg-white text-white dark:text-black font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors relative overflow-hidden"
                      >
                        {isAdded ? (
                          <motion.span
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="flex items-center justify-center gap-2"
                          >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Added to Cart!
                          </motion.span>
                        ) : (
                          'Add to Cart'
                        )}
                      </motion.button>
                    </motion.div>

                    {/* View Cart Button - Shows when item added */}
                    <AnimatePresence>
                      {isAdded && (
                        <motion.button
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => {
                            onClose();
                            openCart();
                          }}
                          className="w-full py-3 bg-pink-600 text-white rounded-xl font-semibold hover:bg-pink-700 transition-colors"
                        >
                          View Cart
                        </motion.button>
                      )}
                    </AnimatePresence>

                    {/* Features */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                      className="border-t border-gray-200 dark:border-gray-800 pt-6 space-y-3"
                    >
                      <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Free shipping on orders over $50</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>30-day return policy</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Secure checkout</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;
