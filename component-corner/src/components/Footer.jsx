import './Footer.css';

function Footer({ storeName, email, year }) {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-col">
          <p className="footer-brand">{storeName}</p>
          <p className="footer-text">Contact: {email}</p>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Policies</h4>
          <a href="#" className="footer-link">Refund Policy</a>
          <a href="#" className="footer-link">Privacy Policy</a>
          <a href="#" className="footer-link">Terms of Service</a>
          <a href="#" className="footer-link">Shipping Policy</a>
        </div>

        <div className="footer-col">
          <h4 className="footer-community">★ Join the Community ★</h4>
          <div className="footer-signup">
            <input type="email" placeholder="Email address" className="footer-input" />
            <button className="footer-submit">→</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>Terms and Policies</span>
        <span>© {year} {storeName}</span>
        <span>Instagram · TikTok</span>
      </div>
    </footer>
  );
}

export default Footer;