import { Link, NavLink } from 'react-router-dom';
import './Header.css';

function Header({ storeName, cartCount }) {
  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="header-logo">{storeName}</Link>
        {/* Step 6: Link components instead of <a> tags. NavLink adds the "active" class automatically */}
        <nav className="header-nav">
          <NavLink to="/" end className="nav-link">Home</NavLink>
          <NavLink to="/products" className="nav-link">Shop</NavLink>
          <NavLink to="/cart" className="nav-link">Cart</NavLink>
        </nav>
      </div>
      <div className="header-right">
        {/* Step 6: cart icon links to /cart */}
        <Link to="/cart" className="cart-container">
          <span className="cart-icon">🛒</span>
          <span className="cart-badge">{cartCount}</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;