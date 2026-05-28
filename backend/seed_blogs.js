const mysql = require('mysql2/promise');
require('dotenv').config();

const blogsToSeed = [
      {
        title: "RAJASTHAN : L’INDE DES PALAIS ET DES MAHARAJAS",
        slug: "rajasthan-royale",
        category: "Culture & Histoire",
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2WaN4uFLmSnMZh46fxzWRdxJJ8iKUVZn9kw&s",
        excerpt: "Découvrez les majestueux forts et palais du royaume du désert de l'Inde.",
        content: "<p>Voici le contenu complet de l'article sur le Rajasthan. Découvrez les palais...</p>",
        read_time: "6 min",
        status: "active"
      },
      {
        title: "VOYAGE EN INDE : LE GUIDE COMPLET POUR UN PREMIER VOYAGE",
        slug: "kerala-backwaters",
        category: "Nature & Bien-être",
        image_url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=800",
        excerpt: "Laissez-vous dériver sur les canaux sereins du Kerala à bord d'un houseboat de luxe.",
        content: "<p>Le Kerala est souvent appelé le pays de Dieu. Naviguer sur les backwaters...</p>",
        read_time: "5 min",
        status: "active"
      },
      {
        title: "POURQUOI L’INDE CHANGE PROFONDÉMENT CEUX QUI LA DÉCOUVRENT",
        slug: "spiritual-varanasi",
        category: "Spiritualité",
        image_url: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&q=80&w=800",
        excerpt: "Assistez aux rituels éternels sur les rives du Gange sacré à Varanasi.",
        content: "<p>Varanasi, la capitale spirituelle de l'Inde, est une expérience transformatrice...</p>",
        read_time: "8 min",
        status: "active"
      },
      {
        title: "Ladakh Heights",
        slug: "ladakh-heights",
        category: "Aventure",
        image_url: "https://images.unsplash.com/photo-1581791534721-e599df4417f7?auto=format&fit=crop&q=80&w=800",
        excerpt: "Voyagez à travers les déserts de haute altitude et les cols montagneux spectaculaires.",
        content: "<p>Prochainement: Découvrez le Ladakh...</p>",
        read_time: "5 min",
        status: "inactive"
      },
      {
        title: "Goan Serenity",
        slug: "goan-serenity",
        category: "Plage & Détente",
        image_url: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80&w=800",
        excerpt: "Détendez-vous sur des plages de sable blanc immaculé et admirez l'architecture coloniale.",
        content: "<p>Prochainement: Découvrez Goa...</p>",
        read_time: "4 min",
        status: "inactive"
      },
      {
        title: "Hampi Echoes",
        slug: "hampi-echoes",
        category: "Culture & Histoire",
        image_url: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=800",
        excerpt: "Explorez les paysages parsemés de rochers de l'ancien empire de Vijayanagara.",
        content: "<p>Prochainement: Découvrez Hampi...</p>",
        read_time: "6 min",
        status: "inactive"
      },
      {
        title: "Munnar Mist",
        slug: "munnar-mist",
        category: "Nature & Bien-être",
        image_url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800",
        excerpt: "Perdez-vous dans les plantations de thé verdoyantes et les montagnes brumeuses.",
        content: "<p>Prochainement: Découvrez Munnar...</p>",
        read_time: "5 min",
        status: "inactive"
      },
      {
        title: "Udaipur Romance",
        slug: "udaipur-romance",
        category: "Culture & Histoire",
        image_url: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=800",
        excerpt: "La ville des lacs offre une harmonie parfaite entre luxe royal et romantisme éternel.",
        content: "<p>Prochainement: Découvrez Udaipur...</p>",
        read_time: "7 min",
        status: "inactive"
      },
      {
        title: "Rishikesh Retreat",
        slug: "rishikesh-retreat",
        category: "Spiritualité",
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2WaN4uFLmSnMZh46fxzWRdxJJ8iKUVZn9kw&s",
        excerpt: "Trouvez la paix intérieure dans la capitale mondiale du yoga au pied de l'Himalaya.",
        content: "<p>Prochainement: Découvrez Rishikesh...</p>",
        read_time: "5 min",
        status: "inactive"
      }
];

async function seed() {
  const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'indeora',
  });

  for (let blog of blogsToSeed) {
    try {
      const [rows] = await pool.query('SELECT id FROM blogs WHERE slug = ?', [blog.slug]);
      if (rows.length === 0) {
        await pool.query(
          `INSERT INTO blogs (title, slug, category, excerpt, content, image_url, read_time, status)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
          [blog.title, blog.slug, blog.category, blog.excerpt, blog.content, blog.image_url, blog.read_time, blog.status]
        );
        console.log(`Inserted: ${blog.title}`);
      } else {
        console.log(`Skipped existing: ${blog.title}`);
      }
    } catch (e) {
      console.error(e);
    }
  }
  process.exit();
}

seed();
