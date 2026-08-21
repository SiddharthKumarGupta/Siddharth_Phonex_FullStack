import { Link } from "react-router-dom";
import { FaCheckCircle, FaShoppingBag } from "react-icons/fa";

import "../assets/css/order-success.css";

const OrderSuccess = () => {
  const order = JSON.parse(
    localStorage.getItem("latestOrder")
  );

  if (!order) {
    return (
      <div className="success-page">
        <h2>No order found</h2>

        <Link to="/">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="success-page">

      <div className="success-card">

        <FaCheckCircle className="success-icon" />

        <h1>Order Placed Successfully!</h1>

        <p>
          Thank you for shopping with SiddharthPhonex.
        </p>

        <div className="order-info">

          <p>
            <strong>Order ID:</strong>
            <span>{order.id}</span>
          </p>

          <p>
            <strong>Status:</strong>
            <span className="status-pending">
              {order.status}
            </span>
          </p>

          <p>
            <strong>Payment:</strong>
            <span>
              {order.paymentMethod === "cod"
                ? "Cash on Delivery"
                : "Online Payment"}
            </span>
          </p>

          <p>
            <strong>Total:</strong>
            <span>
              ₹{order.total.toLocaleString()}
            </span>
          </p>

        </div>

        {/* ORDER TRACKING */}

        <div className="order-tracking">

          <h3>Order Tracking</h3>

          <div className="tracking-step active">
            <div className="step-circle">✓</div>

            <div>
              <strong>Order Placed</strong>
              <p>Your order has been placed successfully.</p>
            </div>
          </div>

          <div className="tracking-step">
            <div className="step-circle">2</div>

            <div>
              <strong>Order Confirmed</strong>
              <p>Waiting for order confirmation.</p>
            </div>
          </div>

          <div className="tracking-step">
            <div className="step-circle">3</div>

            <div>
              <strong>Processing</strong>
              <p>Your order will be prepared soon.</p>
            </div>
          </div>

          <div className="tracking-step">
            <div className="step-circle">4</div>

            <div>
              <strong>Shipped</strong>
              <p>Your order will be shipped.</p>
            </div>
          </div>

          <div className="tracking-step">
            <div className="step-circle">5</div>

            <div>
              <strong>Delivered</strong>
              <p>Your order will be delivered.</p>
            </div>
          </div>

        </div>

        <div className="success-actions">

          <Link
            to="/"
            className="continue-btn"
          >
            <FaShoppingBag />
            Continue Shopping
          </Link>

          <Link
            to="/orders"
            className="orders-btn"
          >
            View Orders
          </Link>

        </div>

      </div>

    </div>
  );
};

export default OrderSuccess;