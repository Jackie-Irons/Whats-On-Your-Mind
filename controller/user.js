const express = require('express');
const User = require('../models/user');
const router = express.Router()

//get route
router.get('/', (req, res) => {
  User.find()
    .then((users) => {
      res.json(users)
    })
})
//post route

//put route

//delete route

module.exports = router