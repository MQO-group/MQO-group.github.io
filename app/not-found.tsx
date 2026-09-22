import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section section--flush">
      <div className="shell">
        <p className="label">Error 404</p>
        <h1 className="h-section" style={{ marginTop: "1.1rem" }}>
          No signal here
        </h1>
        <p className="lede" style={{ marginTop: "1.2rem" }}>
          That page does not exist, or it moved. Try the research pages or head
          back to the front.
        </p>
        <div className="hero__actions">
          <Link href="/" className="btn btn--primary">
            Back home
            <span className="btn__arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
