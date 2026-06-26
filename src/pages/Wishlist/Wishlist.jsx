import { useContext } from "react";
import { WishlistContext } from "../../context/WishlistContext";
import ProductCard from "../../components/ProductCard/ProductCard";

function Wishlist() {

  const { wishlistItems } = useContext(WishlistContext);

  if (wishlistItems.length === 0) {
    return (
      <h1
        style={{
          textAlign: "center",
          marginTop: "100px",
        }}
      >
        ❤️ Wishlist Empty
      </h1>
    );
  }

  return (
    <div className="products-container">

      {wishlistItems.map((product) => (

        <ProductCard
          key={product.id}
          product={product}
        />

      ))}

    </div>
  );
}

export default Wishlist;