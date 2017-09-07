const express = require('express');
const Post = require('../models/post');
const router = express.Router()

//get route
router.get('/', (req, res) => {
	console.log('hit the post route')
  Post.find()
    .then((posts) => {
    	console.log(posts)
      res.json(posts)
    })
})
//post route

//put route

//delete route

module.exports = router