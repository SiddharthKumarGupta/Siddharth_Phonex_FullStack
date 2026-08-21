import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaArrowRight,
} from "react-icons/fa";

import "./../assets/css/footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-grid">

          {/* Brand */}

          <div className="footer-brand">

            <Link to="/" className="footer-logo">
              SiddharthPhonex
            </Link>

            <p>
              India's Premium Online Mobile Store.
              Buy Smartphones, Laptops, Tablets,
              Accessories and Smart Devices at the
              best prices.
            </p>

          </div>


          {/* Explore */}

          <div>

            <h4>Explore</h4>

            <ul>

              <li>
                <Link to="/mobiles">
                  Mobiles
                </Link>
              </li>

              <li>
                <Link to="/laptops">
                  Laptops
                </Link>
              </li>

              <li>
                <Link to="/tablets">
                  Tablets
                </Link>
              </li>

              <li>
                <Link to="/accessories">
                  Accessories
                </Link>
              </li>

              <li>
                <Link to="/tv">
                  TV
                </Link>
              </li>

            </ul>

          </div>


          {/* Account */}

          <div>

            <h4>Account</h4>

            <ul>

              <li>
                <Link to="/login">
                  Login
                </Link>
              </li>

              <li>
                <Link to="/register">
                  Register
                </Link>
              </li>

              <li>
                <Link to="/profile">
                  Profile
                </Link>
              </li>

              <li>
                <Link to="/cart">
                  Cart
                </Link>
              </li>

              <li>
                <Link to="/checkout">
                  Checkout
                </Link>
              </li>

            </ul>

          </div>


          {/* Newsletter */}

          <div>

            <h4>Stay Updated</h4>

            <p>
              Subscribe for premium deals and
              latest product launches.
            </p>

            <div className="newsletter">

              <input
                type="email"
                placeholder="Enter your email"
              />

              <button>
                <FaArrowRight />
              </button>

            </div>

          </div>

        </div>


        {/* Bottom */}

        <div className="footer-bottom">

          <div className="social-icons">

            <a href="https://facebook.com">
              <FaFacebookF />
            </a>

            <a href="https://instagram.com">
              <FaInstagram />
            </a>

            <a href="https://twitter.com">
              <FaTwitter />
            </a>

            <a href="https://linkedin.com">
              <FaLinkedinIn />
            </a>

          </div>

          <p>
            © 2026 SiddharthPhonex.
            All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;