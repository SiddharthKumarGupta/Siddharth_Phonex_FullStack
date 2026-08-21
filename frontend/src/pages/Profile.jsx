import { Link, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaShoppingBag,
  FaHeart,
  FaShoppingCart,
  FaEdit,
  FaSignOutAlt,
} from "react-icons/fa";

import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

import "../assets/css/profile.css";

function Profile() {
  const { user, logout } = useAuth();
  const { totalItems } = useCart();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="profile-page">

      <div className="profile-container">

        {/* PROFILE HEADER */}

        <div className="profile-header">

          <div className="profile-avatar">

            {user?.name?.charAt(0).toUpperCase() || "U"}

          </div>

          <div className="profile-header-info">

            <h1>
              Welcome, {user?.name || "User"} 👋
            </h1>

            <p>
              Manage your account and orders
            </p>

          </div>

          <button className="edit-profile-btn">

            <FaEdit />

            Edit Profile

          </button>

        </div>


        {/* DASHBOARD CARDS */}

        <div className="profile-stats">

          <Link to="/orders" className="profile-stat-card">

            <FaShoppingBag />

            <div>

              <h3>My Orders</h3>

              <p>Track your orders</p>

            </div>

          </Link>


          <Link to="/cart" className="profile-stat-card">

            <FaShoppingCart />

            <div>

              <h3>Cart</h3>

              <p>{totalItems} items</p>

            </div>

          </Link>


          <Link to="/wishlist" className="profile-stat-card">

            <FaHeart />

            <div>

              <h3>Wishlist</h3>

              <p>Saved products</p>

            </div>

          </Link>

        </div>


        {/* ACCOUNT INFORMATION */}

        <div className="profile-content">

          <div className="profile-card">

            <div className="profile-card-header">

              <h2>Personal Information</h2>

              <button className="small-edit-btn">

                <FaEdit />

                Edit

              </button>

            </div>


            <div className="profile-details">

              <div className="profile-detail">

                <FaUser />

                <div>

                  <span>Full Name</span>

                  <strong>
                    {user?.name || "Not available"}
                  </strong>

                </div>

              </div>


              <div className="profile-detail">

                <FaEnvelope />

                <div>

                  <span>Email Address</span>

                  <strong>
                    {user?.email || "Not available"}
                  </strong>

                </div>

              </div>


              <div className="profile-detail">

                <FaPhone />

                <div>

                  <span>Phone Number</span>

                  <strong>
                    {user?.phone || "Not available"}
                  </strong>

                </div>

              </div>


              <div className="profile-detail">

                <FaMapMarkerAlt />

                <div>

                  <span>Address</span>

                  <strong>
                    {user?.address || "No address added"}
                  </strong>

                </div>

              </div>

            </div>

          </div>


          {/* ACCOUNT ACTIONS */}

          <div className="profile-card">

            <h2>Account Settings</h2>

            <div className="account-actions">

              <Link to="/orders">

                <FaShoppingBag />

                My Orders

              </Link>


              <Link to="/cart">

                <FaShoppingCart />

                Shopping Cart

              </Link>


              <Link to="/wishlist">

                <FaHeart />

                Wishlist

              </Link>


              <button
                className="logout-action"
                onClick={handleLogout}
              >

                <FaSignOutAlt />

                Logout

              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;