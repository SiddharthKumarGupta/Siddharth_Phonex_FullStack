import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  FaCreditCard,
  FaMoneyBillWave,
  FaArrowLeft,
  FaLock,
  FaShieldAlt,
} from "react-icons/fa";
import {
    createOrder,
    createRazorpayOrder,
    verifyPayment
} from "../services/paymentService";

import { useCart } from "../context/CartContext";
import "../assets/css/payment.css";

export default function Payment() {
  const navigate = useNavigate();

  const { totalPrice } = useCart();

  const [paymentMethod, setPaymentMethod] = useState("cod");

 const handlePayment = async () => {

    try {

        // Step 1: Create Order
        const order = await createOrder();

        // COD
        if (paymentMethod === "cod") {

            await createCODPayment(order.order_id);

            navigate("/order-success");

            return;
        }

        // Razorpay
        const payment = await createRazorpayOrder(
            order.order_id
        );

        const options = {

            key: payment.key,

            amount: payment.amount,

            currency: payment.currency,

            order_id: payment.razorpay_order_id,

            name: "Siddharth Phonex",

            description: "Phone Purchase",

            handler: async function (response) {

                await verifyPayment({

                    razorpay_order_id:
                        response.razorpay_order_id,

                    razorpay_payment_id:
                        response.razorpay_payment_id,

                    razorpay_signature:
                        response.razorpay_signature,

                });

                navigate("/order-success");
            },

            theme: {
                color: "#2563eb",
            },

        };

        const razorpay = new window.Razorpay(options);

        razorpay.open();

    } catch (err) {

        console.error(err);

        alert("Payment Failed");

    }

};

  return (
    <div className="payment-page">

      <div className="payment-container">

        {/* Back Button */}

        <button
          className="payment-back-btn"
          onClick={() => navigate("/checkout")}
        >
          <FaArrowLeft />
          Back to Checkout
        </button>

        <h1>Choose Payment Method</h1>

        <p className="payment-subtitle">
          Select your preferred payment option to complete your order.
        </p>

        <div className="payment-layout">

          {/* LEFT SIDE */}

          <div className="payment-methods">

            <h2>Payment Options</h2>

            {/* COD */}

            <div
              className={`payment-option-card ${
                paymentMethod === "cod" ? "active" : ""
              }`}
              onClick={() => setPaymentMethod("cod")}
            >

              <div className="payment-icon cod-icon">
                <FaMoneyBillWave />
              </div>

              <div className="payment-option-content">

                <h3>Cash on Delivery</h3>

                <p>
                  Pay securely when your order is delivered to your address.
                </p>

              </div>

              <input
                type="radio"
                name="payment"
                checked={paymentMethod === "cod"}
                onChange={() => setPaymentMethod("cod")}
              />

            </div>

            {/* ONLINE PAYMENT */}

            <div
              className={`payment-option-card ${
                paymentMethod === "razorpay" ? "active" : ""
              }`}
              onClick={() => setPaymentMethod("razorpay")}
            >

              <div className="payment-icon online-icon">
                <FaCreditCard />
              </div>

              <div className="payment-option-content">

                <h3>Online Payment</h3>

                <p>
                  Pay using UPI, Credit Card, Debit Card or Net Banking.
                </p>

              </div>

              <input
                type="radio"
                name="payment"
                checked={paymentMethod === "razorpay"}
                onChange={() => setPaymentMethod("razorpay")}
              />

            </div>

            {/* SECURITY */}

            <div className="secure-payment">

              <FaShieldAlt />

              <div>

                <strong>100% Secure Payment</strong>

                <p>
                  Your payment information is encrypted and secure.
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="payment-summary">

            <h2>Order Summary</h2>

            <div className="payment-summary-row">

              <span>Subtotal</span>

              <span>
                ₹{totalPrice.toLocaleString()}
              </span>

            </div>

            <div className="payment-summary-row">

              <span>Delivery</span>

              <span className="free">
                FREE
              </span>

            </div>

            <hr />

            <div className="payment-total">

              <span>Total Amount</span>

              <strong>
                ₹{totalPrice.toLocaleString()}
              </strong>

            </div>

            <button
              className="pay-now-btn"
              onClick={handlePayment}
            >

              <FaLock />

              {paymentMethod === "cod"
                ? "Place Order"
                : "Continue to Payment"}

            </button>

            <p className="secure-text">

              <FaLock />

              Secure checkout powered by SiddharthPhonex

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}