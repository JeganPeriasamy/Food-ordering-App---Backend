# FOOD ORDERING APP (BACKEND) - Table of Contents
1. [Introduction](#introduction)
2. [Technologies Used](#technologies-used)
4. [Render URL]
5. [Installation](#installation)
6. [Usage](#usage)
7. [API Endpoints](#api-endpoints)
8. [Database Schema](#database-schema)

## Technologies Used
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [JWT](https://jwt.io/)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [Stripe](https://stripe.com/)

## BACKEND URL :https://food-ordering-app-backend-1-hnpj.onrender.com 

## Installation

Step-by-step instructions on how to get a development environment running.

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/your-repository.git
   cd your-repository
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add the necessary environment variables.
   ```env
   PORT=5000
   MONGODB_URI=your-mongodb-uri
   JWT_SECRET=your-jwt-secret
   STRIPE_SECRET_KEY=your-stripe-secret-key
   ```

4. **Run the development server:**
   ```sh
   npm start
   ```

## Usage

Provide instructions and examples for using the project.

1. **Start the server:**
   ```sh
   npm start
   ```

2. **API Base URL:**
   ```sh
   http://localhost:5000/api
   ```

## API Endpoints

### User Authentication Endpoints-  Login and Register(SignUp)

- **POST https://backendurl/api/user/register** - Get all users
- **POST https://backendurl/api/user/login** - Create a new user

### Products  Endpoints

- **POST https://backendurl/api/food/add** - To add Product from Admin
- **POST https://backendurl/api/food/remove** - To Remove Product
- **GET  https://backendurl/api/food/list** - To get all products 


### Orders Endpoints

- **POST https://backendurl/api/order/place** - Place Order
- **POST https://backendurl/api/order/verify** - Verify userOrder
- **POST https://backendurlm/api/order/userorders** - Get order by ID BY USER
- **GET https://backendurl/api/order/list** -Get order by ID
- **POST https://backendurl/api/order/status** - Update order by ID

### Cart Endpoints

- **POST https://backendurl/api/cart/add** - ADD to cart
- **POST https://backendurl/api/cart/remove** - Remove from cart
- **POST https://backendurl/api/cart/get** - Get cart by ID BY USER

## Database Schema

### User Model
```json

 {
  "name": "String",
  "email": "String",
  "password": "String",
  "cartData": "Object"
}


```
### Product Model
```json
{
  "name": "String",
  "description": "String",
  "price": "Number",
  "image": "String",
  "category": "String",
  
}
```

### Order Model
```json
{
 "userId": "String",
  "items": "Array",
  "amount": "Number",
  "address": "Object",
  "status": "String",
  "date": "Date",
  "payment": "Boolean"
}
```




