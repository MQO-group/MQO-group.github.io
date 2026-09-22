import type { Metadata } from "next";
import { PageHeader } from "../components/page-header";
import { LinkedText } from "../components/linked-text";
import { researchAreas } from "../data/research";
import { site } from "../data/site";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Correlated quantum states of light and matter, nonequilibrium Bose–Einstein condensates, and quantum control over large mass motion.",
};

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        label="Research"
        title="What we work on"
        lede="Main research directions include:"
      />

      <section className="section section--flush" style={{ paddingTop: 0 }}>
        <div className="shell">
          <div className="area-list">
            {researchAreas.map((area) => (
              <article className="area" id={area.slug} key={area.slug}>
                <p className="area__index">{area.index}</p>

                <div>
                  <h2 className="area__title">{area.title}</h2>
                  <ul className="area__keywords">
                    {area.keywords.map((kw) => (
                      <li className="chip" key={kw}>
                        {kw}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="area__aside prose">
                  {area.body.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>
                      <LinkedText text={paragraph} links={area.links} />
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="card" style={{ marginTop: "3rem" }}>
            <p className="label">Collaborate</p>
            <h2 className="h-card" style={{ marginTop: "0.9rem" }}>
              Working with us
            </h2>
            <p className="card__body">
              We welcome motivated researchers at all levels and support fellowship applications.
            </p>
            <a
              className="inline-link card__foot"
              href={`mailto:${site.lead.email}`}
            >
              Get in touch with {site.lead.name}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
