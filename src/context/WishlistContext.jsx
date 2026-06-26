import { createContext, useEffect, useState } from "react";

export const WishlistContext = createContext();

function WishlistProvider({ children }) {
  const [wishlistItems, setWishlistItems] = useState(() => {
    try {
      const savedWishlist = localStorage.getItem("wishlist");

      if (!savedWishlist) return [];

      const parsed = JSON.parse(savedWishlist);

      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const addToWishlist = (product) => {
    const exist = wishlistItems.find((item) => item.id === product.id);

    if (exist) return;

    setWishlistItems([...wishlistItems, product]);
  };

  const removeFromWishlist = (id) => {
    setWishlistItems(
      wishlistItems.filter((item) => item.id !== id)
    );
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export default WishlistProvider;