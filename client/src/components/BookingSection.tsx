/* ============================================================
   BOOKING SECTION — Ottica IN Albissola Marina
   Design: Form pulito su sfondo bianco, bottone nero → oro hover
   ============================================================ */

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

const services = [
  'Controllo della vista gratuito',
  'Occhiali progressivi',
  'Lenti fotocromatiche',
  'Lenti a contatto',
  'Occhiali da sole polarizzati',
  'Manutenzione e riparazione',
  'Altro',
];

export default function BookingSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    nome: '',
    telefono: '',
    servizio: '',
    messaggio: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
  };

  return (
    <section id="prenota" className="py-24 md:py-32 bg-[#F8F8F6]">
      <div className="container">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-start">

          {/* Left: Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="gold-line" />
              <span className="section-label">Prenota un Appuntamento</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="display-heading text-4xl md:text-5xl lg:text-[3.25rem] mb-6"
            >
              Siamo qui
              <br />
              <em className="not-italic" style={{ color: 'var(--gold)' }}>per te</em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#6B6B6B] text-base leading-relaxed mb-10"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Compila il modulo per prenotare il tuo appuntamento. Ti contatteremo entro 24 ore per confermare data e orario.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-px h-12 bg-[#C9A84C]/30 mt-1" />
                <div>
                  <p className="text-xs tracking-[0.15em] uppercase text-[#6B6B6B] mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    Orari
                  </p>
                  <p className="text-sm text-[#0A0A0A]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    Martedì – Sabato<br />
                    9:00–12:30 / 15:00–19:00
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-px h-12 bg-[#C9A84C]/30 mt-1" />
                <div>
                  <p className="text-xs tracking-[0.15em] uppercase text-[#6B6B6B] mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    Telefono
                  </p>
                  <a href="tel:01922124446" className="text-sm text-[#0A0A0A] hover:text-[#C9A84C] transition-colors" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    019 2212446
                  </a>
                  <br />
                  <a href="https://wa.me/39333891XXXX" className="text-sm text-[#6B6B6B] hover:text-[#C9A84C] transition-colors" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    WhatsApp: +39 333 891...
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-px h-12 bg-[#C9A84C]/30 mt-1" />
                <div>
                  <p className="text-xs tracking-[0.15em] uppercase text-[#6B6B6B] mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    Indirizzo
                  </p>
                  <p className="text-sm text-[#0A0A0A]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    Piazza Sant&apos;Antonio<br />
                    Albissola Marina (SV)
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white border border-[#EAEAE8] p-8 md:p-10"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div style={{ color: 'var(--gold)' }} className="mb-4">
                  <CheckCircle size={48} strokeWidth={1} />
                </div>
                <h3
                  className="text-2xl font-bold text-[#0A0A0A] mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Richiesta inviata!
                </h3>
                <p
                  className="text-[#6B6B6B] text-sm leading-relaxed max-w-xs"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Grazie per averci contattato. Ti risponderemo entro 24 ore per confermare il tuo appuntamento.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <label
                      className="block text-xs tracking-[0.12em] uppercase text-[#6B6B6B] mb-2"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      Nome *
                    </label>
                    <input
                      type="text"
                      name="nome"
                      value={form.nome}
                      onChange={handleChange}
                      required
                      placeholder="Il tuo nome"
                      className="w-full px-4 py-3 border border-[#EAEAE8] bg-[#FAFAF8] text-[#0A0A0A] text-sm placeholder-[#BBBBB8] focus:outline-none focus:border-[#C9A84C] transition-colors duration-200"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.38 }}
                  >
                    <label
                      className="block text-xs tracking-[0.12em] uppercase text-[#6B6B6B] mb-2"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      Telefono *
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      value={form.telefono}
                      onChange={handleChange}
                      required
                      placeholder="Il tuo numero"
                      className="w-full px-4 py-3 border border-[#EAEAE8] bg-[#FAFAF8] text-[#0A0A0A] text-sm placeholder-[#BBBBB8] focus:outline-none focus:border-[#C9A84C] transition-colors duration-200"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.46 }}
                >
                  <label
                    className="block text-xs tracking-[0.12em] uppercase text-[#6B6B6B] mb-2"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Servizio richiesto *
                  </label>
                  <select
                    name="servizio"
                    value={form.servizio}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#EAEAE8] bg-[#FAFAF8] text-[#0A0A0A] text-sm focus:outline-none focus:border-[#C9A84C] transition-colors duration-200 appearance-none"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    <option value="" disabled>Seleziona un servizio</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.54 }}
                >
                  <label
                    className="block text-xs tracking-[0.12em] uppercase text-[#6B6B6B] mb-2"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Messaggio
                  </label>
                  <textarea
                    name="messaggio"
                    value={form.messaggio}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Eventuali note o richieste particolari..."
                    className="w-full px-4 py-3 border border-[#EAEAE8] bg-[#FAFAF8] text-[#0A0A0A] text-sm placeholder-[#BBBBB8] focus:outline-none focus:border-[#C9A84C] transition-colors duration-200 resize-none"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  />
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.62 }}
                  type="submit"
                  className="group w-full flex items-center justify-center gap-3 px-8 py-4 bg-[#0A0A0A] text-white text-sm tracking-[0.1em] uppercase font-medium hover:bg-[#C9A84C] transition-all duration-300"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Invia richiesta
                  <Send size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                </motion.button>

                <p
                  className="text-xs text-[#BBBBB8] text-center"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  I tuoi dati sono al sicuro e non verranno condivisi con terze parti.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
