# Theme variants

Each block below replaces the matching lines inside the `:root { … }` block at
the top of `app/globals.css`. Nothing else changes — every colour on the site
reads from these variables.

Two of the four are light themes, and they need one extra change each, noted
under the block.

---

## A — Optical lab  (current)

```css
  --ink: #07080b;
  --ink-raised: #0b0d12;
  --panel: #0e1117;
  --panel-hover: #12161e;

  --line: rgba(233, 238, 247, 0.1);
  --line-strong: rgba(233, 238, 247, 0.2);

  --fg: #e9eef7;
  --fg-dim: #a3adbf;
  --fg-faint: #6a7487;

  --signal: #5ce0c6;
  --signal-deep: #2fb8a0;
  --signal-bright: #7aeeda;
  --on-signal: #04120f;
  --hover-wash: rgba(255, 255, 255, 0.045);
  --violet: #8b7cf6;
  --amber: #f0b45e;

  --spectrum: linear-gradient(90deg, var(--violet) 0%, #5a9bf6 34%, var(--signal) 68%, var(--amber) 100%);
  --spectrum-text: linear-gradient(96deg, var(--violet) 0%, #6aa8f7 48%, var(--signal) 100%);

  color-scheme: dark;
```

---

## B — Coral signal

Same structure, but the accent comes from the burst in the logo instead of an
invented teal. The ground warms very slightly to sit under it.

```css
  --ink: #0a0809;
  --ink-raised: #0f0c0d;
  --panel: #141011;
  --panel-hover: #1a1517;

  --line: rgba(247, 238, 234, 0.1);
  --line-strong: rgba(247, 238, 234, 0.2);

  --fg: #f7eeea;
  --fg-dim: #bfada7;
  --fg-faint: #8a7872;

  --signal: #ff6f52;
  --signal-deep: #d4482d;
  --signal-bright: #ff8d75;
  --on-signal: #1c0500;
  --hover-wash: rgba(255, 255, 255, 0.05);
  --violet: #ffb38f;
  --amber: #ffd9a0;

  --spectrum: linear-gradient(90deg, #ff9f7a 0%, #ff6f52 45%, #e8455f 100%);
  --spectrum-text: linear-gradient(96deg, #ffb38f 0%, #ff6f52 100%);

  color-scheme: dark;
```

---

## C — Daylight blue

Light, institutional, closest to how most university group pages look.

```css
  --ink: #ffffff;
  --ink-raised: #f4f7fb;
  --panel: #f7f9fc;
  --panel-hover: #eef3f9;

  --line: rgba(15, 30, 55, 0.14);
  --line-strong: rgba(15, 30, 55, 0.26);

  --fg: #0e1b2e;
  --fg-dim: #44546b;
  --fg-faint: #7385a0;

  --signal: #1f5fd6;
  --signal-deep: #17489f;
  --signal-bright: #1a51b8;
  --on-signal: #ffffff;
  --hover-wash: rgba(15, 30, 55, 0.05);
  --violet: #6b5fd6;
  --amber: #c98a2b;

  --spectrum: linear-gradient(90deg, #6b5fd6 0%, #1f5fd6 55%, #0f9bb0 100%);
  --spectrum-text: linear-gradient(96deg, #1f5fd6 0%, #0f9bb0 100%);

  color-scheme: light;
```

**Also needed:** the header logo must become the dark original. In
`app/components/site-header.tsx` change `/graphics/logo-light.png` to the
full-colour artwork, and update the colours inside
`app/components/field-backdrop.tsx` (see note at the bottom).

---

## D — Editorial paper

Warm off-white, serif headings, a single brick-red accent. Quietest of the
four; reads like a journal rather than a lab.

```css
  --ink: #faf7f2;
  --ink-raised: #f3efe7;
  --panel: #f5f1ea;
  --panel-hover: #efe9df;

  --line: rgba(40, 32, 22, 0.16);
  --line-strong: rgba(40, 32, 22, 0.3);

  --fg: #1d1813;
  --fg-dim: #544a3e;
  --fg-faint: #8a7d6d;

  --signal: #9c3521;
  --signal-deep: #7a2716;
  --signal-bright: #83291a;
  --on-signal: #faf7f2;
  --hover-wash: rgba(40, 32, 22, 0.05);
  --violet: #6a5540;
  --amber: #b3762c;

  --spectrum: linear-gradient(90deg, #9c3521 0%, #b3762c 100%);
  --spectrum-text: linear-gradient(96deg, #9c3521 0%, #b3762c 100%);

  color-scheme: light;
```

**Also needed:** the dark logo (as in C), and a serif display face. In
`app/layout.tsx` swap `Space_Grotesk` for a serif from `next/font/google` —
Newsreader, Fraunces and Source Serif 4 all suit it — and update
`--font-space-grotesk` to match.

---

## The hero backdrop

`app/components/field-backdrop.tsx` draws the interference pattern with
hard-coded hex values rather than variables, because they sit inside SVG
gradient stops. Any theme change needs these four swapped to match:

| In the file | What it is |
| --- | --- |
| `#07080b` | the ground, should equal `--ink` |
| `#5ce0c6` | first source, should equal `--signal` |
| `#8b7cf6` | second source, should equal `--violet` |
| `#e9eef7` | the faint graticule, should equal `--fg` |

Ask and I'll wire these to CSS variables properly, which would make a theme
switch a single-block edit with no exceptions.
