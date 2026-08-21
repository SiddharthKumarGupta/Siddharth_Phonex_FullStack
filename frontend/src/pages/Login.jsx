import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

import {
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaGithub,
  FaMobileAlt,
  FaArrowRight,
} from "react-icons/fa";

import "../assets/css/login.css";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Please enter email and password.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await axios.post(
        "http://127.0.0.1:8000/api/accounts/login/",
        {
          email: formData.email,
          password: formData.password,
        }
      );

      localStorage.setItem(
      "access",
      response.data.tokens.access
      );

      localStorage.setItem(
      "refresh",
      response.data.tokens.refresh
      );

      if (response.data.user) {
        localStorage.setItem(
          "user",
          JSON.stringify(response.data.user)
        );
      }

      navigate("/");

    } catch (error) {
      console.error(error);

      setError(
        error.response?.data?.detail ||
        error.response?.data?.message ||
        "Invalid email or password."
      );

    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    // This URL must be implemented in your Django backend
    window.location.href =
      "http://127.0.0.1:8000/api/accounts/google/login/";
  };

  const handleGithubLogin = () => {
    window.location.href =
      "http://127.0.0.1:8000/api/accounts/github/login/";
  };

  return (
    <div className="login-page">

      <div className="login-card">

        {/* LEFT SIDE */}

        <div className="login-brand">

          <FaMobileAlt className="brand-icon" />

          <h1>SiddharthPhonex</h1>

          <p>
            India's Premium Smartphone Store
          </p>

          <div className="brand-feature">
            <FaArrowRight />
            Premium Smartphones
          </div>

          <div className="brand-feature">
            <FaArrowRight />
            Fast & Secure Delivery
          </div>

          <div className="brand-feature">
            <FaArrowRight />
            Trusted Shopping Experience
          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="login-form-section">

          <h2>Welcome Back 👋</h2>

          <p className="login-subtitle">
            Login to continue shopping.
          </p>

          <form onSubmit={handleLogin}>

            {/* EMAIL */}

            <div className="input-group">

              <label>Email Address</label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />

            </div>

            {/* PASSWORD */}

            <div className="input-group">

              <label>Password</label>

              <div className="password-wrapper">

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />

                <button
                  type="button"
                  className="eye-btn"
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

            {/* ERROR */}

            {error && (
              <div className="login-error">
                {error}
              </div>
            )}

            {/* LOGIN */}

            <button
              type="submit"
              className="login-submit"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>

          </form>

          <div className="divider">
            <span>OR</span>
          </div>

          {/* GOOGLE */}

          <button
            className="social-btn google-btn"
            onClick={handleGoogleLogin}
          >
            <FaGoogle />
            <span>Continue with Google</span>
          </button>

          {/* GITHUB */}

          <button
            className="social-btn github-btn"
            onClick={handleGithubLogin}
          >
            <FaGithub />
            <span>Continue with GitHub</span>
          </button>

          <p className="register-text">
  Don't have an account?{" "}
  <Link to="/register" className="register-link">
    Register
  </Link>
</p>

        </div>

      </div>

    </div>
  );
};

export default Login;