import './Header.css';

function Header({ storeName, cartCount }) {
  return (
    <header className="header">
      <div className="header-left">
        <span className="header-logo">{storeName}</span>
        <nav className="header-nav">
          <a href="#" className="nav-link active">Shop</a>
          <a href="#" className="nav-link">Contact</a>
          <a href="#" className="nav-link">FAQs</a>
          <a href="#" className="nav-link">About Us</a>
          <a href="#" className="nav-link">Catalog</a>
        </nav>
      </div>
      <div className="header-right">
        <a href="#" className="nav-link">Search</a>
        <a href="#" className="nav-link">Account</a>
        <div className="cart-container">
          <span className="cart-icon">🛒</span>
          <span className="cart-badge">{cartCount}</span>
        </div>
      </div>
    </header>
  );
}

export default Header;