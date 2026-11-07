"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, ArrowUpRight } from "lucide-react";
import { PERSONAL_DETAILS } from "@/data/portfolio-data";

export default function ContactAndFooter() {
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_DETAILS.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <section
        id="contact"
        className="py-20 sm:py-28 border-t border-neutral-800/80 scroll-mt-16"
      >
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left 5 Columns: Direct Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 block">
                  06 — Contact
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-100">
                  Start a Conversation
                </h2>
              </div>

              <p className="text-sm text-neutral-400 leading-relaxed">
                Available for software engineering roles, AI product
                collaborations, and clinical pilot inquiries.
              </p>

              <div className="space-y-4 pt-2 border-t border-neutral-800/80">
                <div>
                  <span className="block font-mono text-[11px] uppercase tracking-wider text-neutral-500">
                    Email
                  </span>
                  <div className="flex items-center gap-3 mt-1">
                    <a
                      href={`mailto:${PERSONAL_DETAILS.email}`}
                      className="text-sm text-neutral-100 hover:underline"
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
                  <span className="block text-sm text-neutral-200 mt-1">
                    {PERSONAL_DETAILS.phone}
                  </span>
                </div>

                <div>
                  <span className="block font-mono text-[11px] uppercase tracking-wider text-neutral-500">
                    Location
                  </span>
                  <span className="block text-sm text-neutral-200 mt-1">
                    {PERSONAL_DETAILS.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Right 7 Columns: Minimal Form */}
            <div className="lg:col-span-7">
              <div className="rounded-xl bg-[#111111] border border-neutral-800/90 p-6 sm:p-8">
                {sent ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="py-8 text-center space-y-3"
                  >
                    <p className="text-base font-medium text-neutral-100">
                      Thank you — your message has been noted.
                    </p>
                    <p className="text-xs text-neutral-400">
                      I will respond to your inquiry shortly.
                    </p>
                    <button
                      onClick={() => setSent(false)}
                      className="mt-2 font-mono text-xs text-neutral-300 underline cursor-pointer"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-mono text-xs text-neutral-400 mb-1.5">
                          Name
                        </label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                          }
                          placeholder="Your name"
                          className="w-full rounded-lg bg-neutral-950 border border-neutral-800 focus:border-neutral-500 px-3.5 py-2.5 text-sm text-neutral-100 placeholder:text-neutral-600 focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block font-mono text-xs text-neutral-400 mb-1.5">
                          Email
                        </label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                          }
                          placeholder="you@example.com"
                          className="w-full rounded-lg bg-neutral-950 border border-neutral-800 focus:border-neutral-500 px-3.5 py-2.5 text-sm text-neutral-100 placeholder:text-neutral-600 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-mono text-xs text-neutral-400 mb-1.5">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={form.message}
                        onChange={(e) =>
                          setForm({ ...form, message: e.target.value })
                        }
                        placeholder="How can we work together?"
                        className="w-full rounded-lg bg-neutral-950 border border-neutral-800 focus:border-neutral-500 px-3.5 py-2.5 text-sm text-neutral-100 placeholder:text-neutral-600 focus:outline-none transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-full bg-neutral-100 hover:bg-white text-neutral-950 text-xs font-medium px-6 py-2.5 transition-colors cursor-pointer"
                    >
                      Send Message
                    </button>
                  </form>
                )}
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
