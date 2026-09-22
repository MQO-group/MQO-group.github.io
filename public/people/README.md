# Portraits

Portraits for the People page. Each file here is referenced by an `image`
field in `app/data/people.ts`, e.g.

    public/people/anton-profile-picture.jpeg
      ->  image: "/people/anton-profile-picture.jpeg"

The path in the code drops the `public` prefix and must match the filename
**exactly, including the extension's case** — the dev server on Windows is
case-insensitive, but the deployed site is not.

**Format**: square crop, ~400x400 px is plenty (the avatar renders at ~72 px,
144 px on a retina screen). JPEG at quality ~80, ideally under 200 KB. Faces
are centred by CSS (`object-fit: cover`), so head-and-shoulders works best.

A missing file is not an error — that person's card falls back to their
initials until a file with the right name appears.
