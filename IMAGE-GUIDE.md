# How to Get Free Images for Your Clothing Brand Website

## Best Free Stock Photo Websites

### 1. Unsplash (https://unsplash.com)
**Best for:** High-quality fashion photography
- ✅ Free for commercial use
- ✅ No attribution required (but appreciated)
- ✅ High resolution images
- 🔍 Search terms to try:
  - "fashion model"
  - "clothing brand"
  - "tshirt mockup"
  - "minimalist fashion"
  - "streetwear"
  - "elegant dress"
  - "casual wear"

**How to use:**
1. Go to unsplash.com
2. Search for your desired term
3. Click on image
4. Click "Download free"
5. Save to your project's `/public/images/` folder

---

### 2. Pexels (https://pexels.com)
**Best for:** Diverse fashion styles and models
- ✅ Free to use
- ✅ No attribution needed
- ✅ Great video content too
- 🔍 Search terms to try:
  - "fashion photoshoot"
  - "clothing store"
  - "apparel"
  - "wardrobe"
  - "outfit"
  - "designer clothes"

**How to use:**
1. Visit pexels.com
2. Use search bar
3. Select image size (Large or Original)
4. Download and add to your project

---

### 3. Pixabay (https://pixabay.com)
**Best for:** Product shots and lifestyle images
- ✅ Free for commercial use
- ✅ No attribution required
- ✅ Wide variety
- 🔍 Search terms to try:
  - "fashion"
  - "clothes hanger"
  - "boutique"
  - "clothing rack"
  - "textile"

---

### 4. Burst by Shopify (https://burst.shopify.com)
**Best for:** E-commerce specific images
- ✅ Built for online stores
- ✅ Free forever
- ✅ High-quality product photos
- 🔍 Categories:
  - Fashion & Clothing
  - Accessories
  - Footwear

---

## How to Add Images to Your Project

### Method 1: Using Public Folder

1. Create an images folder:
   ```
   public/
     images/
       hero-bg.jpg
       product-1.jpg
       product-2.jpg
   ```

2. Use in components:
   ```javascript
   <img src="/images/product-1.jpg" alt="Product" />
   ```

### Method 2: Import in Components

1. Save images in src folder:
   ```
   src/
     assets/
       images/
         product-1.jpg
   ```

2. Import and use:
   ```javascript
   import product1 from './assets/images/product-1.jpg';
   
   <img src={product1} alt="Product" />
   ```

---

## Recommended Image Sizes

- **Hero Section Background:** 1920x1080px
- **Product Showcase:** 800x800px (square)
- **Feature Icons:** 512x512px
- **Gallery Images:** 1200x800px

---

## Image Optimization Tips

1. **Compress images** before adding:
   - Use TinyPNG.com or ImageOptim
   - Aim for under 200KB per image

2. **Use WebP format** for better performance:
   - Convert JPG/PNG to WebP
   - Saves 25-35% file size

3. **Lazy loading**:
   ```javascript
   <img loading="lazy" src="..." alt="..." />
   ```

---

## Example Image Search Queries

For different sections of your site:

**Hero Section:**
- "minimalist fashion white background"
- "elegant clothing studio"
- "premium fashion brand"

**Product Showcase:**
- "white tshirt mockup"
- "black dress product photography"
- "denim jeans flatlay"

**Lifestyle/Features:**
- "person wearing casual clothes"
- "fashion lifestyle"
- "sustainable fashion"

**Background Textures:**
- "fabric texture"
- "marble background"
- "concrete wall"

---

## Legal Notes

✅ **You CAN:**
- Use for commercial projects
- Modify and edit
- Use without attribution (on most sites)

❌ **You CANNOT:**
- Sell the photos as-is
- Claim photos as your own
- Use recognizable people for endorsements without model release

---

## Pro Tips

1. **Consistent Style:** Choose images with similar color tones and lighting
2. **Brand Colors:** Look for images that match your color scheme
3. **Model Diversity:** Include diverse models to appeal to wider audience
4. **Quality Over Quantity:** 10 great images > 100 mediocre ones
5. **Backup Sources:** Save image URLs or download favorites

---

**Quick Start:** Go to Unsplash.com right now and search "minimalist clothing" to get started! 🎨
