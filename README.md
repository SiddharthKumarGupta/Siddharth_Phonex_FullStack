# 📱 Siddharth Phonex — Full-Stack E-Commerce Platform

A modern **full-stack e-commerce platform** for mobile phones, tablets, laptops, TVs, and accessories. The application is built with **React.js** on the frontend and **Django REST Framework** on the backend, with MySQL for data persistence and Razorpay for online payments.

The project provides a complete shopping experience including product browsing, search, authentication, cart management, wishlist, orders, profile management, and payment processing.

---

## 🚀 Live Project

**GitHub Repository:**
https://github.com/SiddharthKumarGupta/Siddharth_Phonex_FullStack

> Deployment URL will be added after deploying the frontend and backend.

---

## ✨ Key Features

### 👤 Authentication & User Management

* User registration and login
* JWT-based authentication
* Secure logout
* Protected routes
* User profile management
* Profile image upload
* Authentication state management

### 🛍️ Product Management

* Browse products by category
* Mobile phones
* Tablets
* Laptops
* TVs
* Accessories
* Product details
* Product search
* Product filtering
* Product ratings
* Discount and offer display

### 🛒 Shopping Cart

* Add products to cart
* Remove products from cart
* Update product quantity
* Cart item count
* Automatic total calculation
* Authenticated cart management

### ❤️ Wishlist

* Add products to wishlist
* Remove products from wishlist
* Wishlist management
* Wishlist integration with product cards

### 📦 Orders

* Create orders
* View order history
* View individual order details
* Order status management
* Customer order tracking

### 💳 Payments

* Razorpay payment integration
* Online payment processing
* Payment verification
* Order-payment relationship
* Cash on Delivery support

### 🎨 Modern UI

* Responsive React interface
* Modern product cards
* Category navigation
* Search bar
* Dark/light theme support
* Responsive navigation
* Promotional sections
* Mobile-friendly design

---

## 🖥️ Screenshots

### 🏠 Homepage

The homepage contains the main navigation, product search, promotional banner, featured collections, and product listings.

![Homepage](screenshots/home.png)

---

### ⭐ Premium Collections

The premium collection section highlights smartphones, smart watches, laptops, and other featured categories.

![Premium Collections](screenshots/homepage.png)

---

### 🛍️ Featured Products

Products are displayed with product images, brand information, ratings, pricing, discounts, wishlist controls, and Add to Cart functionality.

![Featured Products](screenshots/products.png)

---

### 📱 Smartphones

The smartphone category provides a dedicated product listing page with product cards, prices, discounts, ratings, wishlist functionality, and cart actions.

![Smartphones](screenshots/smartphones.png)

---

## 🏗️ Project Architecture

```text
Siddharth_Phonex_FullStack/
│
├── backend/
│   ├── manage.py
│   ├── config/
│   ├── accounts/
│   ├── products/
│   ├── cart/
│   ├── orders/
│   ├── payments/
│   ├── requirements.txt
│   └── ...
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── services/
│   │   └── assets/
│   ├── package.json
│   ├── vite.config.js
│   └── ...
│
├── screenshots/
│   ├── home.png
│   ├── homepage.png
│   ├── products.png
│   └── smartphones.png
│
├── .gitignore
└── README.md
```

---

## 🛠️ Technology Stack

### Frontend

* React.js
* JavaScript
* HTML5
* CSS3
* Bootstrap / Tailwind CSS
* React Router
* Axios
* React Icons
* Vite

### Backend

* Python
* Django
* Django REST Framework
* Simple JWT
* Django ORM

### Database

* MySQL
* SQLite for local development/testing

### Payment Gateway

* Razorpay

### Development Tools

* Git
* GitHub
* VS Code
* Postman
* npm
* Vite

---

## 🔐 Authentication Flow

The application uses JWT authentication for secure communication between the React frontend and Django REST API.

```text
User
  │
  ▼
React Login/Register
  │
  ▼
Django REST API
  │
  ▼
JWT Access + Refresh Token
  │
  ▼
Frontend Token Storage
  │
  ▼
Authenticated API Requests
  │
  ▼
Protected Django APIs
```

---

## 💳 Payment Flow

The Razorpay payment process follows this workflow:

```text
Customer
   │
   ▼
Add Product to Cart
   │
   ▼
Checkout
   │
   ▼
Create Order
   │
   ▼
Create Razorpay Order
   │
   ▼
Razorpay Payment Window
   │
   ▼
Customer Completes Payment
   │
   ▼
Payment Verification API
   │
   ▼
Update Payment Status
   │
   ▼
Confirm Order
```

---

## 🔌 API Modules

The backend is organized into separate Django applications:

| Module     | Responsibility                                       |
| ---------- | ---------------------------------------------------- |
| `accounts` | Registration, login, authentication and user profile |
| `products` | Product listing, details and categories              |
| `cart`     | Shopping cart management                             |
| `orders`   | Order creation and order history                     |
| `payments` | Razorpay payment creation and verification           |

Example API structure:

```text
/api/accounts/
/api/products/
/api/cart/
/api/orders/
/api/payments/
```

---

## ⚙️ Local Installation

### 1. Clone the Repository

```bash
git clone https://github.com/SiddharthKumarGupta/Siddharth_Phonex_FullStack.git
cd Siddharth_Phonex_FullStack
```

---

### 2. Backend Setup

Navigate to the backend:

```bash
cd backend
```

Create a virtual environment:

```bash
python -m venv venv
```

Activate it on Windows:

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run migrations:

```bash
python manage.py migrate
```

Create an admin user:

```bash
python manage.py createsuperuser
```

Start Django:

```bash
python manage.py runserver
```

Backend will normally run at:

```text
http://127.0.0.1:8000/
```

---

### 3. Frontend Setup

Open another terminal:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the React development server:

```bash
npm run dev
```

Frontend will normally run at:

```text
http://localhost:5173/
```

---

## 🔑 Environment Variables

Create environment files locally and **never commit secret values to GitHub**.

### Backend

Example:

```env
SECRET_KEY=your-django-secret-key
DEBUG=True

DB_NAME=your_database
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_HOST=localhost
DB_PORT=3306

RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
```

### Frontend

Example:

```env
VITE_API_URL=http://127.0.0.1:8000/api/
VITE_RAZORPAY_KEY_ID=your_razorpay_key
```

> Never upload `.env` files, API secrets, database passwords, Razorpay secret keys, or Django secret keys to GitHub.

---

## 📂 Main Features

```text
Authentication
      │
      ├── Register
      ├── Login
      ├── Logout
      └── Profile
             │
             ▼
        Product System
             │
      ┌──────┼──────┐
      ▼      ▼      ▼
    Search Categories Details
             │
             ▼
           Cart
             │
             ▼
         Checkout
             │
       ┌─────┴─────┐
       ▼           ▼
     COD        Razorpay
       │           │
       └─────┬─────┘
             ▼
           Order
             │
             ▼
        Order History
```

---

## 🔒 Security

The project implements security practices including:

* JWT authentication
* Protected API endpoints
* Authenticated user actions
* CSRF protection
* Environment-based secret management
* Permission-based API access
* Secure payment verification
* Backend validation
* Protected order and cart operations

---

## 📱 Responsive Design

The frontend is designed to provide a responsive shopping experience across:

* 💻 Desktop
* 💻 Laptop
* 📱 Mobile
* 📱 Tablet

---

## 🎯 Project Highlights

* Full-stack architecture using **React + Django REST Framework**
* RESTful API-based frontend/backend communication
* JWT authentication and protected routes
* MySQL database integration
* Shopping cart and wishlist functionality
* Complete order management workflow
* Razorpay payment integration
* Responsive e-commerce interface
* Modular Django backend architecture
* Modern React component-based frontend

---

## 🔮 Future Improvements

* Product reviews and user ratings
* Advanced product filtering
* Coupon and discount management
* Admin analytics dashboard
* Email notifications
* SMS notifications
* Inventory management
* Cloud image storage
* Production deployment
* Docker containerization
* CI/CD pipeline
* AWS deployment

---

## 👨‍💻 Developer

### Siddharth Kumar

**Python Full-Stack Developer**

Interested in:

* Python
* Django
* Django REST Framework
* React.js
* MySQL
* AWS
* Docker
* DevOps

---

## 📄 License

This project is currently intended for educational, portfolio, and demonstration purposes.

---

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.

**Repository:**
https://github.com/SiddharthKumarGupta/Siddharth_Phonex_FullStack
