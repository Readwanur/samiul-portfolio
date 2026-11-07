"use client";

import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { CAPABILITIES_DATA, ENDORSEMENTS_DATA } from "@/data/portfolio-data";

export default function SkillsAndEndorsements() {
  return (
    <section
      id="skills"
      className="py-20 sm:py-24 border-t border-neutral-800/80 scroll-mt-16"
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-8 space-y-24">
        {/* =================================================================
            04 — CAPABILITIES (CLEAN TYPOGRAPHIC LISTS, NO FAKE BARS)
           ================================================================= */}
        <div>
          <div className="space-y-2 mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 block">
              04 — Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-100">
              Technical Stack &amp; Domains
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-neutral-800/80 pt-8">
            {CAPABILITIES_DATA.map((col, idx) => (
              <motion.div
                key={col.group}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="space-y-4"
              >
                <h3 className="font-mono text-xs uppercase tracking-wider text-neutral-400">
                  {col.group}
                </h3>
                <ul className="space-y-2.5">
                  {col.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-sm text-neutral-200 border-b border-neutral-900 pb-2.5"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* =================================================================
            05 — CLINICAL VETTING & ENDORSEMENTS (MINIMAL SWIPER)
           ================================================================= */}
        <div>
          <div className="space-y-2 mb-10">
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 block">
              05 — Clinical Validation
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-100">
              Vetted by Psychological Counselors
            </h2>
          </div>

          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 5500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {ENDORSEMENTS_DATA.map((item) => (
              <SwiperSlide key={item.id} className="h-auto">
                <div className="h-full flex flex-col justify-between rounded-xl bg-[#111111] border border-neutral-800/90 p-6 space-y-6">
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    &ldquo;{item.quote}&rdquo;
                  </p>

                  <div className="pt-4 border-t border-neutral-800/80 space-y-0.5">
                    <h4 className="text-sm font-semibold text-neutral-100">
                      {item.author}
                    </h4>
                    <p className="text-xs text-neutral-400">{item.role}</p>
                    <p className="font-mono text-[11px] text-neutral-500">
                      {item.org}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
