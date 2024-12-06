import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setProduct(response.data);
    };

    fetchProduct();
  }, [id]);

  return (
    <div>
      <h2>Product Details</h2>
      {product && (
        <div>
          <h3>Name: {product.title}</h3>
          <p>Description: {product.description}</p>
          <p>Price: ${product.price}</p>
          <Link to={"/products"}> back</Link>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
