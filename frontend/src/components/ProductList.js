// ProductList.js

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/allproducts");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleAddToCart = (productId) => {
    setSelectedProduct(productId);
  };

  const handleSubmit = () => {
    // Check if quantity is a valid number
    if (!isNaN(quantity) && quantity > 0) {
      dispatch(addToCart(selectedProduct, quantity));
      setSelectedProduct(null);
      setQuantity(1); // Reset selected product and quantity after adding to cart
    } else {
      alert("Please enter a valid quantity.");
    }
  };

  return (
    <div className="container mt-5">
      <h1>Product List</h1>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product._id}>
            <div className="card">
              <img
                src={product.imagePath}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">{product.unitPrice}</p>
                {selectedProduct === product._id && (
                  <div className="form-group">
                    <label htmlFor="quantity">Quantity:</label>
                    <input
                      type="number"
                      className="form-control"
                      id="quantity"
                      value={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value))}
                    />
                  </div>
                )}
                <button
                  className="btn btn-primary"
                  onClick={() => handleAddToCart(product._id)}
                >
                  Add to Cart
                </button>
                {selectedProduct === product._id && (
                  <button
                    className="btn btn-success ml-2"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
