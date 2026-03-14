/* ============================================================
   HERO SECTION — Ottica IN Albissola Marina
   Design: Bianco con texture grain, layout asimmetrico 60/40
   Animazioni: stagger reveal con Framer Motion
   ============================================================ */

import { motion } from 'framer-motion';
import { ArrowRight, Eye } from 'lucide-react';

const HERO_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663437013566/8mEtMkd3bWbnAXwukzEqP7/hero-glasses-F4Vc6PSoHXiqpBAVP9cXpa.webp';

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden noise-texture bg-white">
      {/* Subtle geometric background pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 80% 20%, rgba(201,168,76,0.04) 0%, transparent 50%),
            radial-gradient(circle at 10% 80%, rgba(201,168,76,0.03) 0%, transparent 40%)
          `,
        }}
      />

      <div className="container relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.75fr] gap-12 lg:gap-16 items-center min-h-[calc(100vh-8rem)]">

          {/* Left: Text content */}
          <div className="flex flex-col justify-center">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="gold-line" />
              <span className="section-label">Albissola Marina · Dal 2004</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32 }}
              className="display-heading text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] mb-6"
            >
              Vedi Meglio.
              <br />
              <em className="not-italic" style={{ color: 'var(--gold)' }}>Vivi Meglio.</em>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.44 }}
              className="text-[#6B6B6B] text-lg md:text-xl leading-relaxed mb-3 max-w-lg"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Occhiali da vista, da sole e lenti a contatto per ogni necessità.
              Ottico abilitato con strumentazione professionale avanzata.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.54 }}
              className="flex items-center gap-2 mb-10"
            >
              <Eye size={15} style={{ color: 'var(--gold)' }} />
              <span
                className="text-sm font-medium"
                style={{ color: 'var(--gold)', fontFamily: "'DM Sans', sans-serif" }}
              >
                Controllo della vista gratuito — senza impegno
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.64 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => scrollTo('#prenota')}
                className="group flex items-center justify-center gap-3 px-8 py-4 bg-[#0A0A0A] text-white text-sm tracking-[0.1em] uppercase font-medium hover:bg-[#C9A84C] transition-all duration-300"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Prenota il controllo gratuito
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button
                onClick={() => scrollTo('#servizi')}
                className="flex items-center justify-center gap-2 px-8 py-4 border border-[#0A0A0A] text-[#0A0A0A] text-sm tracking-[0.1em] uppercase font-medium hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-300 bg-transparent"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Scopri i servizi
              </button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.76 }}
              className="flex items-center gap-6 mt-12 pt-8 border-t border-[#F0F0EE]"
            >
              <div>
                <p className="text-2xl font-bold text-[#0A0A0A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>20+</p>
                <p className="text-xs text-[#6B6B6B] uppercase tracking-wider">Anni di esperienza</p>
              </div>
              <div className="w-px h-8 bg-[#E8E8E6]" />
              <div>
                <p className="text-2xl font-bold text-[#0A0A0A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>500+</p>
                <p className="text-xs text-[#6B6B6B] uppercase tracking-wider">Clienti soddisfatti</p>
              </div>
              <div className="w-px h-8 bg-[#E8E8E6]" />
              <div>
                <p className="text-2xl font-bold" style={{ fontFamily: "'Cormorant Garamond', serif", color: 'var(--gold)' }}>Free</p>
                <p className="text-xs text-[#6B6B6B] uppercase tracking-wider">Controllo vista</p>
              </div>
            </motion.div>
          </div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.04, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Decorative frame */}
            <div
              className="absolute -top-4 -right-4 w-full h-full border border-[#C9A84C]/20 pointer-events-none"
              style={{ zIndex: 0 }}
            />
            <div className="relative overflow-hidden" style={{ zIndex: 1 }}>
              <img
                src={HERO_IMG}
                alt="Occhiali eleganti su marmo bianco — Ottica IN Albissola Marina"
                className="w-full h-[520px] object-cover"
                style={{ objectPosition: 'center 40%' }}
              />
              {/* Overlay card */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-5 py-4 shadow-lg">
                <p className="text-xs tracking-[0.15em] uppercase text-[#6B6B6B] mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Piazza Sant'Antonio
                </p>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1rem' }} className="font-medium text-[#0A0A0A]">
                  Albissola Marina (SV)
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="w-px h-10 bg-gradient-to-b from-[#C9A84C] to-transparent"
        />
      </motion.div>
    </section>
  );
}
