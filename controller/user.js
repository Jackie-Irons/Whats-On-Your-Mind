const express = require('express');
const User = require('../models/User');
const router = express.Router()

//get route
router.get('/', (req, res) => {
  User.find()
    .then((user) => {
      res.json(user)
    })
})
//post route

//put route

//delete route

module.exports = router