// connecting mongoDB to application
const mongoose = require('mongoose')

const connectDB = async () => {
    try{
        // connecting using the URI generated at mongoDB
        await mongoose.connect(process.env.DATABASE_URI)
    } catch(err){
        console.log(err)
    }
}

// exporting database connecting function
module.exports = connectDB
