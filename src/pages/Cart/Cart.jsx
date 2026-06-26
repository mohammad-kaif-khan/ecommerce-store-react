import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./Cart.css";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useContext(CartContext);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * 85 * item.quantity,
    0
  );

  const deliveryCharge = subtotal > 2000 ? 0 : 99;

  const discount = subtotal > 5000 ? 500 : 0;

  const grandTotal = subtotal + deliveryCharge - discount;

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <h1>🛒 Your Cart is Empty</h1>
        <p>Add some amazing products.</p>
      </div>
    );
  }

  return (
    <div className="cart-container">

      <div className="cart-left">

        {cartItems.map((item) => (

          <div className="cart-item" key={item.id}>

            <img src={item.thumbnail} alt={item.title} />

            <div className="cart-info">

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

      </div>

      <div className="cart-summary">

        <h2>Order Summary</h2>

        <div className="summary-row">
          <span>Subtotal</span>
          <span>₹{Math.round(subtotal)}</span>
        </div>

        <div className="summary-row">
          <span>Delivery</span>
          <span>
            {deliveryCharge === 0 ? "FREE" : `₹${deliveryCharge}`}
          </span>
        </div>

        <div className="summary-row">
          <span>Discount</span>
          <span>- ₹{discount}</span>
        </div>

        <hr />

        <div className="summary-row total">
          <span>Total</span>
          <span>₹{Math.round(grandTotal)}</span>
        </div>

        <button className="checkout-btn">
          Proceed To Checkout
        </button>

        <button
          className="clear-btn"
          onClick={clearCart}
        >
          Clear Cart
        </button>

      </div>

    </div>
  );
}

export default Cart;