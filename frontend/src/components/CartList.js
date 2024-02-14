// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useSelector, useDispatch } from "react-redux";
// import { updateQuantity } from "../actions/cartActions";

// const CartList = () => {
//   //   const cartProducts = useSelector((state) => state.cart.products); // Update to access products instead of items
//   const [cartProducts, setCartProducts] = useState([]);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get("http://localhost:3000/api/allcartitem");
//       setCartProducts(response.data);
//     } catch (error) {
//       console.error("Error fetching cart products:", error);
//     }
//   };

//   const handleQuantityChange = (productId, newQuantity) => {
//     dispatch(updateQuantity(productId, newQuantity));
//   };

//   const totalPrice = cartProducts.reduce(
//     (total, product) => total + product.quantity * product.unitPrice,
//     0
//   );

//   return (
//     <div className="container mt-5">
//       <h1>Cart</h1>
//       <div>
//         {cartProducts.map((product) => (
//           <div key={product.productId}>
//             <h3>{product.name}</h3>
//             <p>Quantity: {product.quantity}</p>
//             <p>Unit Price: ${product.unitPrice}</p>
//             <input
//               type="number"
//               value={product.quantity}
//               onChange={(e) =>
//                 handleQuantityChange(
//                   product.productId,
//                   parseInt(e.target.value)
//                 )
//               }
//             />
//           </div>
//         ))}
//       </div>
//       <h3>Total Price: ${totalPrice}</h3>
//     </div>
//   );
// };

// export default CartList;

// *************************************************************************************************
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateQuantity } from "../actions/cartActions";

const CartList = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchCartProducts();
  }, []);

  const fetchCartProducts = async () => {
    try {
      // Fetch the IDs of products in the cart
      const response = await axios.get("http://localhost:3000/api/allcartitem");
      const cartItemIds = response.data.map((item) => item.productId);

      // Fetch details of products in the cart
      const productsData = await Promise.all(
        cartItemIds.map((productId) =>
          axios.get(`http://localhost:3000/api/product/${productId}`)
        )
      );

      // Combine cart items with product details
      const cartProductsData = productsData.map((response) => response.data);

      setCartProducts(cartProductsData);
    } catch (error) {
      console.error("Error fetching cart products:", error);
    }
  };

  const handleQuantityChange = (productId, newQuantity) => {
    dispatch(updateQuantity(productId, newQuantity));
  };

  const totalPrice = cartProducts.reduce(
    (total, product) => total + product.quantity * product.unitPrice,
    0
  );

  return (
    <div className="container mt-5">
      <h1>Cart</h1>
      <div className="row">
        {cartProducts.map((product) => (
          <div key={product.productId} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={product.imagePath}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Quantity: {product.quantity}</p>
                <p className="card-text">Unit Price: ${product.unitPrice}</p>
               
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3">
        <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default CartList;
