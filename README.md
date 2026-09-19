# Joshua Chui Portfolio Starter

A lightweight static portfolio starter designed for GitHub Pages.

## Structure

```text
.
├── index.html
├── styles.css
├── script.js
├── CNAME
├── README.md
├── assets/
│   └── images/
└── projects/
    └── amazonclone.html
```

## Run locally

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Customize first

Search the repo for:

- `your@email.com`
- `github.com/yourusername`
- `linkedin.com/in/yourprofile`
- generic GitHub links
- project links that currently use `#`

## GitHub Pages

1. Push the repo to GitHub.
2. Open **Settings → Pages**.
3. Deploy from your main branch.
4. Set the custom domain to `joshuachui.net`.
5. Keep the `CNAME` file in the repository.

## Project pattern

Use a case-study page on the portfolio and a standalone demo on a subdomain:

```text
joshuachui.net/projects/amazonclone.html
amazonclone.joshuachui.net
api.amazonclone.joshuachui.net
```

## Suggested next steps

- Add your real resume PDF
- Replace placeholder GitHub/LinkedIn/email links
- Duplicate `projects/amazonclone.html` for your other projects
- Add screenshots and thumbnails under `assets/images/`
- Replace the Amazon demo placeholder with an iframe
- Tune colors/spacing after you finish the Figma design
