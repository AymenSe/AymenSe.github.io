# asekhri.me

Personal site for Aymen Sekhri — PhD researcher in perceptual image quality assessment
for augmented reality and computer vision for medical imaging.

Built with Jekyll, no theme gem and no JavaScript framework. Deployed to GitHub Pages by
`.github/workflows/jekyll.yml` on every push to `master`.

## Run it locally

```bash
bundle install
bundle exec jekyll serve --livereload
```

Then open <http://localhost:4000>.

## Where things live

| Path | What it holds |
| --- | --- |
| `_config.yml` | Site metadata, author details, and the social links shown in the header and footer |
| `_data/navigation.yml` | The top navigation |
| `_data/news.yml` | The news items on the home page |
| `_data/projects.yml` | The projects page |
| `_data/writing.yml` | Externally hosted articles listed under Writing |
| `_publications/` | One Markdown file per paper |
| `_posts/` | Locally hosted blog posts (optional — the Writing page merges these with `_data/writing.yml`) |
| `_layouts/`, `_includes/` | Templates |
| `assets/css/main.scss` | The entire stylesheet |
| `assets/js/site.js` | Theme toggle and publication filters |
| `files/` | PDFs served from the site |

## Adding a publication

Create `_publications/<year>-<venue>-<slug>.md`:

```yaml
---
title: "Paper title"
date: 2026-05-01          # drives ordering and the displayed year
authors: "A. Sekhri, Co A. Uthor"   # "A. Sekhri" is bolded automatically
venue: "Full venue name, pages"
venue_short: "ICIP 2026"
type: conference          # conference | journal | chapter | preprint | dataset
topics: [ar, iqa]         # must match the filter buttons in _pages/publications.md
doi: "10.1109/..."        # optional
arxiv: "2604.03112"       # optional
pdf: "/files/paper.pdf"   # optional
code: "https://github.com/..."     # optional
dataset: "https://..."    # optional
---

The abstract. Shown on the paper's own page and, collapsed, in the full list.
```

Everything else — the home page's selected list, the CV, the filters — picks it up
automatically.

## Adding news or an article

Append an entry at the top of `_data/news.yml` or `_data/writing.yml`. Both are plain
lists; the home page shows the five most recent news items.

## Theming

Colours, spacing and type scale are CSS custom properties at the top of
`assets/css/main.scss`, defined once for light and again for dark. The site follows the
operating system by default; the header toggle overrides it and remembers the choice in
`localStorage`.
