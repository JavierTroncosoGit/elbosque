"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, Copy, Check, ChevronDown, MapPin, User } from "lucide-react";

interface SpecialtyContact {
  specialty: string;
  professional: string;
  piso: string;
  phone: string | null;
  whatsapp: string | null;
}

const SPECIALTY_MAP: SpecialtyContact[] = [
  { specialty: "Medicina General", professional: "Dr. Roberto Oliver / Dr. Miguel Cantos", piso: "1er Piso", phone: "56652638555", whatsapp: null },
  { specialty: "Traumatología y Ortopedia", professional: "Dr. Daniel Bucobo", piso: "1er Piso", phone: "56652638555", whatsapp: null },
  { specialty: "Oftalmología", professional: "Juan Vargas", piso: "1er Piso", phone: "56652638555", whatsapp: null },
  { specialty: "Laboratorio Clínico", professional: "Equipo de Laboratorio", piso: "1er Piso", phone: "56652638555", whatsapp: null },
  { specialty: "Pediatría", professional: "Dr. Jonathan Soto / Dr. Claudio Klenner", piso: "1er y 2do Piso", phone: "56652638555", whatsapp: null },
  { specialty: "Neurocirugía", professional: "Dr. Marcell Contreras", piso: "2do Piso", phone: "56652630608", whatsapp: null },
  { specialty: "Dermatología", professional: "Dr. Víctor López Barra", piso: "2do Piso", phone: "56652630608", whatsapp: "56955238408" },
  { specialty: "Psicología", professional: "Dolly Barria", piso: "2do Piso", phone: "56652630608", whatsapp: "56998808692" },
  { specialty: "Matronería", professional: "Andrea Paredes / Javiera Duncker", piso: "2do Piso", phone: "56652630608", whatsapp: null },
  { specialty: "Ortodoncia", professional: "Dr. Héctor Guarateguia", piso: "3er Piso", phone: "56652638500", whatsapp: "56956073189" },
  { specialty: "Tratamientos Estéticos", professional: "Equipo Estética", piso: "—", phone: null, whatsapp: "56996593292" },
  { specialty: "Kinesiología", professional: "Equipo Kinesiología Chiloé", piso: "—", phone: null, whatsapp: "56966536246" },
  { specialty: "Podología Clínica", professional: "Equipo Podología", piso: "—", phone: "56652638550", whatsapp: null },
  { specialty: "Medicina Complementaria", professional: "Carolina Barrientos Gómez", piso: "—", phone: "56652638550", whatsapp: null },
];

function formatPhoneDisplay(phone: string): string {
  // 56652638555 → +56 652 638 555
  if (phone.startsWith("569") && phone.length === 11) {
    return `+56 9 ${phone.slice(3, 7)} ${phone.slice(7)}`;
  }
  if (phone.startsWith("5665")) {
    return `+56 ${phone.slice(2, 4)} ${phone.slice(4, 7)} ${phone.slice(7)}`;
  }
  return phone;
}

export function SmartContactSelector() {
  const [selected, setSelected] = useState<SpecialtyContact | null>(null);
  const [copied, setCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleCopy = (phone: string) => {
    navigator.clipboard.writeText(formatPhoneDisplay(phone));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const buildWhatsAppUrl = (wa: string, specialty: string) => {
    const msg = encodeURIComponent(
      `Hola, quisiera agendar una hora con ${specialty} en el Centro Médico El Bosque.`
    );
    return `https://wa.me/${wa}?text=${msg}`;
  };

  return (
    <div className="w-full">
      <h3 className="font-heading font-bold text-xl text-textPrimary mb-4">
        ¿A quién necesitas contactar?
      </h3>

      {/* Custom Select Dropdown */}
      <div className="relative mb-6">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between min-h-[48px] px-4 py-3 bg-bgPrimary border border-border rounded-xl text-left text-base font-medium text-textPrimary hover:border-primary-brand/50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-brand/30"
        >
          <span className={selected ? "text-textPrimary" : "text-textSecondary"}>
            {selected ? selected.specialty : "Selecciona una especialidad..."}
          </span>
          <ChevronDown className={`w-5 h-5 text-textSecondary transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.15 }}
              className="absolute z-20 w-full mt-2 bg-bgPrimary border border-border rounded-xl shadow-lg max-h-[280px] overflow-y-auto"
            >
              {SPECIALTY_MAP.map((item) => (
                <button
                  key={item.specialty}
                  type="button"
                  onClick={() => {
                    setSelected(item);
                    setIsOpen(false);
                    setCopied(false);
                  }}
                  className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors hover:bg-primary-brand/5 hover:text-primary-brand ${
                    selected?.specialty === item.specialty
                      ? "bg-primary-brand/10 text-primary-brand"
                      : "text-textPrimary"
                  }`}
                >
                  {item.specialty}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Result Card */}
      <AnimatePresence mode="wait">
        {selected && (
          <motion.div
            key={selected.specialty}
            initial={{ opacity: 0, y: 12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            className="bg-bgPrimary border border-border rounded-2xl p-5 shadow-sm"
          >
            {/* Professional Info */}
            <div className="flex items-start gap-3 mb-5">
              <div className="w-10 h-10 bg-primary-brand/10 rounded-full flex items-center justify-center shrink-0">
                <User className="w-5 h-5 text-primary-brand" />
              </div>
              <div>
                <p className="font-heading font-bold text-textPrimary">{selected.professional}</p>
                <p className="text-sm text-textSecondary">{selected.specialty}</p>
              </div>
            </div>

            {/* Location */}
            {selected.piso !== "—" && (
              <div className="flex items-center gap-2 mb-5 text-sm text-textSecondary">
                <MapPin className="w-4 h-4" />
                <span>{selected.piso}</span>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              {/* WhatsApp button */}
              {selected.whatsapp && (
                <a
                  href={buildWhatsAppUrl(selected.whatsapp, selected.specialty)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 min-h-[48px] bg-[#25D366] hover:bg-[#128C7E] text-white rounded-xl font-semibold transition-all active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5" />
                  Agendar por WhatsApp
                </a>
              )}

              {/* Phone buttons */}
              {selected.phone && (
                <div className="flex gap-3">
                  <a
                    href={`tel:+${selected.phone}`}
                    className="flex-1 flex items-center justify-center gap-2 min-h-[48px] bg-primary-brand hover:bg-primary-dark text-white rounded-xl font-semibold transition-all active:scale-[0.98]"
                  >
                    <Phone className="w-5 h-5" />
                    Llamar
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy(selected.phone!)}
                    className="flex items-center justify-center gap-2 min-h-[48px] px-5 border border-border bg-bgSecondary hover:bg-bgPrimary rounded-xl font-medium text-textPrimary transition-all active:scale-[0.98]"
                  >
                    {copied ? <Check className="w-5 h-5 text-accent-brand" /> : <Copy className="w-5 h-5" />}
                    {copied ? "¡Copiado!" : "Copiar"}
                  </button>
                </div>
              )}

              {/* Fallback — no direct channels */}
              {!selected.whatsapp && !selected.phone && (
                <p className="text-sm text-textSecondary text-center py-2">
                  Contacta a través del teléfono central: <a href="tel:+56652638550" className="text-primary-brand font-semibold hover:underline">+56 652 638 550</a>
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
