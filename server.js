// can use dotenv in any file now 
require('dotenv').config()

console.log(process.env.NODE_ENV)

// creates an express app 
const express = require('express')
const app = express()

// importing dependencies - 3rd party middleware 
const path = require('path')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const corsOptions = require('./config/corsOptions')

// importing custom middleware
const { logger } = require('./middleware/logger')
const errorHandler = require('./middleware/errorHandler')
const { logEvents } = require('./middleware/logger')

const connectDB = require('./config/dbConn')
const mongoose = require('mongoose')

// which port the application is to run on
const PORT = process.env.PORT || 3500
// connect with MongoDB
connectDB()

app.use(logger)

// using CORS with defined options
app.use(cors(corsOptions))
// Adding Middleware to process and parse JSON 
app.use(express.json())
app.use(cookieParser())

// telling express where to find static files
// __dirname is an environment variable that tells you the absolute path of the directory 
// containing the currently executing file.
app.use('/', express.static(path.join(__dirname, 'public')))

// Routes
app.use('/', require('./routes/root'))
app.use('/users', require('./routes/userRoutes'))


// A 'catch-all' that goes at the end to handle 404 responses. 
// Like a default case in a switch statement
app.all('*', (req, res) => {
    res.status(404)
    // handling json, html and other requests
    if(req.accepts('html')) {
        // route to 404 view
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    } else if(req.accepts('json')) {
        res.json({message: '404: Not Found'})
    } else {
        res.type('txt').send('404: Not Found')
    }
})

app.use(errorHandler)

mongoose.connection.once('open', () =>{
    console.log('Connected to MongoDB')
    // Run the server 
    app.listen(PORT, () => console.log(`Running on port: ${PORT}.`))
})

// erro listener
mongoose.connection.once('error', (err) =>{
    console.log(err)
    logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoLog.log')
})