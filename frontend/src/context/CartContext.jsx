import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const API_URL = "http://127.0.0.1:8000/api/cart/";

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Get access token
  const getToken = () => {
    return (
      localStorage.getItem("access") ||
      localStorage.getItem("access_token")
    );
  };

  // Fetch cart from Django
  const fetchCart = async () => {
    const token = getToken();

    if (!token) {
      console.log("No access token found");
      setCart([]);
      return;
    }

    try {
      const response = await axios.get(API_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setCart(response.data.items || []);

      console.log("Cart loaded:", response.data);
    } catch (error) {
      console.error(
        "Error fetching cart:",
        error.response?.data || error.message
      );
    }
  };

  // Load cart when app starts
  useEffect(() => {
    fetchCart();
  }, []);

  // Add product to Django cart
  const addToCart = async (product) => {
    const token = getToken();

    if (!token) {
      alert("Please login first");
      return;
    }

    try {
      const response = await axios.post(
        API_URL,
        {
          product_id: product.id,
          quantity: 1,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Product added:", response.data);

      // Reload cart from backend
      await fetchCart();

    } catch (error) {
      console.error(
        "Add to cart error:",
        error.response?.data || error.message
      );
    }
  };

  // Increase quantity
  const increaseQty = async (id, quantity) => {
    const token = getToken();

    try {
      await axios.patch(
        `${API_URL}${id}/update/`,
        {
          quantity: quantity + 1,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      await fetchCart();

    } catch (error) {
      console.error(
        "Increase quantity error:",
        error.response?.data || error.message
      );
    }
  };

  // Decrease quantity
  const decreaseQty = async (id, quantity) => {
    const token = getToken();

    try {
      await axios.patch(
        `${API_URL}${id}/update/`,
        {
          quantity: quantity - 1,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      await fetchCart();

    } catch (error) {
      console.error(
        "Decrease quantity error:",
        error.response?.data || error.message
      );
    }
  };

  // Remove item
  const removeFromCart = async (id) => {
    const token = getToken();

    try {
      await axios.delete(
        `${API_URL}${id}/remove/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      await fetchCart();

    } catch (error) {
      console.error(
        "Remove cart item error:",
        error.response?.data || error.message
      );
    }
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
  };

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (sum, item) => sum + Number(item.total_price),
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        clearCart,
        totalItems,
        totalPrice,
        fetchCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}