const db = require("../db");

// GET ALL BLOGS
const getAllBlogs = async (req, res) => {
  try {
    const [blogs] = await db.query(
      "SELECT id, title, slug, category, excerpt, image_url, read_time, created_at FROM blogs ORDER BY id DESC"
    );

    return res.status(200).json({
      success: true,
      blogs
    });
  } catch (error) {
    console.error("Get All Blogs Error:", error.message);
    return res.status(500).json({
      success: false,
      message: "Server error while fetching blogs"
    });
  }
};

// GET SINGLE BLOG BY SLUG
const getBlogBySlug = async (req, res) => {
  try {
    const { slug } = req.params;

    const [blogs] = await db.query(
      "SELECT * FROM blogs WHERE slug = ?",
      [slug]
    );

    if (blogs.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Blog post not found"
      });
    }

    return res.status(200).json({
      success: true,
      blog: blogs[0]
    });
  } catch (error) {
    console.error("Get Blog by Slug Error:", error.message);
    return res.status(500).json({
      success: false,
      message: "Server error while fetching the blog"
    });
  }
};

// CREATE BLOG
const createBlog = async (req, res) => {
  try {
    const { title, slug, category, excerpt, content, image_url, read_time } = req.body;

    if (!title || !slug || !category || !excerpt || !content) {
      return res.status(400).json({
        success: false,
        message: "Title, slug, category, excerpt and content are required fields"
      });
    }

    // Check if slug is unique
    const [existingBlog] = await db.query(
      "SELECT id FROM blogs WHERE slug = ?",
      [slug]
    );

    if (existingBlog.length > 0) {
      return res.status(409).json({
        success: false,
        message: "A blog with this slug already exists"
      });
    }

    await db.query(
      "INSERT INTO blogs (title, slug, category, excerpt, content, image_url, read_time) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [title, slug, category, excerpt, content, image_url, read_time || "5 min"]
    );

    return res.status(201).json({
      success: true,
      message: "Blog post created successfully"
    });
  } catch (error) {
    console.error("Create Blog Error:", error.message);
    return res.status(500).json({
      success: false,
      message: "Server error while creating the blog"
    });
  }
};

// UPDATE BLOG
const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, slug, category, excerpt, content, image_url, read_time } = req.body;

    // Check if blog exists
    const [existingBlog] = await db.query(
      "SELECT id FROM blogs WHERE id = ?",
      [id]
    );

    if (existingBlog.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Blog post not found"
      });
    }

    await db.query(
      "UPDATE blogs SET title = ?, slug = ?, category = ?, excerpt = ?, content = ?, image_url = ?, read_time = ? WHERE id = ?",
      [title, slug, category, excerpt, content, image_url, read_time, id]
    );

    return res.status(200).json({
      success: true,
      message: "Blog post updated successfully"
    });
  } catch (error) {
    console.error("Update Blog Error:", error.message);
    return res.status(500).json({
      success: false,
      message: "Server error while updating the blog"
    });
  }
};

// DELETE BLOG
const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if blog exists
    const [existingBlog] = await db.query(
      "SELECT id FROM blogs WHERE id = ?",
      [id]
    );

    if (existingBlog.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Blog post not found"
      });
    }

    await db.query("DELETE FROM blogs WHERE id = ?", [id]);

    return res.status(200).json({
      success: true,
      message: "Blog post deleted successfully"
    });
  } catch (error) {
    console.error("Delete Blog Error:", error.message);
    return res.status(500).json({
      success: false,
      message: "Server error while deleting the blog"
    });
  }
};

module.exports = {
  getAllBlogs,
  getBlogBySlug,
  createBlog,
  updateBlog,
  deleteBlog
};
