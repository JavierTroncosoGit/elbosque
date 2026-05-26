import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { ComplementaryMedicine } from "@/components/sections/ComplementaryMedicine";
import { OpticaAustral } from "@/components/sections/OpticaAustral";
import { HighlightBanner } from "@/components/sections/HighlightBanner";
import { TeamDirectory } from "@/components/sections/TeamDirectory";
import { Convenios } from "@/components/sections/Convenios";
import { FAQ } from "@/components/sections/FAQ";
import { ContactMulti } from "@/components/sections/ContactMulti";
import { MapEmbed } from "@/components/sections/MapEmbed";
import { Footer } from "@/components/layout/Footer";
import { WhatsApp } from "@/components/layout/WhatsApp";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col w-full">
        <Hero />
        <Services />
        <ComplementaryMedicine />
        <HighlightBanner />
        <TeamDirectory />
        <OpticaAustral />
        <Convenios />
        <FAQ />
        <ContactMulti />
        <MapEmbed />
      </main>
      <Footer />
      <WhatsApp />
    </>
  );
}
