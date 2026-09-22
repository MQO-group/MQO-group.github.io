# MQO group website

Website for the **Macroscopic Quantum Optics** group, Department of Applied
Physics, Aalto University.

Built with Next.js 16 (App Router) and React 19, exported as a **static site**
— same stack and conventions as the QCLM conference site, but with its own
design system. It is a separate repository and a separate deployment; nothing
here touches the QCLM code.

## Running it

On Windows, if you used the portable Node install (`install-node.bat` in the
parent folder), just double-click:

- **`dev.bat`** — installs dependencies on first run, then starts the dev
  server at <http://localhost:3000>
- **`build.bat`** — produces the static site in `out/`

Both prepend the portable Node to `PATH` for that window only, so nothing on
the machine is changed permanently.

With Node already on your `PATH`, the plain commands work anywhere:

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export into out/
npm run lint
```

`next.config.ts` sets `output: "export"` and `trailingSlash: true`, so
`npm run build` produces a fully static `out/` directory with no server
required.

### Deploying to Cloudflare Pages

Connect the repository and use:

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Build output directory | `out` |
| Node version | 24 (or 22) |

## Requirements

Node.js 22 or 24 (Next 16 needs `^20.9 || >=22`). On a managed Windows machine
without admin rights, the portable zip from <https://nodejs.org/dist/> extracted
into `%LOCALAPPDATA%\nodejs` and added to the user `Path` works fine — no
installer needed.

## Editing content

Almost everything on the site is data, not markup. The files in `app/data/`
are plain TypeScript — you can edit them without touching any component.

| File | What it controls |
| --- | --- |
| `app/data/site.ts` | Group name, address, contact, navigation items |
| `app/data/research.ts` | The three research directions on `/research` and the home page |
| `app/data/people.ts` | Everyone on `/people`, and their grouping |
| `app/data/publications.ts` | The publication link list. Currently unlinked from the nav — see the notes at the top of that file |
| `app/data/news.ts` | Posts on `/news` and the latest three on the home page |

A few notes:

- **Adding a paper** — copy an entry in `publications.ts`, paste the link
  into `url`, set `show: true`. Set `show: false` to take one down while
  keeping it in the file. Order in the array is the order on the page.
  The page itself is currently off the navigation.
- **Adding a person** — add an entry to `people.ts` with the right `group`
  (`lead`, `postdoc`, `doctoral`, `assistant`, `visitor`). The section
  headings and counts update themselves.
- **Photographs** — portraits are not in yet. Drop square images into
  `public/people/` and set `image: "/people/firstname-lastname.jpg"` on the
  person. Without an image the card shows a monogram, which is a deliberate
  fallback rather than a broken state, so a half-finished set still looks
  intentional.
- **News dates** are ISO (`YYYY-MM-DD`) and sort themselves.

## Design system

All colour, type and spacing decisions live in `app/globals.css`, in the
`:root` block at the top. The look is dark-first — a near-black ground, a
single teal "signal" accent with violet and amber as secondaries, Space
Grotesk for headings, Inter for body text, IBM Plex Mono for the small
instrument-style labels.

Changing the accent across the whole site is one variable:

```css
--signal: #5ce0c6;
```

There is deliberately no light theme. The tokens are all defined on `:root`,
so adding one later means adding a `[data-theme="light"]` block that
overrides the same names — no component changes.

Fonts are pulled at build time by `next/font/google` and self-hosted in the
export, so the published site makes no requests to Google.

## Structure

```
app/
  components/      shared UI (header, footer, cards, backdrop, brand mark)
  data/            all editable content
  research/        /research
  people/          /people
  publications/    /publications
  news/            /news
  globals.css      design tokens + all styling
  layout.tsx       fonts, metadata, header/footer shell
  page.tsx         home page
public/            static assets (add portraits under public/people/)
```

## Related

- Group page at Aalto: <https://www.aalto.fi/en/department-of-applied-physics/macroscopic-quantum-optics-mqo>
- QCLM conference site: <https://qclm.aalto.fi> — separate repository, do not edit from here
