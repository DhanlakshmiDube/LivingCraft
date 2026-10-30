# LivingCraft 🏡✨

> Modern Interior Design Showcase, Interactive Room Planning, and Cost Estimation Platform.

LivingCraft is a fullstack web application that brings together elegant interior inspirations, an interactive room budget estimator, a curated product explorer, user authentication, and quote inquiry management.

---

## 🏗️ Architecture & Integration

LivingCraft is structured as an integrated fullstack application:

```text
LivingCraft/
├── client/                     # Frontend (React 19, Vite, Tailwind CSS)
│   ├── src/
│   │   ├── components/         # UI Components (Navbar, Hero, Contact, etc.)
│   │   │   ├── AuthModal.jsx   # Sign In / Sign Up modal
│   │   │   ├── Contact.jsx     # Quote submission form (integrated with API)
│   │   │   ├── ProductExplorer.jsx # Product catalog (fetches from API)
│   │   │   └── ...
│   │   ├── services/
│   │   │   └── api.js          # Unified API service layer with JWT auth
│   │   └── ...
│   ├── vite.config.js          # Vite config with API proxy to port 5000
│   └── .env.example
├── server/                     # Backend (Node.js, Express, MongoDB, Mongoose)
│   ├── config/                 # DB connection with in-memory offline fallback
│   ├── controllers/            # Auth, Contact, and Product business logic
│   ├── middleware/             # JWT authentication middleware
│   ├── models/                 # Mongoose schemas (User, Contact, Product)
│   ├── routes/                 # Express API routes (/api/auth, /api/contact, /api/products)
│   ├── server.js               # Express application entry point
│   └── .env.example
├── scripts/
│   └── start-dev.js            # Unified cross-platform dev process launcher
└── package.json                # Root package scripts to run client & server
```

---

## 🚀 Key Features & Fullstack Integration

1. **User Authentication (JWT + Bcrypt)**:
   - Full registration, login, and profile verification (`/api/auth/register`, `/api/auth/login`, `/api/auth/me`).
   - Interactive `AuthModal` in the frontend linked directly to the `Navbar`.
   - JWT tokens stored in localStorage with bearer authentication headers.

2. **Quote Requests & Project Consultation**:
   - Integrated quote inquiry submission form in `Contact.jsx` connected to `POST /api/contact`.
   - Real-time validation, server-side persistence, and confirmation tracking with inquiry reference ID.

3. **Product Catalog API**:
   - `GET /api/products` endpoint serving curated furniture and interior decor items with live filtering and search.

4. **Resilient Offline Development Mode**:
   - Server automatically connects to MongoDB when `MONGO_URI` is provided or MongoDB is running.
   - If MongoDB is temporarily offline, the server gracefully falls back to in-memory persistence, enabling seamless development without blockers.

5. **Integrated Vite Proxy**:
   - `/api` requests from Vite on port `5173` are smoothly proxied to the backend on port `5000`.

---

## 🛠️ Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (v9 or higher)
- MongoDB (optional for local offline mode, recommended for production)

### 1. Installation

Install dependencies for both frontend and backend:

```bash
# In the root repository directory:
npm run install:all
```

Or install separately:
```bash
cd server && npm install
cd ../client && npm install
```

### 2. Environment Setup

**Server (`server/.env`):**
```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/livingcraft
JWT_SECRET=your_jwt_secret_key_here
NODE_ENV=development
```

**Client (`client/.env`):**
```env
VITE_API_BASE_URL=/api
```

### 3. Running the Application

Run both frontend and backend simultaneously with one command:
```bash
npm run dev
```

Or run them in separate terminal windows:

- **Backend**:
  ```bash
  npm run server
  # Server runs on http://localhost:5000
  ```
- **Frontend**:
  ```bash
  npm run client
  # Client runs on http://localhost:5173
  ```

---

## 📡 API Reference

| Endpoint | Method | Access | Description |
|---|---|---|---|
| `/api/health` | GET | Public | Server health & database connection status |
| `/api/auth/register` | POST | Public | Register new user account |
| `/api/auth/login` | POST | Public | Authenticate user & retrieve JWT token |
| `/api/auth/me` | GET | Private (Bearer) | Get authenticated user profile |
| `/api/contact` | POST | Public | Submit space consultation or quote inquiry |
| `/api/contact` | GET | Public / Admin | List submitted consultation inquiries |
| `/api/products` | GET | Public | Fetch catalog furniture and decor products |
