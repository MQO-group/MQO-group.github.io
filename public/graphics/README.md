# Graphics

Site-wide imagery: logos, banners, illustrations, diagrams, anything used in
page layout rather than tied to a person or a project.

Referenced from code without the `public` prefix:

    public/graphics/banner.png  ->  src="/graphics/banner.png"

Prefer SVG for logos and line art, and keep raster images under ~500 KB.
Everything in `public/` is served as-is, so nothing here is compressed or
resized at build time.

## The logo

| File | Use |
| --- | --- |
| `logo.png` | The original master, full resolution. Black artwork, so it only works on a light background. Kept as the backup — nothing on the site references it. |
| `logo-light.png` | Reversed version used in the site header. Trimmed of its transparent margin, scaled to 900 px wide, and recoloured so the letterforms read against the near-black header. |

`logo-light.png` was derived from the master rather than drawn. If the group
ever has an official reversed/white logo, drop it in under that name and the
header picks it up with no code change.
