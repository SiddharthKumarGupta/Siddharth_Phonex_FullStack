# Siddharth Phonex - Django REST Backend

A complete e-commerce backend API built with **Python, Django, Django
REST Framework, MySQL, JWT Authentication, and Django Admin**.

This README documents **only the backend**.

The frontend is not covered in this document.

------------------------------------------------------------------------

# 1. Backend Project Overview

The backend provides APIs for an e-commerce application.

Main backend modules:

-   User registration
-   User login
-   JWT authentication
-   User profile
-   Product management
-   Product categories
-   Cart management
-   Orders
-   Payments
-   Admin dashboard
-   Database management
-   API authentication
-   Permissions
-   Media uploads

------------------------------------------------------------------------

# 2. Backend Technologies

## Programming Language

-   Python

## Backend Framework

-   Django
-   Django REST Framework

## Authentication

-   JWT
-   `djangorestframework-simplejwt`

## Database

-   MySQL
-   SQLite for development/testing if required

## API Testing

-   Postman

## Admin Panel

-   Django Admin

## Other Tools

-   Git
-   Virtual Environment
-   pip
-   Python-dotenv
-   CORS Headers

------------------------------------------------------------------------

# 3. Backend Architecture

``` text
Client / Frontend
        |
        v
      API
        |
        v
Django REST Framework
        |
        v
      Views
        |
        v
   Serializers
        |
        v
      Models
        |
        v
     Database
```

The backend is divided into independent Django applications:

``` text
accounts
products
cart
orders
payments
```

Each application has its own responsibility.

------------------------------------------------------------------------

# 4. Create the Backend Project

## Step 1: Create a Project Folder

``` powershell
mkdir siddharth-phonex
cd siddharth-phonex
```

------------------------------------------------------------------------

# 5. Create a Python Virtual Environment

``` powershell
python -m venv venv
```

Activate the virtual environment in PowerShell:

``` powershell
venv\Scripts\Activate.ps1
```

If activation is blocked, run:

``` powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Then activate again:

``` powershell
venv\Scripts\Activate.ps1
```

You should see:

``` text
(venv)
```

at the beginning of your terminal.

------------------------------------------------------------------------

# 6. Install Django

``` bash
pip install django
```

Check Django:

``` bash
django-admin --version
```

------------------------------------------------------------------------

# 7. Install Django REST Framework

``` bash
pip install djangorestframework
```

Django REST Framework is used to build REST APIs.

------------------------------------------------------------------------

# 8. Install JWT Authentication

``` bash
pip install djangorestframework-simplejwt
```

JWT is used for:

-   Login authentication
-   Access tokens
-   Refresh tokens
-   Protected APIs

------------------------------------------------------------------------

# 9. Install CORS Headers

``` bash
pip install django-cors-headers
```

CORS allows the frontend application to communicate with the Django
backend.

------------------------------------------------------------------------

# 10. Install MySQL Database Driver

``` bash
pip install mysqlclient
```

If `mysqlclient` causes Windows installation issues, use:

``` bash
pip install pymysql
```

------------------------------------------------------------------------

# 11. Create the Django Project

From the backend root directory:

``` bash
django-admin startproject config .
```

The `.` is important because it creates the Django project in the
current folder.

------------------------------------------------------------------------

# 12. Initial Backend Structure

After creating the Django project:

``` text
backend/
│
├── venv/
│
├── manage.py
│
└── config/
    ├── __init__.py
    ├── settings.py
    ├── urls.py
    ├── asgi.py
    └── wsgi.py
```

------------------------------------------------------------------------

# 13. Understanding `manage.py`

`manage.py` is used to run Django commands.

Examples:

``` bash
python manage.py runserver
```

``` bash
python manage.py startapp accounts
```

``` bash
python manage.py makemigrations
```

``` bash
python manage.py migrate
```

``` bash
python manage.py createsuperuser
```

------------------------------------------------------------------------

# 14. Create Django Applications

Create the accounts application:

``` bash
python manage.py startapp accounts
```

Create the products application:

``` bash
python manage.py startapp products
```

Create the cart application:

``` bash
python manage.py startapp cart
```

Create the orders application:

``` bash
python manage.py startapp orders
```

Create the payments application:

``` bash
python manage.py startapp payments
```

------------------------------------------------------------------------

# 15. Final Backend Structure

``` text
backend/
│
├── venv/
│
├── manage.py
│
├── requirements.txt
│
├── .env
│
├── .gitignore
│
├── config/
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   ├── asgi.py
│   └── wsgi.py
│
├── accounts/
│   ├── migrations/
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── serializers.py
│   ├── urls.py
│   ├── views.py
│   └── tests.py
│
├── products/
│   ├── migrations/
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── serializers.py
│   ├── urls.py
│   ├── views.py
│   └── tests.py
│
├── cart/
│   ├── migrations/
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── serializers.py
│   ├── urls.py
│   ├── views.py
│   └── tests.py
│
├── orders/
│   ├── migrations/
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── serializers.py
│   ├── urls.py
│   ├── views.py
│   └── tests.py
│
└── payments/
    ├── migrations/
    ├── __init__.py
    ├── admin.py
    ├── apps.py
    ├── models.py
    ├── serializers.py
    ├── urls.py
    ├── views.py
    └── tests.py
```

------------------------------------------------------------------------

# 16. Register Apps in `settings.py`

Open:

``` text
config/settings.py
```

Add:

``` python
INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",

    "rest_framework",
    "corsheaders",

    "accounts",
    "products",
    "cart",
    "orders",
    "payments",
]
```

------------------------------------------------------------------------

# 17. Configure CORS

In `settings.py`:

``` python
MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware",

    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]
```

For development:

``` python
CORS_ALLOW_ALL_ORIGINS = True
```

For production, configure specific allowed origins instead.

------------------------------------------------------------------------

# 18. Configure Django REST Framework

Add:

``` python
REST_FRAMEWORK = {
    "DEFAULT_AUTHENTICATION_CLASSES": (
        "rest_framework_simplejwt.authentication.JWTAuthentication",
    ),

    "DEFAULT_PERMISSION_CLASSES": (
        "rest_framework.permissions.AllowAny",
    ),
}
```

Protected APIs can explicitly use:

``` python
permission_classes = [IsAuthenticated]
```

------------------------------------------------------------------------

# 19. Configure JWT

JWT authentication provides:

``` text
Access Token
Refresh Token
```

Typical login flow:

``` text
User Login
    |
    v
Django validates credentials
    |
    v
Access Token + Refresh Token
    |
    v
Client stores tokens
    |
    v
Client sends:
Authorization: Bearer <access_token>
```

------------------------------------------------------------------------

# 20. Configure Database

## SQLite

Default Django database:

``` python
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db.sqlite3",
    }
}
```

## MySQL

Example:

``` python
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.mysql",
        "NAME": "phonex_db",
        "USER": "root",
        "PASSWORD": "your_password",
        "HOST": "localhost",
        "PORT": "3306",
    }
}
```

Never commit database passwords to GitHub.

------------------------------------------------------------------------

# 21. Create Database Migrations

After creating or changing models:

``` bash
python manage.py makemigrations
```

Apply migrations:

``` bash
python manage.py migrate
```

Migration workflow:

``` text
Change Model
    ↓
makemigrations
    ↓
Migration File
    ↓
migrate
    ↓
Database Updated
```

------------------------------------------------------------------------

# 22. Accounts Application

The accounts application handles:

-   User registration
-   User login
-   JWT tokens
-   User profile
-   Authentication
-   Logout logic
-   User information

------------------------------------------------------------------------

# 23. User Registration API

Example endpoint:

``` text
POST /api/accounts/register/
```

Example request:

``` json
{
    "username": "siddharth",
    "email": "user@example.com",
    "password": "password123"
}
```

Expected response:

``` json
{
    "message": "User registered successfully"
}
```

------------------------------------------------------------------------

# 24. User Login API

Example endpoint:

``` text
POST /api/accounts/login/
```

Example request:

``` json
{
    "username": "siddharth",
    "password": "password123"
}
```

Response:

``` json
{
    "refresh": "refresh_token",
    "access": "access_token"
}
```

The access token is used for protected APIs.

------------------------------------------------------------------------

# 25. Protected API Requests

Request header:

``` text
Authorization: Bearer <access_token>
```

Example:

``` text
GET /api/cart/
```

Without a token:

``` text
401 Unauthorized
```

With a valid token:

``` text
200 OK
```

------------------------------------------------------------------------

# 26. Products Application

The products application manages:

-   Products
-   Product names
-   Product descriptions
-   Product prices
-   Product images
-   Product categories
-   Stock
-   Ratings
-   Product status

Example product model structure:

``` text
Product
├── name
├── description
├── price
├── category
├── image
├── stock
├── rating
└── created_at
```

------------------------------------------------------------------------

# 27. Product API Endpoints

Typical endpoints:

``` text
GET     /api/products/
GET     /api/products/<id>/
POST    /api/products/
PUT     /api/products/<id>/
PATCH   /api/products/<id>/
DELETE  /api/products/<id>/
```

Example:

``` text
GET /api/products/
```

Returns product data.

------------------------------------------------------------------------

# 28. Product Serializer

Serializers convert:

``` text
Django Model
        ↓
JSON
```

And:

``` text
JSON
        ↓
Django Model
```

Example:

``` python
from rest_framework import serializers
from .models import Product


class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = "__all__"
```

------------------------------------------------------------------------

# 29. Cart Application

The cart application manages:

-   User cart
-   Product quantity
-   Add product
-   Remove product
-   Increase quantity
-   Decrease quantity
-   Cart total

Cart relationship:

``` text
User
 |
 └── Cart
      |
      └── CartItem
           |
           └── Product
```

------------------------------------------------------------------------

# 30. Cart API Endpoints

``` text
GET     /api/cart/
POST    /api/cart/
PATCH   /api/cart/<id>/
DELETE  /api/cart/<id>/
```

Example add-to-cart request:

``` json
{
    "product_id": 1,
    "quantity": 1
}
```

Typical flow:

``` text
User Login
    ↓
JWT Token
    ↓
Add Product
    ↓
Cart API
    ↓
Cart Item Saved
```

------------------------------------------------------------------------

# 31. Orders Application

The orders application manages:

-   Order creation
-   Order items
-   Order status
-   Delivery address
-   Order total
-   User order history

Order lifecycle:

``` text
Cart
  ↓
Checkout
  ↓
Order Created
  ↓
Payment
  ↓
Order Confirmed
  ↓
Processing
  ↓
Shipped
  ↓
Delivered
```

------------------------------------------------------------------------

# 32. Order API Endpoints

Typical endpoints:

``` text
POST /api/orders/
GET  /api/orders/
GET  /api/orders/<id>/
```

Example order:

``` json
{
    "shipping_address": "Bangalore, India",
    "payment_method": "COD"
}
```

------------------------------------------------------------------------

# 33. Payments Application

The payments application manages:

-   Payment creation
-   Payment method
-   Payment status
-   Payment amount
-   Transaction information

Possible payment methods:

``` text
COD
CARD
UPI
NET BANKING
```

Example endpoint:

``` text
POST /api/payments/
```

------------------------------------------------------------------------

# 34. Backend URL Structure

Main URL file:

``` text
config/urls.py
```

Example:

``` python
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),

    path(
        "api/accounts/",
        include("accounts.urls")
    ),

    path(
        "api/products/",
        include("products.urls")
    ),

    path(
        "api/cart/",
        include("cart.urls")
    ),

    path(
        "api/orders/",
        include("orders.urls")
    ),

    path(
        "api/payments/",
        include("payments.urls")
    ),
]
```

------------------------------------------------------------------------

# 35. App URL Structure

Example:

``` python
from django.urls import path
from .views import CartView

urlpatterns = [
    path("", CartView.as_view(), name="cart"),
]
```

The final URL becomes:

``` text
/api/cart/
```

------------------------------------------------------------------------

# 36. API Request Flow

``` text
Request
   ↓
Main URL
   ↓
App URL
   ↓
View
   ↓
Authentication
   ↓
Serializer
   ↓
Model
   ↓
Database
   ↓
Response
```

Example:

``` text
POST /api/cart/
        ↓
config/urls.py
        ↓
cart/urls.py
        ↓
CartView
        ↓
JWT Authentication
        ↓
CartSerializer
        ↓
Cart Model
        ↓
Database
        ↓
JSON Response
```

------------------------------------------------------------------------

# 37. Django Admin Panel

Create a superuser:

``` bash
python manage.py createsuperuser
```

Enter:

``` text
Username
Email
Password
```

Start server:

``` bash
python manage.py runserver
```

Open:

``` text
http://127.0.0.1:8000/admin/
```

The admin panel can manage:

-   Users
-   Products
-   Cart items
-   Orders
-   Payments

------------------------------------------------------------------------

# 38. Register Models in Admin

Example:

``` python
from django.contrib import admin
from .models import Product

admin.site.register(Product)
```

After registering a model, it becomes available in Django Admin.

------------------------------------------------------------------------

# 39. Media Files

For product images:

``` python
MEDIA_URL = "/media/"
MEDIA_ROOT = BASE_DIR / "media"
```

In the main URL file:

``` python
from django.conf import settings
from django.conf.urls.static import static

urlpatterns += static(
    settings.MEDIA_URL,
    document_root=settings.MEDIA_ROOT
)
```

------------------------------------------------------------------------

# 40. Environment Variables

Create:

``` text
.env
```

Example:

``` text
SECRET_KEY=your-secret-key
DEBUG=True
DB_NAME=phonex_db
DB_USER=root
DB_PASSWORD=your-password
DB_HOST=localhost
DB_PORT=3306
```

Never upload `.env` to GitHub.

Add to `.gitignore`:

``` text
.env
venv/
__pycache__/
*.pyc
db.sqlite3
media/
```

------------------------------------------------------------------------

# 41. Requirements File

Create:

``` bash
pip freeze > requirements.txt
```

Example:

``` text
Django
djangorestframework
djangorestframework-simplejwt
django-cors-headers
mysqlclient
```

Install all dependencies later:

``` bash
pip install -r requirements.txt
```

------------------------------------------------------------------------

# 42. Run the Backend

Activate the virtual environment:

``` powershell
venv\Scripts\Activate.ps1
```

Start the server:

``` bash
python manage.py runserver
```

Backend URL:

``` text
http://127.0.0.1:8000/
```

------------------------------------------------------------------------

# 43. Test APIs with Postman

## Register

``` text
POST
/api/accounts/register/
```

## Login

``` text
POST
/api/accounts/login/
```

## Products

``` text
GET
/api/products/
```

## Cart

``` text
GET
/api/cart/
```

## Orders

``` text
GET
/api/orders/
```

## Payments

``` text
POST
/api/payments/
```

------------------------------------------------------------------------

# 44. API Testing Workflow

``` text
Start Django Server
        ↓
Open Postman
        ↓
Register User
        ↓
Login User
        ↓
Copy Access Token
        ↓
Add Bearer Token
        ↓
Test Protected APIs
```

------------------------------------------------------------------------

# 45. Recommended Backend Development Order

## Step 1 - Project Setup

``` text
Create folder
    ↓
Create virtual environment
    ↓
Install Django
    ↓
Create Django project
```

## Step 2 - Configure Django

``` text
settings.py
    ↓
Installed Apps
    ↓
REST Framework
    ↓
CORS
    ↓
Database
```

## Step 3 - Accounts

``` text
Register
    ↓
Login
    ↓
JWT
    ↓
Protected APIs
```

## Step 4 - Products

``` text
Product Model
    ↓
Serializer
    ↓
Views
    ↓
URLs
    ↓
Admin
    ↓
API Testing
```

## Step 5 - Cart

``` text
Cart Model
    ↓
Cart Item
    ↓
Add Product
    ↓
Update Quantity
    ↓
Remove Product
```

## Step 6 - Orders

``` text
Cart
    ↓
Checkout
    ↓
Create Order
    ↓
Order Items
    ↓
Order Status
```

## Step 7 - Payments

``` text
Payment Model
    ↓
Payment Method
    ↓
Payment Status
    ↓
Order Payment
```

## Step 8 - Admin Panel

``` text
Register Models
    ↓
Create Superuser
    ↓
Manage Backend Data
```

------------------------------------------------------------------------

# 46. Backend Development Workflow

``` text
Create App
    ↓
Create Model
    ↓
Create Migration
    ↓
Apply Migration
    ↓
Create Serializer
    ↓
Create View
    ↓
Create URL
    ↓
Register Admin
    ↓
Test API
```

------------------------------------------------------------------------

# 47. Common Django Commands

## Create Project

``` bash
django-admin startproject config .
```

## Create App

``` bash
python manage.py startapp accounts
```

## Make Migrations

``` bash
python manage.py makemigrations
```

## Apply Migrations

``` bash
python manage.py migrate
```

## Run Server

``` bash
python manage.py runserver
```

## Create Superuser

``` bash
python manage.py createsuperuser
```

## Open Django Shell

``` bash
python manage.py shell
```

## Check Django Project

``` bash
python manage.py check
```

## Freeze Dependencies

``` bash
pip freeze > requirements.txt
```

------------------------------------------------------------------------

# 48. Common Errors

## `manage.py` Not Found

Make sure you are inside the folder containing:

``` text
manage.py
```

Check:

``` powershell
Get-ChildItem
```

You should see:

``` text
manage.py
```

------------------------------------------------------------------------

## `ModuleNotFoundError`

Install the missing package:

``` bash
pip install package-name
```

Example:

``` bash
pip install djangorestframework
```

------------------------------------------------------------------------

## `401 Unauthorized`

Usually means:

-   No JWT token
-   Expired JWT token
-   Incorrect Authorization header

Correct format:

``` text
Authorization: Bearer <access_token>
```

------------------------------------------------------------------------

## `404 Not Found`

Check:

``` text
config/urls.py
```

Then check:

``` text
app/urls.py
```

Then confirm the endpoint.

Example:

``` text
/api/cart/
```

------------------------------------------------------------------------

## `405 Method Not Allowed`

The URL exists, but the HTTP method is not supported.

Example:

``` text
GET
POST
PUT
PATCH
DELETE
```

Check the API view methods.

------------------------------------------------------------------------

## Migration Errors

Run:

``` bash
python manage.py check
```

Then:

``` bash
python manage.py makemigrations
python manage.py migrate
```

------------------------------------------------------------------------

# 49. Backend API Security

Important security practices:

-   Use JWT authentication
-   Protect user-specific APIs
-   Use `IsAuthenticated`
-   Validate request data
-   Never expose secret keys
-   Never commit `.env`
-   Validate file uploads
-   Use HTTPS in production
-   Configure CORS correctly
-   Use secure database credentials

------------------------------------------------------------------------

# 50. Final Backend Architecture

``` text
Django Project
      |
      v
    config
      |
      ├── accounts
      │     ├── Models
      │     ├── Serializers
      │     ├── Views
      │     └── URLs
      │
      ├── products
      │     ├── Models
      │     ├── Serializers
      │     ├── Views
      │     └── URLs
      │
      ├── cart
      │     ├── Models
      │     ├── Serializers
      │     ├── Views
      │     └── URLs
      │
      ├── orders
      │     ├── Models
      │     ├── Serializers
      │     ├── Views
      │     └── URLs
      │
      └── payments
            ├── Models
            ├── Serializers
            ├── Views
            └── URLs
```

------------------------------------------------------------------------

# 51. Final Backend Feature Checklist

## Project Setup

-   [ ] Virtual environment created
-   [ ] Django installed
-   [ ] Django REST Framework installed
-   [ ] JWT installed
-   [ ] CORS configured
-   [ ] Database configured

## Accounts

-   [ ] Register API
-   [ ] Login API
-   [ ] JWT authentication
-   [ ] Protected APIs
-   [ ] User profile

## Products

-   [ ] Product model
-   [ ] Product serializer
-   [ ] Product API
-   [ ] Product admin
-   [ ] Image upload

## Cart

-   [ ] Add to cart
-   [ ] View cart
-   [ ] Update quantity
-   [ ] Remove item
-   [ ] Cart total

## Orders

-   [ ] Create order
-   [ ] View orders
-   [ ] Order details
-   [ ] Order status

## Payments

-   [ ] Payment model
-   [ ] Payment API
-   [ ] Payment method
-   [ ] Payment status

## Admin

-   [ ] Superuser created
-   [ ] Models registered
-   [ ] Products manageable
-   [ ] Orders manageable
-   [ ] Payments manageable

------------------------------------------------------------------------

# Author

**Siddharth Kumar**

Python Backend Developer \| Django REST Framework Developer

------------------------------------------------------------------------

# License

This project is created for learning, portfolio, and development
purposes.
