const express = require("express");
const router = express.Router();
const { createBlog, getAllBlogs, getBlogsByAuthorId } = require("../controllers/blog.controller.js");
const authAuthor = require("../middlewares/auth.middleware.js");
const validate = require("../middlewares/validation.middleware.js");

router.post("/blogs", authAuthor, validate, createBlog);
router.get("/blogs", getAllBlogs);
router.get("/blogs/:emailId", getBlogsByAuthorId);

module.exports = router;
