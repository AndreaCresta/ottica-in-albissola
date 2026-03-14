/* ============================================================
   WHATSAPP FLOATING BUTTON — Ottica IN Albissola Marina
   Design: Minimal nero/bianco, posizione bottom-right
   ============================================================ */

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/39333891XXXX?text=Salve,%20vorrei%20informazioni%20su%20Ottica%20IN%20Albissola%20Marina"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#0A0A0A] text-white px-4 py-3 shadow-lg hover:bg-[#C9A84C] transition-all duration-300 group"
      aria-label="Contattaci su WhatsApp"
    >
      <MessageCircle size={18} strokeWidth={1.5} />
      <span
        className="text-xs tracking-[0.1em] uppercase font-medium hidden sm:block"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        WhatsApp
      </span>
    </motion.a>
  );
}
