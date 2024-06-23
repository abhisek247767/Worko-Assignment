const userDao = require('../daos/userDao');

const getAllUsers = async () => {
    return await userDao.getAllUsers();
};

const getUserById = async (id) => {
    return await userDao.getUserById(id);
};

const createUser = async (userData) => {
    return await userDao.createUser(userData);
};

const updateUser = async (id, userData) => {
    return await userDao.updateUser(id, userData);
};

const deleteUser = async (id) => {
    return await userDao.deleteUser(id);
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};
