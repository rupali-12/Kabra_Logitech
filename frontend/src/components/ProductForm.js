import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../actions/productActions";

const ProductForm = () => {
  const dispatch = useDispatch();

  const [productData, setProductData] = useState({
    name: "",
    imagePath: "",
    description: "",
    quantity: 0,
    unitPrice: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(productData));
    setProductData({
      name: "",
      imagePath: "",
      description: "",
      quantity: 0,
      unitPrice: 0,
    });
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Create Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="name">Product Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={productData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="imagePath">Product Image</label>
          <input
            type="text"
            className="form-control"
            id="imagePath"
            name="imagePath"
            value={productData.imagePath}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={productData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            className="form-control"
            id="quantity"
            name="quantity"
            value={productData.quantity}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="unitPrice">Unit Price</label>
          <input
            type="number"
            className="form-control"
            id="unitPrice"
            name="unitPrice"
            value={productData.unitPrice}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mb-3 ">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
