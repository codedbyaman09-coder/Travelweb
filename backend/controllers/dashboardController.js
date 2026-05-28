const db = require("../db");

const countTable = async (table) => {
  const [[row]] = await db.query(`SELECT COUNT(*) AS count FROM \`${table}\``);
  return row.count;
};

exports.getStats = async (req, res) => {
  try {
    const [
      users,
      blogs,
      inquiries,
      destinations,
      itineraries,
      faqs,
      media,
      content,
      testimonials
    ] = await Promise.all([
      countTable("users"),
      countTable("blogs"),
      countTable("inquiries"),
      countTable("destinations"),
      countTable("itineraries"),
      countTable("faqs"),
      countTable("content_items"),
      countTable("content_items"),
      db
        .query("SELECT COUNT(*) AS count FROM content_items WHERE type = 'testimonial'")
        .then(([[row]]) => row.count)
    ]);

    const [recentInquiries] = await db.query("SELECT * FROM inquiries ORDER BY created_at DESC LIMIT 5");

    res.json({
      success: true,
      data: {
        stats: {
          users,
          blogs,
          inquiries,
          destinations,
          itineraries,
          faqs,
          media,
          content,
          testimonials
        },
        recentInquiries
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
