/* ============================================================
   SERVICES SECTION — Ottica IN Albissola Marina
   Design: Griglia card minimal su sfondo bianco, bordi sottili
   Hover: ombra morbida + lift + accento oro
   ============================================================ */

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Glasses,
  Sun,
  Eye,
  Sparkles,
  Wrench,
  CheckCircle,
} from 'lucide-react';

const services = [
  {
    icon: Glasses,
    title: 'Occhiali Progressivi',
    description: 'Lenti progressive di alta qualità per una visione nitida a tutte le distanze, personalizzate sul tuo profilo visivo.',
  },
  {
    icon: Sun,
    title: 'Lenti Fotocromatiche',
    description: "Si adattano automaticamente alla luce: chiare in ambienti interni, scure all'esterno. Comfort visivo tutto il giorno.",
  },
  {
    icon: Eye,
    title: 'Lenti a Contatto',
    description: 'Ampia selezione di lenti a contatto giornaliere, mensili e colorate. Applicazione e follow-up professionale.',
  },
  {
    icon: Sparkles,
    title: 'Occhiali da Sole Polarizzati',
    description: 'Protezione UV totale e riduzione dei riflessi. Ideali per la vita in riviera, lo sport e la guida.',
  },
  {
    icon: Wrench,
    title: 'Manutenzione e Pulizia',
    description: 'Riparazione montature, sostituzione cerniere e pulizia professionale degli occhiali. Rapido e preciso.',
  },
  {
    icon: CheckCircle,
    title: 'Controllo della Vista',
    description: 'Esame visivo completo e gratuito con strumentazione avanzata. Nessun impegno, solo cura per la tua salute visiva.',
    highlight: true,
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      className={`group relative p-8 border transition-all duration-300 hover:-translate-y-1 ${
        service.highlight
          ? 'border-[#C9A84C]/40 bg-[#FDFCF8]'
          : 'border-[#EAEAE8] bg-white hover:border-[#C9A84C]/30'
      } hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]`}
    >
      {service.highlight && (
        <div className="absolute top-0 left-0 right-0 h-px bg-[#C9A84C]" />
      )}

      <div
        className={`w-10 h-10 flex items-center justify-center mb-6 transition-colors duration-300 ${
          service.highlight
            ? 'text-[#C9A84C]'
            : 'text-[#0A0A0A] group-hover:text-[#C9A84C]'
        }`}
      >
        <Icon size={22} strokeWidth={1.5} />
      </div>

      <h3
        className="text-xl font-bold text-[#0A0A0A] mb-3 leading-tight"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        {service.title}
        {service.highlight && (
          <span
            className="ml-2 text-xs font-normal tracking-widest uppercase"
            style={{ color: 'var(--gold)', fontFamily: "'DM Sans', sans-serif" }}
          >
            {' '}Gratuito
          </span>
        )}
      </h3>

      <p
        className="text-[#6B6B6B] text-sm leading-relaxed"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {service.description}
      </p>

      <div
        className={`absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500 ${
          service.highlight ? 'bg-[#C9A84C]' : 'bg-[#C9A84C]/60'
        }`}
      />
    </motion.div>
  );
}

export default function ServicesSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' });

  return (
    <section id="servizi" className="py-24 md:py-32 bg-white">
      <div className="container">
        {/* Section header */}
        <div ref={titleRef} className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="gold-line" />
            <span className="section-label">I Nostri Servizi</span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 items-end">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="display-heading text-4xl md:text-5xl lg:text-6xl"
            >
              Tutto ciò di cui
              <br />
              <em className="not-italic" style={{ color: 'var(--gold)' }}>hai bisogno</em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#6B6B6B] text-base md:text-lg leading-relaxed max-w-md"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Dall'esame visivo alla montatura perfetta, offriamo una gamma completa di servizi ottici con la cura e la competenza di un professionista abilitato.
            </motion.p>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#EAEAE8]">
          {services.map((service, i) => (
            <div key={i} className="bg-white">
              <ServiceCard service={service} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
