import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  // Fetching products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      const BASE_URL = "https://fakestoreapi.com/products";
      try {
        const response = await axios.get(BASE_URL);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Function to delete a product
  const deleteProduct = async (id) => {
    const BASE_URL = `https://fakestoreapi.com/products/${id}`;

    // Optimistically remove the product from the UI
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);

    try {
      // Attempt to delete the product from the API
      await axios.delete(BASE_URL);
      console.log(`Product with ID ${id} deleted.`);
    } catch (error) {
      console.error("Error deleting product:", error);

      // If the delete fails, restore the product back to the list
      const originalProduct = await axios.get(BASE_URL); // Get the product back
      setProducts([...updatedProducts, originalProduct.data]);
    }
  };

  return (
    <div>
      <h1>Product List</h1>
      <table
        style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>${product.price}</td>
              <td>{product.description}</td>
              <td>
                <Link to={`/products/show/${product.id}`}>View</Link>
                <Link
                  to={`/products/edit/${product.id}`}
                  style={{ marginLeft: "10px" }}
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteProduct(product.id)}
                  style={{ marginLeft: "10px", color: "red" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/products/new">Add New Product</Link>
    </div>
  );
};

export default HomePage;
