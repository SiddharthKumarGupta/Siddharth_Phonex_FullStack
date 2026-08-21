import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { useTheme } from "../context/ThemeContext";

import SearchBar from "./SearchBar";

import {
  FaShoppingCart,
  FaMoon,
  FaSun,
  FaMobileAlt,
  FaTabletAlt,
  FaHeadphones,
  FaLaptop,
  FaTv,
} from "react-icons/fa";

const Navbar = () => {
  const { user, logout } = useAuth();
  const { totalItems } = useCart();

  // Theme Context
  const { darkMode, toggleTheme } = useTheme();

  return (
    <>
      {/* ================= TOP NAVBAR ================= */}

      <nav className="navbar navbar-expand-lg navbar-dark custom-navbar shadow-sm">
        <div className="container-fluid">

          {/* Logo */}

          <Link
            className="navbar-brand fw-bold logo-text"
            to="/"
          >
            SiddharthPhonex
          </Link>

          {/* Search */}

          <SearchBar />

          {/* Right Side */}

          <div className="d-flex align-items-center gap-3">

            {/* ================= AUTH ================= */}

            {user ? (
              <>
                <Link
                  to="/profile"
                  className="btn btn-primary btn-sm"
                >
                  {user.username}
                </Link>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={logout}
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="btn btn-primary btn-sm"
              >
                Login / Register
              </Link>
            )}

            {/* ================= CART ================= */}

            <Link
              to="/cart"
              className="btn btn-warning cart-btn"
            >
              <FaShoppingCart />

              <span className="ms-2 fw-bold">
                {totalItems}
              </span>
            </Link>

            {/* ================= DARK MODE ================= */}

            <button
              className="theme-btn"
              onClick={toggleTheme}
              title={
                darkMode
                  ? "Switch to Light Mode"
                  : "Switch to Dark Mode"
              }
            >
              {darkMode ? (
                <FaSun />
              ) : (
                <FaMoon />
              )}
            </button>

          </div>

        </div>
      </nav>

      {/* ================= CATEGORY BAR ================= */}

      <div className="category-bar">

        <div className="container-fluid d-flex justify-content-between align-items-center">

          {/* Shop Title */}

          <h2 className="shop-title">
            Shop
          </h2>

          {/* Category Menu */}

          <ul className="category-menu">

            {/* Mobiles */}

            <li>
              <Link to="/mobiles">
                <FaMobileAlt />
                Mobiles
              </Link>
            </li>

            {/* Tablets */}

            <li>
              <Link to="/tablets">
                <FaTabletAlt />
                Tablets
              </Link>
            </li>

            {/* Accessories */}

            <li>
              <Link to="/accessories">
                <FaHeadphones />
                Accessories
              </Link>
            </li>

            {/* Laptops */}

            <li>
              <Link to="/laptops">
                <FaLaptop />
                Laptops
              </Link>
            </li>

            {/* TVs */}

            <li>
              <Link to="/tv">
                <FaTv />
                TVs
              </Link>
            </li>

          </ul>

        </div>

      </div>

    </>
  );
};

export default Navbar;