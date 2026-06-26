import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar/Navbar";

// Pages
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/products"
          element={
            <div
              style={{
                textAlign: "center",
                marginTop: "50px",
                fontSize: "30px",
              }}
            >
              Products Page
            </div>
          }
        />

        <Route
          path="/wishlist"
          element={
            <div
              style={{
                textAlign: "center",
                marginTop: "50px",
                fontSize: "30px",
              }}
            >
              Wishlist Page
            </div>
          }
        />

        <Route
          path="/cart"
          element={
            <div
              style={{
                textAlign: "center",
                marginTop: "50px",
                fontSize: "30px",
              }}
            >
              Cart Page
            </div>
          }
        />

        <Route
          path="*"
          element={
            <div
              style={{
                textAlign: "center",
                marginTop: "50px",
                fontSize: "30px",
              }}
            >
              404 Page Not Found
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;