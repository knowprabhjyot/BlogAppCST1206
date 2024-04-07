const express = require('express');
const Router = express.Router();
const BlogController = require('../controllers/Blog');

// Blog Create API
Router.post('/', BlogController.CreateBlog)

// Get All Blogs API
Router.get('/', BlogController.GetAllBlogs);

// Delete Blog
// Router.delete('/', BlogController.DeleteBlog);

module.exports = Router;