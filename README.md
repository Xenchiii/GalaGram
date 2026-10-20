GalaGram on Cloudflare Pages + D1

New install
1. npm i -g wrangler && wrangler login
2. wrangler d1 create galagram
3. Paste the returned database_id into wrangler.toml
4. wrangler d1 execute galagram --remote --file=schema.sql
5. wrangler pages deploy public --project-name galagram
6. Pages project > Settings > Bindings > add D1 binding named DB pointing to galagram, then redeploy

Already deployed the previous version
1. wrangler d1 execute galagram --remote --file=migration.sql
2. wrangler pages deploy public --project-name galagram

The clips table for Buzz voice messages is created automatically on first request.
The 10 accounts are created automatically on the first request.
Local dev: wrangler d1 execute galagram --local --file=schema.sql && wrangler pages dev public --d1 DB=galagram

Notifications, transcripts and the Soundtrip player need nothing extra.
Push keys are generated on first use and stored in the database.
Optional: the [ai] binding in wrangler.toml lets the server transcribe buzzes when the browser cannot.
On iPhone, add the site to the Home Screen first, then enable notifications from Settings.

Photos, videos (up to 12 MB) and voicemails are stored in D1 in chunks. The new tables are created on the first request.

Screen sharing works in calls on desktop browsers. Uploaded songs play through a real audio player that keeps going across the app.

Maps use OpenStreetMap, Nominatim and OSRM (free public services). Locations are shared only when each person turns sharing on.
