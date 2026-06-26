import { useEffect, useState } from "react";
import api from "../../services/api";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Products.css";

function Products() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function getProducts(){

      try{

        const response=await api.get("/products");

        setProducts(response.data.products);

      }

      catch(error){

        console.log(error);

      }

      finally{

        setLoading(false);

      }

    }

    getProducts();

  },[]);

  if(loading){

    return <h1 className="loading">Loading Products...</h1>

  }

  return(

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

  )

}

export default Products;