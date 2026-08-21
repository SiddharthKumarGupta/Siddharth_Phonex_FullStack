import { Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";

import Orders from "./pages/Orders";
import Wishlist from "./pages/Wishlist";
import TV from "./pages/TV";
import Home from "./pages/Home";
import Mobiles from "./pages/Mobiles";
import Laptops from "./pages/Laptops";
import Tablets from "./pages/Tablets";
import Accessories from "./pages/Accessories";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import OrderSuccess from "./pages/OrderSuccess";
import SearchResults from "./pages/SearchResults";
import Payment from "./pages/Payment";

function App() {
  return (
    <Routes>

      {/* All pages with Navbar + Footer */}
      <Route element={<MainLayout />}>

        <Route path="/" element={<Home />} />

        <Route path="/mobiles" element={<Mobiles />} />

        <Route path="/tablets" element={<Tablets />} />

        <Route path="/laptops" element={<Laptops />} />

        <Route path="/accessories" element={<Accessories />} />

        <Route path="/tv" element={<TV />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/checkout" element={<Checkout />} />

        <Route path="/payment" element={<Payment />} />

        <Route path="/orders" element={<Orders />} />

        <Route path="/wishlist" element={<Wishlist />} />

        <Route
          path="/order-success"
          element={<OrderSuccess />}
        />

        <Route
          path="/search"
          element={<SearchResults />}
        />

        {/* Authentication pages with Navbar + Footer */}
        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

      </Route>

      {/* 404 Page */}
      <Route
        path="*"
        element={
          <div className="container text-center py-5">
            <h1>404</h1>
            <p>Page Not Found</p>
          </div>
        }
      />

    </Routes>
  );
}

export default App;