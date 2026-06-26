import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/products" element={<h1>Products</h1>} />
        <Route path="/wishlist" element={<h1>Wishlist</h1>} />
        <Route path="/cart" element={<h1>Cart</h1>} />
      </Routes>
    </>
  );
}

export default App;