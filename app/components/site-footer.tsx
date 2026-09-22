import Link from "next/link";
import { navItems, site } from "../data/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__rule" aria-hidden="true" />
      <div className="shell">
        <div className="site-footer__inner">
          <div>
            <p className="site-footer__title">{site.name}</p>
            <address>
              {site.address.lines.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </address>
          </div>

          <div className="footer-col">
            <p className="footer-col__head">Site</p>
            <ul>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <p className="footer-col__head">Elsewhere</p>
            <ul>
              <li>
                <a href={site.links.aalto} target="_blank" rel="noreferrer">
                  Group page at aalto.fi ↗
                </a>
              </li>
              <li>
                <a href={site.links.qclm} target="_blank" rel="noreferrer">
                  QCLM conference ↗
                </a>
              </li>
              <li>
                <a href={site.links.linkedin} target="_blank" rel="noreferrer">
                  Linkedin ↗
                </a>
              </li>
              <li>
                <a href={`mailto:${site.lead.email}`}>{site.lead.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="site-footer__base">
          <span>
            © {new Date().getFullYear()} {site.name} · {site.university}
          </span>
          <span>{site.department}</span>
        </div>
      </div>
    </footer>
  );
}
