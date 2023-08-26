const express = require("express");
const {
  getAllPostsController,
  createPostController
} = require("../controllers/postController");

//router object
const router = express.Router();

//routes
// GET || all posts
router.get("/all-posts", getAllPostsController);

//POST || create post
router.post("/create-post", createPostController);

module.exports = router;