const Joi = require('joi');

// Define Joi schema for login data
const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()  // Make sure to call `required()` as a function
}).unknown(true);  // Allow unknown keys in the object (optional)

// Function to validate login data against the schema
const validateLogin = (data) => {
    return loginSchema.validate(data);
};

// Export the validateLogin function
module.exports = {
    validateLogin
};
