import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Cart from "./pages/Cart/Cart";
import Wishlist from "./pages/Wishlist/Wishlist";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/wishlist" element={<Wishlist />} />

        <Route path="/product/:id" element={<ProductDetails />} />

        <Route
          path="*"
          element={
            <h1
              style={{
                textAlign: "center",
                marginTop: "100px",
              }}
            >
              404 Page Not Found
            </h1>
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;