"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { PERSONAL_DETAILS } from "@/data/portfolio-data";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Works", href: "#works" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Capabilities", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled
          ? "bg-[#0A0A0A]/90 backdrop-blur-md border-b border-neutral-800/80"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        {/* Minimal Wordmark */}
        <a
          href="#about"
          className="text-sm font-semibold tracking-tight text-neutral-100 hover:text-white transition-colors flex items-center gap-2.5"
        >
          <span>{PERSONAL_DETAILS.name}</span>
          <span className="text-neutral-600">/</span>
          <span className="font-mono text-xs font-normal text-neutral-400">
            {PERSONAL_DETAILS.location.split(",")[0]}
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-medium text-neutral-400 hover:text-neutral-100 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Action */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-1 text-xs font-medium text-neutral-100 border border-neutral-800 hover:border-neutral-600 bg-neutral-900/60 hover:bg-neutral-800/60 px-3.5 py-1.5 rounded-full transition-colors"
          >
            <span>Get in touch</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu"
          className="md:hidden p-1.5 text-neutral-400 hover:text-white"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="md:hidden bg-[#0E0E0E] border-b border-neutral-800 px-5 py-4 space-y-2"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-sm text-neutral-300 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
