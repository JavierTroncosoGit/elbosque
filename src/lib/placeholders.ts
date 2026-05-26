export const PLACEHOLDERS = {
  hero: {
    main: "/images/hero/hero-main.png",
    "hero-main": { src: "/images/hero/hero-main.png", alt: "Recepción del Centro Médico El Bosque", dimensions: "1920x1080" },
    dimensions: "1920x1080",
    alt: "Recepción del Centro Médico El Bosque"
  },
  brand: {
    logo: "/images/brand/logo-laboratorio.png",
    favicon: "/images/brand/logo-laboratorio.png",
    ogImage: "/images/brand/og-image.jpg"
  },
  team: {
    "dr-roberto-oliver-alarcon": { src: "/images/team/dr-roberto-oliver-alarcon.webp", alt: "Dr. Roberto Oliver Alarcon", dimensions: "400x400" },
    "dr-miguel-cantos": { src: "/images/team/dr-miguel-cantos.webp", alt: "Dr. Miguel Cantos", dimensions: "400x400" },
    "dr-jonathan-soto": { src: "/images/team/dr-jonathan-soto.webp", alt: "Dr. Jonathan Soto", dimensions: "400x400" },
    "dr-daniel-bucobo": { src: "/images/team/dr-daniel-bucobo.webp", alt: "Dr. Daniel Bucobo", dimensions: "400x400" },
    "juan-vargas": { src: "/images/team/juan-vargas.webp", alt: "Juan Vargas", dimensions: "400x400" },
    "dr-marcell-contreras": { src: "/images/team/dr-marcell-contreras.webp", alt: "Dr. Marcell Contreras", dimensions: "400x400" },
    "dr-victor-lopez-barra": { src: "/images/team/dr-victor-lopez-barra.webp", alt: "Dr. Víctor López Barra", dimensions: "400x400" },
    "dr-claudio-klenner": { src: "/images/team/dr-claudio-klenner.webp", alt: "Dr. Claudio Klenner", dimensions: "400x400" },
    "dolly-barria": { src: "/images/team/dolly-barria.webp", alt: "Dolly Barria", dimensions: "400x400" },
    "andrea-paredes": { src: "/images/team/andrea-paredes.webp", alt: "Andrea Paredes", dimensions: "400x400" },
    "javiera-duncker": { src: "/images/team/javiera-duncker.webp", alt: "Javiera Duncker", dimensions: "400x400" },
    "dr-hector-guarateguia": { src: "/images/team/dr-hector-guarateguia.webp", alt: "Dr. Héctor Guarateguia", dimensions: "400x400" },
    "carolina-barrientos-gomez": { src: "/images/team/carolina-barrientos-gomez.webp", alt: "Carolina Barrientos Gómez", dimensions: "400x400" },
    "equipo-kinesiologia": { src: "/images/team/equipo-kinesiologia.webp", alt: "Equipo Kinesiología", dimensions: "400x400" }
  },
  services: {
    "medicina-general": { src: "/images/services/srv-medicina-general.png", alt: "Medicina General", dimensions: "600x400" },
    "traumatologia-ortopedia": { src: "/images/services/srv-traumatologia-ortopedia.png", alt: "Traumatología y Ortopedia", dimensions: "600x400" },
    "traumatologia-y-ortopedia": { src: "/images/services/srv-traumatologia-ortopedia.png", alt: "Traumatología y Ortopedia", dimensions: "600x400" },
    "oftalmologia": { src: "/images/services/srv-oftalmologia.png", alt: "Oftalmología", dimensions: "600x400" },
    "laboratorio-clinico": { src: "/images/services/srv-laboratorio-clinico.png", alt: "Laboratorio Clínico", dimensions: "600x400" },
    "tratamientos-esteticos": { src: "/images/services/srv-tratamientos-esteticos.png", alt: "Tratamientos Estéticos", dimensions: "600x400" },
    "kinesiologia": { src: "/images/services/srv-kinesiologia.png", alt: "Kinesiología", dimensions: "600x400" },
    "podologia-clinica": { src: "/images/services/srv-podologia-clinica.png", alt: "Podología Clínica", dimensions: "600x400" },
    "neurocirugia": { src: "/images/services/srv-neurocirugia.png", alt: "Neurocirugía", dimensions: "600x400" },
    "dermatologia": { src: "/images/services/srv-dermatologia.png", alt: "Dermatología", dimensions: "600x400" },
    "pediatria": { src: "/images/services/srv-pediatria.png", alt: "Pediatría", dimensions: "600x400" },
    "psicologia": { src: "/images/services/srv-psicologia.png", alt: "Psicología", dimensions: "600x400" },
    "matroneria": { src: "/images/services/srv-matroneria.png", alt: "Matronería", dimensions: "600x400" },
    "ortodoncia": { src: "/images/services/srv-ortodoncia.png", alt: "Ortodoncia", dimensions: "600x400" },
    "medicina-complementaria": { src: "/images/services/srv-medicina-complementaria.png", alt: "Medicina Complementaria", dimensions: "600x400" },
    "medicina-complementaria-integrativa": { src: "/images/services/srv-medicina-complementaria.png", alt: "Medicina Complementaria Integrativa", dimensions: "600x400" }
  }
};

export function getImageOrPlaceholder(category: keyof typeof PLACEHOLDERS, key: string) {
  // @ts-ignore
  const imageObj = PLACEHOLDERS[category]?.[key] || PLACEHOLDERS[category];
  if (imageObj && imageObj.src) {
      return imageObj;
  }
  return {
      src: "https://placehold.co/" + (imageObj?.dimensions || "400x400") + "?text=" + encodeURIComponent(key),
      alt: "Placeholder",
      dimensions: imageObj?.dimensions || "400x400"
  };
}
