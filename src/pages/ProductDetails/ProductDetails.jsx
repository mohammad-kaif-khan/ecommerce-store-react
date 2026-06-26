import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../../services/api";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await api.get(`/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchProduct();
  }, [id]);

  if (!product) {
    return <h2 className="loading">Loading...</h2>;
  }

  return (
    <div className="details-container">
      <div className="details-image">
        <img src={product.thumbnail} alt={product.title} />
      </div>

      <div className="details-content">
        <h1>{product.title}</h1>

        <p className="brand">{product.brand}</p>

        <p className="category">{product.category}</p>

        <h2>₹{Math.round(product.price * 85)}</h2>

        <p>{product.description}</p>

        <p>⭐ {product.rating}</p>

        <Link to="/products">
          <button>Back To Products</button>
        </Link>
      </div>
    </div>
  );
}

export default ProductDetails;