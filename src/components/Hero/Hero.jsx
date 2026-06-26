import "./Hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <h1>Upgrade Your Style</h1>

        <p>
          Discover the latest fashion, electronics,
          beauty products and much more at the best prices.
        </p>

        <Link to="/products">
          <button>Shop Now</button>
        </Link>

      </div>

      <div className="hero-image">

        <img
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900"
          alt="Shopping"
        />

      </div>

    </section>
  );
}

export default Hero;