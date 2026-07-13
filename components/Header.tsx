"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { contact, navigation } from "@/data/site";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="site-header__brand" href="/#home" aria-label="Zamad Hassan home">
        ZAMAD HASSAN
      </a>

      <nav className="site-header__nav" aria-label="Primary navigation">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="site-header__cta" href={contact.whatsapp} target="_blank" rel="noreferrer">
        Let's Talk
        <ArrowUpRight size={16} aria-hidden="true" />
      </a>

      <button
        className="site-header__menu"
        type="button"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <div className={isOpen ? "mobile-menu mobile-menu--open" : "mobile-menu"}>
        {navigation.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
            {item.label}
          </a>
        ))}
        <a href={contact.whatsapp} target="_blank" rel="noreferrer" onClick={() => setIsOpen(false)}>
          Start a Project
        </a>
      </div>
    </header>
  );
}
