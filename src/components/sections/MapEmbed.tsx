"use client";

import { siteConfig } from "@/lib/config";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export function MapEmbed() {
  const mapConfig = siteConfig.sections.find((s) => s.id === "mapa");
  if (!mapConfig || mapConfig.type !== "map-embed") return null;

  // Generamos la query para el iframe de Google Maps (sin API key usando embed estático)
  const query = encodeURIComponent(mapConfig.address || siteConfig.brand.name);
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=REPLACE_WITH_API_KEY&q=${query}`;
  // Nota: Dado que no tenemos un API Key en el config, usaremos la URL genérica de maps
  const fallbackMapSrc = `https://maps.google.com/maps?q=${query}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id={mapConfig.id} className="relative h-[500px] w-full bg-bgSecondary border-t border-border/50">
      <iframe
        src={fallbackMapSrc}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Mapa de ubicación - ${siteConfig.brand.name}`}
        className="absolute inset-0 grayscale-[20%] contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
      ></iframe>
      
      {/* Overlay opcional para no perder el scroll en desktop hasta hacer click */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_40px_rgba(0,0,0,0.1)]"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-bgPrimary/95 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-xl flex items-center gap-4 border border-border/50 w-[90%] max-w-sm md:max-w-md"
      >
        <div className="bg-primary-brand/10 p-3 rounded-full text-primary-brand shrink-0">
          <MapPin className="w-6 h-6" />
        </div>
        <div>
          <p className="font-heading font-bold text-textPrimary text-lg">Ubicación</p>
          <p className="text-textSecondary text-sm line-clamp-2">{mapConfig.address}</p>
        </div>
      </motion.div>
    </section>
  );
}
