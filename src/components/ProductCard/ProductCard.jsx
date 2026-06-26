import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { WishlistContext } from "../../context/WishlistContext";

import "./ProductCard.css";

function ProductCard({ product }) {

  const { addToCart } = useContext(CartContext);

  const { addToWishlist } = useContext(WishlistContext);

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
          {product.description.substring(0,60)}...
        </p>

        <div className="price-section">

          <span className="price">
            ₹{Math.round(product.price*85)}
          </span>

          <span>
            ⭐ {product.rating}
          </span>

        </div>

        <button
          onClick={() => addToCart(product)}
        >
          Add To Cart
        </button>

        <button
          className="wishlist-btn"
          onClick={() => addToWishlist(product)}
        >
          ❤️ Wishlist
        </button>

      </div>

    </div>
  );
}

export default ProductCard;