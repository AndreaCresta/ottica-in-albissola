/* ============================================================
   EYE CHECK SECTION — Ottica IN Albissola Marina
   Design: Sfondo bianco, titolo con accento oro, CTA WhatsApp
   ============================================================ */

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Eye, CheckCircle, MessageCircle, ArrowRight } from 'lucide-react';

const features = [
  'Esame della refrazione completo',
  'Valutazione della pressione oculare',
  'Controllo della salute della retina',
  'Consulenza personalizzata sui risultati',
  'Nessun costo, nessun impegno',
];

export default function EyeCheckSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="controllo-vista" className="py-24 md:py-32 bg-white">
      <div className="container">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="gold-line" />
              <span className="section-label">Servizio Gratuito</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="display-heading text-4xl md:text-5xl lg:text-[3.25rem] mb-6"
            >
              Controllo della Vista
              <br />
              <em className="not-italic" style={{ color: 'var(--gold)' }}>Completamente Gratuito</em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#6B6B6B] text-base md:text-lg leading-relaxed mb-10"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              La salute visiva è fondamentale. Per questo offriamo un esame della vista completo e professionale senza alcun costo. Prenota il tuo appuntamento oggi stesso.
            </motion.p>

            {/* Features list */}
            <div className="space-y-3 mb-12">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle size={16} style={{ color: 'var(--gold)', flexShrink: 0 }} strokeWidth={1.5} />
                  <span
                    className="text-sm text-[#0A0A0A]"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://wa.me/39333891XXXX?text=Salve,%20vorrei%20prenotare%20un%20controllo%20della%20vista%20gratuito"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 px-8 py-4 bg-[#0A0A0A] text-white text-sm tracking-[0.1em] uppercase font-medium hover:bg-[#C9A84C] transition-all duration-300"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <MessageCircle size={15} />
                Prenota via WhatsApp
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
              </a>
              <a
                href="tel:01922124446"
                className="flex items-center justify-center gap-2 px-8 py-4 border border-[#0A0A0A] text-[#0A0A0A] text-sm tracking-[0.1em] uppercase font-medium hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-300 bg-transparent"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Chiama ora
              </a>
            </motion.div>
          </div>

          {/* Right: Visual card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-[#F8F8F6] border border-[#EAEAE8] p-10 lg:p-14">
              {/* Icon */}
              <div
                className="w-16 h-16 flex items-center justify-center border border-[#C9A84C]/30 mb-8"
                style={{ color: 'var(--gold)' }}
              >
                <Eye size={28} strokeWidth={1} />
              </div>

              {/* Big text */}
              <p
                className="text-6xl md:text-7xl font-bold text-[#0A0A0A] mb-3"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                0€
              </p>
              <p
                className="text-sm text-[#6B6B6B] mb-8 leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Il controllo della vista è completamente gratuito. Nessun costo nascosto, nessun obbligo di acquisto.
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-[#E8E8E6] mb-8" />

              {/* Info */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-[#0A0A0A]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Durata: circa 30 minuti
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-[#0A0A0A]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Disponibile: Mar–Sab, 9:00–12:30 / 15:00–19:00
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-[#0A0A0A]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Strumentazione professionale avanzata
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative corner */}
            <div
              className="absolute -bottom-3 -right-3 w-24 h-24 border-r-2 border-b-2 pointer-events-none"
              style={{ borderColor: 'var(--gold)', opacity: 0.3 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
