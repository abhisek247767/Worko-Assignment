const Joi = require('joi');
const mongoose = require('mongoose');

const userSchema = Joi.object({
    email: Joi.string().email().required(),
    name: Joi.string().required(),
    age: Joi.number().integer().min(0).required(),
    city: Joi.string().required(),
    zipCode: Joi.string().required()
});

const validateUser = (user) => {
    return userSchema.validate(user);
};

const validateId = (id) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new Error('Invalid ID format');
    }
};

module.exports = {
    validateUser,
    validateId
};
