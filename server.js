require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const userRoutes = require('./src/routes/userRoutes');
const authRoutes = require('./src/routes/authRoutes');


const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/worko/user', userRoutes);

// Database Connection
mongoose.connect(process.env.DB_URL, 
    
).then(() => {
    console.log('Connected to the database');
}).catch(err => {
    console.log('Cannot connect to the database', err);
    process.exit();
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
