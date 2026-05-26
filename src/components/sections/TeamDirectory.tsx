"use client";

import { siteConfig } from "@/lib/config";
import { getImageOrPlaceholder } from "@/lib/placeholders";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { UserCheck, MessageCircle } from "lucide-react";

export function TeamDirectory() {
  const teamConfig = siteConfig.sections.find((s) => s.id === "equipo");
  const [activeTab, setActiveTab] = useState("Todos");

  if (!teamConfig || teamConfig.type !== "team-directory") return null;

  // Obtener pisos únicos para las pestañas
  const pisos = ["Todos", ...Array.from(new Set(teamConfig.items?.map((item: any) => item.piso)))];

  const filteredTeam = teamConfig.items?.filter(
    (member: any) => activeTab === "Todos" || member.piso === activeTab
  );

  return (
    <section id={teamConfig.id} className="py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          {teamConfig.sectionLabel && (
            <span className="text-primary-brand font-bold tracking-wider uppercase text-sm mb-2 block">
              {teamConfig.sectionLabel}
            </span>
          )}
          <h2 className="text-[length:var(--font-size-display)] font-heading font-extrabold text-textPrimary">
            {teamConfig.headline}
          </h2>
        </motion.div>

        {/* Filtros */}
        <div className="flex justify-center mb-12">
          <Tabs defaultValue="Todos" value={activeTab} onValueChange={setActiveTab} className="w-full max-w-2xl overflow-x-auto pb-2 flex justify-center">
            <TabsList className="bg-bgSecondary/80 p-1">
              {pisos.map((piso: any) => (
                <TabsTrigger 
                  key={piso} 
                  value={piso}
                  className="data-[state=active]:bg-white data-[state=active]:text-primary-brand data-[state=active]:shadow-sm rounded-md px-4 py-2"
                >
                  {piso}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Forzar re-render del carrusel cuando cambia el filtro */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Carousel
                opts={{
                  align: "start",
                  loop: false,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {filteredTeam?.map((member: any, index: number) => {
                    const slug = member.name
                      .toLowerCase()
                      .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Quitar tildes
                      .replace(/[^a-z0-9]+/g, '-');
                    const image = getImageOrPlaceholder("team", slug);

                    return (
                      <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                        <div className="p-2 h-full">
                          <Card className="overflow-hidden border-border/50 bg-bgPrimary shadow-sm hover:shadow-[0_0_15px_rgba(14,165,233,0.25)] transition-all duration-300 h-full group rounded-2xl flex flex-col">
                            <div className="relative aspect-square w-full overflow-hidden bg-bgSecondary">
                              <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                              />
                              {member.piso && (
                                <div className="absolute top-3 right-3 bg-bgPrimary/95 backdrop-blur-sm text-textPrimary text-xs font-bold px-2 py-1 rounded-md shadow-sm border border-border/50">
                                  {member.piso}
                                </div>
                              )}
                            </div>
                            <CardContent className="p-5 flex-1 flex flex-col items-center text-center">
                              <h3 className="font-heading font-bold text-lg text-textPrimary mb-1 group-hover:text-primary-brand transition-colors">
                                {member.name}
                              </h3>
                              <div className="flex items-center gap-1 text-primary-dark font-medium text-sm mt-auto pt-2 mb-4">
                                <UserCheck className="w-4 h-4" />
                                <span>{member.role}</span>
                              </div>
                              
                              {member.whatsapp && (
                                <a 
                                  href={`https://wa.me/${member.whatsapp}?text=${encodeURIComponent(`Hola, quisiera agendar una hora con ${member.name} (${member.role}) en el Centro Médico El Bosque.`)}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="mt-auto w-full inline-flex items-center justify-center gap-2 bg-[#25D366]/10 hover:bg-[#25D366] text-[#128C7E] hover:text-white transition-colors rounded-lg py-2.5 text-sm font-semibold"
                                >
                                  <MessageCircle className="w-4 h-4" />
                                  Contactar
                                </a>
                              )}
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
                <div className="hidden md:block">
                  <CarouselPrevious className="absolute -left-12 top-1/3 bg-white border-none shadow-md hover:bg-primary-brand hover:text-white transition-colors" />
                  <CarouselNext className="absolute -right-12 top-1/3 bg-white border-none shadow-md hover:bg-primary-brand hover:text-white transition-colors" />
                </div>
              </Carousel>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
