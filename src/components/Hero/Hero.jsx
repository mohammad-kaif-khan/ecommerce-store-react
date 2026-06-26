import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <span className="offer">
          🔥 New Collection 2026
        </span>

        <h1>
          Best Online Shopping Website
        </h1>

        <p>
          Buy Electronics, Fashion, Jewellery and
          Men's & Women's Clothing at the best price.
        </p>

        <button className="shop-btn">
          Shop Now
        </button>

      </div>

      <div className="hero-image">

        <img
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700"
          alt="Shopping"
        />

      </div>

    </section>
  );
}

export default Hero;