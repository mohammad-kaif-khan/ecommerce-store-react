import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">

      <div className="product-image">

        <img
          src={product.thumbnail}
          alt={product.title}
        />

      </div>

      <div className="product-info">

        <h3>{product.title}</h3>

        <p className="category">
          {product.category}
        </p>

        <p className="description">
          {product.description.substring(0, 60)}...
        </p>

        <div className="price-section">

          <span className="price">
            ₹{Math.round(product.price * 85)}
          </span>

          <span className="rating">
            ⭐ {product.rating}
          </span>

        </div>

        <button>
          Add To Cart
        </button>

      </div>

    </div>
  );
}

export default ProductCard;