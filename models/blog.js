const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "BlogUser",
    required: true
}
}, {
    timestamps: true
});


const BlogModel = mongoose.model('UserBlog', BlogSchema);

module.exports = BlogModel;

