# Luxewear

A modern, visually stunning e-commerce clothing brand website built with React.js, featuring advanced 3D animations, smooth interactions, and a complete shopping experience.

## ✨ Features

- 🎨 **Modern 3D Animations** - Advanced Framer Motion animations with 3D transforms and perspective effects
- 🛍️ **Complete Shopping Experience** - Product showcase, detailed product modals, and fully functional shopping cart
- 🌓 **Dark Mode Support** - Seamless light/dark theme switching with persistent preferences
- 📱 **Fully Responsive** - Optimized for all devices from mobile to desktop
- 🎭 **Glassmorphism UI** - Modern design with backdrop blur and gradient effects
- 💳 **Shopping Cart** - Add to cart, manage quantities, and persist cart data in localStorage
- 🖼️ **Product Gallery** - Interactive product images with zoom and multiple views
- ⚡ **Performance Optimized** - Fast loading and smooth animations
- 🎯 **Category Filtering** - Filter products by Women's, Men's, Accessories, and Sale items

## 🚀 Tech Stack

- **React.js 18.2.0** - Modern UI library
- **Tailwind CSS 3.3.5** - Utility-first CSS framework
- **Framer Motion 10.16.4** - Production-ready animation library
- **React Context API** - State management for cart and theme
- **localStorage** - Client-side data persistence
   - High resolution

2. **Pexels** (https://pexels.com)
   - Search: "fashion model", "clothing brand", "streetwear"
   - Free to use, no attribution required
   - Great variety of styles

3. **Pixabay** (https://pixabay.com)
   - Search: "fashion", "clothes", "wardrobe"
   - Free for commercial use
   - Good selection

## � Installation

1. Clone the repository:
```bash
git clone https://github.com/ahsan693/Luxewear.git
cd Luxewear
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Build for Production

```bash
npm run build
```

The optimized production build will be created in the `build` folder.

## 📁 Project Structure

```
Luxewear/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js          # Navigation with cart and theme toggle
│   │   ├── Hero.js            # Hero section with 3D animations
│   │   ├── ProductShowcase.js # Filterable product grid
│   │   ├── ProductModal.js    # Product detail modal
│   │   ├── Cart.js            # Shopping cart sidebar
│   │   ├── Features.js        # Animated feature cards
│   │   ├── Comparison.js      # Product comparison
│   │   ├── CTA.js             # Call-to-action section
│   │   └── Footer.js          # Footer component
│   ├── contexts/
│   │   └── ThemeContext.js    # Dark/Light mode context
│   ├── context/
│   │   └── CartContext.js     # Shopping cart context
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

## 📱 Components

- **Navbar** - Navigation with cart icon and theme toggle
- **Hero** - Landing section with animated gradients and 3D effects
- **ProductShowcase** - 32 products across 4 categories (Women's, Men's, Accessories, Sale)
- **ProductModal** - Detailed product view with image gallery, size/color selection
- **Cart** - Sliding cart sidebar with quantity management and localStorage persistence
- **Features** - 6 animated feature cards with 3D effects
- **Comparison** - Product comparison section
- **CTA** - Call-to-action with gradient backgrounds
- **Footer** - Footer with links and information

## 🎨 Customization

### Products
Update product data in `src/components/ProductShowcase.js`:
```javascript
const products = {
  women: [
    { id: 1, name: 'Product Name', price: '$89', ... }
  ],
  // Add more products
}
```

### Colors
Modify gradients and colors in component files or `tailwind.config.js`.

### Theme
Theme configuration is in `src/contexts/ThemeContext.js`.

## 🌐 Deployment on Vercel

This project is optimized for **Vercel** deployment:

### Method 1: Deploy via GitHub (Recommended)

1. Push your code to GitHub (see commands below)
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Vercel will auto-detect Create React App settings
6. Click "Deploy"

### Method 2: Deploy via Vercel CLI

```bash
npm install -g vercel
vercel
```

**No additional configuration needed!** Vercel automatically:
- Detects it's a Create React App
- Uses `npm run build` command
- Serves from the `build` directory
- Handles all routing correctly

## 📸 Image Credits

All product images from [Unsplash](https://unsplash.com) - Free for commercial use.

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Ahsan**
- GitHub: [@ahsan693](https://github.com/ahsan693)

---

Made with ❤️ using React, Tailwind CSS, and Framer Motion

For questions or issues, feel free to customize this project to fit your needs.
