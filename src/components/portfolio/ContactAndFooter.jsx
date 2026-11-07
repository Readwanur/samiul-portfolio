"use client";

import React, { useState } from "react";
import { Copy, Check, ArrowUpRight } from "lucide-react";
import { PERSONAL_DETAILS } from "@/data/portfolio-data";

export default function ContactAndFooter() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_DETAILS.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <section
        id="contact"
        className="py-20 sm:py-28 border-t border-neutral-800/80 scroll-mt-16"
      >
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="max-w-2xl space-y-8">
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 block">
                06 — Contact
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-100">
                Start a Conversation
              </h2>
              <p className="text-sm text-neutral-400 leading-relaxed pt-1">
                Available for research collaborations, AI-integrated healthcare
                systems, and engineering inquiries.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-6 border-t border-neutral-800/80">
              <div>
                <span className="block font-mono text-[11px] uppercase tracking-wider text-neutral-500">
                  Email
                </span>
                <div className="flex flex-wrap items-center gap-2.5 mt-1.5">
                  <a
                    href={`mailto:${PERSONAL_DETAILS.email}`}
                    className="text-sm text-neutral-100 hover:underline break-all"
                  >
                    {PERSONAL_DETAILS.email}
                  </a>
                  <button
                    onClick={copyEmail}
                    className="inline-flex items-center gap-1 rounded border border-neutral-800 hover:border-neutral-600 px-2 py-0.5 font-mono text-[11px] text-neutral-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div>
                <span className="block font-mono text-[11px] uppercase tracking-wider text-neutral-500">
                  Phone
                </span>
                <a
                  href={`tel:${PERSONAL_DETAILS.phone}`}
                  className="block text-sm text-neutral-200 hover:text-white mt-1.5"
                >
                  {PERSONAL_DETAILS.phone}
                </a>
              </div>

              <div>
                <span className="block font-mono text-[11px] uppercase tracking-wider text-neutral-500">
                  Location
                </span>
                <span className="block text-sm text-neutral-200 mt-1.5">
                  {PERSONAL_DETAILS.location}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="border-t border-neutral-900 py-8">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-mono text-xs text-neutral-500">
            © {new Date().getFullYear()} {PERSONAL_DETAILS.name}
          </span>

          <div className="flex items-center gap-6">
            {PERSONAL_DETAILS.socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-mono text-xs text-neutral-400 hover:text-neutral-100 transition-colors"
              >
                <span>{s.name}</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
