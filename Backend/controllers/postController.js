const PostModel = require("../models/PostModels");

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await PostModel.find();
    return res.status(200).json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return res.status(500).json({ error: 'Server error' });
  }
};

// Create a new post
exports.createPost = async (req, res) => {
  try {
    const { title, description } = req.body;

    // Create a new post using the PostModel
    const newPost = await PostModel.create({ title, description });

    return res.status(201).json(newPost);
  } catch (error) {
    console.error('Error creating post:', error);
    return res.status(500).json({ error: 'Server error' });
  }
};