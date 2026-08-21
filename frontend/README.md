# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
# Siddharth Phonex - React Frontend

A modern, responsive e-commerce frontend for a mobile and electronics
store built with React, Vite, Tailwind CSS, and modern frontend
libraries.

This README documents **only the React frontend**: project creation,
installation, folder structure, components, pages, state management,
routing, styling, and frontend development workflow.

------------------------------------------------------------------------

# 1. Project Overview

The Siddharth Phonex frontend is designed as a complete e-commerce user
interface.

The frontend includes:

-   Home page
-   Product listing
-   Product details
-   Search
-   Product categories
-   Cart
-   Wishlist
-   Login
-   Register
-   Profile
-   Checkout
-   Payment UI
-   Order success page
-   Dark mode
-   Responsive design
-   Product animations
-   Toast notifications
-   LocalStorage data persistence

------------------------------------------------------------------------

# 2. Technologies Used

## Core Technologies

-   React
-   JavaScript
-   JSX
-   Vite
-   HTML5
-   CSS3

## Styling

-   Tailwind CSS v4
-   CSS
-   Responsive design

## React Libraries

-   React Router DOM
-   Axios
-   React Icons
-   Framer Motion
-   React Hot Toast
-   Swiper

## React Concepts

-   Components
-   Props
-   State
-   Hooks
-   Context API
-   Conditional rendering
-   Lists and keys
-   Event handling
-   Forms
-   LocalStorage

------------------------------------------------------------------------

# 3. Create the React Project

## Step 1: Check Node.js and npm

``` bash
node -v
npm -v
```

## Step 2: Create the Vite React Project

``` bash
npm create vite@latest siddharth-phonex -- --template react
```

Move into the project:

``` bash
cd siddharth-phonex
```

Install dependencies:

``` bash
npm install
```

------------------------------------------------------------------------

# 4. Start the React Application

``` bash
npm run dev
```

Open:

``` text
http://localhost:5173/
```

------------------------------------------------------------------------

# 5. Main Vite Commands

``` bash
npm run dev
npm run build
npm run preview
npm run
```

------------------------------------------------------------------------

# 6. Install Required Frontend Packages

## React Router

``` bash
npm install react-router-dom
```

## Axios

``` bash
npm install axios
```

## React Icons

``` bash
npm install react-icons
```

## Framer Motion

``` bash
npm install framer-motion
```

## React Hot Toast

``` bash
npm install react-hot-toast
```

## Swiper

``` bash
npm install swiper
```

------------------------------------------------------------------------

# 7. Install Tailwind CSS

This project uses Tailwind CSS v4 with the Vite plugin.

``` bash
npm install tailwindcss @tailwindcss/vite
```

------------------------------------------------------------------------

# 8. Configure Tailwind CSS

Open `vite.config.js`:

``` js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
});
```

In `src/index.css`:

``` css
@import "tailwindcss";
```

Example global CSS:

``` css
@import "tailwindcss";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  background: #f5f5f5;
}

a {
  text-decoration: none;
}

button {
  cursor: pointer;
}
```

## Important Tailwind CSS v4 Note

For the Vite plugin setup, use:

``` js
import tailwindcss from "@tailwindcss/vite";
```

and:

``` js
tailwindcss()
```

Do not use the old Tailwind v3 PostCSS configuration:

``` js
plugins: {
  tailwindcss: {},
  autoprefixer: {},
}
```

------------------------------------------------------------------------

# 9. Frontend Folder Structure

``` text
siddharth-phonex/
│
├── public/
│   ├── images/
│   └── videos/
│
├── src/
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── videos/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductGrid.jsx
│   │   ├── SearchBar.jsx
│   │   ├── CategoryCard.jsx
│   │   ├── Loader.jsx
│   │   ├── Modal.jsx
│   │   └── ThemeToggle.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── SearchResults.jsx
│   │   ├── Cart.jsx
│   │   ├── Wishlist.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Profile.jsx
│   │   ├── Checkout.jsx
│   │   ├── Payment.jsx
│   │   └── OrderSuccess.jsx
│   │
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   ├── CartContext.jsx
│   │   ├── WishlistContext.jsx
│   │   ├── OrderContext.jsx
│   │   └── ThemeContext.jsx
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── data/
│   │   └── products.js
│   │
│   ├── hooks/
│   │   └── useLocalStorage.js
│   │
│   ├── utils/
│   │   ├── formatPrice.js
│   │   └── helpers.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── App.css
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

------------------------------------------------------------------------

# 10. Purpose of Each Folder

## `public/`

Static files that can be accessed directly.

``` text
public/images/logo.png
```

Use:

``` jsx
<img src="/images/logo.png" alt="Logo" />
```

## `src/assets/`

Imported images, icons, and videos.

``` jsx
import iphoneImage from "../assets/images/iphone.jpg";
```

## `components/`

Reusable UI pieces such as Navbar, Footer, ProductCard, Hero, and
SearchBar.

## `pages/`

Complete screens such as Home, Products, Cart, Login, Checkout, and
Profile.

## `context/`

Global application state such as authentication, cart, wishlist, orders,
and theme.

## `services/`

Reusable service logic, such as API request configuration.

## `data/`

Temporary local product data.

## `hooks/`

Reusable custom React hooks.

## `utils/`

Reusable helper functions.

------------------------------------------------------------------------

# 11. React Entry Point

`src/main.jsx` starts the React application.

``` jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

------------------------------------------------------------------------

# 12. App.jsx and Routing

``` jsx
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
```

------------------------------------------------------------------------

# 13. Main Frontend Pages

## Home

-   Navbar
-   Hero
-   Categories
-   Featured products
-   Premium deals
-   New arrivals
-   Footer

## Products

-   Product listing
-   Search
-   Category filters
-   Price filters
-   Sorting

## Product Details

-   Product image
-   Name
-   Price
-   Description
-   Rating
-   Quantity
-   Add to cart
-   Wishlist

## Cart

-   Cart items
-   Quantity controls
-   Remove item
-   Subtotal
-   Delivery
-   GST
-   Total
-   Checkout

## Wishlist

-   Saved products
-   Remove product
-   Add to cart

## Login

-   Email
-   Password
-   Login
-   Register link

## Register

-   Name
-   Email
-   Password
-   Confirm password

## Profile

-   User information
-   Account details
-   Orders
-   Logout

## Checkout

-   Address form
-   Order summary
-   Delivery details
-   Payment selection

## Payment

-   Payment method UI
-   Payment form

## Order Success

-   Success message
-   Order information
-   Continue shopping

------------------------------------------------------------------------

# 14. Reusable Components

## Navbar

Contains:

-   Logo
-   Navigation links
-   Search
-   Wishlist
-   Cart
-   Profile
-   Login/logout
-   Theme toggle

## ProductCard

``` jsx
function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}
```

## Hero

Contains:

-   Headline
-   Description
-   CTA button
-   Product image or video

## Footer

Contains:

-   About
-   Quick links
-   Support
-   Social links
-   Copyright

------------------------------------------------------------------------

# 15. Context API

## AuthContext

Manages:

-   Current user
-   Login
-   Register
-   Logout
-   Authentication status

## CartContext

Manages:

-   Cart items
-   Add item
-   Remove item
-   Increase quantity
-   Decrease quantity
-   Total items
-   Total price

## WishlistContext

Manages:

-   Wishlist products
-   Add product
-   Remove product
-   Check wishlist status

## OrderContext

Manages:

-   Orders
-   Order creation
-   Order history
-   Order success state

## ThemeContext

Manages:

-   Light mode
-   Dark mode
-   Theme toggle
-   Saved theme

------------------------------------------------------------------------

# 16. LocalStorage

## Cart

``` js
localStorage.setItem(
  "cart",
  JSON.stringify(cart)
);
```

Load:

``` js
const cart = JSON.parse(
  localStorage.getItem("cart")
) || [];
```

## User

``` js
localStorage.setItem(
  "user",
  JSON.stringify(user)
);
```

## Theme

``` js
localStorage.setItem(
  "theme",
  "dark"
);
```

------------------------------------------------------------------------

# 17. Product Data

`src/data/products.js`:

``` js
const products = [
  {
    id: 1,
    name: "iPhone 16 Pro",
    price: 79999,
    category: "Mobile",
    rating: 4.8,
    image: "/images/iphone.jpg",
  },
  {
    id: 2,
    name: "AirPods Pro",
    price: 24999,
    category: "Audio",
    rating: 4.7,
    image: "/images/airpods.jpg",
  },
];

export default products;
```

------------------------------------------------------------------------

# 18. Search and Filtering

``` jsx
const filteredProducts = products.filter(
  (product) =>
    product.name
      .toLowerCase()
      .includes(search.toLowerCase())
);
```

Possible filters:

-   Category
-   Price
-   Rating
-   Search text
-   Sorting

------------------------------------------------------------------------

# 19. Cart Price Calculation

``` js
const subtotal = cart.reduce(
  (total, item) =>
    total + item.price * item.quantity,
  0
);
```

Delivery:

``` js
const delivery = subtotal > 50000 ? 0 : 99;
```

GST:

``` js
const tax = subtotal * 0.18;
```

Total:

``` js
const total =
  subtotal + delivery + tax;
```

------------------------------------------------------------------------

# 20. React Forms

``` jsx
const [email, setEmail] = useState("");

<input
  type="email"
  value={email}
  onChange={(event) =>
    setEmail(event.target.value)
  }
/>
```

Validation can check:

-   Required fields
-   Email format
-   Password length
-   Confirm password
-   Empty cart

------------------------------------------------------------------------

# 21. React Router Navigation

Install:

``` bash
npm install react-router-dom
```

Navigate:

``` jsx
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

navigate("/cart");
```

------------------------------------------------------------------------

# 22. Icons

Install:

``` bash
npm install react-icons
```

Use:

``` jsx
import {
  FaShoppingCart,
  FaHeart,
  FaUser,
} from "react-icons/fa";
```

``` jsx
<FaShoppingCart />
```

------------------------------------------------------------------------

# 23. Animations

Install:

``` bash
npm install framer-motion
```

Example:

``` jsx
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
>
  Product
</motion.div>
```

------------------------------------------------------------------------

# 24. Notifications

Install:

``` bash
npm install react-hot-toast
```

Use:

``` jsx
import toast from "react-hot-toast";

toast.success("Product added to cart");
```

------------------------------------------------------------------------

# 25. Swiper Sliders

Install:

``` bash
npm install swiper
```

Useful for:

-   Hero banners
-   Product carousels
-   Deals sliders
-   Category sliders

------------------------------------------------------------------------

# 26. Converting HTML to JSX

HTML:

``` html
<div class="product-card">
  <img src="phone.jpg">
  <button onclick="addToCart()">
    Add to Cart
  </button>
</div>
```

JSX:

``` jsx
<div className="product-card">
  <img src="/phone.jpg" alt="Phone" />

  <button onClick={addToCart}>
    Add to Cart
  </button>
</div>
```

Important changes:

  HTML        JSX
  ----------- -------------
  `class`     `className`
  `onclick`   `onClick`
  `for`       `htmlFor`
  `<img>`     `<img />`
  `<input>`   `<input />`

------------------------------------------------------------------------

# 27. Converting JavaScript to React

Traditional JavaScript:

``` js
document.getElementById("cartCount").innerText =
  cart.length;
```

React:

``` jsx
<span>{cart.length}</span>
```

Traditional JavaScript:

``` js
window.location.href = "cart.html";
```

React:

``` jsx
navigate("/cart");
```

Traditional JavaScript event listener:

``` js
document
  .querySelector(".wishlist")
  .addEventListener("click", addWishlist);
```

React:

``` jsx
<button onClick={addWishlist}>
  <FaHeart />
</button>
```

------------------------------------------------------------------------

# 28. Recommended Development Order

## Step 1 - Project Setup

``` text
Create React + Vite project
        ↓
Install packages
        ↓
Configure Tailwind
        ↓
Start Vite
```

## Step 2 - Global Layout

``` text
Navbar
Footer
MainLayout
```

## Step 3 - Home Page

``` text
Hero
Categories
Featured Products
Premium Deals
New Arrivals
```

## Step 4 - Product System

``` text
ProductCard
ProductGrid
Product Details
Search
Filters
```

## Step 5 - Authentication UI

``` text
Login
Register
Profile
Logout
```

## Step 6 - Cart

``` text
Add Product
Remove Product
Increase Quantity
Decrease Quantity
Price Calculation
```

## Step 7 - Wishlist

``` text
Add Wishlist
Remove Wishlist
Wishlist Page
```

## Step 8 - Checkout

``` text
Address Form
Order Summary
Payment UI
Order Success
```

## Step 9 - Dark Mode

``` text
Theme Context
Theme Toggle
LocalStorage Theme
```

## Step 10 - Responsive Design

Test:

``` text
Desktop
Tablet
Mobile
```

------------------------------------------------------------------------

# 29. Frontend Development Workflow

``` text
Create Page
    ↓
Create Components
    ↓
Write JSX
    ↓
Add Tailwind CSS
    ↓
Add React State
    ↓
Add Event Handlers
    ↓
Add Context API
    ↓
Add Routing
    ↓
Test UI
    ↓
Fix Errors
    ↓
Create Production Build
```

------------------------------------------------------------------------

# 30. Testing Checklist

## Home

-   [ ] Navbar displays
-   [ ] Hero displays
-   [ ] Categories display
-   [ ] Products display
-   [ ] Footer displays
-   [ ] Responsive layout works

## Products

-   [ ] Products display
-   [ ] Search works
-   [ ] Filters work
-   [ ] Product details open

## Cart

-   [ ] Add to cart works
-   [ ] Remove works
-   [ ] Increase quantity works
-   [ ] Decrease quantity works
-   [ ] Total calculation works

## Wishlist

-   [ ] Add works
-   [ ] Remove works
-   [ ] Wishlist page works

## Authentication

-   [ ] Register works
-   [ ] Login works
-   [ ] Logout works
-   [ ] User state is maintained

## Checkout

-   [ ] Order summary displays
-   [ ] Form works
-   [ ] Payment UI displays
-   [ ] Success page displays

## Theme

-   [ ] Light mode works
-   [ ] Dark mode works
-   [ ] Theme is saved

------------------------------------------------------------------------

# 31. Production Build

``` bash
npm run build
```

This creates:

``` text
dist/
```

Preview:

``` bash
npm run preview
```

------------------------------------------------------------------------

# 32. Common Errors

## `npm run dev` Does Not Work

Make sure you are inside the folder containing:

``` text
package.json
```

Check:

``` powershell
Get-ChildItem
```

## Tailwind Cannot Be Resolved

``` bash
npm install tailwindcss @tailwindcss/vite
```

Check:

``` bash
npm list tailwindcss
```

## Tailwind PostCSS Error

Use:

``` js
import tailwindcss from "@tailwindcss/vite";
```

and:

``` js
tailwindcss()
```

Avoid the old Tailwind v3 PostCSS configuration.

## PowerShell Folder Delete

Use:

``` powershell
Remove-Item -Recurse -Force frontend
```

------------------------------------------------------------------------

# 33. Final Frontend Architecture

``` text
React Application
        ↓
React Router
        ↓
Pages
        ↓
Reusable Components
        ↓
Context API
        ↓
React State
        ↓
LocalStorage
        ↓
User Interface
```

------------------------------------------------------------------------

# 34. Final Frontend Features

The completed Siddharth Phonex React frontend contains:

-   React application
-   Vite development environment
-   Tailwind CSS styling
-   Responsive design
-   Reusable components
-   React Router navigation
-   Context API state management
-   Authentication UI
-   Product catalog
-   Product details
-   Search
-   Filters
-   Cart
-   Wishlist
-   Checkout
-   Payment UI
-   Order success page
-   Dark mode
-   LocalStorage persistence
-   Toast notifications
-   Icons
-   Animations
-   Product sliders

------------------------------------------------------------------------

# Author

**Siddharth Kumar**

React Frontend Developer \| Python Developer

------------------------------------------------------------------------

# License

This project is created for learning, portfolio, and development
purposes.
