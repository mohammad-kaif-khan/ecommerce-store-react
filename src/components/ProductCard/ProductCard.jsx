import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">

      <img
        src={product.image}
        alt={product.title}
      />

      <h3>{product.title}</h3>

      <p className="price">
        ₹ {(product.price * 85).toFixed(0)}
      </p>

      <button>
        Add To Cart
      </button>

    </div>
  );
}

export default ProductCard;