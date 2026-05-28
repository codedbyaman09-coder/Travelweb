const db = require('./config/db');

async function createTables() {
  const sections = `CREATE TABLE IF NOT EXISTS home_sections (
    id INT AUTO_INCREMENT PRIMARY KEY,
    section_key VARCHAR(100) NOT NULL UNIQUE,
    title VARCHAR(255) DEFAULT '',
    subtitle VARCHAR(255) DEFAULT '',
    description TEXT,
    button_text VARCHAR(100) DEFAULT '',
    button_link VARCHAR(255) DEFAULT '',
    display_order INT DEFAULT 0,
    status ENUM('active', 'inactive') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  )`;

  const items = `CREATE TABLE IF NOT EXISTS home_section_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    section_id INT NOT NULL,
    title VARCHAR(255) DEFAULT '',
    subtitle VARCHAR(255) DEFAULT '',
    description TEXT,
    image_url TEXT,
    video_url TEXT,
    link VARCHAR(255) DEFAULT '',
    icon VARCHAR(100) DEFAULT '',
    item_color VARCHAR(50) DEFAULT '',
    display_order INT DEFAULT 0,
    status ENUM('active', 'inactive') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (section_id) REFERENCES home_sections(id) ON DELETE CASCADE
  )`;

  const theme = `CREATE TABLE IF NOT EXISTS home_theme_settings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    section_id INT NOT NULL UNIQUE,
    bg_color VARCHAR(50) DEFAULT '',
    text_color VARCHAR(50) DEFAULT '',
    heading_color VARCHAR(50) DEFAULT '',
    button_color VARCHAR(50) DEFAULT '',
    button_hover_color VARCHAR(50) DEFAULT '',
    font_size VARCHAR(50) DEFAULT '',
    font_weight VARCHAR(50) DEFAULT '',
    font_family VARCHAR(100) DEFAULT '',
    padding_top VARCHAR(50) DEFAULT '',
    padding_bottom VARCHAR(50) DEFAULT '',
    padding_left VARCHAR(50) DEFAULT '',
    padding_right VARCHAR(50) DEFAULT '',
    margin_top VARCHAR(50) DEFAULT '',
    margin_bottom VARCHAR(50) DEFAULT '',
    margin_left VARCHAR(50) DEFAULT '',
    margin_right VARCHAR(50) DEFAULT '',
    width VARCHAR(50) DEFAULT '',
    height VARCHAR(50) DEFAULT '',
    border_radius VARCHAR(50) DEFAULT '',
    border_color VARCHAR(50) DEFAULT '',
    box_shadow VARCHAR(100) DEFAULT '',
    alignment VARCHAR(50) DEFAULT 'center',
    grid_columns VARCHAR(50) DEFAULT '',
    gap_between_items VARCHAR(50) DEFAULT '',
    image_size VARCHAR(50) DEFAULT '',
    image_position VARCHAR(50) DEFAULT '',
    overlay_color VARCHAR(50) DEFAULT '',
    opacity VARCHAR(50) DEFAULT '',
    animation_enabled BOOLEAN DEFAULT true,
    hover_effects BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (section_id) REFERENCES home_sections(id) ON DELETE CASCADE
  )`;

  try {
    await db.query(sections);
    await db.query(items);
    await db.query(theme);
    
    // Seed default sections
    const defaultSections = [
        { key: 'hero', title: 'VOYAGE SUR MESURE', subtitle: 'en inde', status: 'active', order: 1 },
        { key: 'esprit', title: "L'esprit Indeora", subtitle: 'Le voyage sur mesure...', status: 'active', order: 2 },
        { key: 'team', title: 'L’art du voyage sur mesure en Inde', subtitle: 'L’Inde, une émotion avant tout', status: 'active', order: 3 },
        { key: 'map', title: 'Interactive Map', status: 'active', order: 4 },
        { key: 'envies', title: 'EnviesGrid', status: 'active', order: 5 },
        { key: 'vision', title: 'VisionSection', status: 'active', order: 6 },
        { key: 'featured_dest', title: 'Des expériences uniques, des souvenirs pour la vie.', subtitle: 'L’INDE AUTREMENT', status: 'active', order: 7 },
        { key: 'faq', title: 'FAQ', status: 'active', order: 8 },
        { key: 'reviews', title: 'Ils ont aimé voyager avec nous', status: 'active', order: 9 }
    ];

    for (const sec of defaultSections) {
        await db.query(`INSERT IGNORE INTO home_sections (section_key, title, subtitle, status, display_order) VALUES (?, ?, ?, ?, ?)`, 
        [sec.key, sec.title, sec.subtitle || '', sec.status, sec.order]);
    }
    
    // Auto create empty theme settings
    const [allSec] = await db.query('SELECT id FROM home_sections');
    for (const row of allSec) {
        await db.query('INSERT IGNORE INTO home_theme_settings (section_id) VALUES (?)', [row.id]);
    }

    console.log('Tables created and seeded successfully');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}
createTables();
