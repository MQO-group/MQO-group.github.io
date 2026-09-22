import type { Metadata } from "next";
import { PageHeader } from "../components/page-header";
import { visiblePublications, type Publication } from "../data/publications";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Peer-reviewed work from the Macroscopic Quantum Optics group at Aalto University.",
};

function groupByYear(list: Publication[]) {
  const years = [...new Set(list.map((p) => p.year ?? 0))].sort((a, b) => b - a);
  return years.map((year) => ({
    year,
    items: list.filter((p) => (p.year ?? 0) === year),
  }));
}

function PubEntry({ pub }: { pub: Publication }) {
  return (
    <li className="pub">
      {pub.url ? (
        <a className="pub__title" href={pub.url} target="_blank" rel="noreferrer">
          {pub.title} <span aria-hidden="true">↗</span>
        </a>
      ) : (
        <h3 className="pub__title">{pub.title}</h3>
      )}

      {pub.authors && <p className="pub__authors">{pub.authors}</p>}

      {(pub.journal || pub.highlight) && (
        <p className="pub__meta">
          {pub.journal && <span className="pub__journal">{pub.journal}</span>}
          {pub.highlight && <span className="pub__flag">Highlight</span>}
        </p>
      )}
    </li>
  );
}

export default function PublicationsPage() {
  const byYear = groupByYear(visiblePublications);

  return (
    <>
      <PageHeader
        label="Publications"
        title="Published work"
        lede="Peer-reviewed work from the group and its collaborators, newest first."
      />

      <section className="section section--flush" style={{ paddingTop: 0 }}>
        <div className="shell">
          {byYear.length === 0 ? (
            <p className="prose">Nothing listed here yet.</p>
          ) : (
            byYear.map((group) => (
              <div className="pub-year" key={group.year}>
                <p className="pub-year__label">{group.year || "—"}</p>
                <ul className="pub-list">
                  {group.items.map((pub) => (
                    <PubEntry key={pub.title} pub={pub} />
                  ))}
                </ul>
              </div>
            ))
          )}
        </div>
      </section>
    </>
  );
}
