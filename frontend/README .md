# Siddharth Phonex

A modern, responsive e-commerce frontend for a mobile and electronics
store, built with React, Vite, Tailwind CSS, and modern frontend tools.

The project is designed as a portfolio-quality frontend and can later be
connected to a Django REST Framework or FastAPI backend.

------------------------------------------------------------------------

## 📌 Project Overview

**Siddharth Phonex** is an e-commerce web application for selling:

-   Smartphones
-   Tablets
-   Laptops
-   Accessories
-   TV,s
-   Other electronic products

The application includes a modern shopping experience with product
browsing, authentication, cart management, wishlist functionality,
checkout flow, dark mode, responsive design, and future backend API
integration.

------------------------------------------------------------------------

## 🚀 Technology Stack

### Frontend

-   React
-   Vite
-   JavaScript / JSX
-   Tailwind CSS v4
-   React Router DOM
-   Axios
-   React Icons
-   Framer Motion
-   React Hot Toast
-   Swiper

### State Management

-   React Context API
-   React Hooks
    -   `useState`
    -   `useEffect`
    -   `useContext`

### Browser Storage

-   `localStorage`

Currently, localStorage can be used for:

-   User authentication state
-   Cart data
-   Wishlist data
-   Theme preference

### Backend Integration Ready

The frontend can later connect with:

-   Django REST Framework
-   FastAPI
-   JWT Authentication
-   MySQL
-   PostgreSQL
-   Razorpay or Stripe

------------------------------------------------------------------------

# 🛠️ Project Creation - Step by Step

## 1. Check Node.js and npm

Before creating the project, verify that Node.js and npm are installed.

``` bash
node -v
npm -v
```

------------------------------------------------------------------------

## 2. Create the React + Vite Project

Create a new React application using Vite:

``` bash
npm create vite@latest siddharth-phonex -- --template react
```

Move into the project directory:

``` bash
cd siddharth-phonex
```

Install the default dependencies:

``` bash
npm install
```

------------------------------------------------------------------------

## 3. Create the Frontend Directory

If the project is organized with a separate frontend folder:

``` bash
mkdir frontend
```

Move into the frontend project:

``` bash
cd frontend
```

> The exact folder structure depends on how the project was created. The
> important point is to run npm commands from the folder containing
> `package.json`.

------------------------------------------------------------------------

# 🎨 Tailwind CSS Installation

This project uses **Tailwind CSS v4** with the Vite plugin.

Install Tailwind CSS and its Vite integration:

``` bash
npm install tailwindcss @tailwindcss/vite
```

------------------------------------------------------------------------

## Tailwind Vite Configuration

The `vite.config.js` file contains:

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

------------------------------------------------------------------------

## Import Tailwind CSS

In:

``` text
src/index.css
```

use:

``` css
@import "tailwindcss";
```

Tailwind CSS v4 does not require the old Tailwind v3 setup.

### Important

For the Vite plugin approach, do not configure Tailwind as a traditional
PostCSS plugin.

The following old configuration should not be used with the current
setup:

``` js
plugins: {
  tailwindcss: {},
  autoprefixer: {},
}
```

------------------------------------------------------------------------

# 📦 Install Project Dependencies

Install the main packages used by the application:

``` bash
npm install react-router-dom
```

For API communication:

``` bash
npm install axios
```

For icons:

``` bash
npm install react-icons
```

For animations:

``` bash
npm install framer-motion
```

For notifications:

``` bash
npm install react-hot-toast
```

For sliders and carousels:

``` bash
npm install swiper
```

------------------------------------------------------------------------

# ▶️ Run the Development Server

Start the application:

``` bash
npm run dev
```

The development server will normally run at:

``` text
http://localhost:5173
```

------------------------------------------------------------------------

# 🏗️ Project Structure

``` text
siddharth-phonex/
│
├── frontend/
│   │
│   ├── public/
│   │
│   ├── src/
│   │   │
│   │   ├── assets/
│   │   │   ├── images/
│   │   │   └── videos/
│   │   │
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   ├── Loader.jsx
│   │   │   └── ThemeToggle.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Products.jsx
│   │   │   ├── ProductDetails.jsx
│   │   │   ├── Cart.jsx
│   │   │   ├── Wishlist.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Checkout.jsx
│   │   │   └── Success.jsx
│   │   │
│   │   ├── context/
│   │   │   ├── AuthContext.jsx
│   │   │   ├── CartContext.jsx
│   │   │   ├── WishlistContext.jsx
│   │   │   └── ThemeContext.jsx
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── data/
│   │   │   └── products.js
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── index.css
│   │   └── App.css
│   │
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js
│
└── README.md
```

------------------------------------------------------------------------

# 🧩 Main Application Sections

## 🏠 Home Page

The home page contains:

-   Navigation bar
-   Hero section
-   Promotional banners
-   Product categories
-   Featured products
-   Premium deals
-   New arrivals
-   Footer

------------------------------------------------------------------------

## 📱 Product Section

The product section displays products using reusable React components.

Example:

``` jsx
<ProductCard product={product} />
```

A product can contain:

``` js
{
  id: 1,
  name: "iPhone 16 Pro",
  price: 79999,
  image: "/images/iphone.jpg",
  category: "Mobile",
  rating: 4.8
}
```

------------------------------------------------------------------------

## 🛒 Cart

The cart supports:

-   Add product
-   Remove product
-   Increase quantity
-   Decrease quantity
-   Calculate subtotal
-   Calculate delivery charges
-   Calculate GST
-   Calculate total price
-   Proceed to checkout

Example calculation:

``` text
Subtotal
+ Delivery Charge
+ GST
= Final Total
```

Cart data can be stored in:

``` js
localStorage
```

Example:

``` js
localStorage.setItem(
  "cart",
  JSON.stringify(cart)
);
```

------------------------------------------------------------------------

## ❤️ Wishlist

Users can:

-   Add products to wishlist
-   Remove products from wishlist
-   View wishlist products

Wishlist state can be managed using:

``` text
WishlistContext.jsx
```

------------------------------------------------------------------------

## 🔐 Authentication

The frontend authentication flow includes:

-   Login
-   Register
-   Logout
-   Protected pages
-   User session handling

Initially, authentication can use:

``` js
localStorage
```

Example:

``` js
localStorage.setItem(
  "user",
  JSON.stringify(user)
);
```

Later, this can be replaced with JWT authentication from the backend.

------------------------------------------------------------------------

## 🌙 Dark Mode

The application supports theme switching.

The selected theme can be stored:

``` js
localStorage.setItem("theme", "dark");
```

The application can then load the saved theme when it starts.

------------------------------------------------------------------------

# 🧠 Context API

The application uses React Context API to share global data.

## AuthContext

Responsible for:

-   Current user
-   Login
-   Register
-   Logout
-   Authentication status

------------------------------------------------------------------------

## CartContext

Responsible for:

-   Cart items
-   Add to cart
-   Remove from cart
-   Increase quantity
-   Decrease quantity
-   Total price

------------------------------------------------------------------------

## WishlistContext

Responsible for:

-   Wishlist products
-   Add to wishlist
-   Remove from wishlist
-   Check wishlist status

------------------------------------------------------------------------

## ThemeContext

Responsible for:

-   Light mode
-   Dark mode
-   Theme switching
-   Saving theme preference

------------------------------------------------------------------------

# 🧭 Routing

React Router is used for page navigation.

Example routes:

``` jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/products" element={<Products />} />
  <Route path="/product/:id" element={<ProductDetails />} />
  <Route path="/cart" element={<Cart />} />
  <Route path="/wishlist" element={<Wishlist />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
  <Route path="/checkout" element={<Checkout />} />
  <Route path="/success" element={<Success />} />
</Routes>
```

------------------------------------------------------------------------

# 🔌 API Integration

Axios is used for communicating with the backend.

Example:

``` js
import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
});

export default api;
```

Example API request:

``` js
const response = await api.get("products/");
```

------------------------------------------------------------------------

# 🔐 JWT Authentication Integration

When the backend is connected, the access token can be stored:

``` js
localStorage.setItem(
  "access_token",
  token
);
```

Axios can automatically send the token:

``` js
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
```

------------------------------------------------------------------------

# 🐍 Planned Django Backend

The frontend is designed to connect with a Django REST Framework
backend.

Planned backend APIs:

``` text
/api/accounts/register/
/api/accounts/login/
/api/accounts/profile/

/api/products/
/api/products/<id>/

/api/cart/
/api/cart/items/

/api/orders/
/api/orders/<id>/

/api/payments/
```

------------------------------------------------------------------------

# 🗄️ Planned Database

The backend can use:

``` text
MySQL
```

Potential database models:

-   User
-   Product
-   Category
-   Cart
-   CartItem
-   Wishlist
-   Order
-   OrderItem
-   Payment
-   Address

------------------------------------------------------------------------

# 💳 Checkout Flow

The planned checkout process:

``` text
Browse Products
       ↓
Add Product to Cart
       ↓
View Cart
       ↓
Update Quantity
       ↓
Proceed to Checkout
       ↓
Add Address
       ↓
Select Payment Method
       ↓
Payment
       ↓
Create Order
       ↓
Order Success
```

------------------------------------------------------------------------

# 📁 Useful Commands

## Start the project

``` bash
npm run dev
```

## Build for production

``` bash
npm run build
```

## Preview production build

``` bash
npm run preview
```

## Install dependencies

``` bash
npm install
```

## Check installed packages

``` bash
npm list
```

## Check Tailwind version

``` bash
npm list tailwindcss
```

------------------------------------------------------------------------

# 🧹 PowerShell Commands

When using Windows PowerShell, use:

``` powershell
Remove-Item -Recurse -Force frontend
```

Do not use:

``` cmd
rmdir /s /q frontend
```

because `/s` and `/q` are Command Prompt options and do not work the
same way in PowerShell.

------------------------------------------------------------------------

# ⚠️ Common Problems

## `npm run dev` does not work

Check that you are inside the folder containing:

``` text
package.json
```

Then run:

``` bash
npm run
```

You should see:

``` text
dev
build
lint
preview
```

------------------------------------------------------------------------

## `npm error Missing script: "dev"`

You are probably in the wrong directory.

Check:

``` powershell
Get-ChildItem
```

Then move to the folder containing `package.json`.

------------------------------------------------------------------------

## `Can't resolve 'tailwindcss'`

Install Tailwind:

``` bash
npm install tailwindcss @tailwindcss/vite
```

Then verify:

``` bash
npm list tailwindcss
```

------------------------------------------------------------------------

## Tailwind PostCSS Plugin Error

If you see:

``` text
It looks like you're trying to use tailwindcss directly as a PostCSS plugin
```

make sure your Vite configuration uses:

``` js
import tailwindcss from "@tailwindcss/vite";
```

and:

``` js
plugins: [
  react(),
  tailwindcss(),
]
```

Avoid using the old Tailwind v3 PostCSS configuration with Tailwind v4.

------------------------------------------------------------------------

# 🔄 Development Workflow

The recommended workflow is:

``` text
1. Create a component
       ↓
2. Add JSX structure
       ↓
3. Add Tailwind styling
       ↓
4. Add React state
       ↓
5. Connect Context API
       ↓
6. Add routing
       ↓
7. Test in browser
       ↓
8. Connect backend API
```

------------------------------------------------------------------------

# 🧪 Testing Checklist

Before considering a feature complete:

## Home

-   [ ] Page loads correctly
-   [ ] Navbar works
-   [ ] Hero section works
-   [ ] Product cards display
-   [ ] Responsive design works

## Authentication

-   [ ] Register works
-   [ ] Login works
-   [ ] Logout works
-   [ ] Protected pages work

## Cart

-   [ ] Add product
-   [ ] Remove product
-   [ ] Increase quantity
-   [ ] Decrease quantity
-   [ ] Total calculation works

## Wishlist

-   [ ] Add product
-   [ ] Remove product
-   [ ] Wishlist persists

## Checkout

-   [ ] Cart validation works
-   [ ] Address form works
-   [ ] Payment flow works
-   [ ] Order success page works

------------------------------------------------------------------------

# 🚀 Future Improvements

Planned improvements include:

-   Backend integration
-   JWT authentication
-   Product API
-   Cart API
-   Order API
-   Payment gateway
-   Admin dashboard
-   Product image upload
-   Search API
-   Filtering API
-   Pagination
-   Product reviews
-   Email notifications
-   Order tracking
-   Cloud deployment

------------------------------------------------------------------------

# 🌍 Deployment Plan

## Frontend

Possible deployment platforms:

-   Vercel
-   Netlify

## Backend

Possible deployment platforms:

-   Render
-   AWS EC2
-   Railway

## Database

Possible options:

-   MySQL
-   PostgreSQL
-   AWS RDS

------------------------------------------------------------------------

# 👨‍💻 Author

**Siddharth Kumar**

Full-Stack Python Developer

Interested in:

-   Python
-   Django
-   Django REST Framework
-   FastAPI
-   React
-   MySQL
-   AWS
-   Docker
-   DevOps

------------------------------------------------------------------------

# 📄 License

This project is created for educational, portfolio, and development
purposes.

------------------------------------------------------------------------

## ⭐ Project Goal

The goal of **Siddharth Phonex** is to create a complete
production-style e-commerce platform using a modern React frontend and a
Python backend.

The final architecture will follow:

``` text
React Frontend
       ↓
REST API
       ↓
Django / FastAPI Backend
       ↓
MySQL Database
       ↓
Payment Gateway
       ↓
Cloud Deployment
```
