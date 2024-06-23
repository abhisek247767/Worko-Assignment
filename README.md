# Node.js MVC API Project

## Overview

This project is a basic implementation of a Node.js API using the MVC architecture. It includes CRUD operations and basic authentication for user management and uses MongoDB as the database.

## Features

- MVC Architecture
- MongoDB for data persistence
- User basic authentication 
- CRUD operations for user management
- Input validation using Joi
- Environment configuration using dotenv

## Prerequisites

- Node.js (v14 or later)
- MongoDB

## Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/abhisek247767/nodejs-mvc-api.git
   cd nodejs-mvc-api
2. **Install dependencies**

``` bash
npm install
```
3. **Environment variables**
Create a .env file in the root directory and add the following environment variables:

```
PORT=3000
DB_URL=your-mongodb-connection-string
JWT_SECRET=your-secret-key
```
3.**Start the server**

``` bash
npm start
```

## API Endpoints
### 1. Create User
 - Endpoint: POST /worko/user
 - Description: Creates a new user.
- 
```
{
    "email": "test@example.com",
    "name": "Test User",
    "age": 25,
    "city": "New York",
    "zipCode": "10001"
}
```
### 2. Get All Users
- Endpoint: GET /worko/user
- Description: Retrieves a list of all users.
### 3. Get User by ID
- Endpoint: GET /worko/user/:userId
- Description: Retrieves details of a user by their ID.
- Params: userId: The ID of the user.
### 3.Update User
- Endpoint: PUT /worko/user/:userId
- Description: Updates the details of a user by their ID.
- Params: userId: The ID of the user.
Body:
```
{
    "email": "updated@example.com",
    "name": "Updated User",
    "age": 26,
    "city": "Los Angeles",
    "zipCode": "90001"
}
```
### 3. Partially Update User
- Endpoint: PATCH /worko/user/:userId
- Description: Partially updates the details of a user by their ID.
Params:
- userId: The ID of the user.
Body:
```
{
    "city": "San Francisco",
    "zipCode": "94101"
}
```
### 3.Delete User
- Endpoint: DELETE /worko/user/:userId
- Description:  deletes a user by their ID.
- Params: userId: The ID of the user.

## Dependencies
- Express
- Mongoose
- Joi
- bcryptjs
- dotenv
