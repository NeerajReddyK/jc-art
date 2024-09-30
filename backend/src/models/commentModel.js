const mongoose = require("mongoose");

// creates schema to store in database
const commentSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "Anonymous User"
  },
  text: {
    type: String,
    required: true,
  },
  parentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment",
    default: null
  },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
