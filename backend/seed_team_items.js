const db = require('./config/db');

async function seedTeamItems() {
  try {
    const [sections] = await db.query("SELECT id, section_key FROM home_sections");
    const getSecId = (key) => sections.find(s => s.section_key === key)?.id;

    const teamId = getSecId('team');
    if (teamId) {
      // Check if already seeded
      const [existing] = await db.query("SELECT id FROM home_section_items WHERE section_id = ?", [teamId]);
      if (existing.length === 0) {
        const teamMembers = [
          {
            title: "Vishnu Swami",
            subtitle: "Fondateur francophone",
            icon: "/src/assets/dipesh.jpg", // The hardcoded one used dipeshImg
            text: "Passionné de voyages depuis toujours, Vishnu Swami a d’abord exploré le monde au-delà de l’Inde. Il a vécu plusieurs années en France où il a appris le français qu’il parle couramment, and s’est imprégné de la culture européenne. Directeur de notre agence à Delhi, Vishnu incarne la promesse d'authenticité. Sa connaissance du terrain and sa passion pour le principe de Atithi Devo Bhava garantissent une immersion profonde."
          },
          {
            title: "Amandine Fastré",
            subtitle: "Créatrice d'itinéraires",
            icon: "/src/assets/amandine.jpg", // The hardcoded one used amandineImg
            text: "Amandine est une véritable passionnée de l’Inde, un pays où elle a vécu plus de 18 ans en tant que créatrice de voyages sur mesure. Durant ces années, elle a sillonné de nombreuses régions and exploré des lieux authentiques. Basée en France, Amandine est votre premier point de contact and l'architecte de votre voyage. Elle transforme vos envies en itinéraire sur mesure, alliant découvertes culturelles and organisation fluide."
          }
        ];
        
        for (let i = 0; i < teamMembers.length; i++) {
          const c = teamMembers[i];
          await db.query(`INSERT INTO home_section_items (section_id, title, subtitle, image_url, description, display_order) VALUES (?, ?, ?, ?, ?, ?)`, 
            [teamId, c.title, c.subtitle, c.icon, c.text, i + 1]
          );
        }
        console.log("Team items seeded successfully");
      } else {
        console.log("Team items already seeded");
      }
    }

    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

seedTeamItems();
