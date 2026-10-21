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
| `assets/js/neural-bg.js` | The drifting node graph behind the page |
| `_includes/logo.html` | The crescent-and-star mark |
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

Type is Inter for body text, JetBrains Mono for metadata, and **Space Grotesk**
(`--font-display`) for the name and page titles.

## The logo

`_includes/logo.html` is a crescent and star abstracted from the Algerian flag — a
monoline arc plus a filled star, both in `currentColor`, so it takes the colour of
whatever it sits next to. It appears beside the name in the header and on the home page.
`images/logo.svg` is the same mark as an SVG favicon, with its own dark-mode colours
baked in since a favicon cannot inherit the page's.

## The background

`assets/js/neural-bg.js` draws a slow drifting node graph on a fixed full-viewport
canvas. Nodes link to neighbours within range; the mouse pushes nearby nodes aside and
draws its own links to them.

To tune it, the constants at the top of that file:

| Constant | Effect |
| --- | --- |
| `AREA_PER_NODE` | Higher = sparser. One node per N square px |
| `MAX_NODES` | Ceiling on node count, for large screens |
| `LINK_DIST` | How far apart two nodes can be and still link |
| `POINTER_DIST` | Radius of the cursor's influence |
| `DRIFT` | Pixels per frame — higher is faster |
| `PUSH` | How hard the cursor shoves nodes aside |

Its colours are the `--net-node`, `--net-line` and `--net-glow` custom properties in
`main.scss`, read from JS so the graph follows the theme. **Lower those alpha values to
make it fainter** — that's the knob to reach for if it ever competes with the text.

The canvas sits at `z-index: 0` with the page colour on `html` rather than `body`, so it
paints above the background and below the content. It honours `prefers-reduced-motion`
by painting one static frame, sleeps while the tab is hidden, and is hidden when
printing.
