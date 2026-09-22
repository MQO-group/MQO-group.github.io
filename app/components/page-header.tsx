import type { ReactNode } from "react";

type PageHeaderProps = {
  label: string;
  title: string;
  lede?: string;
  children?: ReactNode;
};

/** Standard top-of-page block for every interior page. */
export function PageHeader({ label, title, lede, children }: PageHeaderProps) {
  return (
    <section className="page-head">
      <div className="shell">
        <p className="label">{label}</p>
        <h1 className="h-section">{title}</h1>
        {lede && <p className="lede">{lede}</p>}
        {children}
      </div>
    </section>
  );
}
