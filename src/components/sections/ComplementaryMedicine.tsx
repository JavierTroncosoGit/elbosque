"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Leaf, Droplets, Sparkles, Sprout, Wind, Flower2 } from "lucide-react";
import { getImageOrPlaceholder } from "@/lib/placeholders";

const therapies = [
  { name: "Masoterapia Clínica", icon: Droplets, desc: "Alivio de tensión muscular y estrés." },
  { name: "Apiterapia", icon: Sparkles, desc: "Tratamiento natural con productos derivados de las abejas." },
  { name: "Reiki", icon: Wind, desc: "Equilibrio energético y bienestar emocional." },
  { name: "Terapia Floral", icon: Flower2, desc: "Armonización emocional con esencias naturales." },
  { name: "Medicina Ayurveda", icon: Leaf, desc: "Sistema holístico milenario de salud." },
  { name: "Fitoterapia", icon: Sprout, desc: "Uso de plantas medicinales para prevención y curación." },
];

export function ComplementaryMedicine() {
  const profileImg = getImageOrPlaceholder("team", "carolina-barrientos");
  const bgImg = getImageOrPlaceholder("services", "medicina-complementaria");

  return (
    <section className="py-24 relative overflow-hidden bg-[#faf9f6]">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
         <Image src={bgImg.src} alt="Fondo orgánico" fill className="object-cover mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#84a59d] font-bold tracking-wider uppercase text-sm mb-2 block flex items-center justify-center gap-2">
            <Leaf className="w-4 h-4" /> Salud Holística
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-[#3a5a40]">
            Medicina Complementaria Integrativa
          </h2>
          <p className="mt-4 text-[#52796f] max-w-2xl mx-auto">
            Abordamos tu salud desde una perspectiva integral, conectando cuerpo, mente y energía a través de terapias naturales milenarias respaldadas por la ciencia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* Perfil */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] rounded-t-full rounded-b-3xl overflow-hidden border-4 border-white shadow-xl">
              <Image src={profileImg.src} alt="Carolina Barrientos Gómez" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3a5a40]/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                <h3 className="font-heading font-bold text-2xl">Carolina Barrientos</h3>
                <p className="text-white/90">Especialista en Medicina Complementaria</p>
              </div>
            </div>
          </motion.div>

          {/* Terapias */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {therapies.map((therapy, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-5 rounded-2xl shadow-sm border border-[#e9edc9] hover:shadow-md hover:border-[#84a59d] transition-all group"
              >
                <div className="bg-[#f2e8cf] w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <therapy.icon className="w-6 h-6 text-[#bc6c25]" />
                </div>
                <h4 className="font-bold text-[#3a5a40] mb-1">{therapy.name}</h4>
                <p className="text-sm text-[#52796f] leading-relaxed">{therapy.desc}</p>
                {therapy.name === "Fitoterapia" && (
                  <span className="inline-block mt-3 px-2 py-1 bg-[#84a59d]/10 text-[#52796f] text-xs font-semibold rounded-md border border-[#84a59d]/20">
                    Respaldado por MINSAL
                  </span>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
