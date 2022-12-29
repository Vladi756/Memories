// configuring CORS options 
// Cross-Origin Resource Sharing

const allowedOrigins = require('./allowedOrigins')

const corsOptions = {
    origin: (origin, callback) => {
        // origin should either be allowed, or have on origin (like Postman)
        if(allowedOrigins.indexOf(origin) !== -1 || !origin){
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS.'))
        }
    },
    credentials: true, 
    optionsSuccessStatus: 200
}

module.exports = corsOptions

