# News images

Optional thumbnails for entries in `app/data/news.ts`:

    public/news/qclm-ii-poster.jpg
      ->  image: "/news/qclm-ii-poster.jpg"

**Format**: landscape, roughly 3:2. 900x600 px is plenty — the thumbnail
renders about 220 px wide, 440 px on a retina screen. Keep files under
~200 KB; nothing in `public/` is compressed at build time.

An item with no `image` just renders as text, and a file that fails to load
removes itself, so a wrong filename degrades quietly rather than leaving a
broken-image box.

Always set `imageAlt` to something descriptive — it is what screen readers
and search engines read.
