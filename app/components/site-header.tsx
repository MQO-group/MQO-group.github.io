"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { navItems, site } from "../data/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <Link href="/" className="brand" aria-label={`${site.name} — home`}>
          {/* Reversed lockup — see public/graphics/README.md. The original
              full-colour logo.png is kept there for light backgrounds. */}
          <img
            className="brand__logo"
            src="/graphics/logo-light.png"
            alt={site.name}
            width={900}
            height={437}
          />
          <span className="brand__sub">{site.university}</span>
        </Link>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="primary-nav"
        >
          {isOpen ? "Close" : "Menu"}
        </button>

        <nav
          id="primary-nav"
          className={isOpen ? "nav nav--open" : "nav"}
          aria-label="Primary"
        >
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={isActive ? "nav__link nav__link--active" : "nav__link"}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
