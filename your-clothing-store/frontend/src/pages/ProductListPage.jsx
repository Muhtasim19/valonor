import React from 'react';
import { useParams, useLocation } from 'react-router-dom'; // To get parameters from the URL
import './ProductListPage.css'; // We'll create this CSS file next

// Placeholder for a Product Card component (we'll build this properly soon)
const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-card-image-container">
        <img src={product.imageUrl} alt={product.name} className="product-card-image" />
        <div className="product-card-overlay">
          <button className="product-card-button">Select Options</button>
        </div>
      </div>
      <h3 className="product-card-name">{product.name}</h3>
      <p className="product-card-price">${product.price.toFixed(2)}</p>
    </div>
  );
};

function ProductListPage() {
  const { categorySlug } = useParams(); // For dynamic routes like /category/:categorySlug
  const location = useLocation(); // To get query parameters like /search?q=tshirt

  // Determine page title based on URL or query params
  let pageTitle = 'All Products';
  if (categorySlug) {
    pageTitle = categorySlug.replace(/-/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  } else if (location.pathname === '/men') {
    pageTitle = "Men's Clothing";
  } else if (location.pathname === '/women') {
    pageTitle = "Women's Clothing";
  } else if (location.pathname === '/new-arrivals') {
    pageTitle = "New Arrivals";
  } else if (location.pathname === '/sale') {
    pageTitle = "Sale Items";
  }

  // Placeholder product data (will come from Django API later)
  const products = [
    { id: 1, name: 'Classic Crew Neck T-Shirt', price: 29.99, imageUrl: 'https://via.placeholder.com/300x400/CCCCCC/000000?text=T-Shirt+1' },
    { id: 2, name: 'Slim Fit Jeans', price: 69.99, imageUrl: 'https://via.placeholder.com/300x400/999999/FFFFFF?text=Jeans+1' },
    { id: 3, name: 'Elegant Maxi Dress', price: 89.99, imageUrl: 'https://via.placeholder.com/300x400/AAAAAA/000000?text=Dress+1' },
    { id: 4, name: 'Polo Shirt', price: 45.00, imageUrl: 'https://via.placeholder.com/300x400/BBBBBB/000000?text=Polo+Shirt' },
    { id: 5, name: 'High-Waisted Trousers', price: 75.00, imageUrl: 'https://via.placeholder.com/300x400/DDDDDD/000000?text=Trousers' },
    { id: 6, name: 'Basic V-Neck Tee', price: 24.99, imageUrl: 'https://via.placeholder.com/300x400/EEEEEE/000000?text=V-Neck+Tee' },
    // Add more placeholder products if you like
  ];

  return (
    <div className="product-list-page">
      <header className="page-header">
        <h1>{pageTitle}</h1>
      </header>

      <div className="content-area">
        {/* Filters/Sidebar (will be more elaborate later) */}
        <aside className="filter-sidebar">
          <h3>Filters</h3>
          <div className="filter-group">
            <h4>Category</h4>
            <ul>
              <li><a href="#">T-Shirts</a></li>
              <li><a href="#">Pants</a></li>
              <li><a href="#">Dresses</a></li>
            </ul>
          </div>
          <div className="filter-group">
            <h4>Size</h4>
            {/* Placeholder for size checkboxes/buttons */}
            <p>S, M, L, XL, etc.</p>
          </div>
          <div className="filter-group">
            <h4>Color</h4>
            {/* Placeholder for color swatches */}
            <p>Black, White, Red, Blue</p>
          </div>
          {/* Add more filter groups as needed */}
        </aside>

        {/* Product Grid */}
        <section className="product-grid-container">
          <div className="sort-options">
            <span>Sort By: </span>
            <select>
              <option value="newest">Newest</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
          <div className="product-grid">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default ProductListPage;