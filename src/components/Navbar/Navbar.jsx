import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <NavLink to="/">
          <h2>ShopEasy</h2>
        </NavLink>
      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search products..."
        />
      </div>

      <ul className="nav-links">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Products
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/wishlist"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            ❤️ Wishlist
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            🛒 Cart
          </NavLink>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;