"use client";

import { siteConfig } from "@/lib/config";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqConfig = siteConfig.sections.find((s) => s.id === "faq");
  if (!faqConfig || faqConfig.type !== "faq") return null;

  return (
    <section id={faqConfig.id} className="py-24 bg-bgPrimary">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {faqConfig.sectionLabel && (
            <span className="text-primary-brand font-bold tracking-wider uppercase text-sm mb-2 block">
              {faqConfig.sectionLabel}
            </span>
          )}
          <h2 className="text-[length:var(--font-size-display)] font-heading font-extrabold text-textPrimary">
            {faqConfig.headline}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion className="w-full space-y-4">
            {faqConfig.items?.map((item: any, i: number) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-bgSecondary border border-border/50 rounded-xl px-6 data-[state=open]:shadow-md transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-semibold text-textPrimary hover:text-primary-brand text-lg py-4 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-textSecondary text-base leading-relaxed pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {faqConfig.schema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqConfig.items?.map((item: any) => ({
                  "@type": "Question",
                  name: item.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: item.answer,
                  },
                })),
              }),
            }}
          />
        )}
      </div>
    </section>
  );
}
