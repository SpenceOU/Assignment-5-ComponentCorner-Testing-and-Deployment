import { Link } from 'react-router-dom';
import './ProductCard.css';

function ProductCard({ product, onAddToCart }) {
  const { id, name, price, image, description } = product;

  return (
    <div className="product-card">
      {/* Clicking the image or name opens the Product Details page */}
      <Link to={`/products/${id}`} className="product-link">
        <div className="product-image-wrap">
          <img src={image} alt={name} className="product-image" />
        </div>
        <div className="product-bar">
          <h3 className="product-name">{name}</h3>
          <p className="product-price">${price.toFixed(2)} USD</p>
        </div>
      </Link>
      <p className="product-description">{description}</p>
      <button className="add-to-cart-btn" onClick={() => onAddToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;