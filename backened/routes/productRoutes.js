const express = require("express");
const router = express.Router();
const {
  addProduct,
  listProducts,
  productById,
} = require("../controllers/productController");

router.post("/addproduct", addProduct);
router.get("/allproducts", listProducts);
router.get("/product/:productId", productById);

module.exports = router;
