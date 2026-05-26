"use client";

import { useState, useEffect } from "react";

interface StatusInfo {
  isOpen: boolean;
  label: string;
  nextOpen: string;
}

function getClinicStatus(): StatusInfo {
  // Hora actual en Chile/Santiago
  const now = new Date(
    new Date().toLocaleString("en-US", { timeZone: "America/Santiago" })
  );
  const day = now.getDay(); // 0=Dom, 1=Lun...6=Sáb
  const hour = now.getHours();
  const minute = now.getMinutes();
  const currentMinutes = hour * 60 + minute;

  // Lunes a Viernes: 08:00 - 20:00
  if (day >= 1 && day <= 5) {
    if (currentMinutes >= 480 && currentMinutes < 1200) {
      return { isOpen: true, label: "Atendiendo ahora", nextOpen: "" };
    }
    if (currentMinutes < 480) {
      return { isOpen: false, label: "Cerrado", nextOpen: "Abrimos hoy a las 08:00" };
    }
    // Después de las 20:00
    if (day === 5) {
      return { isOpen: false, label: "Cerrado", nextOpen: "Abrimos el sábado a las 09:00" };
    }
    return { isOpen: false, label: "Cerrado", nextOpen: "Abrimos mañana a las 08:00" };
  }

  // Sábado: 09:00 - 14:00
  if (day === 6) {
    if (currentMinutes >= 540 && currentMinutes < 840) {
      return { isOpen: true, label: "Atendiendo ahora", nextOpen: "" };
    }
    if (currentMinutes < 540) {
      return { isOpen: false, label: "Cerrado", nextOpen: "Abrimos hoy a las 09:00" };
    }
    return { isOpen: false, label: "Cerrado", nextOpen: "Abrimos el lunes a las 08:00" };
  }

  // Domingo
  return { isOpen: false, label: "Cerrado", nextOpen: "Abrimos el lunes a las 08:00" };
}

export function StatusBadge() {
  const [status, setStatus] = useState<StatusInfo | null>(null);

  useEffect(() => {
    setStatus(getClinicStatus());

    // Actualizar cada minuto
    const interval = setInterval(() => {
      setStatus(getClinicStatus());
    }, 60_000);

    return () => clearInterval(interval);
  }, []);

  // SSR: no renderizar nada hasta que el cliente calcule la hora
  if (!status) return null;

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium border backdrop-blur-sm ${
        status.isOpen
          ? "bg-emerald-500/15 text-emerald-300 border-emerald-500/30"
          : "bg-red-500/15 text-red-300 border-red-500/30"
      }`}
    >
      <span className="relative flex h-2.5 w-2.5">
        <span
          className={`absolute inline-flex h-full w-full rounded-full opacity-75 ${
            status.isOpen ? "bg-emerald-400 animate-ping" : "bg-red-400"
          }`}
        />
        <span
          className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
            status.isOpen ? "bg-emerald-500" : "bg-red-500"
          }`}
        />
      </span>
      <span>{status.label}</span>
      {status.nextOpen && (
        <span className="text-xs opacity-70">· {status.nextOpen}</span>
      )}
    </div>
  );
}
