var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: String,
  description: String
});

var Post = mongoose.model("posts", PostSchema);//name database and json
module.exports = Post;