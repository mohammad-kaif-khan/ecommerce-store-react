import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-box">
          <h2>ShopEasy</h2>
          <p>
            Modern React E-commerce website built using
            React, Context API and DummyJSON API.
          </p>
        </div>

        <div className="footer-box">
          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/cart">Cart</a>
        </div>

        <div className="footer-box">
          <h3>Contact</h3>

          <p>Indore, India</p>
          <p>example@gmail.com</p>
        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 ShopEasy | Built with React
      </p>

    </footer>
  );
}

export default Footer;