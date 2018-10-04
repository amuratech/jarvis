const express = require('express')
const router = express.Router()
const apiController = require('./../components/api')
const bodyParser = require('body-parser')

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  next()
})

router.get("/user/details/",
    apiController.fetchUserInfo)

module.exports = router