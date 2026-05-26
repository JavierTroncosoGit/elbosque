"use client";

import { siteConfig } from "@/lib/config";
import { getImageOrPlaceholder } from "@/lib/placeholders";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { 
  Activity, HeartPulse, Eye, Sparkles, Users, Smile, 
  TestTube, Footprints, Brain, Sun, MessageCircle, Baby, SmilePlus, Leaf,
  Phone
} from "lucide-react";

const iconMap: Record<string, any> = {
  "heart-pulse": HeartPulse,
  "activity": Activity,
  "eye": Eye,
  "test-tube": TestTube,
  "sparkles": Sparkles,
  "users": Users,
  "footprints": Footprints,
  "brain": Brain,
  "sun": Sun,
  "smile": Smile,
  "message-circle": MessageCircle,
  "baby": Baby,
  "smile-plus": SmilePlus,
  "leaf": Leaf,
};

export function Services() {
  const servicesConfig = siteConfig.sections.find((s) => s.id === "servicios");
  if (!servicesConfig || servicesConfig.type !== "services-detail") return null;

  return (
    <section id={servicesConfig.id} className="py-24 bg-bgSecondary overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          {servicesConfig.sectionLabel && (
            <span className="text-primary-brand font-bold tracking-wider uppercase text-sm mb-2 block">
              {servicesConfig.sectionLabel}
            </span>
          )}
          <h2 className="text-[length:var(--font-size-display)] font-heading font-extrabold text-textPrimary">
            {servicesConfig.headline}
          </h2>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {servicesConfig.items?.map((item: any, index: number) => {
                const IconComponent = iconMap[item.icon] || Activity;
                const slug = item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                const image = getImageOrPlaceholder("services", slug);

                return (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <Dialog>
                      <DialogTrigger render={<button type="button" className="h-full w-full text-left" />}>
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.05 }}
                          className="p-2 h-full cursor-pointer"
                        >
                          <Card className="overflow-hidden border-none shadow-sm hover:shadow-[0_0_20px_rgba(14,165,233,0.3)] transition-all duration-300 h-full group bg-bgPrimary relative rounded-2xl flex flex-col">
                            <div className="relative h-40 w-full overflow-hidden">
                              <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-bgPrimary via-transparent to-transparent opacity-90" />
                              <div className="absolute bottom-4 right-4 bg-primary-brand text-white p-2.5 rounded-xl shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                 <IconComponent className="h-5 w-5" />
                              </div>
                            </div>
                            <CardContent className="p-5 flex-1 flex flex-col">
                              <h3 className="font-heading font-bold text-lg text-textPrimary mb-2 group-hover:text-primary-brand transition-colors">
                                {item.title}
                              </h3>
                              <p className="text-textSecondary text-sm leading-relaxed line-clamp-3">
                                {item.body}
                              </p>
                              <div className="mt-auto pt-4 text-sm font-semibold text-primary-brand group-hover:underline">
                                Ver detalles &rarr;
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden bg-bgPrimary rounded-2xl border-none">
                        <div className="relative h-48 w-full">
                          <Image src={image.src} alt={image.alt} fill className="object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-t from-bgPrimary to-transparent" />
                          <div className="absolute bottom-4 left-6 bg-white p-3 rounded-xl shadow-md">
                            <IconComponent className="h-8 w-8 text-primary-brand" />
                          </div>
                        </div>
                        <div className="p-6">
                          <DialogHeader>
                            <DialogTitle className="text-2xl font-heading font-extrabold text-textPrimary mb-2">
                              {item.title}
                            </DialogTitle>
                            <DialogDescription className="text-base text-textSecondary">
                              {item.body}
                            </DialogDescription>
                          </DialogHeader>
                          
                          <div className="mt-6 space-y-4">
                            <div className="bg-bgSecondary p-4 rounded-xl">
                              <h4 className="font-semibold text-textPrimary mb-2">Agendar en esta especialidad</h4>
                              <p className="text-sm text-textSecondary mb-4">
                                Llama directamente a la secretaría o envía un WhatsApp para coordinar tu hora.
                              </p>
                              <div className="flex gap-3">
                                <a href={`https://wa.me/${siteConfig.contact.whatsapp.number}`} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] text-white rounded-lg py-2.5 text-sm font-semibold hover:bg-[#128C7E] transition-colors">
                                  <MessageCircle className="w-4 h-4" /> WhatsApp
                                </a>
                                <a href={`tel:${siteConfig.contact.whatsapp.number}`} className="flex-1 inline-flex items-center justify-center gap-2 bg-primary-brand text-white rounded-lg py-2.5 text-sm font-semibold hover:bg-primary-dark transition-colors">
                                  <Phone className="w-4 h-4" /> Llamar
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="absolute -left-12 top-1/2 bg-white border-none shadow-md hover:bg-primary-brand hover:text-white transition-colors" />
              <CarouselNext className="absolute -right-12 top-1/2 bg-white border-none shadow-md hover:bg-primary-brand hover:text-white transition-colors" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
