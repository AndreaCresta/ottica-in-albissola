/* ============================================================
   WHY US SECTION — Ottica IN Albissola Marina
   Design: Layout asimmetrico, testo sinistra, immagine destra
   Punti animati in stagger con Framer Motion
   ============================================================ */

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Microscope, Heart, Clock } from 'lucide-react';

const EYE_EXAM_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663437013566/8mEtMkd3bWbnAXwukzEqP7/eye-exam-etnrDEJo8GGCePxQ7osi4J.webp';

const points = [
  {
    icon: GraduationCap,
    title: 'Ottico Laureato',
    description: 'Formazione universitaria in ottica e optometria. Competenza clinica certificata per la tua salute visiva.',
  },
  {
    icon: Microscope,
    title: 'Strumentazione Avanzata',
    description: 'Tecnologia professionale di ultima generazione per esami visivi precisi e diagnosi accurate.',
  },
  {
    icon: Heart,
    title: 'Cura Personalizzata',
    description: 'Ogni cliente è unico. Ascoltiamo le tue esigenze e troviamo la soluzione ottica più adatta a te.',
  },
  {
    icon: Clock,
    title: 'Oltre 20 Anni di Esperienza',
    description: 'Una storia di fiducia costruita nel tempo con centinaia di famiglie di Albissola e dintorni.',
  },
];

export default function WhyUsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section id="perche" className="py-24 md:py-32 bg-[#F8F8F6]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Left: Text content */}
          <div ref={sectionRef}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="gold-line" />
              <span className="section-label">Perché Sceglierci</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="display-heading text-4xl md:text-5xl lg:text-[3.25rem] mb-6"
            >
              Professionalità
              <br />
              <em className="not-italic" style={{ color: 'var(--gold)' }}>e fiducia</em>
              <br />
              dal 2004
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#6B6B6B] text-base md:text-lg leading-relaxed mb-12 max-w-md"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              In Ottica IN trovi un professionista che unisce competenza medica, tecnologia avanzata e attenzione genuina per il tuo benessere visivo.
            </motion.p>

            {/* Points */}
            <div className="space-y-0">
              {points.map((point, i) => {
                const Icon = point.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className="flex gap-5 py-6 border-b border-[#E8E8E6] last:border-b-0 group"
                  >
                    <div
                      className="flex-shrink-0 w-9 h-9 flex items-center justify-center border border-[#E8E8E6] group-hover:border-[#C9A84C] transition-colors duration-300 mt-0.5"
                      style={{ color: 'var(--gold)' }}
                    >
                      <Icon size={16} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3
                        className="text-lg font-bold text-[#0A0A0A] mb-1"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        {point.title}
                      </h3>
                      <p
                        className="text-sm text-[#6B6B6B] leading-relaxed"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {point.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Background decoration */}
            <div
              className="absolute -bottom-6 -left-6 w-full h-full bg-[#EAEAE8] pointer-events-none"
              style={{ zIndex: 0 }}
            />
            <div className="relative overflow-hidden" style={{ zIndex: 1 }}>
              <img
                src={EYE_EXAM_IMG}
                alt="Strumentazione professionale per controllo della vista — Ottica IN Albissola Marina"
                className="w-full h-[500px] lg:h-[580px] object-cover"
                style={{ objectPosition: 'center 30%' }}
              />
              {/* Floating badge */}
              <div className="absolute top-8 right-8 bg-[#0A0A0A] text-white px-6 py-5 text-center">
                <p
                  className="text-3xl font-bold mb-1"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: 'var(--gold)' }}
                >
                  100%
                </p>
                <p
                  className="text-xs tracking-[0.15em] uppercase"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Professionale
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
