"use client";

import { useState } from "react";
import { BrandLogo } from "./Brand";
import { Icon } from "./Icon";

const productLinks = [
  { label: "Patient 360°", icon: "brief" as const, href: "#patient-brief" },
  { label: "What Changed", icon: "trend" as const, href: "#how-it-works" },
  { label: "Follow-Ups", icon: "calendar" as const, href: "#how-it-works" },
  { label: "Upload Report", icon: "upload" as const, href: "#for-clinics" },
  { label: "Prescription", icon: "prescription" as const, href: "#for-doctors" },
  { label: "More", icon: "sparkle" as const, href: "#product-demo" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header" id="top">
      <div className="header-main container">
        <a className="brand" href="#top" aria-label="medaurion home">
          <BrandLogo priority />
        </a>
        <div className="header-actions">
          <a className="header-about" href="#about">
            About Us
          </a>
          <a className="header-login" href="#pilot" title="Ask about clinic access">
            Login
          </a>
        </div>
        <button
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          <Icon name={menuOpen ? "close" : "menu"} size={23} />
        </button>
      </div>
      <nav
        aria-label="Product navigation"
        className={`product-nav${menuOpen ? " product-nav--open" : ""}`}
      >
        <div className="product-nav__inner container">
          {productLinks.map((link) => (
            <a
              className="product-nav__link"
              href={link.href}
              key={link.label}
              onClick={() => setMenuOpen(false)}
            >
              <span className="product-nav__icon">
                <Icon name={link.icon} size={21} />
              </span>
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
