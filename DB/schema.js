const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
		comment: String,
})

const PostSchema = mongoose.Schema({
	post: String,
	topic: String,
	articles: String,
	comment: [CommentSchema]
})

const UserSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    post: [PostSchema],
});



var UserModel = mongoose.model("User", UserSchema);
var PostModel = mongoose.model("PostModel", PostSchema);

var CommentModel = mongoose.model("CommentModel", CommentSchema);

module.exports = {
	User: UserModel,
	Post: PostModel,
	Comment: CommentModel};

