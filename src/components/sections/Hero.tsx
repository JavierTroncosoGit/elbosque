"use client";

import { siteConfig } from "@/lib/config";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { getImageOrPlaceholder } from "@/lib/placeholders";
import { StatusBadge } from "@/components/layout/StatusBadge";

export function Hero() {
  const heroConfig = siteConfig.sections.find((s) => s.id === "hero");
  if (!heroConfig || heroConfig.type !== "hero") return null;

  const bgImage = getImageOrPlaceholder("hero", "hero-main");

  return (
    <section id={heroConfig.id} className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage.src}
          alt={bgImage.alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Multi-layer overlay for text readability over bright image */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/85 via-[#0f172a]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/40 via-transparent to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          {/* Badges row — aligned horizontally */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            {heroConfig.badge && (
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 text-white/90 font-medium text-sm border border-white/20 backdrop-blur-sm">
                {heroConfig.badge}
              </div>
            )}
            <StatusBadge />
          </div>
          
          <h1 className="text-[length:var(--font-size-hero)] font-heading font-extrabold text-white leading-[1.1] mb-6 drop-shadow-md">
            {heroConfig.headline}
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed max-w-xl">
            {heroConfig.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            {heroConfig.ctas?.map((cta: any, i: number) => (
              <Link
                key={i}
                href={cta.href}
                className={`inline-flex shrink-0 items-center justify-center rounded-full px-8 py-4 text-base font-semibold transition-all ${
                  cta.variant === "primary" 
                    ? "bg-primary-brand hover:bg-primary-dark text-white shadow-lg hover:shadow-xl shadow-primary-brand/30" 
                    : "bg-white/15 hover:bg-white/25 text-white border border-white/30 backdrop-blur-sm"
                }`}
              >
                {cta.text}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

