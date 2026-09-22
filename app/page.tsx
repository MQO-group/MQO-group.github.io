import Link from "next/link";
import { FieldBackdrop } from "./components/field-backdrop";
import { NewsImage } from "./components/news-image";
import { researchAreas } from "./data/research";
import { news } from "./data/news";
import { site } from "./data/site";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function HomePage() {
  const latestNews = news.slice(0, 3);

  return (
    <>
      <section className="hero">
        <FieldBackdrop />
        <div className="shell hero__inner">
          <div>
            <p className="label">Aalto University · Department of Applied Physics</p>

            <h1 className="display hero__title">
              Macroscopic <em>Quantum</em> Optics 
            </h1>

            <p className="lede hero__lede">
              We use experimental quantum optics methods in discrete and
              continuous variables to study quantum phenomena in large-scale and
              complex systems — from correlated light–matter states in molecular
              microcavities to the motion of levitated masses.
            </p>

            <div className="hero__actions">
              <Link href="/research" className="btn btn--primary">
                Research
                <span className="btn__arrow" aria-hidden="true">
                  →
                </span>
              </Link>
              <Link href="/people" className="btn btn--ghost">
                People
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- research -- */}
      <section className="section">
        <div className="shell">
          <div className="section-head section-head--split">
            <div>
              <p className="label">Research directions</p>
              <h2 className="h-section" style={{ marginTop: "1.1rem" }}>
                Research Directions
              </h2>
            </div>
            <p className="lede">
            </p>
          </div>

          <div className="grid grid--3" style={{ marginTop: "3rem" }}>
            {researchAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/research#${area.slug}`}
                className="card"
              >
                <span className="label label--dim label--bare mono">
                  {area.index}
                </span>
                <h3 className="h-card" style={{ marginTop: "0.9rem" }}>
                  {area.title}
                </h3>
                <p className="card__body">{area.summary}</p>
                <span className="card__foot inline-link">
                  Read more
                  <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- news -- */}
      <section className="section">
        <div className="shell">
          <div className="section-head section-head--split">
            <div>
              <p className="label">Latest</p>
              <h2 className="h-section" style={{ marginTop: "1.1rem" }}>
                News from the group
              </h2>
            </div>
            <p className="lede">
              Papers, positions and events. Contact{" "}
              <a
                href={`mailto:${site.lead.email}`}
                style={{ color: "var(--signal)" }}
              >
                {site.lead.name}
              </a>{" "}
              for anything else.
            </p>
          </div>

          <ul className="news-list">
            {latestNews.map((item) => (
              <li className="news-item" key={item.title}>
                <time className="news-item__date" dateTime={item.date}>
                  {formatDate(item.date)}
                </time>
                <div>
                  {item.tag && <span className="news-item__tag">{item.tag}</span>}
                  <h3 className="h-card">{item.title}</h3>
                  <p className="news-item__body">{item.body}</p>
                </div>

                {item.image && (
                  <NewsImage src={item.image} alt={item.imageAlt ?? ""} />
                )}
              </li>
            ))}
          </ul>

          <Link
            href="/news"
            className="inline-link"
            style={{ marginTop: "1.75rem" }}
          >
            All news
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
