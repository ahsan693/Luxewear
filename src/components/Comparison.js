import React from 'react';
import { motion } from 'framer-motion';

const Comparison = () => {
  const comparisonData = [
    {
      feature: 'Material Quality',
      luxewear: '100% Organic Cotton',
      competitor1: 'Mixed Synthetic',
      competitor2: 'Standard Cotton'
    },
    {
      feature: 'Sustainability',
      luxewear: 'Fully Sustainable',
      competitor1: 'Partially',
      competitor2: 'Not Certified'
    },
    {
      feature: 'Craftsmanship',
      luxewear: 'Hand-Finished',
      competitor1: 'Machine Made',
      competitor2: 'Mass Produced'
    },
    {
      feature: 'Comfort Level',
      luxewear: 'Premium Comfort',
      competitor1: 'Standard',
      competitor2: 'Basic'
    },
    {
      feature: 'Durability',
      luxewear: '5+ Years',
      competitor1: '2-3 Years',
      competitor2: '1-2 Years'
    },
    {
      feature: 'Price',
      luxewear: '$79',
      competitor1: '$59',
      competitor2: '$39'
    }
  ];

  return (
    <section id="compare" className="min-h-screen bg-white dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Why We're Different
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            See how LuxeWear stands out from the competition
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="overflow-x-auto"
        >
          <table className="w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
            <thead>
              <tr className="bg-gradient-to-r from-pink-500 to-purple-600 text-white">
                <th className="py-6 px-6 text-left text-lg font-semibold">Feature</th>
                <th className="py-6 px-6 text-center text-lg font-semibold">
                  <div className="flex items-center justify-center space-x-2">
                    <span>LuxeWear</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </th>
                <th className="py-6 px-6 text-center text-lg font-semibold">Competitor A</th>
                <th className="py-6 px-6 text-center text-lg font-semibold">Competitor B</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <td className="py-5 px-6 font-semibold text-gray-800 dark:text-white">
                    {row.feature}
                  </td>
                  <td className="py-5 px-6 text-center">
                    <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-medium">
                      {row.luxewear}
                    </span>
                  </td>
                  <td className="py-5 px-6 text-center text-gray-600 dark:text-gray-400">
                    {row.competitor1}
                  </td>
                  <td className="py-5 px-6 text-center text-gray-600 dark:text-gray-400">
                    {row.competitor2}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Premium quality at a fair price. Experience the LuxeWear difference.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-2xl transition-shadow"
          >
            Start Shopping
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Comparison;
