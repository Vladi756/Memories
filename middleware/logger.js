// destructured assignments importing dependencies 

const { format } = require('date-fns')
const { v4: uuid } = require('uuid')
const fs = require('fs')
const fsPromises = require('fs').promises
const path = require('path')

// helper function to log events 
const logEvents = async(message, logFileName) => {
    // template literals to log items
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`

    try{
        if(!fs.existsSync(path.join(__dirname, '..', 'logs'))){
            await fsPromises.access,mkdir(path.join(__dirname, '..', 'logs'))
        }
        await fsPromises.appendFile(path.join(__dirname, '..', 'logs', 
        logFileName), logItem)
    } catch {
        console.log(err)
    }
}

// writing custom middleware using helper method 
const logger = (req, res, next) => {
    logEvents(`${req.method}\t${req.url}\t${req.header.origin}`, 'reqLog.log')

    console.log(`${req.method} ${req.path}`)
    // moves on to next piece of middleware 
    next() 
}

// export middleware && helper because it can be used elsewhere 
module.exports = { logEvents, logger }