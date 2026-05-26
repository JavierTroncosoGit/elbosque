"use client";

import { siteConfig } from "@/lib/config";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, TestTube2 } from "lucide-react";

export function HighlightBanner() {
  const labConfig = siteConfig.sections.find((s) => s.id === "laboratorio");
  if (!labConfig || labConfig.type !== "highlight-banner") return null;

  return (
    <section id={labConfig.id} className="py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-gradient-to-br from-primary-dark via-primary-brand to-[#0ea5e9]/80 rounded-3xl p-8 md:p-12 shadow-xl shadow-primary-brand/20 overflow-hidden"
        >
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 opacity-10">
            <TestTube2 className="w-64 h-64 text-white" />
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 leading-tight">
                {labConfig.headline}
              </h2>
              <p className="text-white/90 text-lg mb-6">
                {labConfig.subheadline}
              </p>
              
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm border border-white/30 rounded-md text-sm font-semibold">Fonasa</span>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm border border-white/30 rounded-md text-sm font-semibold">Isapres</span>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm border border-white/30 rounded-md text-sm font-semibold">Particular</span>
              </div>
            </div>
            
            {labConfig.cta && (
              <div className="shrink-0 w-full md:w-auto flex flex-col gap-3">
                <a
                  href={`tel:${siteConfig.contact.whatsapp.number}`}
                  className="inline-flex shrink-0 items-center justify-center w-full md:w-auto bg-white text-primary-dark hover:bg-bgSecondary rounded-full px-8 py-4 text-base font-bold shadow-lg transition-transform hover:scale-105"
                >
                  Llamar al Laboratorio
                </a>
                <p className="text-white/80 text-sm text-center font-medium">O visítanos en el 1er Piso</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
