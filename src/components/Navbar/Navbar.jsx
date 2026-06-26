import { NavLink } from "react-router-dom";
import { FaShoppingCart, FaHeart, FaSearch } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./Navbar.css";

function Navbar() {
  const { cartItems = [] } = useContext(CartContext);

  const totalItems = Array.isArray(cartItems)
    ? cartItems.reduce((total, item) => total + item.quantity, 0)
    : 0;

  return (
    <nav className="navbar">
      <div className="logo">
        <NavLink to="/">ShopEasy</NavLink>
      </div>

      <div className="search-box">
        <FaSearch />
        <input type="text" placeholder="Search products..." />
      </div>

      <ul className="nav-links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/products">Products</NavLink>
        </li>

        <li>
          <NavLink to="/wishlist">
            <FaHeart />
          </NavLink>
        </li>

        <li className="cart-icon">
          <NavLink to="/cart">
            <FaShoppingCart />
          </NavLink>

          {totalItems > 0 && (
            <span className="cart-count">
              {totalItems}
            </span>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;