import type { Metadata } from "next";
import { PageHeader } from "../components/page-header";
import { openApplication, openings, thesisTopics } from "../data/openings";
import { site } from "../data/site";

export const metadata: Metadata = {
  title: "Join us",
  description:
    "Postdoctoral, doctoral and master's thesis opportunities in the Macroscopic Quantum Optics group at Aalto University.",
};

const statusLabel: Record<string, string> = {
  open: "Open",
  rolling: "Rolling",
  closed: "Closed",
};

export default function JoinPage() {
  return (
    <>
      <PageHeader
        label="Join us"
        title="Work with the group"
        lede="We build our own instruments and we expect people to get their hands on them. If that sounds right, here is what is available."
      />

      <section className="section section--flush" style={{ paddingTop: 0 }}>
        <div className="shell">
          <div className="grid" style={{ gap: "1.25rem" }}>
            {openings.map((opening) => (
              <article className="opening" key={opening.title}>
                <p className="opening__meta">
                  <span
                    className={
                      opening.status === "closed"
                        ? "status-dot status-dot--closed"
                        : "status-dot"
                    }
                  >
                    {statusLabel[opening.status]}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{opening.level}</span>
                  <span aria-hidden="true">·</span>
                  <span>Deadline {opening.deadline}</span>
                </p>

                <h2 className="h-card">{opening.title}</h2>

                <div className="prose">
                  {opening.body.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))}
                </div>

                {opening.applyHref && (
                  <a
                    className="btn btn--primary"
                    href={opening.applyHref}
                    style={{ justifySelf: "start" }}
                  >
                    Enquire
                    <span className="btn__arrow" aria-hidden="true">
                      →
                    </span>
                  </a>
                )}
              </article>
            ))}
          </div>

          <div className="grid grid--2" style={{ marginTop: "3rem" }}>
            <div className="card">
              <p className="label">{openApplication.heading}</p>
              <p className="card__body">{openApplication.body}</p>
              <a
                className="inline-link card__foot"
                href={`mailto:${openApplication.email}`}
              >
                {openApplication.email}
                <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="card">
              <p className="label">Example thesis topics</p>
              <ul className="topic-list">
                {thesisTopics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="card" style={{ marginTop: "1.25rem" }}>
            <p className="label">Where we are</p>
            <p className="card__body">
              {site.address.lines.join(" · ")}. The group is part of the{" "}
              {site.department} at {site.university}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
