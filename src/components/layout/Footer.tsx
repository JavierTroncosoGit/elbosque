import { siteConfig } from "@/lib/config";
import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const footerConfig = siteConfig.sections.find((s) => s.id === "footer");
  if (!footerConfig || footerConfig.type !== "footer") return null;

  return (
    <footer id={footerConfig.id} className="bg-bgPrimary border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src={siteConfig.brand.logo.src}
                alt={siteConfig.brand.logo.alt}
                width={150}
                height={45}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-textSecondary text-sm mb-6">
              {footerConfig.tagline}
            </p>
            <div className="flex gap-4">
              {footerConfig.social?.instagram && (
                <a href={footerConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="h-10 w-10 flex items-center justify-center rounded-full bg-bgSecondary text-primary-brand hover:bg-primary-brand hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
              )}
              {footerConfig.social?.facebook && (
                <a href={footerConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="h-10 w-10 flex items-center justify-center rounded-full bg-bgSecondary text-primary-brand hover:bg-primary-brand hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
              )}
            </div>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h4 className="font-heading font-bold text-textPrimary mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li>
                <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-2 text-sm text-textSecondary hover:text-primary-brand transition-colors">
                  <Mail className="h-4 w-4" />
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${siteConfig.contact.whatsapp.number}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-textSecondary hover:text-primary-brand transition-colors">
                  <Phone className="h-4 w-4" />
                  +{siteConfig.contact.whatsapp.number}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-textSecondary">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Calle Ignacio Serrano 458, Castro – Chiloé</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="font-heading font-bold text-textPrimary mb-4">Enlaces Útiles</h4>
            <ul className="space-y-2">
              <li><Link href="#servicios" className="text-sm text-textSecondary hover:text-primary-brand transition-colors">Especialidades</Link></li>
              <li><Link href="#equipo" className="text-sm text-textSecondary hover:text-primary-brand transition-colors">Equipo Médico</Link></li>
              <li><Link href="#laboratorio" className="text-sm text-textSecondary hover:text-primary-brand transition-colors">Laboratorio Clínico</Link></li>
              <li><Link href="#convenios" className="text-sm text-textSecondary hover:text-primary-brand transition-colors">Convenios</Link></li>
            </ul>
          </div>

          {/* Horarios */}
          <div className="col-span-1">
            <h4 className="font-heading font-bold text-textPrimary mb-4">Horarios</h4>
            <ul className="space-y-2 text-sm text-textSecondary">
              <li className="flex justify-between">
                <span>Lunes a Viernes</span>
                <span>08:00 - 20:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sábado</span>
                <span>09:00 - 14:00</span>
              </li>
              <li className="flex justify-between text-primary-dark font-medium mt-2">
                <span>Laboratorio</span>
                <span>Desde las 07:30</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-textSecondary">
            &copy; {new Date().getFullYear()} {siteConfig.brand.name}. Todos los derechos reservados.
          </p>
          <p className="text-xs text-textSecondary">
            Hecho por <a href="https://www.darw.cl/" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-primary-brand transition-colors">Darw</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
