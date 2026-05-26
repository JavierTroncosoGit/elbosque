"use client";

import { siteConfig } from "@/lib/config";
import { motion } from "framer-motion";
import { Phone, Copy, Check, Building2 } from "lucide-react";
import { useState } from "react";
import { SmartContactSelector } from "./SmartContactSelector";

interface FloorInfo {
  name: string;
  phone: string;
  phoneDisplay: string;
  specialties: string[];
}

const FLOORS: FloorInfo[] = [
  {
    name: "1er Piso",
    phone: "+56652638555",
    phoneDisplay: "+56 652 638 555",
    specialties: ["Medicina General", "Traumatología", "Oftalmología", "Pediatría", "Laboratorio"],
  },
  {
    name: "2do Piso",
    phone: "+56652630608",
    phoneDisplay: "+56 652 630 608",
    specialties: ["Neurocirugía", "Dermatología", "Psicología", "Matronería"],
  },
  {
    name: "3er Piso",
    phone: "+56652638500",
    phoneDisplay: "+56 652 638 500",
    specialties: ["Ortodoncia"],
  },
  {
    name: "Central",
    phone: "+56652638550",
    phoneDisplay: "+56 652 638 550",
    specialties: ["Podología", "Med. Complementaria", "Consultas generales"],
  },
];

function FloorCard({ floor, index }: { floor: FloorInfo; index: number }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(floor.phoneDisplay);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-bgPrimary border border-border rounded-2xl p-5 hover:shadow-md transition-shadow"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-9 h-9 bg-primary-brand/10 rounded-lg flex items-center justify-center">
          <Building2 className="w-4 h-4 text-primary-brand" />
        </div>
        <h4 className="font-heading font-bold text-textPrimary">{floor.name}</h4>
      </div>

      <p className="text-sm text-textSecondary mb-4 leading-relaxed">
        {floor.specialties.join(" · ")}
      </p>

      <div className="flex gap-2">
        <a
          href={`tel:${floor.phone}`}
          className="flex-1 flex items-center justify-center gap-2 min-h-[44px] bg-primary-brand hover:bg-primary-dark text-white rounded-xl text-sm font-semibold transition-all active:scale-[0.98]"
        >
          <Phone className="w-4 h-4" />
          {floor.phoneDisplay}
        </a>
        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center justify-center min-h-[44px] min-w-[44px] border border-border bg-bgSecondary hover:bg-bgPrimary rounded-xl transition-all active:scale-[0.98]"
          aria-label={`Copiar número de ${floor.name}`}
        >
          {copied ? (
            <Check className="w-4 h-4 text-accent-brand" />
          ) : (
            <Copy className="w-4 h-4 text-textSecondary" />
          )}
        </button>
      </div>
    </motion.div>
  );
}

export function ContactMulti() {
  const contactConfig = siteConfig.sections.find((s) => s.id === "contacto");
  if (!contactConfig || contactConfig.type !== "contact-multi") return null;

  return (
    <section id={contactConfig.id} className="py-16 lg:py-24 bg-bgSecondary">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          {contactConfig.sectionLabel && (
            <span className="text-primary-brand font-bold tracking-wider uppercase text-sm mb-2 block">
              {contactConfig.sectionLabel}
            </span>
          )}
          <h2 className="text-[length:var(--font-size-display)] font-heading font-extrabold text-textPrimary mb-4">
            {contactConfig.headline}
          </h2>
          <p className="text-lg text-textSecondary">
            {contactConfig.subheadline}
          </p>
        </motion.div>

        {/* Two-column layout: Selector + Directory */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Left: Smart Selector */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SmartContactSelector />
          </motion.div>

          {/* Right: Floor Directory */}
          <div>
            <h3 className="font-heading font-bold text-xl text-textPrimary mb-4">
              Directorio de Teléfonos
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
              {FLOORS.map((floor, i) => (
                <FloorCard key={floor.name} floor={floor} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
