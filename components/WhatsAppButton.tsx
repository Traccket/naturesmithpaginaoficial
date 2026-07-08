"use client";

import { useEffect, useState } from "react";
import { waLink } from "@/lib/site";

/** Botón flotante de WhatsApp: discreto, aparece tras el primer scroll. */
export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={waLink("Hola, quiero hablar con un asesor de Nature Smith.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hablar con un asesor por WhatsApp"
      className={`group fixed right-5 bottom-5 z-40 flex items-center gap-2.5 rounded-full border border-sage/40 bg-graphite/90 py-3 pr-5 pl-3.5 shadow-lg shadow-black/40 backdrop-blur transition-all duration-500 hover:border-sage ${
        visible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
      }`}
    >
      <span className="relative flex h-2 w-2" aria-hidden="true">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-sage" />
      </span>
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-sage" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.4-3c-.3-.4 0-.6.2-.8l.5-.6c.1-.2.1-.4 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4 5.3 5.3 0 0 0 3.2.6 2.7 2.7 0 0 0 1.8-1.3c.2-.4.2-.9.2-1 0-.1-.2-.2-.5-.3Z" />
      </svg>
      <span className="text-[0.8rem] font-medium text-cream/90">
        Hablar con un asesor
      </span>
    </a>
  );
}
