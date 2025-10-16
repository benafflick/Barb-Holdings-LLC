"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur bg-white/90 shadow-md"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-[#2677A9] font-bold text-xl"
        >
          <div className="relative w-10 h-10">
            <Image
              src="/logo.png"
              alt="Barb Holdings LLC"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-gray-900 font-semibold">Barb Holdings LLC</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative group transition-colors"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#2677A9] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="tel:+1234567890"
            className="flex items-center gap-2 bg-[#2677A9] text-white px-4 py-2 rounded-md text-sm shadow hover:bg-[#1f5f87] transition"
          >
            📞 <span>+1 (443) 735-1393</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          className="md:hidden text-gray-700 text-2xl"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-64" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col bg-white border-t text-gray-700 font-medium px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#2677A9] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+1 (443) 735-1393"
            onClick={() => setMenuOpen(false)}
            className="mt-2 bg-[#2677A9] text-white px-4 py-2 rounded-md text-center flex items-center justify-center gap-1"
          >
            📞 +1 (443) 735-1393
          </a>
        </nav>
      </div>
    </header>
  );
}
