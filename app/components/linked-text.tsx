import { Fragment } from "react";

export type TextLink = {
  /**
   * The exact words in the paragraph to turn into a link. Must match the
   * body text character for character, including capitalisation.
   */
  text: string;
  /** Where it points. Leave "" and the words stay plain text. */
  href: string;
};

/**
 * Renders a paragraph, turning any phrase listed in `links` into an anchor.
 *
 * The body text stays a single verbatim string in the data file — this only
 * decorates it at render time, so the wording is never split across fields
 * or duplicated.
 */
export function LinkedText({
  text,
  links = [],
}: {
  text: string;
  links?: readonly TextLink[];
}) {
  const active = links.filter((l) => l.href && text.includes(l.text));
  if (active.length === 0) return <>{text}</>;

  // Longest phrases first, so a phrase that contains another still matches.
  const ordered = [...active].sort((a, b) => b.text.length - a.text.length);

  type Piece = string | TextLink;
  let pieces: Piece[] = [text];

  for (const link of ordered) {
    const next: Piece[] = [];
    for (const piece of pieces) {
      if (typeof piece !== "string") {
        next.push(piece);
        continue;
      }
      const parts = piece.split(link.text);
      parts.forEach((part, i) => {
        if (i > 0) next.push(link);
        if (part) next.push(part);
      });
    }
    pieces = next;
  }

  return (
    <>
      {pieces.map((piece, i) =>
        typeof piece === "string" ? (
          <Fragment key={i}>{piece}</Fragment>
        ) : (
          <a
            key={i}
            href={piece.href}
            target="_blank"
            rel="noreferrer"
            style={{ color: "var(--signal)" }}
          >
            {piece.text}
          </a>
        ),
      )}
    </>
  );
}
