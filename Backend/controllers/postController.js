const mongoose = require("mongoose");
const PostModel = require("../models/PostModels");
const userModel = require("../models/userModels");

exports.getAllPostsController = async (req, res) => {
  try {
    const posts = await PostModel.find();
    if (!posts) {
      return res.status(200).send({
        success: false,
        message: "No Blogs Found",
      });
    }
    return res.status(200).send({
      success: true,
      message: "All Posts lists",
      posts,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error WHile Getting Posts",
      error,
    });
  }
};

//Create Blog
exports.createPostController = async (req, res) => {
  try {
    const { title, description } = req.body;
    //validation
    if (!title || !description) {
      return res.status(400).send({
        success: false,
        message: "Please Provide ALl Fields",
      });
    };
    const newPost = new PostModel({ title, description });
    await newPost.save();
    return res.status(201).send({
      success: true,
      message: "Post Created!",
      newPost,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error WHile Creting blog",
      error,
    });
  }
};