import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Cart from "./pages/Cart/Cart";

function App() {

  return (
    <>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/products"
          element={<Products />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="/wishlist"
          element={
            <h1
              style={{
                textAlign:"center",
                marginTop:"80px"
              }}
            >
              Wishlist Page
            </h1>
          }
        />

        <Route
          path="*"
          element={
            <h1
              style={{
                textAlign:"center",
                marginTop:"80px"
              }}
            >
              404 Page
            </h1>
          }
        />

      </Routes>

    </>
  );

}

export default App;