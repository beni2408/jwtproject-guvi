# JWT Authentication Project

A secure Node.js Express application with JWT (JSON Web Token) authentication, user registration, login, and protected routes.

## 🚀 Features

- **User Registration** - Create new user accounts with secure password hashing
- **User Login** - Authenticate users and generate JWT tokens
- **Protected Routes** - Access control using JWT middleware
- **Password Security** - Bcrypt password hashing with salt rounds
- **Database Integration** - MongoDB with Mongoose ODM
- **Error Handling** - Comprehensive error handling middleware
- **Environment Configuration** - Secure environment variable management

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/beni2408/jwtproject-guvi.git
   cd jwtproject-guvi
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:

   ```env
   # Server Configuration
   PORT=5000

   # JWT Configuration
   JWT_AUTH_SECRET_KEY=your_super_secret_jwt_key_here_make_it_long_and_secure

   # Database Configuration
   MONGODB_URI=mongodb://localhost:27017/jwtproject

   # Password Hashing
   SALT_ROUNDS=12
   ```

4. **Start the application**

   ```bash
   # Development mode
   npm run dev

   # Production mode
   npm start
   ```

## 📁 Project Structure

```
jwtproject-guvi/
├── src/
│   ├── config/
│   │   └── db.js              # Database connection configuration
│   ├── controllers/
│   │   ├── authController.js  # Authentication logic (register, login)
│   │   └── infoController.js  # Protected route controller
│   ├── middlewares/
│   │   ├── authMiddleware.js  # JWT authentication middleware
│   │   └── errorHandler.js    # Error handling middleware
│   ├── models/
│   │   └── userModel.js       # User schema definition
│   └── routes/
│       ├── authRoutes.js      # Authentication routes
│       └── infoRoutes.js      # Protected info routes
├── index.js                   # Application entry point
├── package.json
└── README.md
```

## 🔧 API Endpoints

### Authentication Routes

#### Register User

```http
POST /api/user/register
Content-Type: application/json

{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "password123",
  "gender": "male",
  "role": "user"
}
```

**Response:**

```json
{
  "status": "success",
  "message": "User registered successfully",
  "data": {
    "_id": "user_id",
    "username": "johndoe",
    "email": "john@example.com",
    "gender": "male",
    "role": "user"
  }
}
```

#### Login User

```http
POST /api/user/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**

```json
{
  "status": "success",
  "message": "Login successful",
  "data": {
    "user": {
      "id": "user_id",
      "username": "johndoe",
      "email": "john@example.com",
      "role": "user"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

### Protected Routes

#### Get User Info

```http
GET /api/info/
Authorization: Bearer YOUR_JWT_TOKEN_HERE
```

**Response:**

```json
{
  "status": "success",
  "message": "User info retrieved successfully",
  "data": {
    "user": {
      "id": "user_id",
      "username": "johndoe",
      "email": "john@example.com",
      "role": "user"
    }
  }
}
```

## 🔐 Security Features

- **Password Hashing**: Uses bcryptjs with configurable salt rounds
- **JWT Tokens**: Secure token-based authentication
- **Environment Variables**: Sensitive data stored in environment variables
- **Input Validation**: Basic validation for required fields
- **Error Handling**: Comprehensive error handling without exposing sensitive information

## 🧪 Testing with Postman

1. **Import the collection** (create a new collection in Postman)
2. **Set up environment variables** in Postman:

   - `base_url`: `http://localhost:5000`
   - `token`: (will be set after login)

3. **Test Flow:**
   1. Register a new user
   2. Login with the registered user
   3. Copy the token from login response
   4. Use the token in Authorization header for protected routes

## 📦 Dependencies

### Production Dependencies

- **express**: Web framework for Node.js
- **mongoose**: MongoDB object modeling tool
- **jsonwebtoken**: JWT implementation
- **bcryptjs**: Password hashing library
- **dotenv**: Environment variable loader

### Development Dependencies

- **nodemon**: Development server with auto-restart

## 🚀 Deployment

1. **Environment Variables**: Set up production environment variables
2. **Database**: Configure production MongoDB connection
3. **Security**: Use strong JWT secret keys
4. **HTTPS**: Enable HTTPS in production
5. **CORS**: Configure CORS for your frontend domain

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 🐛 Issues

If you encounter any issues, please create an issue in the [GitHub repository](https://github.com/beni2408/jwtproject-guvi/issues).

## 📞 Support

For support, email your-email@example.com or create an issue in the repository.

---

**Happy Coding! 🎉**
