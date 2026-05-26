"use client";

import { motion } from "framer-motion";
import { Glasses, MapPin, Phone, Star } from "lucide-react";
import Image from "next/image";
import { getImageOrPlaceholder } from "@/lib/placeholders";

export function OpticaAustral() {
  const bgImg = getImageOrPlaceholder("hero", "optica-austral");

  return (
    <section className="py-24 bg-bgPrimary overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-2xl group"
        >
          {/* Fondo */}
          <div className="absolute inset-0">
            <Image src={bgImg.src} alt="Óptica Austral" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/90 via-[#0f172a]/80 to-transparent" />
          </div>

          <div className="relative z-10 grid md:grid-cols-2 gap-8 p-10 md:p-16 items-center">
            <div className="text-white space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-semibold text-[#38bdf8]">
                <Glasses className="w-4 h-4" /> Servicio Asociado
              </div>
              
              <h2 className="text-4xl md:text-5xl font-heading font-extrabold leading-tight">
                Óptica Austral
              </h2>
              
              <p className="text-lg text-slate-300">
                Tu visión en manos expertas. Contamos con tecnología de punta y la mejor asesoría en selección de cristales y armazones.
              </p>

              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-200">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <span className="font-semibold text-white">Evaluación gratuita</span>
                </li>
                <li className="flex items-center gap-3 text-slate-200">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span>Ofertas especiales en marcos y cristales</span>
                </li>
                <li className="flex items-center gap-3 text-slate-200">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span>Atención especializada para pacientes diabéticos</span>
                </li>
              </ul>

              <div className="pt-6 flex flex-col sm:flex-row gap-4">
                <a href="tel:+56942728154" className="inline-flex items-center justify-center gap-2 bg-[#38bdf8] hover:bg-[#0284c7] text-white px-8 py-4 rounded-full font-bold transition-colors">
                  <Phone className="w-5 h-5" /> +56 9 4272 8154
                </a>
              </div>
            </div>

            <div className="hidden md:flex flex-col justify-end h-full text-right text-slate-300">
              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 self-end max-w-sm">
                <MapPin className="w-8 h-8 text-[#38bdf8] ml-auto mb-3" />
                <p className="font-semibold text-white text-lg">Visítanos a pasos del Centro Médico</p>
                <p className="mt-1">Calle Serrano 462<br/>Castro, Chiloé</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
