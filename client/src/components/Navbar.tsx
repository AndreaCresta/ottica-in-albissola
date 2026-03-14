/* ============================================================
   NAVBAR — Ottica IN Albissola Marina
   Design: Trasparente → Bianca allo scroll, logo + voci menu
   ============================================================ */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Servizi', href: '#servizi' },
  { label: 'Prodotti', href: '#prodotti' },
  { label: 'Chi Siamo', href: '#perche' },
  { label: 'Controllo Vista', href: '#controllo-vista' },
  { label: 'Contatti', href: '#contatti' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(0,0,0,0.08)]'
            : 'bg-transparent'
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="flex flex-col leading-none group"
            >
              <span
                className="font-serif text-xl md:text-2xl font-bold tracking-tight text-[#0A0A0A] transition-colors"
                style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: '-0.02em' }}
              >
                Ottica <span style={{ color: 'var(--gold)' }}>IN</span>
              </span>
              <span
                className="text-[0.6rem] tracking-[0.18em] uppercase text-[#6B6B6B] font-sans"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Albissola Marina
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-[0.8rem] tracking-[0.08em] uppercase font-medium text-[#0A0A0A] hover:text-[#C9A84C] transition-colors duration-200"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="tel:01922124446"
                className="flex items-center gap-1.5 text-[0.75rem] text-[#6B6B6B] hover:text-[#0A0A0A] transition-colors"
              >
                <Phone size={13} />
                <span>019 2212446</span>
              </a>
              <button
                onClick={() => handleNavClick('#prenota')}
                className="px-5 py-2.5 bg-[#0A0A0A] text-white text-[0.72rem] tracking-[0.1em] uppercase font-medium hover:bg-[#C9A84C] transition-colors duration-300"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Prenota
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-[#0A0A0A]"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-white pt-20 px-6 flex flex-col"
          >
            <nav className="flex flex-col gap-1 mt-6">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left py-4 border-b border-[#F0F0EE] text-[1.1rem] font-medium text-[#0A0A0A] hover:text-[#C9A84C] transition-colors"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
            <div className="mt-8 flex flex-col gap-3">
              <a
                href="tel:01922124446"
                className="flex items-center gap-2 text-[#6B6B6B]"
              >
                <Phone size={15} />
                <span className="text-sm">019 2212446</span>
              </a>
              <button
                onClick={() => handleNavClick('#prenota')}
                className="w-full py-3.5 bg-[#0A0A0A] text-white text-sm tracking-widest uppercase"
              >
                Prenota Appuntamento
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
