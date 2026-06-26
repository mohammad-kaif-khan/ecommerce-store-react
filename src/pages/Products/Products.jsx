import { useEffect, useState } from "react";
import api from "../../services/api";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Products.css";

function Products() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function fetchProducts() {

      try {

        const response = await api.get("/products");

        setProducts(response.data);

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }

    }

    fetchProducts();

  }, []);

  if (loading) {

    return <h2 className="loading">Loading...</h2>;

  }

  return (

    <div className="products-container">

      {
        products.map((product)=>(
          <ProductCard
          key={product.id}
          product={product}
          />
        ))
      }

    </div>

  );

}

export default Products;