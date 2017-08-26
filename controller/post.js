const express = require('express');
const Post = require('../models/post');
const router = express.Router()

//get route
router.get('/', (req, res) => {
  Post.find()
    .then((posts) => {
      res.json(posts)
    })
})
//post route

//put route

//delete route

module.exports = router