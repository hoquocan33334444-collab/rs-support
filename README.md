# RS Support Center

A modern support-center frontend designed for GitHub Pages.

## Demo
`index.html` works immediately and stores demo tickets in browser localStorage.

## Production
Use Supabase for Auth + PostgreSQL + Row Level Security.

1. Create a Supabase project.
2. Run `supabase-schema.sql` in SQL Editor.
3. Connect Supabase Auth and database calls in `app.js`.
4. Deploy the static frontend to GitHub Pages.
5. Never expose a Supabase service-role/secret key in frontend code.

## Files
- index.html - public support center
- style.css - UI
- app.js - demo interactions
- supabase-schema.sql - database/RLS schema
