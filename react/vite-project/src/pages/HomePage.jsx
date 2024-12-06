import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`https://fakestoreapi.com/products/${productId}`);

      setProducts((deletedproduct) =>
        deletedproduct.filter((product) => product.id !== productId)
      );
    } catch (error) {
      console.error("There was an error deleting the product:", error);
    }
  };

  return (
    <div>
      <h1>Product List</h1>
      <Link to={"/products/new"}>Add New Product</Link>

      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        products.map((product) => (
          <div key={product.id}>
            <h2>Product Name: {product.title}</h2>
            <p>Description: {product.description}</p>
            <p>Price: ${product.price}</p>
            <div>
              <Link to={`/products/show/${product.id}`}>View</Link>
              <br />
              <Link to={`/products/edit/${product.id}`}>Edit</Link>
              <br></br>
              <button onClick={() => deleteProduct(product.id)}>Delete</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default HomePage;
