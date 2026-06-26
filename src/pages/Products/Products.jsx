import { useEffect, useState } from "react";
import api from "../../services/api";
import ProductCard from "../../components/ProductCard/ProductCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";
import SortProducts from "../../components/SortProducts/SortProducts";
import "./Products.css";

function Products() {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("all");

  const [sort, setSort] = useState("");

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

    let data = [...products];

    if (search) {

      data = data.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );

    }

    if (selectedCategory !== "all") {

      data = data.filter(
        (item) => item.category === selectedCategory
      );

    }

    if (sort === "low") {

      data.sort((a, b) => a.price - b.price);

    }

    if (sort === "high") {

      data.sort((a, b) => b.price - a.price);

    }

    setFilteredProducts(data);

  }, [products, search, selectedCategory, sort]);

  const categories = [...new Set(products.map((item) => item.category))];

  if (loading) {

    return <h2 className="loading">Loading Products...</h2>;

  }

  return (
    <>

      <div className="filter-bar">

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <SortProducts
          sort={sort}
          setSort={setSort}
        />

      </div>

      <div className="products-container">

        {filteredProducts.map((product) => (

          <ProductCard
            key={product.id}
            product={product}
          />

        ))}

      </div>

    </>
  );
}

export default Products;