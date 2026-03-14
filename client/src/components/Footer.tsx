/* ============================================================
   FOOTER — Ottica IN Albissola Marina
   Design: Sfondo nero #0A0A0A, testo bianco, unico dark element
   ============================================================ */

import { Instagram, Phone, MapPin, Clock, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { label: 'Servizi', href: '#servizi' },
  { label: 'Prodotti', href: '#prodotti' },
  { label: 'Chi Siamo', href: '#perche' },
  { label: 'Controllo Vista', href: '#controllo-vista' },
  { label: 'Prenota', href: '#prenota' },
  { label: 'Contatti', href: '#contatti' },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0A0A] text-white">
      {/* Main footer */}
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <p
                className="text-2xl font-bold mb-1"
                style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: '-0.02em' }}
              >
                Ottica <span style={{ color: 'var(--gold)' }}>IN</span>
              </p>
              <p
                className="text-[0.65rem] tracking-[0.2em] uppercase text-[#6B6B6B]"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Albissola Marina
              </p>
            </div>
            <p
              className="text-sm text-[#888888] leading-relaxed mb-6 max-w-xs"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Occhiali per ogni necessità. Professionalità, cura e tecnologia avanzata per la tua salute visiva.
            </p>
            <a
              href="https://instagram.com/otticain_albissola"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs tracking-[0.1em] uppercase text-[#888888] hover:text-[#C9A84C] transition-colors duration-200"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <Instagram size={14} />
              @otticain_albissola
              <ArrowUpRight size={11} />
            </a>
          </div>

          {/* Navigation */}
          <div>
            <p
              className="text-[0.65rem] tracking-[0.2em] uppercase text-[#555555] mb-6"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Navigazione
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-[#888888] hover:text-white transition-colors duration-200"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <p
              className="text-[0.65rem] tracking-[0.2em] uppercase text-[#555555] mb-6"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Contatti
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-[#C9A84C] mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <span className="text-sm text-[#888888]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Piazza Sant&apos;Antonio<br />
                  Albissola Marina (SV)
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-[#C9A84C] flex-shrink-0" strokeWidth={1.5} />
                <a href="tel:01922124446" className="text-sm text-[#888888] hover:text-white transition-colors" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  019 2212446
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <p
              className="text-[0.65rem] tracking-[0.2em] uppercase text-[#555555] mb-6"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Orari
            </p>
            <div className="flex items-start gap-3 mb-4">
              <Clock size={14} className="text-[#C9A84C] mt-0.5 flex-shrink-0" strokeWidth={1.5} />
              <div>
                <p className="text-sm text-[#888888] mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Martedì – Sabato
                </p>
                <p className="text-sm text-[#888888]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  9:00–12:30 / 15:00–19:00
                </p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-[#1E1E1E]">
              <button
                onClick={() => scrollTo('#prenota')}
                className="w-full py-3 border border-[#C9A84C]/40 text-[#C9A84C] text-xs tracking-[0.15em] uppercase hover:bg-[#C9A84C] hover:text-[#0A0A0A] transition-all duration-300"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Prenota appuntamento
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1E1E1E]">
        <div className="container py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p
              className="text-xs text-[#555555]"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              © {new Date().getFullYear()} Ottica IN Albissola Marina. Tutti i diritti riservati.
            </p>
            <p
              className="text-xs text-[#555555]"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              P.IVA: IT00000000000 · Piazza Sant&apos;Antonio, Albissola Marina (SV)
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
