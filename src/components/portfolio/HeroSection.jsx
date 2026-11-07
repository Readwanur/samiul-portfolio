"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { PERSONAL_DETAILS } from "@/data/portfolio-data";

export default function HeroSection() {
  const [photoIndex, setPhotoIndex] = useState(0);
  const activePhoto = PERSONAL_DETAILS.portraits[photoIndex];

  return (
    <section id="about" className="pt-28 sm:pt-36 pb-20 sm:pb-28">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          {/* Left 7 Columns: Editorial Typography & Personal Info */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Bespoke Editorial Availability Badge */}
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full bg-[#121212] hover:bg-[#171717] border border-neutral-800/90 hover:border-neutral-700 pl-2 pr-4 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-all duration-300"
            >
              <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 text-neutral-950 px-2.5 py-0.5 text-[10px] font-mono font-semibold uppercase tracking-widest">
                <svg
                  viewBox="0 0 12 12"
                  fill="none"
                  className="w-2.5 h-2.5 text-neutral-950 animate-[spin_8s_linear_infinite]"
                >
                  <path
                    d="M6 0L7.3 4.7L12 6L7.3 7.3L6 12L4.7 7.3L0 6L4.7 4.7L6 0Z"
                    fill="currentColor"
                  />
                </svg>
                Active
              </span>
              <span className="text-xs text-neutral-300 group-hover:text-neutral-100 transition-colors">
                {PERSONAL_DETAILS.availability}
              </span>
            </a>

            {/* Minimal Editorial Heading */}
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="font-mono text-xs uppercase tracking-widest text-neutral-400">
                  {PERSONAL_DETAILS.role}
                </p>
                <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-neutral-100 leading-[1.12]">
                  {PERSONAL_DETAILS.name} -{" "}
                  <span className="font-serif-editorial italic font-normal text-neutral-300">
                    {PERSONAL_DETAILS.role}
                  </span>
                </h1>
              </div>

              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-xl">
                {PERSONAL_DETAILS.bio}
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#works"
                className="inline-flex items-center gap-2 bg-neutral-100 hover:bg-white text-neutral-950 text-xs font-medium px-5 py-2.5 rounded-full transition-colors"
              >
                <span>Selected Works</span>
                <ArrowDownRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-neutral-800 hover:border-neutral-600 text-neutral-300 hover:text-white text-xs font-medium px-5 py-2.5 rounded-full transition-colors"
              >
                <span>Contact</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Personal Details Hairline Grid */}
            <div className="pt-8 border-t border-neutral-800/80 grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8">
              {PERSONAL_DETAILS.details.map((item) => (
                <div key={item.label} className="space-y-1">
                  <span className="block font-mono text-[11px] uppercase tracking-wider text-neutral-500">
                    {item.label}
                  </span>
                  <span className="block text-sm text-neutral-200">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right 5 Columns: Clean Portrait Frame */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="max-w-sm mx-auto lg:max-w-none space-y-3">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-neutral-900 border border-neutral-800/90">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePhoto.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={activePhoto.src}
                      alt={activePhoto.caption}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 420px"
                      className="object-cover object-top"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Minimal Caption & Photo Toggle */}
              <div className="flex flex-col gap-2.5 pt-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-500">
                    {activePhoto.label}
                  </span>

                  <div className="inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900/70 p-0.5 shrink-0">
                    {PERSONAL_DETAILS.portraits.map((p, idx) => {
                      const active = idx === photoIndex;
                      return (
                        <button
                          key={p.id}
                          onClick={() => setPhotoIndex(idx)}
                          className={`px-2.5 py-1 rounded-full text-[11px] font-mono transition-colors cursor-pointer ${
                            active
                              ? "bg-neutral-200 text-neutral-950 font-medium"
                              : "text-neutral-400 hover:text-neutral-200"
                          }`}
                        >
                          {p.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed">
                  {activePhoto.caption}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
