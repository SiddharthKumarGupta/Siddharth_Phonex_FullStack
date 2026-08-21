import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaMapMarkerAlt,
  FaCreditCard,
  FaArrowLeft,
} from "react-icons/fa";

import { useCart } from "../context/CartContext";

import "../assets/css/checkout.css";


const Checkout = () => {

  const navigate = useNavigate();

  const {
    cart,
    totalPrice,
    clearCart,
  } = useCart();


  const [formData, setFormData] = useState({

    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",

  });


  const [paymentMethod, setPaymentMethod] = useState("cod");


  const handleChange = (e) => {

    const {
      name,
      value,
    } = e.target;


    setFormData((prev) => ({

      ...prev,

      [name]: value,

    }));

  };


  const handlePlaceOrder = (e) => {

    e.preventDefault();


    const order = {

      id: `ORD-${Date.now()}`,

      customer: formData,

      products: cart,

      total: totalPrice,

      paymentMethod,

      status: "Pending",

      createdAt: new Date().toISOString(),

    };


    localStorage.setItem(

      "latestOrder",

      JSON.stringify(order)

    );


    clearCart();


    navigate("/order-success");

  };


  if (cart.length === 0) {

    return (

      <div className="empty-checkout">

        <h2>Your cart is empty</h2>


        <button

          className="back-shop-btn"

          onClick={() => navigate("/")}

        >

          Continue Shopping

        </button>

      </div>

    );

  }


  return (

    <div className="checkout-page">


      <div className="checkout-container">


        {/* BACK TO CART */}

        <button

          className="back-btn"

          onClick={() => navigate("/cart")}

        >

          <FaArrowLeft />

          Back to Cart

        </button>


        <h1>Checkout</h1>


        <div className="checkout-layout">


          {/* ================= LEFT SIDE ================= */}

          <div className="checkout-left">


            <form onSubmit={handlePlaceOrder}>


              {/* DELIVERY DETAILS */}

              <div className="checkout-card">


                <div className="section-title">

                  <FaMapMarkerAlt />

                  <h2>Delivery Details</h2>

                </div>


                <div className="form-grid">


                  {/* NAME */}

                  <div className="form-group">

                    <label>

                      Full Name

                    </label>


                    <input

                      type="text"

                      name="name"

                      placeholder="Enter your full name"

                      value={formData.name}

                      onChange={handleChange}

                      required

                    />

                  </div>


                  {/* EMAIL */}

                  <div className="form-group">

                    <label>

                      Email Address

                    </label>


                    <input

                      type="email"

                      name="email"

                      placeholder="example@gmail.com"

                      value={formData.email}

                      onChange={handleChange}

                      required

                    />

                  </div>


                  {/* PHONE */}

                  <div className="form-group">

                    <label>

                      Phone Number

                    </label>


                    <input

                      type="tel"

                      name="phone"

                      placeholder="Enter phone number"

                      value={formData.phone}

                      onChange={handleChange}

                      required

                    />

                  </div>


                  {/* PINCODE */}

                  <div className="form-group">

                    <label>

                      Pincode

                    </label>


                    <input

                      type="text"

                      name="pincode"

                      placeholder="Enter pincode"

                      value={formData.pincode}

                      onChange={handleChange}

                      required

                    />

                  </div>


                  {/* ADDRESS */}

                  <div className="form-group full-width">

                    <label>

                      Complete Address

                    </label>


                    <textarea

                      name="address"

                      placeholder="House no, street, area"

                      value={formData.address}

                      onChange={handleChange}

                      required

                    />

                  </div>


                  {/* CITY */}

                  <div className="form-group">

                    <label>

                      City

                    </label>


                    <input

                      type="text"

                      name="city"

                      placeholder="Enter city"

                      value={formData.city}

                      onChange={handleChange}

                      required

                    />

                  </div>


                  {/* STATE */}

                  <div className="form-group">

                    <label>

                      State

                    </label>


                    <input

                      type="text"

                      name="state"

                      placeholder="Enter state"

                      value={formData.state}

                      onChange={handleChange}

                      required

                    />

                  </div>


                </div>

              </div>


              {/* ================= PAYMENT ================= */}

              <div className="checkout-card">


                <div className="section-title">

                  <FaCreditCard />

                  <h2>Payment Method</h2>

                </div>


                {/* COD */}

                <label className="payment-option">


                  <input

                    type="radio"

                    name="payment"

                    value="cod"

                    checked={

                      paymentMethod === "cod"

                    }

                    onChange={(e) =>

                      setPaymentMethod(

                        e.target.value

                      )

                    }

                  />


                  <span>

                    Cash on Delivery

                  </span>


                </label>


                {/* ONLINE */}

                <label className="payment-option">


                  <input

                    type="radio"

                    name="payment"

                    value="razorpay"

                    checked={

                      paymentMethod === "razorpay"

                    }

                    onChange={(e) =>

                      setPaymentMethod(

                        e.target.value

                      )

                    }

                  />


                  <span>

                    Online Payment

                  </span>


                </label>


              </div>


              {/* PLACE ORDER */}

              <button

                type="submit"

                className="place-order-btn"
                onClick={() => navigate("/payment")}

              >

                Place Order ₹

                Continue to Payment ₹{totalPrice.toLocaleString()}

              </button>


            </form>

          </div>


          {/* ================= RIGHT SIDE ================= */}

          <div className="checkout-right">


            <div className="order-summary-card">


              <h2>

                Order Summary

              </h2>


              {cart.map((item) => (


                <div

                  className="checkout-product"

                  key={item.id}

                >


                  <img

                    src={item.image}

                    alt={item.name}

                  />


                  <div>


                    <h4>

                      {item.name}

                    </h4>


                    <p>

                      Qty: {item.quantity}

                    </p>


                  </div>


                  <strong>

                    ₹

                    {(

                      item.price *

                      item.quantity

                    ).toLocaleString()}

                  </strong>


                </div>


              ))}


              <hr />


              <div className="summary-line">

                <span>

                  Subtotal

                </span>


                <span>

                  ₹

                  {totalPrice.toLocaleString()}

                </span>

              </div>


              <div className="summary-line">

                <span>

                  Delivery

                </span>


                <span className="free">

                  FREE

                </span>

              </div>


              <hr />


              <div className="total-line">

                <span>

                  Total

                </span>


                <strong>

                  ₹

                  {totalPrice.toLocaleString()}

                </strong>

              </div>


            </div>

          </div>


        </div>

      </div>

    </div>

  );

};


export default Checkout;