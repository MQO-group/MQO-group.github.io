import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "../components/page-header";
import { NewsImage } from "../components/news-image";
import { news } from "../data/news";

export const metadata: Metadata = {
  title: "News",
  description:
    "Papers, positions, events and lab updates from the Macroscopic Quantum Optics group.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function NewsPage() {
  const sorted = [...news].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <PageHeader
        label="News"
        title="Updates"
        lede="Papers out, people in, and what is happening in the lab."
      />

      <section className="section section--flush" style={{ paddingTop: 0 }}>
        <div className="shell">
          <ul className="news-list">
            {sorted.map((item) => {
              const isExternal = item.link ? !item.link.href.startsWith("/") : false;

              return (
                <li className="news-item" key={`${item.date}-${item.title}`}>
                  <time className="news-item__date" dateTime={item.date}>
                    {formatDate(item.date)}
                  </time>

                  <div>
                    {item.tag && (
                      <span className="news-item__tag">{item.tag}</span>
                    )}
                    <h2 className="h-card">{item.title}</h2>
                    <p className="news-item__body">{item.body}</p>

                    {item.link &&
                      (isExternal ? (
                        <a
                          className="inline-link"
                          href={item.link.href}
                          target={
                            item.link.href.startsWith("http")
                              ? "_blank"
                              : undefined
                          }
                          rel={
                            item.link.href.startsWith("http")
                              ? "noreferrer"
                              : undefined
                          }
                        >
                          {item.link.label}
                          <span aria-hidden="true">
                            {item.link.href.startsWith("http") ? "↗" : "→"}
                          </span>
                        </a>
                      ) : (
                        <Link className="inline-link" href={item.link.href}>
                          {item.link.label}
                          <span aria-hidden="true">→</span>
                        </Link>
                      ))}
                  </div>

                  {item.image && (
                    <NewsImage
                      src={item.image}
                      alt={item.imageAlt ?? ""}
                      caption={item.imageCaption}
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
