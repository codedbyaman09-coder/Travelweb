# Indeora Backend Server

Node.js, Express and MySQL backend for the Indeora website and admin CMS.

## Setup

```bash
npm install
npm run migrate
npm run seed
npm run dev
```

Production:

```bash
npm start
```

## Environment

```env
PORT=8000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_database_password
DB_NAME=indeora
JWT_SECRET=change_this_secret
CORS_ORIGIN=http://localhost:5173
ADMIN_EMAIL=admin@indeora.com
ADMIN_PASSWORD=admin123
```

## Folder Structure

```text
backend/
  config/        database config
  controllers/   request handlers
  middleware/    auth and request middleware
  models/        reusable database access helpers
  routes/        Express route modules
  uploads/       uploaded images/videos
  migrate.js     idempotent database migration
  schema.sql     reference SQL schema
  seed*.js       optional seed scripts
  server.js      app entry point
```

## Main APIs

- `/api/auth` login, register, profile
- `/api/users` admin users, profile update, password change
- `/api/settings` website settings
- `/api/content` generic CRUD for logo, banner, home content, gallery, video, testimonials
- `/api/blogs` blog CRUD
- `/api/blog-categories` blog category CRUD
- `/api/destinations` destination/tour/package CRUD
- `/api/itineraries` itinerary/package content CRUD
- `/api/faqs` FAQ CRUD
- `/api/inquiries` contact enquiry listing/status/delete
- `/api/media` image/video upload and listing
- `/api/seo` page SEO metadata CRUD
- `/api/abouts` about/team/value content CRUD
- `/api/yogas` yoga page content CRUD
- `/api/dashboard/stats` dashboard counters

Run `npm run migrate` whenever pulling new backend code so new columns/tables are created safely.
