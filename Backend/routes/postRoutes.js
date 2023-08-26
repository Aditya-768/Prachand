// routes.js
const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// Create a new post
router.post('/create-post', postController.createPost);

router.get('/get-posts', postController.getAllPosts);

module.exports = router;
