# Luminary ✦

A premium full-stack **e-commerce platform** built with the MERN stack, featuring user authentication, admin dashboard, product management, and secure checkout.

![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-764ABC?style=flat&logo=redux&logoColor=white)

## ✨ Features

- 🔐 **JWT Authentication** — Secure user registration, login, and session management
- 🛍️ **Product Catalog** — Browse, search, and filter products with pagination
- ⭐ **Reviews & Ratings** — Authenticated users can leave product reviews
- 🛒 **Shopping Cart** — Add/remove/update quantities with persistent cart state
- 💳 **Checkout Flow** — Multi-step checkout with shipping address and payment
- 👑 **Admin Dashboard** — Manage products, orders, and users
- 📦 **Order Management** — Track order status from placement to delivery
- 🖼️ **Image Uploads** — Product images served via local upload or CDN

## 🛠️ Tech Stack

### Backend
| Technology | Purpose |
|---|---|
| Node.js + Express | REST API server |
| MongoDB + Mongoose | Database & ODM |
| JWT | Authentication & authorization |
| bcrypt | Password hashing |
| Multer | File/image upload handling |
| Mongoose Validators | Input validation |

### Frontend
| Technology | Purpose |
|---|---|
| React + Create React App | UI framework |
| React-Bootstrap | Component library |
| Redux Toolkit + RTK Query | State management & API calls |
| React Router v6 | Client-side routing |
| React Toastify | Notification toasts |
| React Helmet | SEO/head management |

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB instance (local or Atlas)

### 1. Clone & Install
```bash
git clone https://github.com/YOUR_USERNAME/luminary-mern.git
cd luminary-mern

# Install backend dependencies
npm install

# Install frontend dependencies
cd frontend && npm install && cd ..
```

### 2. Environment Variables
Create a `.env` file in the root directory:
```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/luminary
JWT_SECRET=your_super_secret_jwt_key
NODE_ENV=development

# Optional: Razorpay payment gateway
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret
```

### 3. Seed Sample Data (Optional)
```bash
# Import sample products & users
npm run data:import

# To clear database
npm run data:destroy
```

### 4. Run Development Servers
```bash
# Run both client and server with one command
npm run dev
```

Frontend at `http://localhost:3000` | API at `http://localhost:5000`

**Admin Credentials (after seeding):**
- Email: `admin@luminary.com`
- Password: `123456`

## 📁 Project Structure

```
luminary/
├── backend/
│   ├── controllers/    # Product, Order, User, Upload logic
│   ├── middleware/     # JWT auth, error handler, admin guard
│   ├── models/         # User, Product, Order schemas
│   ├── routes/         # /api/products, /api/orders, /api/users
│   ├── data/           # Sample seed data
│   └── server.js       # Express entry point
└── frontend/
    └── src/
        ├── components/ # Header, Footer, ProductCard, Rating, etc.
        ├── pages/      # Home, Product, Cart, Checkout, Login, Admin...
        ├── slices/     # RTK Query API slices + state slices
        └── store.js    # Redux store configuration
```

## 🏗️ Architecture

```
React (Client) ──HTTP/REST──▶ Express API ──Mongoose──▶ MongoDB
     │                              │
  Redux Toolkit              JWT Middleware
  (RTK Query)                Auth Guard
```

## 🔑 Key Implementation Details

- **Auth**: JWT issued on login, stored in HTTP-only cookie, decoded via `protect` middleware on every protected route
- **Role Guard**: `admin` middleware checks `user.isAdmin` for admin-only routes
- **RTK Query**: All API calls are defined as slices with automatic caching, invalidation, and loading states
- **Pagination**: Products list endpoint supports `?pageNumber=N` query parameter
- **Image Upload**: Multer handles multipart form-data, stores images to `/uploads`

## 📄 License

MIT © [Your Name]
