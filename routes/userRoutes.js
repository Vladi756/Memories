const express = require('express')
// routes endpoints (URIs)
const router =  express.Router()

router.route('/')
    // read
    .get()
    // create 
    .post()
    // update
    .patch()
    // delete 
    .delete()

module.exports = router