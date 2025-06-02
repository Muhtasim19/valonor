import React, { useState, useEffect, useCallback } from 'react'; // Import useCallback
import { useParams } from 'react-router-dom';
import './ProductDetailPage.css';

function ProductDetailPage() {
  const { slug } = useParams(); // Keep slug as it will be used for API calls later

  // Placeholder product data (will eventually come from Django API)
  // For demonstration, we'll imagine 'slug' is used to select a product.
  // For now, it defaults to the first product.
  const allProductsData = [
    {
      id: 101,
      name: 'Classic Crew Neck T-Shirt',
      slug: 'classic-crew-neck-t-shirt',
      description: 'Our timeless classic crew neck t-shirt, crafted from 100% premium, breathable cotton for ultimate comfort and enduring style. A versatile essential for any wardrobe, perfect for layering or wearing on its own.',
      brand: 'VALONOR',
      category: "Men's T-Shirts",
      gender_suitability: 'Men',
      material: '100% Premium Cotton',
      wash_instructions: 'Machine wash cold, tumble dry low. Do not bleach.',
      fit_guide: 'True to size. Model is 6\'0" (183 cm) and wearing a size M.',
      images: [
        { id: 1, url: 'https://via.placeholder.com/600x800/AAAAAA/FFFFFF?text=T-Shirt+White', alt: 'Classic T-Shirt White' },
        { id: 2, url: 'https://via.placeholder.com/600x800/BBBBBB/FFFFFF?text=T-Shirt+Back', alt: 'Classic T-Shirt Back' },
        { id: 3, url: 'https://via.placeholder.com/600x800/CCCCCC/000000?text=T-Shirt+Detail', alt: 'Fabric Detail' },
        { id: 4, url: 'https://via.placeholder.com/600x800/000000/FFFFFF?text=T-Shirt+Black', alt: 'Classic T-Shirt Black' },
        { id: 5, url: 'https://via.placeholder.com/600x800/0000FF/FFFFFF?text=T-Shirt+Blue', alt: 'Classic T-Shirt Blue' },
      ],
      variants: [
        { id: 201, color: 'White', size: 'S', sku: 'TCC-WH-S', price: 29.99, stock_quantity: 50, image_id: 1 },
        { id: 202, color: 'White', size: 'M', sku: 'TCC-WH-M', price: 29.99, stock_quantity: 75, image_id: 1 },
        { id: 203, color: 'White', size: 'L', sku: 'TCC-WH-L', price: 29.99, stock_quantity: 60, image_id: 1 },
        { id: 204, color: 'Black', size: 'S', sku: 'TCC-BK-S', price: 32.99, stock_quantity: 30, image_id: 4 },
        { id: 205, color: 'Black', size: 'M', sku: 'TCC-BK-M', price: 32.99, stock_quantity: 45, image_id: 4 },
        { id: 206, color: 'Black', size: 'L', sku: 'TCC-BK-L', price: 32.99, stock_quantity: 40, image_id: 4 },
        { id: 207, color: 'Blue', size: 'M', sku: 'TCC-BL-M', price: 34.99, stock_quantity: 10, image_id: 5 },
        { id: 208, color: 'Blue', size: 'L', sku: 'TCC-BL-L', price: 34.99, stock_quantity: 0, image_id: 5 }, // Out of stock example
      ],
    },
    // Add more product objects here if you want to test different slugs
    // { id: 102, name: 'Another Product', slug: 'another-product', ... }
  ];

  // Find the product based on the slug (for future API integration)
  const product = allProductsData.find(p => p.slug === slug) || allProductsData[0]; // Default to first product if slug not found

  // State for selected color and size
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [currentPrice, setCurrentPrice] = useState(product.variants[0].price);
  const [currentStock, setCurrentStock] = useState(0);
  const [mainImage, setMainImage] = useState(product.images[0].url);

  // Derive available colors and sizes
  const availableColors = Array.from(new Set(product.variants.map(v => v.color)));
  const availableSizesOrdered = Array.from(new Set(product.variants.map(v => v.size))) // Get all unique sizes
    .sort((a, b) => { // Sort sizes in a common order (S, M, L, XL)
      const order = ['XS', 'S', 'M', 'L', 'XL', 'XXL']; // Define your preferred size order
      return order.indexOf(a) - order.indexOf(b);
    });


  // Function to filter available sizes based on selected color (memoized with useCallback)
  const getAvailableSizesForColor = useCallback((color) => {
    return Array.from(
      new Set(
        product.variants
          .filter(v => v.color === color && v.stock_quantity > 0)
          .map(v => v.size)
      )
    ).sort((a, b) => availableSizesOrdered.indexOf(a) - availableSizesOrdered.indexOf(b)); // Keep original order
  }, [product.variants, availableSizesOrdered]); // Dependencies for useCallback

  // Function to check if a specific size is available for the currently selected color
  const isSizeAvailable = useCallback((size) => {
    if (!selectedColor) return false; // Cannot check if no color is selected
    const variant = product.variants.find(v => v.color === selectedColor && v.size === size);
    return variant && variant.stock_quantity > 0;
  }, [selectedColor, product.variants]); // Dependencies for useCallback

  // Effect to update main image and price/stock based on selections
  useEffect(() => {
    // If no color selected yet, or if the selected color becomes unavailable (e.g., after filter change),
    // default to the first variant's image and price.
    if (!selectedColor || !availableColors.includes(selectedColor)) {
      setSelectedColor(product.variants[0].color);
    }
    // If selected size is not available for the current color, reset it.
    if (selectedColor && selectedSize && !getAvailableSizesForColor(selectedColor).includes(selectedSize)) {
        setSelectedSize('');
    }

    // Update main image based on selected color (if color has a specific image)
    const imageForSelectedColor = product.images.find(img =>
      product.variants.some(v => v.color === selectedColor && v.image_id === img.id)
    );
    setMainImage(imageForSelectedColor ? imageForSelectedColor.url : product.images[0].url);


    // Update price and stock based on both color and size selection
    const selectedVariant = product.variants.find(
      v => v.color === selectedColor && v.size === selectedSize
    );

    if (selectedVariant) {
      setCurrentPrice(selectedVariant.price);
      setCurrentStock(selectedVariant.stock_quantity);
    } else {
      // If no full match, reset stock/price (or show default)
      setCurrentPrice(product.variants[0].price); // Default to first variant's price
      setCurrentStock(0); // Assume out of stock if no valid variant selected
    }

  }, [selectedColor, selectedSize, product, availableColors, getAvailableSizesForColor]); // Added dependencies

  // Handle initial selection when product loads
  useEffect(() => {
    if (product && !selectedColor) {
      setSelectedColor(product.variants[0].color);
    }
  }, [product, selectedColor]); // Run once when product changes or initially



  if (!product) {
    return <h1 style={{ padding: '100px', textAlign: 'center' }}>Product not found!</h1>;
  }

  return (
    <div className="product-detail-page">
      <div className="product-content-wrapper">
        {/* Left Column: Image Gallery */}
        <div className="product-images">
          <div className="main-image">
            <img src={mainImage} alt={product.name} />
          </div>
          <div className="thumbnail-gallery">
            {product.images.map(image => (
              <img
                key={image.id}
                src={image.url}
                alt={image.alt}
                className={`thumbnail ${mainImage === image.url ? 'active' : ''}`}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>
        </div>

        {/* Right Column: Product Info & Actions */}
        <div className="product-info">
          <h1 className="product-name">{product.name}</h1>
          <p className="product-brand">{product.brand}</p>
          <p className="product-price">${currentPrice.toFixed(2)}</p>

          {/* Color Selector */}
          <div className="product-options">
            <h4 className="option-label">Color: <span className="selected-option-value">{selectedColor || 'Select'}</span></h4>
            <div className="color-swatches">
              {availableColors.map(color => (
                <div
                  key={color}
                  // Added a check for 'White' to apply a specific border
                  className={`color-swatch ${selectedColor === color ? 'selected' : ''} ${color === 'White' ? 'white-swatch' : ''}`}
                  style={{ backgroundColor: color.toLowerCase() }} // Basic color swatch
                  onClick={() => {
                    setSelectedColor(color);
                    setSelectedSize(''); // Reset size when color changes
                  }}
                  title={color}
                ></div>
              ))}
            </div>
          </div>

          {/* Size Selector */}
          <div className="product-options">
            <h4 className="option-label">Size: <span className="selected-option-value">{selectedSize || 'Select'}</span></h4>
            <div className="size-buttons">
              {availableSizesOrdered.map(size => ( // Use the ordered sizes
                <button
                  key={size}
                  className={`size-button ${selectedSize === size ? 'selected' : ''} ${!isSizeAvailable(size) ? 'disabled' : ''}`}
                  onClick={() => isSizeAvailable(size) && setSelectedSize(size)}
                  disabled={!isSizeAvailable(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Stock Availability */}
          <p className="stock-info">
            {currentStock > 0 ? (
              currentStock < 10 && selectedColor && selectedSize ? (
                <span className="low-stock">Only {currentStock} left in stock!</span>
              ) : (
                <span className="in-stock">In Stock</span>
              )
            ) : (
              <span className="out-of-stock">Out of Stock</span>
            )}
          </p>

          {/* Add to Cart Button */}
          <button
            className="add-to-cart-button"
            disabled={!selectedColor || !selectedSize || currentStock === 0}
            onClick={() => alert(`Added ${selectedColor} ${selectedSize} ${product.name} to cart!`)}
          >
            Add to Cart
          </button>

          {/* Product Details/Accordion Tabs */}
          <div className="product-details-tabs">
            <h4 className="tab-title">Description</h4>
            <p className="tab-content">{product.description}</p>

            <h4 className="tab-title">Material & Care</h4>
            <p className="tab-content">
              Material: {product.material}<br/>
              Wash Instructions: {product.wash_instructions}
            </p>

            <h4 className="tab-title">Size & Fit Guide</h4>
            <p className="tab-content">
              {product.fit_guide}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;