import { siteConfig } from "@/lib/config";
import { MessageCircle } from "lucide-react";

export function WhatsApp() {
  if (!siteConfig.contact.whatsapp) return null;

  const { number, message } = siteConfig.contact.whatsapp;
  const whatsappUrl = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 mb-[env(safe-area-inset-bottom)]">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 relative group animate-in fade-in slide-in-from-bottom-8 zoom-in-90 fill-mode-both delay-500"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        
        {/* Ping animation effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping" />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-textPrimary text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap hidden md:block shadow-md">
          {siteConfig.contact.whatsapp.label}
        </span>
      </a>
    </div>
  );
}
