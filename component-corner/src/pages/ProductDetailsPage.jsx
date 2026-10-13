import { useParams, Link } from 'react-router-dom';
import './ProductDetailsPage.css';

function ProductDetailsPage({ products, addToCart }) {
  // Grab the :id from the URL, e.g. /products/3 -> "3"
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  // Conditional rendering if someone types an id that doesn't exist
  if (!product) {
    return (
      <div className="page cart-section">
        <div className="cart-empty">
          <p>Product not found.</p>
          <Link to="/products" className="btn-dark">Back to Shop</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page details-page">
      <Link to="/products" className="details-back">← Back to Shop</Link>
      <div className="details-layout">
        <img src={product.image} alt={product.name} className="details-image" />
        <div className="details-info">
          <h1 className="details-name">{product.name}</h1>
          <p className="details-price">${product.price.toFixed(2)} USD</p>
          <p className="details-description">{product.description}</p>
          <button className="details-btn" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;