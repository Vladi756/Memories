// creates an express app 
const express = require('express')
const app = express()

// importing path 
const path = require('path')

// which port the application is to run on
const PORT = process.env.PORT || 3500

// telling express where to find static files
// __dirname is a global variable understood by express, tells it to 
// search in this directory, then go to the 'public' directory
app.use('/', express.static(path.join(__dirname, '/public')))

// run the server 
app.listen(PORT, () => console.log(`Running on port: ${PORT}.`))