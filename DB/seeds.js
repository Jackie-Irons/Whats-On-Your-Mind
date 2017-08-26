require("dotenv").config();
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

var User = require('../models/user');

var Post = require('../models/post'); 

var Comment = require('../models/comment');

mongoose.Promise = global.Promise;

User.remove({}, (err) => console.log(err));
Post.remove({}, (err) => console.log(err));
Comment.remove({}, (err) => console.log(err));

const comment1 = new Comment({
	comment: "Great article can't wait",
})


const post1 = new Post({
	post: "Infinty War",
	topic: "Avengers",
	articles: "http://comicbook.com/marvel/2017/08/26/most-epic-avengers-infinity-war-poster-yet/",
	comment: [comment1]
})



const user1 = new User({
	firstname: "Tony",
    lastname: "Starks",
    email: "ironman@gmail.com",
    posts: [post1],
})





user1.save();
post1.save();
comment1.save();


mongoose.connection.close();