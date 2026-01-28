import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProductModal from './ProductModal';

const ProductShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProductModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeProductModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

  // Product data organized by category
  const products = {
    women: [
      { id: 1, name: 'Floral Summer Dress', price: '$89', originalPrice: '$120', image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&h=600&fit=crop', badge: 'New' },
      { id: 2, name: 'Classic Blazer', price: '$145', originalPrice: '$200', image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=500&h=600&fit=crop', badge: 'Trending' },
      { id: 3, name: 'Pleated Midi Skirt', price: '$65', originalPrice: '$85', image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=500&h=600&fit=crop', badge: '' },
      { id: 4, name: 'Silk Blouse', price: '$95', originalPrice: '$130', image: 'https://images.unsplash.com/photo-1564257577-f009d0932e31?w=500&h=600&fit=crop', badge: 'Bestseller' },
      { id: 5, name: 'High-Waist Jeans', price: '$78', originalPrice: '$100', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=600&fit=crop', badge: '' },
      { id: 6, name: 'Knit Sweater', price: '$68', originalPrice: '$90', image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&h=600&fit=crop', badge: '' },
      { id: 7, name: 'Leather Ankle Boots', price: '$125', originalPrice: '$165', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&h=600&fit=crop', badge: 'New' },
      { id: 8, name: 'Evening Gown', price: '$220', originalPrice: '$300', image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500&h=600&fit=crop', badge: 'Premium' }
    ],
    men: [
      { id: 9, name: 'Leather Jacket', price: '$195', originalPrice: '$250', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=600&fit=crop', badge: 'Bestseller' },
      { id: 10, name: 'Oxford Shirt', price: '$55', originalPrice: '$75', image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&h=600&fit=crop', badge: '' },
      { id: 11, name: 'Chino Pants', price: '$72', originalPrice: '$95', image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&h=600&fit=crop', badge: '' },
      { id: 12, name: 'Slim Fit Suit', price: '$280', originalPrice: '$380', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=600&fit=crop', badge: 'Premium' },
      { id: 13, name: 'Hoodie', price: '$58', originalPrice: '$80', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=600&fit=crop', badge: 'Trending' },
      { id: 14, name: 'Denim Jacket', price: '$98', originalPrice: '$135', image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500&h=600&fit=crop', badge: 'New' },
      { id: 15, name: 'Polo Shirt', price: '$45', originalPrice: '$60', image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500&h=600&fit=crop', badge: '' },
      { id: 16, name: 'Winter Coat', price: '$165', originalPrice: '$220', image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=500&h=600&fit=crop', badge: '' }
    ],
    accessories: [
      { id: 17, name: 'Leather Handbag', price: '$135', originalPrice: '$180', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&h=600&fit=crop', badge: 'Bestseller' },
      { id: 18, name: 'Classic Watch', price: '$220', originalPrice: '$295', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=600&fit=crop', badge: 'Premium' },
      { id: 19, name: 'Sunglasses', price: '$85', originalPrice: '$115', image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&h=600&fit=crop', badge: '' },
      { id: 20, name: 'Silk Scarf', price: '$42', originalPrice: '$60', image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=500&h=600&fit=crop', badge: 'New' },
      { id: 21, name: 'Leather Belt', price: '$48', originalPrice: '$65', image: 'https://images.unsplash.com/photo-1624222247344-550fb60583bc?w=500&h=600&fit=crop', badge: '' },
      { id: 22, name: 'Wallet', price: '$55', originalPrice: '$75', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&h=600&fit=crop', badge: '' },
      { id: 23, name: 'Backpack', price: '$95', originalPrice: '$130', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=600&fit=crop', badge: 'Trending' },
      { id: 24, name: 'Baseball Cap', price: '$28', originalPrice: '$40', image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&h=600&fit=crop', badge: '' }
    ],
    sale: [
      { id: 25, name: 'Basic T-Shirt', price: '$18', originalPrice: '$35', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop', badge: '50% Off' },
      { id: 26, name: 'Casual Sneakers', price: '$65', originalPrice: '$120', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=600&fit=crop', badge: '45% Off' },
      { id: 27, name: 'Tank Top', price: '$15', originalPrice: '$30', image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&h=600&fit=crop', badge: '50% Off' },
      { id: 28, name: 'Summer Shorts', price: '$28', originalPrice: '$55', image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&h=600&fit=crop', badge: '49% Off' },
      { id: 29, name: 'Cardigan', price: '$42', originalPrice: '$85', image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&h=600&fit=crop', badge: '51% Off' },
      { id: 30, name: 'Canvas Shoes', price: '$38', originalPrice: '$70', image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&h=600&fit=crop', badge: '46% Off' },
      { id: 31, name: 'Denim Shirt', price: '$45', originalPrice: '$90', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=600&fit=crop', badge: '50% Off' },
      { id: 32, name: 'Sports Jacket', price: '$55', originalPrice: '$110', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=600&fit=crop', badge: '50% Off' }
    ]
  };

  const allProducts = [
    ...products.women,
    ...products.men,
    ...products.accessories,
    ...products.sale
  ];

  const displayProducts = activeCategory === 'all' ? allProducts : products[activeCategory] || [];

  const categoryTabs = [
    { id: 'women', name: 'Women\'s Collection' },
    { id: 'men', name: 'Men\'s Collection' },
    { id: 'accessories', name: 'Accessories' },
    { id: 'sale', name: 'Sale Items' }
  ];

  const categories = [
    {
      id: 'women',
      name: 'Women\'s Collection',
      items: '120+ Products',
      color: 'from-pink-400 to-rose-500',
      badge: 'New Arrivals'
    },
    {
      id: 'men',
      name: 'Men\'s Collection',
      items: '95+ Products',
      color: 'from-blue-500 to-indigo-600',
      badge: 'Trending'
    },
    {
      id: 'accessories',
      name: 'Accessories',
      items: '60+ Products',
      color: 'from-purple-500 to-pink-500',
      badge: 'Bestsellers'
    },
    {
      id: 'sale',
      name: 'Sale Items',
      items: '45+ Products',
      color: 'from-orange-400 to-red-500',
      badge: 'Up to 50% Off'
    }
  ];

  return (
    <section id="products" className="bg-gray-50 dark:bg-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative"
        >
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 dark:from-pink-500/20 dark:via-purple-500/20 dark:to-blue-500/20 rounded-full blur-3xl opacity-20"
          />
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4 relative">
            <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Shop by Category
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 relative">
            Explore our curated collections
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              activeCategory === 'all'
                ? 'bg-black dark:bg-white text-white dark:text-black'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            All Products
          </button>
          {categoryTabs.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeCategory === category.id
                  ? 'bg-black dark:bg-white text-white dark:text-black'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Category Grid Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
              onClick={() => setActiveCategory(category.id)}
            >
              <div className="relative h-80 rounded-lg overflow-hidden">
                <img 
                  src={
                    index === 0 ? 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80' :
                    index === 1 ? 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&q=80' :
                    index === 2 ? 'https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?w=600&q=80' :
                    'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=600&q=80'
                  }
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col items-center justify-end text-white p-6">
                  <h3 className="text-2xl font-bold mb-2 text-center">{category.name}</h3>
                  <p className="text-sm opacity-90">{category.items}</p>
                </div>
                {category.badge && (
                  <div className="absolute top-4 right-4 bg-white dark:bg-gray-900 px-3 py-1 rounded-full">
                    <span className="text-xs font-semibold gradient-text">{category.badge}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Products Display */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              {activeCategory === 'all' ? 'Featured Products' :
               activeCategory === 'women' ? 'Women\'s Collection' :
               activeCategory === 'men' ? 'Men\'s Collection' :
               activeCategory === 'accessories' ? 'Accessories' :
               'Sale Items'}
            </h3>
            <div className="text-gray-600 dark:text-gray-400">
              {displayProducts.length} products
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {displayProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -15,
                  rotateY: 5,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                onClick={() => openProductModal(product)}
                className="group cursor-pointer perspective-1000"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 backdrop-blur-sm border border-gray-100 dark:border-gray-800">
                  {/* Product Image */}
                  <div className="relative h-72 overflow-hidden rounded-t-2xl">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-2"
                      style={{ filter: 'brightness(0.95)' }}
                    />
                    {product.badge && (
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute top-3 left-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-1.5 text-xs font-bold rounded-full shadow-lg backdrop-blur-sm"
                      >
                        {product.badge}
                      </motion.div>
                    )}
                    {/* Quick View */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
                      <motion.button 
                        onClick={(e) => {
                          e.stopPropagation();
                          openProductModal(product);
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white/20 backdrop-blur-md text-white px-8 py-3 rounded-full font-semibold border-2 border-white/30 shadow-2xl transform translate-y-8 group-hover:translate-y-0 transition-all duration-300 hover:bg-white/30"
                      >
                        <span className="flex items-center gap-2">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          Quick View
                        </span>
                      </motion.button>
                    </div>
                  </div>
                  
                  {/* Product Info */}
                  <div className="p-5 relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-600 transition-all duration-300">
                      {product.name}
                    </h4>
                    <div className="flex items-center gap-3">
                      <span className="text-xl font-extrabold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                        {product.price}
                      </span>
                      <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
                    </div>
                    <div className="mt-3 flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Product Detail Modal */}
        <ProductModal 
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={closeProductModal}
        />
      </div>
    </section>
  );
};

export default ProductShowcase;
