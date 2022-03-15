const express = require('express');
const router = express.Router();
const blogControllers = require("../controllers/blogControllers");
const authorControllers=require("../controllers/authorController")

router.post("/authors", authorControllers.createAuthor);
router.post("/blogs", blogControllers.createBlog);
router.get("/getblog", blogControllers.getBlogs);
router.put("/updateBlogs/:blogId", blogControllers.updateBlog);
router.delete("/deleteBlogs/:BlogId", blogControllers.deleteBlog);
router.delete("/deleteByAddress", blogControllers.deleteByAddress);

module.exports = router;