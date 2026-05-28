const db = require('../db');

exports.saveConsent = async (req, res) => {
  try {
    const { user_uuid, necessary, analytics, marketing } = req.body;
    
    if (!user_uuid) {
      return res.status(400).json({ success: false, message: 'user_uuid is required' });
    }

    // Get IP address (trust proxy should be true in express app if behind proxy)
    const ip_address = req.ip || req.headers['x-forwarded-for'] || req.socket.remoteAddress;

    // Upsert the record (insert or update on duplicate key)
    const [result] = await db.query(
      `INSERT INTO cookie_consents (user_uuid, ip_address, necessary, analytics, marketing) 
       VALUES (?, ?, ?, ?, ?) 
       ON DUPLICATE KEY UPDATE 
       ip_address = VALUES(ip_address), 
       necessary = VALUES(necessary), 
       analytics = VALUES(analytics), 
       marketing = VALUES(marketing)`,
      [user_uuid, ip_address, necessary ? 1 : 0, analytics ? 1 : 0, marketing ? 1 : 0]
    );

    res.json({ success: true, message: 'Consent saved successfully' });
  } catch (err) {
    console.error('Error saving cookie consent:', err);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

exports.getConsent = async (req, res) => {
  try {
    const { uuid } = req.params;
    if (!uuid) return res.status(400).json({ success: false, message: 'uuid is required' });

    const [rows] = await db.query('SELECT * FROM cookie_consents WHERE user_uuid = ?', [uuid]);
    
    if (rows.length === 0) {
      return res.json({ success: true, data: null });
    }
    
    res.json({ success: true, data: rows[0] });
  } catch (err) {
    console.error('Error getting cookie consent:', err);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};
