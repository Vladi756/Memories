const express = require('express')
// routes endpoints (URIs)
const router =  express.Router()
const path = require('path')

// express recognizes regEx
router.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
})      

module.exports = router