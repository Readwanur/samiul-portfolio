"use client";

import React from "react";
import { motion } from "framer-motion";
import { EXPERIENCE_DATA, EDUCATION_DATA } from "@/data/portfolio-data";

export default function ExperienceAndEducation() {
  return (
    <div>
      {/* =====================================================================
          02 — EXPERIENCE SECTION
         ===================================================================== */}
      <section
        id="experience"
        className="py-20 sm:py-24 border-t border-neutral-800/80 scroll-mt-16"
      >
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="space-y-2 mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 block">
              02 — Experience
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-100">
              Work &amp; Research History
            </h2>
          </div>

          <div className="divide-y divide-neutral-800/80 border-t border-b border-neutral-800/80">
            {EXPERIENCE_DATA.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start"
              >
                {/* Left Meta Column */}
                <div className="lg:col-span-4 space-y-1">
                  <span className="font-mono text-xs text-neutral-300 block">
                    {exp.period}
                  </span>
                  <span className="font-mono text-xs text-neutral-500 block">
                    {exp.location}
                  </span>
                  <div className="pt-2">
                    <span className="inline-block rounded bg-neutral-900 border border-neutral-800 px-2.5 py-0.5 font-mono text-[11px] text-neutral-400">
                      {exp.badge}
                    </span>
                  </div>
                </div>

                {/* Right Content Column */}
                <div className="lg:col-span-8 space-y-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-neutral-100">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-neutral-400 mt-0.5">
                      {exp.organization}
                    </p>
                  </div>

                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {exp.summary}
                  </p>

                  <ul className="space-y-2 pt-1">
                    {exp.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-xs sm:text-sm text-neutral-400 leading-relaxed"
                      >
                        <span className="text-neutral-600 mt-1.5 h-1 w-1 rounded-full bg-neutral-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          03 — EDUCATION SECTION
         ===================================================================== */}
      <section
        id="education"
        className="py-20 sm:py-24 border-t border-neutral-800/80 scroll-mt-16"
      >
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="space-y-2 mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 block">
              03 — Education
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-100">
              Academic Background
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EDUCATION_DATA.map((edu, idx) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="flex flex-col justify-between rounded-xl bg-[#111111] border border-neutral-800/90 p-6 space-y-6"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between font-mono text-xs text-neutral-500">
                    <span>{edu.period}</span>
                    <span>{edu.location}</span>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-neutral-100">
                      {edu.degree}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                      {edu.institution}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed pt-1">
                    {edu.details}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-800/80">
                  <span className="font-mono text-xs text-neutral-200">
                    {edu.result}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
