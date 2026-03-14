/* ============================================================
   CREDENTIALS BAR — Ottica IN Albissola Marina
   Design: Striscia grigio chiarissimo con counter GSAP animati
   ============================================================ */

import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle, Award, Users, Eye } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const credentials = [
  {
    icon: Users,
    value: 500,
    suffix: '+',
    label: 'Clienti soddisfatti',
    isNumber: true,
  },
  {
    icon: Eye,
    value: null,
    suffix: '',
    label: 'Controllo vista gratuito',
    isNumber: false,
    text: 'Gratis',
  },
  {
    icon: Award,
    value: null,
    suffix: '',
    label: 'Ottico abilitato',
    isNumber: false,
    text: 'Laureato',
  },
  {
    icon: CheckCircle,
    value: 20,
    suffix: '+',
    label: 'Anni di esperienza',
    isNumber: true,
  },
];

function CounterItem({ item, index }: { item: typeof credentials[0]; index: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!inView || !item.isNumber || !ref.current) return;
    const el = ref.current;
    const obj = { val: 0 };
    gsap.to(obj, {
      val: item.value!,
      duration: 1.8,
      ease: 'power2.out',
      onUpdate: () => {
        el.textContent = Math.round(obj.val).toString();
      },
    });
  }, [inView, item.isNumber, item.value]);

  const Icon = item.icon;

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex flex-col items-center text-center px-6 py-8 group"
    >
      <div
        className="w-10 h-10 flex items-center justify-center mb-4 border border-[#C9A84C]/30 group-hover:border-[#C9A84C] transition-colors duration-300"
        style={{ color: 'var(--gold)' }}
      >
        <Icon size={18} strokeWidth={1.5} />
      </div>
      <div className="flex items-baseline gap-0.5 mb-2">
        {item.isNumber ? (
          <>
            <span
              ref={ref}
              className="text-3xl md:text-4xl font-bold text-[#0A0A0A]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              0
            </span>
            <span
              className="text-xl font-bold text-[#0A0A0A]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {item.suffix}
            </span>
          </>
        ) : (
          <span
            className="text-3xl md:text-4xl font-bold text-[#0A0A0A]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {item.text}
          </span>
        )}
      </div>
      <p
        className="text-xs uppercase tracking-[0.12em] text-[#6B6B6B]"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {item.label}
      </p>
    </motion.div>
  );
}

export default function CredentialsBar() {
  return (
    <section className="bg-[#F8F8F6] border-y border-[#EAEAE8]">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[#EAEAE8]">
          {credentials.map((item, i) => (
            <CounterItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
