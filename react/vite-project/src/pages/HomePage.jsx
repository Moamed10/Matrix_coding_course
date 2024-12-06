import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./HomePage.css";

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
    <div className="container">
      <h1>Product List</h1>
      <Link to={"/products/new"} className="add-product-link">
        Add New Product
      </Link>

      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.title}</td>
                <td>{product.description}</td>
                <td>${product.price}</td>
                <td className="actions">
                  <Link to={`/products/show/${product.id}`}>View</Link>
                  <Link to={`/products/edit/${product.id}`}>Edit</Link>
                  <button onClick={() => deleteProduct(product.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default HomePage;
