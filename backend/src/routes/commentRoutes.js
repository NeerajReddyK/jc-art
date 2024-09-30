const express = require("express");
const router = express.Router();
const { createComment, getComments } = require("../controllers/commentController");

// POST a new comment
router.post("/comments", createComment);

// GET all comments (threaded)
router.get("/comments", getComments);

module.exports = router;
