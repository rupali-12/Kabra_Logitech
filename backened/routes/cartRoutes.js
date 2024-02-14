// cartRoutes.js
const express = require("express");
const router = express.Router();
const {
  addToCart,
  updateCartItem,
  listCart,
} = require("../controllers/cartController");

// Import and define routes for the cart
router.post("/addtocart", addToCart);
router.put("/cart/:itemId", updateCartItem);
router.get("/allcartitem", listCart);

module.exports = router;
