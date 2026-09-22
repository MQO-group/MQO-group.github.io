"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import type { Person } from "../data/people";

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export function PersonCard({
  person,
  variant = "default",
}: {
  person: Person;
  variant?: "default" | "lead";
}) {
  // A portrait that 404s falls back to the monogram, so a half-finished
  // photo set still looks deliberate rather than broken.
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = Boolean(person.image) && !imageFailed;

  return (
    <article
      className={variant === "lead" ? "card person-card--lead" : "card"}
    >
      <div className="person">
        {showImage ? (
          <img
            className="person__avatar"
            src={person.image}
            // Decorative: the name sits right beside it in the heading, so
            // an empty alt avoids a screen reader reading it twice — and
            // stops a broken file spilling alt text across the avatar.
            alt=""
            loading="lazy"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <span className="person__avatar" aria-hidden="true">
            {initials(person.name)}
          </span>
        )}

        <div>
          <h3 className="h-card person__name">{person.name}</h3>
          <p className="person__role">{person.role}</p>
        </div>
      </div>

      <div className="person__detail">
        {person.focus && <p className="person__focus">{person.focus}</p>}

        {(person.email || person.phone) && (
          <div className="person__contact">
            {person.email && (
              <a href={`mailto:${person.email}`}>{person.email}</a>
            )}
            {person.phone && <span>{person.phone}</span>}
          </div>
        )}

        {person.links?.map((link) => (
          <a
            key={link.href}
            className="inline-link"
            href={link.href}
            target="_blank"
            rel="noreferrer"
          >
            {link.label}
            <span aria-hidden="true">↗</span>
          </a>
        ))}
      </div>
    </article>
  );
}
