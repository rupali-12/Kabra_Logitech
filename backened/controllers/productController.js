const Product = require("../models/Product");

exports.addProduct = async (req, res) => {
  try {
    const { name, imagePath, description, quantity, unitPrice } = req.body;

    const newProduct = new Product({
      name,
      imagePath,
      description,
      quantity,
      unitPrice,
    });

    await newProduct.save();

    res
      .status(201)
      .json({ message: "Product added successfully", product: newProduct });
  } catch (error) {
    console.error("Error in adding product: ", error);
    res.status(500).json({ error: "Internal Server error" });
  }
};

// List product
exports.listProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.log("Error in listing product: ", error);
    res.status(500).json({ error: "Internal Server error" });
  }
};

// Product by ID
exports.productById = async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    console.error("Error fetching product details:", error);
    res.status(500).json({ error: "Server error" });
  }
};
