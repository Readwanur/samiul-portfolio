"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { WORKS_DATA } from "@/data/portfolio-data";

export default function WorksAndPdfShowcase() {
  const [selectedWork, setSelectedWork] = useState(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedWork(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section
      id="works"
      className="py-20 sm:py-24 border-t border-neutral-800/80 scroll-mt-16"
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 block">
              01 — Selected Works
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-100">
              Projects &amp; Case Studies
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-neutral-500 mr-2">
              Click any project for full details
            </span>
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Previous work"
              className="p-2 rounded-full border border-neutral-800 hover:border-neutral-600 text-neutral-400 hover:text-neutral-100 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Next work"
              className="p-2 rounded-full border border-neutral-800 hover:border-neutral-600 text-neutral-400 hover:text-neutral-100 transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Minimal Works Swiper */}
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Navigation, Pagination, Keyboard]}
          spaceBetween={20}
          slidesPerView={1}
          keyboard={{ enabled: true }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
          className="pb-12"
        >
          {WORKS_DATA.map((work) => (
            <SwiperSlide key={work.id} className="h-auto">
              <motion.article
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedWork(work)}
                className="group h-full flex flex-col justify-between rounded-xl bg-[#111111] hover:bg-[#141414] border border-neutral-800/90 hover:border-neutral-600 p-6 sm:p-7 transition-colors cursor-pointer"
              >
                <div className="space-y-5">
                  {/* Top Meta Row */}
                  <div className="flex items-center justify-between gap-2 font-mono text-xs text-neutral-500">
                    <span>
                      {work.index} / {work.category}
                    </span>
                    <span>{work.year}</span>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1.5">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-xl font-semibold text-neutral-100 group-hover:text-white tracking-tight">
                        {work.title}
                      </h3>
                      <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-neutral-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 mt-1" />
                    </div>
                    <p className="text-xs font-mono text-neutral-400">
                      {work.subtitle}
                    </p>
                  </div>

                  {/* Recognition Pill */}
                  <div className="inline-block rounded-md bg-neutral-900 border border-neutral-800 px-2.5 py-1 font-mono text-[11px] text-neutral-300">
                    {work.recognition}
                  </div>

                  {/* Concise Description */}
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {work.shortDescription}
                  </p>
                </div>

                {/* Bottom Tags & Trigger */}
                <div className="pt-6 mt-6 border-t border-neutral-800/80 flex items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {work.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[11px] text-neutral-400 bg-neutral-900/90 px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="font-mono text-xs text-neutral-200 group-hover:underline shrink-0">
                    Details →
                  </span>
                </div>
              </motion.article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* =====================================================================
          CLEAN EDITORIAL CASE STUDY MODAL (OPENS ON CLICK)
         ===================================================================== */}
      <AnimatePresence>
        {selectedWork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedWork(null)}
            className="fixed inset-0 z-[70] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-2xl bg-[#111111] border border-neutral-800 p-6 sm:p-8 shadow-2xl space-y-8"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4 border-b border-neutral-800/90 pb-5">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 font-mono text-xs text-neutral-500">
                    <span>{selectedWork.index}</span>
                    <span>·</span>
                    <span>{selectedWork.category}</span>
                    <span>·</span>
                    <span>{selectedWork.year}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-neutral-100 tracking-tight">
                    {selectedWork.title}
                  </h3>
                  <p className="text-sm text-neutral-400">
                    {selectedWork.subtitle}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedWork(null)}
                  aria-label="Close modal"
                  className="p-2 rounded-full border border-neutral-800 hover:border-neutral-600 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Recognition Callout */}
              <div className="flex flex-wrap items-center justify-between gap-2 rounded-lg bg-neutral-900/90 border border-neutral-800 px-4 py-3">
                <span className="font-mono text-xs text-neutral-400">
                  Recognition
                </span>
                <span className="font-mono text-xs text-neutral-100 font-medium">
                  {selectedWork.recognition}
                </span>
              </div>

              {/* Key Stats Bar */}
              {selectedWork.details.keyStats && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {selectedWork.details.keyStats.map((st) => (
                    <div
                      key={st.label}
                      className="rounded-lg bg-neutral-900/50 border border-neutral-800/80 p-3.5"
                    >
                      <span className="block text-lg sm:text-xl font-semibold text-neutral-100">
                        {st.value}
                      </span>
                      <span className="block font-mono text-[11px] text-neutral-500 mt-0.5">
                        {st.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Overview & Problem */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-neutral-500">
                    Overview
                  </h4>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {selectedWork.details.overview}
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-neutral-500">
                    The Problem
                  </h4>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {selectedWork.details.problem}
                  </p>
                </div>
              </div>

              {/* Architecture & Features */}
              <div className="space-y-3 pt-2 border-t border-neutral-800/80">
                <h4 className="font-mono text-xs uppercase tracking-wider text-neutral-500">
                  System Architecture &amp; Product Modules
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedWork.details.architecture.map((arch) => (
                    <div
                      key={arch.title}
                      className="rounded-lg bg-neutral-900/40 border border-neutral-800/70 p-4 space-y-1.5"
                    >
                      <h5 className="text-sm font-medium text-neutral-100">
                        {arch.title}
                      </h5>
                      <p className="text-xs text-neutral-400 leading-relaxed">
                        {arch.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Datasets (if present) */}
              {selectedWork.details.datasets &&
                selectedWork.details.datasets.length > 0 && (
                  <div className="space-y-3 pt-2 border-t border-neutral-800/80">
                    <h4 className="font-mono text-xs uppercase tracking-wider text-neutral-500">
                      Datasets &amp; Empirical Foundation
                    </h4>
                    <div className="space-y-2">
                      {selectedWork.details.datasets.map((ds) => (
                        <div
                          key={ds.name}
                          className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 rounded-lg bg-neutral-900/30 border border-neutral-800/60 px-4 py-2.5"
                        >
                          <span className="text-xs font-medium text-neutral-200">
                            {ds.name}
                          </span>
                          <span className="text-xs text-neutral-400">
                            {ds.detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              {/* Business Model & Impact */}
              {selectedWork.details.businessModel && (
                <div className="space-y-3 pt-2 border-t border-neutral-800/80">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-neutral-500">
                    Business Model &amp; Rollout
                  </h4>
                  <div className="space-y-2 text-xs text-neutral-400 leading-relaxed">
                    <p>
                      <strong className="text-neutral-200">Model: </strong>
                      {selectedWork.details.businessModel.model}
                    </p>
                    <p>
                      <strong className="text-neutral-200">
                        Market &amp; SDGs:{" "}
                      </strong>
                      {selectedWork.details.businessModel.market}
                    </p>
                    <p>
                      <strong className="text-neutral-200">Traction: </strong>
                      {selectedWork.details.businessModel.traction}
                    </p>
                  </div>
                </div>
              )}

              {/* Vetted By & Tech Tags Footer */}
              <div className="pt-4 border-t border-neutral-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-500 block">
                    Vetted By
                  </span>
                  <p className="text-xs text-neutral-300">
                    {selectedWork.details.vettedBy.join(" · ")}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedWork(null)}
                  className="self-start sm:self-auto px-4 py-2 rounded-full bg-neutral-100 hover:bg-white text-neutral-950 font-mono text-xs font-medium transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
