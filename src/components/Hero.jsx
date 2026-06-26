import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <h1>
          Discover Amazing Products
        </h1>

        <p>
          Shop the latest fashion, electronics, jewellery
          and much more at the best prices.
        </p>

        <button>
          Shop Now
        </button>

      </div>

      <div className="hero-right">

        <img
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600"
          alt="Hero"
        />

      </div>

    </section>
  );
}

export default Hero;