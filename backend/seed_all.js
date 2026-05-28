const { execSync } = require('child_process');
const path = require('path');

const scripts = [
  'seeder.js',
  'seedHomeTeam.js',
  'seed_map_dest.js',
  'seed_testimonials.js',
  'seed_videos.js'
];

console.log('🌱 Starting full database seed...\n');

for (const script of scripts) {
  try {
    console.log(`▶️ Running ${script}...`);
    execSync(`node ${script}`, { stdio: 'inherit', cwd: __dirname });
    console.log(`✅ ${script} completed successfully.\n`);
  } catch (error) {
    console.error(`❌ Error running ${script}. It may have already been seeded or encountered an issue.\n`);
  }
}

console.log('🎉 All seeding processes have been executed!');
