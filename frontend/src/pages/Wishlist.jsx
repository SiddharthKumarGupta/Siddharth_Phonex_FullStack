import { Link } from "react-router-dom";

import {
  FaHeart,
  FaTrash,
  FaShoppingCart,
  FaArrowLeft,
} from "react-icons/fa";

import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";

import "../assets/css/wishlist.css";

const Wishlist = () => {

  const {
    wishlist,
    removeFromWishlist,
  } = useWishlist();


  const { addToCart } = useCart();


  if (wishlist.length === 0) {

    return (

      <div className="empty-wishlist">

        <FaHeart />

        <h2>Your Wishlist is Empty</h2>

        <p>
          Save your favourite products here.
        </p>


        <Link
          to="/"
          className="wishlist-shop-btn"
        >

          <FaArrowLeft />

          Continue Shopping

        </Link>

      </div>

    );

  }


  return (

    <div className="wishlist-page">

      <div className="wishlist-container">

        <div className="wishlist-header">

          <div>

            <h1>

              <FaHeart />

              My Wishlist

            </h1>

            <p>
              {wishlist.length} saved product
              {wishlist.length > 1 ? "s" : ""}
            </p>

          </div>

        </div>


        <div className="wishlist-grid">

          {wishlist.map((product) => (

            <div
              className="wishlist-card"
              key={product.id}
            >

              <div className="wishlist-image">

                <img
                  src={product.image}
                  alt={product.name}
                />

              </div>


              <div className="wishlist-info">

                <h3>
                  {product.name}
                </h3>

                <p className="wishlist-category">
                  {product.category}
                </p>


                <div className="wishlist-price">

                  ₹{product.price.toLocaleString()}

                </div>


                <div className="wishlist-actions">

                  <button
                    className="wishlist-cart-btn"
                    onClick={() =>
                      addToCart(product)
                    }
                  >

                    <FaShoppingCart />

                    Add to Cart

                  </button>


                  <button
                    className="wishlist-delete-btn"
                    onClick={() =>
                      removeFromWishlist(
                        product.id
                      )
                    }
                  >

                    <FaTrash />

                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  );

};


export default Wishlist;