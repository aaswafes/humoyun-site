# humoyun.dev

Personal site for **Humoyun Sodikov** — AI automation engineer & developer.

Hand-rolled HTML, CSS, and JavaScript. No frameworks, no templates, no build step.

## Local preview

Just open `index.html` in a browser, or serve it:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Deploy

The site is fully static — any host works:

- **Vercel** — drop the folder in, done.
- **Netlify** — same.
- **GitHub Pages** — push to a repo, enable Pages on `main` branch.
- **Cloudflare Pages** — same.

## Structure

```
.
├── index.html      # markup
├── styles.css      # design system + components
├── script.js       # nav, reveals, count-up, magnetic buttons, spotlight
├── favicon.svg     # logo mark
└── og.svg          # social share preview
```

## Credits

Designed, built, and deployed by [Humoyun Sodikov](mailto:strategai2026@gmail.com).
