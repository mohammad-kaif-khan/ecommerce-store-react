import { useEffect, useState } from "react";
import api from "../../services/api";
import ProductCard from "../../components/ProductCard/ProductCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Products.css";

function Products() {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {

    async function getProducts() {

      try {

        const response = await api.get("/products");

        setProducts(response.data.products);
        setFilteredProducts(response.data.products);

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }

    }

    getProducts();

  }, []);

  useEffect(() => {

    const data = products.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredProducts(data);

  }, [search, products]);

  if (loading) {

    return <h2 className="loading">Loading Products...</h2>;

  }

  return (
    <>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <div className="products-container">

        {
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        }

      </div>

    </>
  );

}

export default Products;