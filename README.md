ShopGenius – Full Stack Ecommerce Application

This is a full‑stack Ecommerce project built using the MERN stack. The project contains three separate parts:

Frontend (User Website)

Admin Panel

Backend (API & Database)

📁 Project Structure
5.ShopGenius/
│
├── frontend/     # User‑facing ecommerce website
├── admin/        # Admin dashboard
├── backend/      # Node.js + Express API
└── README.md     # (This file)

Each folder has its own README, but this main README explains the complete project flow.

🚀 Tech Stack
Frontend (User)

React.js (Vite)
React Router DOM
Axios
Tailwind CSS
React Toastify
Google OAuth

Admin Panel

React.js (Vite)
Tailwind CSS
Axios
React Router DOM
React Toastify

Backend

Node.js
Express.js
MongoDB + Mongoose
JWT Authentication
Bcrypt (Password Hashing)
Multer & Cloudinary (Image Upload)
Razorpay (Payment Integration)
Cookie Parser

🔐 Authentication Flow

User Signup & Login using JWT
Passwords are encrypted using bcrypt
JWT tokens are stored securely
Protected routes for users and admins

🛒 User Features (Frontend)

User Registration & Login
Browse Products
Product Details Page
Add to Cart
Remove from Cart
Place Orders
Online Payment (Razorpay)
Order History
Logout

🧑‍💼 Admin Features

Admin Login
Add New Products
Update Existing Products
Delete Products
View All Orders
Update Order Status
Manage Product Images

🗄️ Backend Features

REST API Architecture
MongoDB Database Models
Authentication Middleware
Product APIs
Cart APIs
Order APIs
Payment APIs
Image Upload APIs

🔁 Complete Project Flow

User visits Frontend Website
User registers or logs in
User browses products fetched from backend
User adds items to cart
User places order & completes payment
Order is saved in database
Admin logs into Admin Panel
Admin manages products & orders


⚙️ Environment Variables

Create a .env file in the backend folder and add:

PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_jwt_secret
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret

▶️ How to Run the Project
Backend
cd backend
npm install
npm run dev

Frontend
cd frontend
npm install
npm run dev

Admin Panel
cd admin
npm install
npm run dev

📌 Notes

Make sure MongoDB is running
Backend must run before frontend/admin
This project is for learning & practice purposes


If you like this project, feel free to ⭐ star the repository.
Happy Coding 🚀