const Cart = require("../models/Cart");

//  Add to cart
exports.addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const cartItem = new Cart({ productId, quantity });
    await cartItem.save();
    res
      .status(200)
      .json({ message: "Item added to cart successfully", cartItem });
  } catch (error) {
    console.log("Error in adding in cart: ", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// updateCartItem
exports.updateCartItem = async (req, res) => {
  try {
    const { itemId } = req.params;
    const { quantity } = req.body;

    const updatedCartItem = await Cart.findByIdAndUpdate(
      itemId,
      { quantity },
      { new: true }
    );

    res.json(updatedCartItem);
  } catch (error) {
    console.error("Error in updating cart item: ", error);
    req.status(500).json({ error: "Internal server error" });
  }
};

// listCart;
exports.listCart = async (req, res) => {
  try {
    const cartitems = await Cart.find();
    res.json(cartitems);
  } catch (error) {
    console.error("Error in listing cart item: ", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
