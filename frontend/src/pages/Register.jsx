import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import {
  FaEye,
  FaEyeSlash,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaMobileAlt,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

import "../assets/css/register.css";

const Register = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.username ||
      !form.email ||
      !form.phone ||
      !form.password ||
      !form.confirmPassword
    ) {
      setError("Please fill all fields.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        "http://127.0.0.1:8000/api/accounts/register/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: form.username,
            email: form.email,
            phone: form.phone,
            password: form.password,
            password2: form.confirmPassword,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(
          data.detail ||
            data.message ||
            JSON.stringify(data)
        );
        return;
      }

      localStorage.setItem(
        "access",
        data.tokens.access
      );

      localStorage.setItem(
        "refresh",
        data.tokens.refresh
      );

      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      alert("Registration successful!");

      navigate("/");
    } catch (error) {
      console.error(error);

      setError(
        "Unable to connect to server. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">

      <div className="register-card">

        {/* ================= LEFT BRANDING ================= */}

        <div className="register-left">

          <div className="register-brand-icon">
            <FaMobileAlt />
          </div>

          <h1>SiddharthPhonex</h1>

          <p className="register-brand-subtitle">
            India's Premium Smartphone Store
          </p>

          <div className="register-features">

            <div className="register-feature">
              <FaCheckCircle />
              <span>Premium Smartphones</span>
            </div>

            <div className="register-feature">
              <FaCheckCircle />
              <span>Best Deals & Offers</span>
            </div>

            <div className="register-feature">
              <FaCheckCircle />
              <span>Fast & Secure Delivery</span>
            </div>

            <div className="register-feature">
              <FaCheckCircle />
              <span>Trusted Shopping Experience</span>
            </div>

          </div>

          <div className="register-left-bottom">
            <span>Already have an account?</span>

            <Link to="/login">
              Login <FaArrowRight />
            </Link>
          </div>

        </div>

        {/* ================= RIGHT FORM ================= */}

        <div className="register-right">

          <div className="register-heading">

            <h2>
              Create Account <span>👋</span>
            </h2>

            <p>
              Register to start shopping.
            </p>

          </div>

          <form onSubmit={handleRegister}>

            {/* FULL NAME */}

            <div className="register-input-group">

              <label>Full Name</label>

              <div className="register-input-box">

                <FaUser className="register-input-icon" />

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={handleChange}
                />

              </div>

            </div>

            {/* USERNAME */}

            <div className="register-input-group">

              <label>Username</label>

              <div className="register-input-box">

                <FaUser className="register-input-icon" />

                <input
                  type="text"
                  name="username"
                  placeholder="Choose a username"
                  value={form.username}
                  onChange={handleChange}
                />

              </div>

            </div>

            {/* EMAIL */}

            <div className="register-input-group">

              <label>Email Address</label>

              <div className="register-input-box">

                <FaEnvelope className="register-input-icon" />

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                />

              </div>

            </div>

            {/* PHONE */}

            <div className="register-input-group">

              <label>Phone Number</label>

              <div className="register-input-box">

                <FaPhone className="register-input-icon" />

                <input
                  type="text"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={form.phone}
                  onChange={handleChange}
                />

              </div>

            </div>

            {/* PASSWORD */}

            <div className="register-input-group">

              <label>Password</label>

              <div className="register-input-box">

                <FaLock className="register-input-icon" />

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="password"
                  placeholder="Create a password"
                  value={form.password}
                  onChange={handleChange}
                />

                <button
                  type="button"
                  className="register-eye-btn"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? (
                    <FaEyeSlash />
                  ) : (
                    <FaEye />
                  )}
                </button>

              </div>

            </div>

            {/* CONFIRM PASSWORD */}

            <div className="register-input-group">

              <label>Confirm Password</label>

              <div className="register-input-box">

                <FaLock className="register-input-icon" />

                <input
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                />

                <button
                  type="button"
                  className="register-eye-btn"
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                >
                  {showConfirmPassword ? (
                    <FaEyeSlash />
                  ) : (
                    <FaEye />
                  )}
                </button>

              </div>

            </div>

            {/* ERROR */}

            {error && (
              <div className="register-error">
                {error}
              </div>
            )}

            {/* CREATE ACCOUNT */}

            <button
              type="submit"
              className="register-btn"
              disabled={loading}
            >
              {loading
                ? "Creating Account..."
                : "Create Account"}
            </button>

          </form>

          {/* MOBILE LOGIN LINK */}

          <p className="login-text">

            Already have an account?{" "}

            <Link to="/login">
              Login
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
};

export default Register;