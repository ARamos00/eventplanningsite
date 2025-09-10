Event Planning Site — React (CRA) starter

This is a simple React starter I built to sketch UI/flows for an event-planning site before moving to the full Next.js build. It’s a learning sandbox: components, layout, and basic front-end behavior without backend wiring.

Bootstrapped with Create React App (CRA). 
GitHub

Standard CRA scripts (start, build, test, eject). 
GitHub

Minimal structure: src/ for app code, public/ for static assets. 
GitHub

What’s here

Componentized UI for event-planning pages (hero, sections, forms/placeholders).

Lightweight styles (plain CSS) suitable for quick iteration. (Repo language mix shows JS + CSS.) 
GitHub

Meant as a prototype to inform the later Next.js version (routing, content blocks, and general UX).

Getting started
npm install
npm start            # http://localhost:3000


CRA handles hot reload and common dev defaults. 
GitHub

Scripts
npm start   # dev server
npm test    # jest runner (watch mode)
npm run build  # production build to /build
npm run eject  # one-way, exposes configs


(These are the standard CRA commands.) 
GitHub

Project layout
/public     # index.html, static assets
/src        # components, pages, styles, app entry


(See repo root for these folders.) 
GitHub

Notes / intent

This repo exists to practice and validate the front-end approach for an event-planning site.

No backend or CMS here—just the UI and flow ideas that later informed the Next.js build.

Keep it simple: iterate on components, extract what works, and port to the production stack.
