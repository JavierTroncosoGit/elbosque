"use client";

import { siteConfig } from "@/lib/config";
import { motion } from "framer-motion";
import { ShieldCheck, Banknote, CreditCard, Wallet } from "lucide-react";

export function Convenios() {
  const convConfig = siteConfig.sections.find((s) => s.id === "convenios");
  if (!convConfig || convConfig.type !== "convenios") return null;

  return (
    <section id={convConfig.id} className="py-24 bg-bgSecondary overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {convConfig.sectionLabel && (
            <span className="text-primary-brand font-bold tracking-wider uppercase text-sm mb-2 block">
              {convConfig.sectionLabel}
            </span>
          )}
          <h2 className="text-[length:var(--font-size-display)] font-heading font-extrabold text-textPrimary">
            {convConfig.headline}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Convenios */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
            }}
          >
            <h3 className="text-xl font-bold text-textPrimary mb-6 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-primary-brand" />
              Instituciones y Aseguradoras
            </h3>
            <div className="flex flex-col gap-4">
              {["Fonasa", "Isapres", "Convenios Institucionales"].map((item, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="bg-bgPrimary border border-border/50 rounded-xl px-6 py-4 shadow-sm font-semibold text-textPrimary flex items-center justify-between"
                >
                  {item}
                  <div className="w-2 h-2 rounded-full bg-accent-brand"></div>
                </motion.div>
              ))}
            </div>
            <p className="mt-4 text-sm text-textSecondary italic">
              * Consulte en secretaría por convenios institucionales específicos.
            </p>
          </motion.div>

          {/* Medios de Pago */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
            }}
          >
            <h3 className="text-xl font-bold text-textPrimary mb-6 flex items-center gap-2">
              <Wallet className="w-6 h-6 text-primary-brand" />
              Formas de Pago
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }} className="bg-bgPrimary border border-border/50 rounded-xl px-5 py-6 shadow-sm text-center hover:border-primary-brand/30 transition-colors">
                <Banknote className="w-8 h-8 mx-auto mb-3 text-textSecondary" />
                <span className="font-semibold text-textPrimary">Efectivo</span>
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }} className="bg-bgPrimary border border-border/50 rounded-xl px-5 py-6 shadow-sm text-center hover:border-primary-brand/30 transition-colors">
                <CreditCard className="w-8 h-8 mx-auto mb-3 text-textSecondary" />
                <span className="font-semibold text-textPrimary">Débito</span>
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }} className="bg-bgPrimary border border-border/50 rounded-xl px-5 py-6 shadow-sm text-center hover:border-primary-brand/30 transition-colors sm:col-span-2">
                <CreditCard className="w-8 h-8 mx-auto mb-3 text-textSecondary" />
                <span className="font-semibold text-textPrimary">Crédito</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
