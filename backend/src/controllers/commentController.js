const Comment = require("../models/commentModel");

// Create a new comment or reply to an existing comment
const createComment = async (req, res) => {
  const { name, text, parentId } = req.body;

  try {
    const comment = new Comment({
      name: name || undefined,  // Defaults to "Anonymous User" if not provided
      text,
      parentId: parentId || null,  // Allows for threading
    });

    const savedComment = await comment.save();
    res.status(201).json(savedComment);
  } catch (err) {
    res.status(500).json({ error: "Failed to create comment", message: err.message });
  }
};

// Fetch all comments, optionally threaded
const getComments = async (req, res) => {
  try {
    // Fetch parent comments (parentId: null)
    const parentComments = await Comment.find({ parentId: null }).lean();

    // Find replies for each comment and build a threaded structure
    const fetchReplies = async (parentComment) => {
      const replies = await Comment.find({ parentId: parentComment._id }).lean();
      if (replies.length > 0) {
        parentComment.replies = replies;
        await Promise.all(replies.map(fetchReplies));  // Recursively fetch replies
      }
    };

    await Promise.all(parentComments.map(fetchReplies));

    res.status(200).json(parentComments);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch comments", message: err.message });
  }
};

module.exports = { createComment, getComments };
