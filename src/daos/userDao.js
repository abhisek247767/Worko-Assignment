const User = require('../models/userModel');

const getAllUsers = async () => {
    return await User.find({ isDeleted: false });
};

const getUserById = async (id) => {
    return await User.findById(id).where({ isDeleted: false });
};

const createUser = async (userData) => {
    const user = new User(userData);
    return await user.save();
};

const updateUser = async (id, userData) => {
    return await User.findByIdAndUpdate(id, userData, { new: true }).where({ isDeleted: false });
};

const deleteUser = async (id) => {
    return await User.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};
