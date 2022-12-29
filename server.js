// creates an express app 
const express = require('express')
const app = express()

// importing path 
const path = require('path')
// importing logging middleware
const { logger } = require('./middleware/logger')
// importing error handling middleware 
const errorHandler = require('./middleware/errorHandler')
// which port the application is to run on
const PORT = process.env.PORT || 3500

app.use(logger)

// Adding Middleware to process and parse JSON 
app.use(express.json())

// telling express where to find static files
// __dirname is an environment variable that tells you the absolute path of the directory 
// containing the currently executing file.
app.use('/', express.static(path.join(__dirname, 'public')))

// Root 
app.use('/', require('./routes/root'))

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

// Run the server 
app.listen(PORT, () => console.log(`Running on port: ${PORT}.`))