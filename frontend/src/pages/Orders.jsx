import { Link } from "react-router-dom";

import {
  FaBoxOpen,
  FaCheckCircle,
  FaClock,
  FaArrowLeft,
} from "react-icons/fa";

import "../assets/css/orders.css";

const Orders = () => {

  const savedOrder =
    localStorage.getItem("latestOrder");


  const order = savedOrder
    ? JSON.parse(savedOrder)
    : null;


  if (!order) {

    return (

      <div className="empty-orders">

        <FaBoxOpen />

        <h2>No Orders Yet</h2>

        <p>
          Your placed orders will appear here.
        </p>


        <Link
          to="/"
          className="orders-shop-btn"
        >

          <FaArrowLeft />

          Start Shopping

        </Link>

      </div>

    );

  }


  return (

    <div className="orders-page">

      <div className="orders-container">

        <div className="orders-title">

          <h1>📦 My Orders</h1>

          <p>
            Track and manage your orders
          </p>

        </div>


        <div className="order-card">

          {/* HEADER */}

          <div className="order-header">

            <div>

              <h3>
                Order #{order.id}
              </h3>

              <p>

                Placed on{" "}

                {new Date(
                  order.createdAt
                ).toLocaleDateString()}

              </p>

            </div>


            <span className="order-status">

              <FaClock />

              {order.status}

            </span>

          </div>


          {/* PRODUCTS */}

          <div className="order-products">

            {order.products.map((product) => (

              <div
                className="order-product"
                key={product.id}
              >

                <img
                  src={product.image}
                  alt={product.name}
                />


                <div className="order-product-info">

                  <h4>
                    {product.name}
                  </h4>

                  <p>
                    Quantity: {product.quantity}
                  </p>

                  <strong>
                    ₹{(
                      product.price *
                      product.quantity
                    ).toLocaleString()}
                  </strong>

                </div>

              </div>

            ))}

          </div>


          {/* ORDER FOOTER */}

          <div className="order-footer">

            <div>

              <span>Payment</span>

              <strong>
                {order.paymentMethod === "cod"
                  ? "Cash on Delivery"
                  : "Online Payment"}
              </strong>

            </div>


            <div>

              <span>Total Amount</span>

              <strong className="order-total">

                ₹{order.total.toLocaleString()}

              </strong>

            </div>

          </div>


          {/* STATUS */}

          <div className="order-progress">

            <div className="progress-step active">

              <FaCheckCircle />

              <span>Order Placed</span>

            </div>


            <div className="progress-line"></div>


            <div className="progress-step">

              <FaBoxOpen />

              <span>Processing</span>

            </div>


            <div className="progress-line"></div>


            <div className="progress-step">

              <FaCheckCircle />

              <span>Delivered</span>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

};


export default Orders;