
import { Link, useNavigate } from "react-router-dom";
import { FaTrash, FaPlus, FaMinus, FaArrowLeft } from "react-icons/fa";
import { useCart } from "../context/CartContext";

import "../assets/css/cart.css";

const Cart = () => {

  const navigate = useNavigate();

  const {
    cart,

    increaseQty,
    decreaseQty,
    removeFromCart,
    totalPrice,
  } = useCart();

  if (cart.length === 0) {
    return (
      <div className="empty-cart">

        <img
          src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
          alt="Empty Cart"
        />

        <h2>Your Cart is Empty</h2>

        <p>Add your favourite products to continue shopping.</p>

        <Link to="/" className="shop-btn">
          <FaArrowLeft /> Continue Shopping
        </Link>

      </div>
    );
  }

  return (
    <div className="cart-page container py-5">

      <div className="row">

        {/* LEFT */}

        <div className="col-lg-8">

          <h2 className="mb-4">
            Shopping Cart
          </h2>

          {cart.map((item) => (

            <div className="cart-item" key={item.id}>

              <img src={item.image} alt={item.name} />

              <div className="cart-info">

                <h4>{item.name}</h4>

                <p className="price">
                  ₹{item.price.toLocaleString()}
                </p>

                <div className="quantity">

                  <button
                   onClick={() => decreaseQty(item.id, item.quantity)}
                   >
                    <FaMinus />
                  </button>

                  <span>{item.quantity}</span>

                  <button
                   onClick={() => increaseQty(item.id, item.quantity)}
                  >
                    <FaPlus />
                  </button>

                </div>

              </div>

              <div className="cart-right">

                <h4>
                  ₹{(item.price * item.quantity).toLocaleString()}
                </h4>

                <button
                  className="delete-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  <FaTrash />
                </button>

              </div>

            </div>

          ))}

        </div>

        {/* RIGHT */}

        <div className="col-lg-4">

          <div className="summary-card">

            <h3>Order Summary</h3>

            <div className="summary-row">
              <span>Items</span>
              <span>{cart.length}</span>
            </div>

            <div className="summary-row">
              <span>Delivery</span>
              <span>FREE</span>
            </div>

            <hr />

            <div className="summary-total">
              <span>Total</span>
              <span>₹{totalPrice.toLocaleString()}</span>
            </div>

            {/* OPTION 1 */}

            <button
              className="checkout-btn"
              onClick={() => navigate("/checkout")}
            >
              Proceed to Checkout
            </button>

            {/* OPTION 2 (Alternative)
            <Link
              to="/checkout"
              className="checkout-btn"
            >
              Proceed to Checkout
            </Link>
            */}

          </div>

        </div>

      </div>

    </div>
  );
};

export default Cart;