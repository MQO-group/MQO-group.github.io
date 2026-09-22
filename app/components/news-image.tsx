"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

/**
 * Thumbnail for a news item. If the file is missing the whole figure
 * removes itself, so the row falls back to the plain text layout rather
 * than leaving a broken-image gap.
 */
export function NewsImage({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;

  return (
    <figure className="news-item__media">
      <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
