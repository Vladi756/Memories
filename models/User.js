// mongoose allows us to communicate with MongoDB easily
const mongoose = require('mongoose')

// defining database schema
const userSchema = new mongoose.Schema({
    // each field is an object - a dictionary
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    // can have multiple roles - that's why it's an array, denoted by the [] brackets
    roles: [{
        type: String,
        default: "Employee"
    }],
    active: {
        type: Boolean,
        // any new employee is by default active
        required: true
    }
})
// exporting userschema created above
module.exports = mongoose.model('User', userSchema)