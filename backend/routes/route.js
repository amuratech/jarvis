/*
Page rendered routes are defined out here
  - Home page
  - Admin page

includes an empty middleware
*/
const express = require('express')
const router = express.Router()

// middleware that is specific to this router
router.use(function middleware (req, res, next) {
  console.log('logging it out')
  next()
})


// define the home page route
router.get('/', function (req, res) {
  res.render('index.html')
})

// define the about route
router.get('/admin', function (req, res) {
  res.render('admin.html')
})


module.exports = router