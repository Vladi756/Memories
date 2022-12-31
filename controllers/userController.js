const User = require('../models/User')
const Note = require('../models/Note')
const asyncHandler = require('express-async-handler')

// to encrypt inputted password for database storage
const bcrypt = require('bcrypt')

// @desc - get all users 
// @route GET /users 
// @access private
const getAllUsers = ascyncHandler(async (req, res) => {

})
// @desc - create a new user
// @route POST /users 
// @access private
const createNewUser = ascyncHandler(async (req, res) => {

})
// @desc - update a user
// @route PATCH /users 
// @access private
const updateUser = ascyncHandler(async (req, res) => {

})
// @desc - delete a user
// @route DELETE /users 
// @access private
const deleteUser = ascyncHandler(async (req, res) => {

})


module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}
