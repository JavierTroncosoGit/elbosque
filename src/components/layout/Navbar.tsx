"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navConfig = siteConfig.sections.find((s) => s.id === "navbar");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!navConfig || navConfig.type !== "navbar") return null;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-bgPrimary/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl flex items-center justify-between">
        <Link href="/" className="relative z-10 flex items-center">
          <Image
            src={siteConfig.brand.logo.src}
            alt={siteConfig.brand.logo.alt}
            width={siteConfig.brand.logo.width}
            height={siteConfig.brand.logo.height}
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {navConfig.links?.map((link: any, i: number) => (
              <Link
                key={i}
                href={link.href}
                className="text-sm font-medium text-textPrimary hover:text-primary-brand transition-colors"
              >
                {link.text}
              </Link>
            ))}
          </div>
          {navConfig.cta && (
            <Link href={navConfig.cta.href} className="inline-flex shrink-0 items-center justify-center rounded-full bg-primary-brand hover:bg-primary-dark text-white px-6 h-9 font-medium transition-colors">
              {navConfig.cta.text}
            </Link>
          )}
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="inline-flex items-center justify-center h-11 w-11 rounded-lg hover:bg-bgSecondary text-textPrimary transition-colors" aria-label="Menu">
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[400px] bg-bgPrimary border-none p-6 pt-16" showCloseButton={false}>
              <SheetTitle className="sr-only">Menú de Navegación</SheetTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="absolute right-4 top-4 h-11 w-11 bg-bgSecondary/50 rounded-full"
              >
                <X className="h-6 w-6" />
              </Button>
              
              <div className="flex flex-col gap-3 mt-8">
                {navConfig.links?.map((link: any, i: number) => (
                  <Link
                    key={i}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center min-h-[60px] p-4 bg-bgSecondary/80 rounded-2xl text-center text-lg font-semibold text-textPrimary hover:bg-primary-brand/10 hover:text-primary-brand transition-all active:scale-95"
                  >
                    {link.text}
                  </Link>
                ))}
                
                {navConfig.cta && (
                  <Link
                    href={navConfig.cta.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center min-h-[60px] p-4 bg-accent-brand text-white rounded-2xl text-center text-lg font-bold shadow-md hover:bg-accent-brand/90 transition-all active:scale-95 mt-4"
                  >
                    {navConfig.cta.text}
                  </Link>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
