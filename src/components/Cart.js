import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartCount,
    isCartOpen,
    closeCart
  } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Cart Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed right-0 top-0 h-full w-full sm:w-[450px] bg-white dark:bg-gray-900 shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-800">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Shopping Cart
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {getCartCount()} {getCartCount() === 1 ? 'item' : 'items'}
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeCart}
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cartItems.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center h-full text-center"
                >
                  <svg
                    className="w-24 h-24 text-gray-300 dark:text-gray-700 mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Your cart is empty
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Add some items to get started!
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={closeCart}
                    className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                  >
                    Continue Shopping
                  </motion.button>
                </motion.div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item, index) => (
                    <motion.div
                      key={item.cartId}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex gap-4 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg"
                    >
                      {/* Product Image */}
                      <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1 truncate">
                          {item.name}
                        </h3>
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <p>Size: {item.size}</p>
                          <p>Color: {item.color}</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-gray-900 dark:text-white">
                            {item.price}
                          </span>

                          {/* Quantity Controls */}
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                              className="w-8 h-8 rounded bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center justify-center font-bold transition-colors"
                            >
                              −
                            </button>
                            <span className="w-8 text-center font-semibold">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                              className="w-8 h-8 rounded bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center justify-center font-bold transition-colors"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </motion.div>
                  ))}

                  {/* Clear Cart Button */}
                  {cartItems.length > 0 && (
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={clearCart}
                      className="w-full py-2 text-red-500 hover:text-red-600 font-semibold text-sm transition-colors"
                    >
                      Clear Cart
                    </motion.button>
                  )}
                </div>
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="border-t border-gray-200 dark:border-gray-800 p-6 space-y-4">
                {/* Subtotal */}
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
                  <span className="text-xl font-bold text-gray-900 dark:text-white">
                    ${getCartTotal().toFixed(2)}
                  </span>
                </div>

                {/* Shipping Notice */}
                <p className="text-xs text-gray-600 dark:text-gray-400 text-center">
                  Shipping and taxes calculated at checkout
                </p>

                {/* Checkout Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-black dark:bg-white text-white dark:text-black rounded-xl font-semibold text-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                >
                  Proceed to Checkout
                </motion.button>

                {/* Continue Shopping */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={closeCart}
                  className="w-full py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  Continue Shopping
                </motion.button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Cart;
