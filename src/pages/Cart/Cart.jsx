import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./Cart.css";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * 85 * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return <h1 className="empty-cart">Your Cart is Empty</h1>;
  }

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>

      {cartItems.map((item) => (
        <div className="cart-item" key={item.id}>
          <img src={item.thumbnail} alt={item.title} />

          <div className="cart-details">
            <h3>{item.title}</h3>

            <p>₹{Math.round(item.price * 85)}</p>

            <div className="quantity">
              <button onClick={() => decreaseQuantity(item.id)}>
                -
              </button>

              <span>{item.quantity}</span>

              <button onClick={() => increaseQuantity(item.id)}>
                +
              </button>
            </div>

            <button
              className="remove-btn"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <h2>Total : ₹{Math.round(total)}</h2>
    </div>
  );
}

export default Cart;