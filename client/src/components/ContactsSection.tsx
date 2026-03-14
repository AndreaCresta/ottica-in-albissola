/* ============================================================
   CONTACTS SECTION — Ottica IN Albissola Marina
   Design: Due colonne, info sinistra, mappa destra (grayscale)
   ============================================================ */

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Clock, Instagram, MessageCircle } from 'lucide-react';

const hours = [
  { day: 'Lunedì', time: 'Chiuso' },
  { day: 'Martedì', time: '9:00 – 12:30 / 15:00 – 19:00' },
  { day: 'Mercoledì', time: '9:00 – 12:30 / 15:00 – 19:00' },
  { day: 'Giovedì', time: '9:00 – 12:30 / 15:00 – 19:00' },
  { day: 'Venerdì', time: '9:00 – 12:30 / 15:00 – 19:00' },
  { day: 'Sabato', time: '9:00 – 12:30 / 15:00 – 19:00' },
  { day: 'Domenica', time: 'Chiuso' },
];

export default function ContactsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });



  return (
    <section id="contatti" className="py-24 md:py-32 bg-white">
      <div className="container">
        <div ref={ref} className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="gold-line" />
            <span className="section-label">Dove Siamo</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="display-heading text-4xl md:text-5xl lg:text-6xl"
          >
            Vieni a{' '}
            <em className="not-italic" style={{ color: 'var(--gold)' }}>trovarci</em>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 items-start">

          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Address */}
            <div className="flex gap-4">
              <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center border border-[#EAEAE8]" style={{ color: 'var(--gold)' }}>
                <MapPin size={16} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xs tracking-[0.15em] uppercase text-[#6B6B6B] mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Indirizzo
                </p>
                <p className="text-sm text-[#0A0A0A] leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Piazza Sant&apos;Antonio<br />
                  Albissola Marina (SV), Italia
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center border border-[#EAEAE8]" style={{ color: 'var(--gold)' }}>
                <Phone size={16} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xs tracking-[0.15em] uppercase text-[#6B6B6B] mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Telefono
                </p>
                <a href="tel:01922124446" className="text-sm text-[#0A0A0A] hover:text-[#C9A84C] transition-colors" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  019 2212446
                </a>
                <br />
                <a
                  href="https://wa.me/39333891XXXX"
                  className="text-sm text-[#6B6B6B] hover:text-[#C9A84C] transition-colors flex items-center gap-1 mt-0.5"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  <MessageCircle size={12} />
                  WhatsApp: +39 333 891...
                </a>
              </div>
            </div>

            {/* Instagram */}
            <div className="flex gap-4">
              <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center border border-[#EAEAE8]" style={{ color: 'var(--gold)' }}>
                <Instagram size={16} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xs tracking-[0.15em] uppercase text-[#6B6B6B] mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Instagram
                </p>
                <a
                  href="https://instagram.com/otticain_albissola"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#0A0A0A] hover:text-[#C9A84C] transition-colors"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  @otticain_albissola
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center border border-[#EAEAE8]" style={{ color: 'var(--gold)' }}>
                <Clock size={16} strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <p className="text-xs tracking-[0.15em] uppercase text-[#6B6B6B] mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Orari di apertura
                </p>
                <table className="w-full text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  <tbody>
                    {hours.map((h) => (
                      <tr key={h.day} className="border-b border-[#F0F0EE] last:border-b-0">
                        <td className="py-2 pr-4 font-medium text-[#0A0A0A] w-28">{h.day}</td>
                        <td className={`py-2 ${h.time === 'Chiuso' ? 'text-[#BBBBB8]' : 'text-[#6B6B6B]'}`}>
                          {h.time}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* Right: Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="h-[480px] lg:h-[560px] overflow-hidden border border-[#EAEAE8]"
          >
            <iframe
              width="100%"
              height="100%"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Piazza+Sant'Antonio,+Albissola+Marina,+Italia&t=&z=16&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              className="w-full h-full grayscale"
              title="Mappa Ottica IN Albissola Marina"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
