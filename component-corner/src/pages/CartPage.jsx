import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

function CartPage({ cart, removeFromCart }) {
  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="page cart-section">
      <h2 className="section-title">Your Cart</h2>

      {cart.length > 0 ? (
        <div className="cart-list">
          {cart.map(item => (
            <CartItem
              key={item.cartId}
              item={item}
              onRemove={removeFromCart}
            />
          ))}
          <div className="cart-total">
            <span>Total</span>
            <span>${cartTotal.toFixed(2)} USD</span>
          </div>
        </div>
      ) : (
        <div className="cart-empty">
          <p>Your cart is empty.</p>
          <p className="cart-empty-sub">Add something from the Halo Collection to get started.</p>
          <Link to="/products" className="btn-dark">Shop Now</Link>
        </div>
      )}
    </div>
  );
}

export default CartPage;