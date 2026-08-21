import {
  FaHeart,
  FaLaptop,
  FaStar,
  FaRegStar,
} from "react-icons/fa";

import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

import "../assets/css/product-card.css";


const ProductCard = ({ product }) => {

  const { addToCart } = useCart();

  const {
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  } = useWishlist();


  const liked = isInWishlist(product.id);


  const handleWishlist = () => {

    if (liked) {

      removeFromWishlist(product.id);

    } else {

      addToWishlist(product);

    }

  };


  const discountPercentage =
    product.price && product.discount_price
      ? Math.round(
          ((Number(product.price) -
            Number(product.discount_price)) /
            Number(product.price)) *
            100
        )
      : 0;


  return (

    <div className="product-card">


      {/* Discount Badge */}

      {discountPercentage > 0 && (

        <span className="discount">

          {discountPercentage}% OFF

        </span>

      )}


      {/* Wishlist Button */}

      <button
        className={`wishlist ${
          liked ? "wishlist-active" : ""
        }`}
        onClick={handleWishlist}
      >

        <FaHeart />

      </button>


      {/* Product Image */}

      <img
        src={
          product.image_url ||
          product.image ||
          "/placeholder-image.jpg"
        }
        alt={product.name}
      />


      {/* Category */}

      <p className="category">

        <FaLaptop />

        {product.category}

      </p>


      {/* Product Name */}

      <h3>

        {product.name}

      </h3>


      {/* Brand */}

      {product.brand && (

        <p className="brand">

          {product.brand}

        </p>

      )}


      {/* Rating */}

      <div className="rating">

        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaRegStar />

        <span>

          ({product.rating || "No rating"})

        </span>

      </div>


      {/* Price */}

      <div className="price">

        <span className="new-price">

          ₹
          {Number(
            product.discount_price ||
            product.price
          ).toLocaleString("en-IN")}

        </span>


        {product.discount_price && (

          <span className="old-price">

            ₹
            {Number(
              product.price
            ).toLocaleString("en-IN")}

          </span>

        )}

      </div>


      {/* Stock */}

      {product.stock > 0 ? (

        <button
          className="cart-btn"
          onClick={() => addToCart(product)}
        >

          🛒 Add to Cart

        </button>

      ) : (

        <button
          className="cart-btn"
          disabled
        >

          Out of Stock

        </button>

      )}


    </div>

  );

};


export default ProductCard;