import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cartItems,
    cartTotal,
    updateQuantity,
    removeFromCart,
  } = useCart();

  return (
    <div>
      <h1>Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id}>
              
              <h3>{item.name}</h3>

              <p>Price: ₹{item.price}</p>

              <p>Quantity: {item.quantity}</p>

              <button
                onClick={() =>
                  updateQuantity(item.id, item.quantity - 1)
                }
              >
                -
              </button>

              <button
                onClick={() =>
                  updateQuantity(item.id, item.quantity + 1)
                }
              >
                +
              </button>

              <button
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>

              <hr />

            </div>
          ))}

          <h2>Total: ₹{cartTotal}</h2>
        </>
      )}
    </div>
  );
}

export default Cart;