-- Database: indeora
CREATE DATABASE IF NOT EXISTS indeora;
USE indeora;

-- Table structure for users
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table structure for blogs
CREATE TABLE IF NOT EXISTS blogs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  category VARCHAR(100) NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  image_url VARCHAR(255) DEFAULT NULL,
  read_time VARCHAR(50) NOT NULL DEFAULT '5 min',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert some luxury seed blogs matching Indeora's branding
INSERT INTO blogs (title, slug, category, excerpt, content, image_url, read_time)
VALUES 
(
  'Le Rajasthan Royal : Entre Palais de Maharajas et Désert du Thar',
  'rajasthan-royale',
  'Culture & Histoire',
  'Explorez la terre des rois à travers ses forts majestueux, ses palais somptueux et l\'hospitalité légendaire du désert.',
  '<h2>Un voyage dans le temps</h2><p>Le Rajasthan est l\'une des destinations les plus captivantes de l\'Inde. Des ruelles bleues de Jodhpur aux palais flottants d\'Udaipur, chaque ville raconte une histoire de bravoure, d\'amour et de royauté. Visiter les forts de Jaipur ou passer une nuit sous les étoiles dans le désert du Thar à Jaisalmer est une expérience inoubliable.</p>',
  'https://indeoravoyages.com/wp-content/uploads/2025/08/rajasthan.jpg',
  '6 min'
),
(
  'Les Backwaters du Kerala : Une Parenthèse Enchantée au Fil de l\'Eau',
  'kerala-backwaters',
  'Nature & Détente',
  'Découvrez la sérénité absolue à bord d\'un Kettuvallam traditionnel à travers les canaux tropicaux du Kerala.',
  '<h2>L\'Inde verte et paisible</h2><p>Loin de l\'agitation des grandes métropoles, le Kerala offre un havre de paix unique au monde. Les Backwaters, un réseau de lagunes et de canaux de plus de 900 kilomètres, se découvrent idéalement à bord d\'une maison-bateau. Laissez-vous bercer par le clapotis de l\'eau tout en observant la vie locale se dérouler sur les rives luxuriantes.</p>',
  'https://indeoravoyages.com/wp-content/uploads/2025/08/kerala.jpg',
  '5 min'
),
(
  'Varanasi Spirituelle : Au Cœur des Rituels Sacrés du Gange',
  'spiritual-varanasi',
  'Spiritualité & Yoga',
  'Plongez dans l\'une des plus anciennes villes habitées au monde et ressentez l\'énergie mystique des cérémonies de l\'Aarti.',
  '<h2>La cité de Shiva</h2><p>Varanasi, ou Bénarès, est le cœur spirituel de l\'Inde. Située sur les rives du Gange, elle attire des millions de pèlerins venus purifier leur âme. Assister au lever du soleil en bateau ou observer le rituel hypnotique du Ganga Aarti à la tombée de la nuit procure une émotion profonde et indélébile.</p>',
  'https://indeoravoyages.com/wp-content/uploads/2025/08/varanasi.jpg',
  '7 min'
)
ON DUPLICATE KEY UPDATE title=title;
