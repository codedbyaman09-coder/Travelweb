const mysql = require("mysql2/promise");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const dbName = process.env.DB_NAME || "indeora";

const config = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  multipleStatements: true
};

const ensureColumn = async (connection, table, column, definition) => {
  const [rows] = await connection.query(
    `SELECT COUNT(*) AS count
     FROM information_schema.COLUMNS
     WHERE TABLE_SCHEMA = ? AND TABLE_NAME = ? AND COLUMN_NAME = ?`,
    [dbName, table, column]
  );

  if (rows[0].count === 0) {
    await connection.query(`ALTER TABLE \`${table}\` ADD COLUMN \`${column}\` ${definition}`);
    console.log(`Added column ${table}.${column}`);
  }
};

const ensureSeedSetting = async (connection, key, value) => {
  await connection.query(
    `INSERT INTO settings (setting_key, setting_value)
     VALUES (?, ?)
     ON DUPLICATE KEY UPDATE setting_value = setting_value`,
    [key, value]
  );
};

const ensureSeedContent = async (connection, item) => {
  await connection.query(
    `INSERT INTO content_items
       (type, title, subtitle, description, media_url, video_url, link_url, button_text, display_order, status, extra_json)
     SELECT ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?
     WHERE NOT EXISTS (
       SELECT 1 FROM content_items WHERE type = ? AND title = ?
     )`,
    [
      item.type,
      item.title,
      item.subtitle || null,
      item.description || null,
      item.media_url || null,
      item.video_url || null,
      item.link_url || null,
      item.button_text || null,
      Number(item.display_order || 0),
      item.status || "active",
      item.extra_json || null,
      item.type,
      item.title
    ]
  );
};

const run = async () => {
  const connection = await mysql.createConnection(config);

  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`);
  await connection.query(`USE \`${dbName}\``);

  await connection.query(`
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL,
      role VARCHAR(50) DEFAULT 'admin',
      status ENUM('active', 'inactive') DEFAULT 'active',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

    CREATE TABLE IF NOT EXISTS blogs (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      slug VARCHAR(255) NOT NULL UNIQUE,
      category VARCHAR(100) NOT NULL,
      excerpt TEXT NOT NULL,
      content LONGTEXT NOT NULL,
      page_content LONGTEXT NULL,
      image_url TEXT NULL,
      read_time VARCHAR(50) NOT NULL DEFAULT '5 min',
      status ENUM('active', 'inactive') DEFAULT 'active',
      meta_title VARCHAR(255) NULL,
      meta_description TEXT NULL,
      meta_keywords TEXT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

    CREATE TABLE IF NOT EXISTS blog_categories (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(150) NOT NULL,
      slug VARCHAR(180) NOT NULL UNIQUE,
      description TEXT NULL,
      display_order INT DEFAULT 0,
      status ENUM('active', 'inactive') DEFAULT 'active',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

    CREATE TABLE IF NOT EXISTS destinations (
      id INT AUTO_INCREMENT PRIMARY KEY,
      type VARCHAR(50) DEFAULT 'destination',
      title VARCHAR(255) NOT NULL,
      slug VARCHAR(255) NOT NULL UNIQUE,
      image_url TEXT NULL,
      price DECIMAL(10,2) NULL,
      days INT NULL,
      meta_title VARCHAR(255) NULL,
      meta_description TEXT NULL,
      meta_keywords TEXT NULL,
      page_content LONGTEXT NULL,
      status ENUM('active', 'inactive') DEFAULT 'active',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

    CREATE TABLE IF NOT EXISTS itineraries (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      slug VARCHAR(255) NOT NULL UNIQUE,
      days INT NOT NULL DEFAULT 1,
      price DECIMAL(10,2) NULL,
      itinerary_details JSON NULL,
      includes_excludes JSON NULL,
      images JSON NULL,
      page_content LONGTEXT NULL,
      status ENUM('active', 'inactive') DEFAULT 'active',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

    CREATE TABLE IF NOT EXISTS faqs (
      id INT AUTO_INCREMENT PRIMARY KEY,
      category VARCHAR(100) NOT NULL,
      question TEXT NOT NULL,
      answer TEXT NOT NULL,
      display_order INT DEFAULT 0,
      status ENUM('active', 'inactive') DEFAULT 'active',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

    CREATE TABLE IF NOT EXISTS inquiries (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      phone VARCHAR(50) NULL,
      message TEXT NOT NULL,
      source VARCHAR(100) DEFAULT 'website',
      status ENUM('new', 'read', 'replied') DEFAULT 'new',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

    CREATE TABLE IF NOT EXISTS pages (
      id INT AUTO_INCREMENT PRIMARY KEY,
      pageName VARCHAR(100) NOT NULL,
      pageSlug VARCHAR(255) NOT NULL UNIQUE,
      metaTitle VARCHAR(255) NULL,
      metaDescription TEXT NULL,
      metaKeywords TEXT NULL,
      canonicalUrl VARCHAR(255) NULL,
      ogTitle VARCHAR(255) NULL,
      ogDescription TEXT NULL,
      ogImage VARCHAR(255) NULL,
      twitterTitle VARCHAR(255) NULL,
      twitterDescription TEXT NULL,
      twitterImage VARCHAR(255) NULL,
      robots VARCHAR(100) DEFAULT 'index, follow',
      schemaMarkup TEXT NULL,
      status ENUM('active', 'inactive') DEFAULT 'active',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

    CREATE TABLE IF NOT EXISTS settings (
      id INT AUTO_INCREMENT PRIMARY KEY,
      setting_key VARCHAR(100) NOT NULL UNIQUE,
      setting_value LONGTEXT NOT NULL,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

    CREATE TABLE IF NOT EXISTS abouts (
      id INT AUTO_INCREMENT PRIMARY KEY,
      type VARCHAR(100) NOT NULL DEFAULT 'team',
      title VARCHAR(255) NOT NULL,
      subtitle VARCHAR(255) NULL,
      description TEXT NULL,
      image TEXT NULL,
      icon VARCHAR(100) NULL,
      display_order INT DEFAULT 0,
      status ENUM('active', 'inactive') DEFAULT 'active',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

    CREATE TABLE IF NOT EXISTS yogas (
      id INT AUTO_INCREMENT PRIMARY KEY,
      type VARCHAR(100) NOT NULL DEFAULT 'section',
      title VARCHAR(255) NOT NULL,
      description TEXT NULL,
      image TEXT NULL,
      display_order INT DEFAULT 0,
      status ENUM('active', 'inactive') DEFAULT 'active',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

    CREATE TABLE IF NOT EXISTS content_items (
      id INT AUTO_INCREMENT PRIMARY KEY,
      type VARCHAR(80) NOT NULL,
      title VARCHAR(255) NOT NULL,
      subtitle VARCHAR(255) NULL,
      description TEXT NULL,
      media_url TEXT NULL,
      video_url TEXT NULL,
      link_url TEXT NULL,
      button_text VARCHAR(120) NULL,
      display_order INT DEFAULT 0,
      status ENUM('active', 'inactive') DEFAULT 'active',
      extra_json LONGTEXT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      INDEX idx_content_type_status (type, status)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
  `);

  const columns = [
    ["users", "role", "VARCHAR(50) DEFAULT 'admin'"],
    ["users", "status", "ENUM('active', 'inactive') DEFAULT 'active'"],
    ["users", "updated_at", "TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"],
    ["blogs", "page_content", "LONGTEXT NULL"],
    ["blogs", "status", "ENUM('active', 'inactive') DEFAULT 'active'"],
    ["blogs", "meta_title", "VARCHAR(255) NULL"],
    ["blogs", "meta_description", "TEXT NULL"],
    ["blogs", "meta_keywords", "TEXT NULL"],
    ["blogs", "updated_at", "TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"],
    ["destinations", "type", "VARCHAR(50) DEFAULT 'destination'"],
    ["destinations", "price", "DECIMAL(10,2) NULL"],
    ["destinations", "days", "INT NULL"],
    ["destinations", "meta_keywords", "TEXT NULL"],
    ["destinations", "page_content", "LONGTEXT NULL"],
    ["destinations", "updated_at", "TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"],
    ["itineraries", "page_content", "LONGTEXT NULL"],
    ["itineraries", "updated_at", "TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"],
    ["faqs", "updated_at", "TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"],
    ["inquiries", "updated_at", "TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"],
    ["settings", "updated_at", "TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"],
    ["abouts", "status", "ENUM('active', 'inactive') DEFAULT 'active'"],
    ["abouts", "updated_at", "TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"],
    ["yogas", "status", "ENUM('active', 'inactive') DEFAULT 'active'"],
    ["yogas", "updated_at", "TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"]
  ];

  for (const [table, column, definition] of columns) {
    await ensureColumn(connection, table, column, definition);
  }

  const defaultPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD || "admin123", 10);
  await connection.query(
    `INSERT INTO users (name, email, password, role)
     SELECT ?, ?, ?, 'admin'
     WHERE NOT EXISTS (SELECT 1 FROM users WHERE email = ?)`,
    [
      process.env.ADMIN_NAME || "Indeora Admin",
      process.env.ADMIN_EMAIL || "admin@indeora.com",
      defaultPassword,
      process.env.ADMIN_EMAIL || "admin@indeora.com"
    ]
  );

  const categories = [
    ["Culture & Histoire", "culture-histoire"],
    ["Nature & Bien-etre", "nature-bien-etre"],
    ["Spiritualite", "spiritualite"],
    ["Aventure", "aventure"],
    ["Plage & Detente", "plage-detente"]
  ];

  for (let i = 0; i < categories.length; i += 1) {
    await connection.query(
      `INSERT INTO blog_categories (name, slug, display_order)
       VALUES (?, ?, ?)
       ON DUPLICATE KEY UPDATE name = VALUES(name)`,
      [categories[i][0], categories[i][1], i]
    );
  }

  await ensureSeedSetting(connection, "siteName", "Indeora Voyages");
  await ensureSeedSetting(connection, "contactEmail", "contact@indeoravoyages.com");
  await ensureSeedSetting(connection, "phoneIndia", "+91 93514 21959");
  await ensureSeedSetting(connection, "phoneFrance", "+33 6 16 64 26 26");
  await ensureSeedSetting(connection, "address", "Bikaner, Inde");
  await ensureSeedSetting(connection, "homeVideoUrl", "https://www.youtube.com/watch?v=4hIXWVt8Rrk");

  await ensureSeedContent(connection, {
    type: "logo",
    title: "Header Logo",
    subtitle: "Website header logo",
    description: "Primary logo shown in the website navbar.",
    media_url: "/uploads/indeora-logo.png",
    display_order: 0
  });

  await ensureSeedContent(connection, {
    type: "logo",
    title: "Footer Logo",
    subtitle: "Website footer logo",
    description: "Logo available for footer and dark backgrounds.",
    media_url: "/uploads/indeora-logo.png",
    display_order: 1
  });

  await ensureSeedContent(connection, {
    type: "banner",
    title: "Home Hero Banner",
    subtitle: "home",
    description: "Default home page hero banner image.",
    media_url: "/uploads/home-hero-banner.png",
    display_order: 0
  });

  await ensureSeedContent(connection, {
    type: "banner",
    title: "Blog Header Banner",
    subtitle: "blog",
    description: "Default blog page banner image.",
    media_url: "/uploads/blog-header-banner.png",
    display_order: 1
  });

  await ensureSeedContent(connection, {
    type: "banner",
    title: "Footer Banner",
    subtitle: "footer",
    description: "Default footer banner image.",
    media_url: "/uploads/footer-banner.png",
    display_order: 2
  });

  const galleryItems = [
    ["Gallery Image 1", "Curated gallery image for the website.", "/uploads/gallery-1.png"],
    ["Gallery Image 2", "Curated gallery image for the website.", "/uploads/gallery-2.png"],
    ["Gallery Image 3", "Curated gallery image for the website.", "/uploads/gallery-3.png"],
    ["Gallery Image 4", "Curated gallery image for the website.", "/uploads/gallery-4.png"],
    ["Gallery Image 5", "Curated gallery image for the website.", "/uploads/gallery-5.png"],
    ["Gallery Image 6", "Curated gallery image for the website.", "/uploads/gallery-6.png"]
  ];

  for (let i = 0; i < galleryItems.length; i += 1) {
    await ensureSeedContent(connection, {
      type: "gallery",
      title: galleryItems[i][0],
      subtitle: "website gallery",
      description: galleryItems[i][1],
      media_url: galleryItems[i][2],
      display_order: i
    });
  }

  await connection.end();
  console.log("Database migration completed successfully.");
};

run().catch((err) => {
  console.error("Migration failed:", err.message);
  process.exit(1);
});
