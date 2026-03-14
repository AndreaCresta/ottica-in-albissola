/* ============================================================
   PRODUCTS SECTION — Ottica IN Albissola Marina
   Design: Swiper carousel, card bianche/grigio, prezzi bold
   ============================================================ */

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Tag, ArrowRight } from 'lucide-react';

const SUNGLASSES_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663437013566/8mEtMkd3bWbnAXwukzEqP7/sunglasses-display-ZuncfYPQ3zddTrbjmoNdFr.webp';
const CONTACT_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663437013566/8mEtMkd3bWbnAXwukzEqP7/contact-lenses-eubHZJNFxtNVwLXexgwzDF.webp';
const HERO_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663437013566/8mEtMkd3bWbnAXwukzEqP7/hero-glasses-F4Vc6PSoHXiqpBAVP9cXpa.webp';
const STORE_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663437013566/8mEtMkd3bWbnAXwukzEqP7/store-interior-CuhqQbq4vpf7ds2j5uZv5f.webp';

const products = [
  {
    image: HERO_IMG,
    badge: 'Bestseller',
    category: 'Occhiali Progressivi',
    name: 'Progressivi Premium',
    description: 'Lenti progressive di alta qualità con trattamento anti-riflesso incluso. Visione perfetta a tutte le distanze.',
    price: '420',
    priceNote: 'da',
    unit: '€',
    cta: 'Scopri di più',
  },
  {
    image: SUNGLASSES_IMG,
    badge: 'Offerta',
    category: 'Occhiali da Sole',
    name: 'Polarizzati Estivi',
    description: 'Occhiali da sole polarizzati con protezione UV400. Perfetti per la riviera ligure.',
    price: '-50%',
    priceNote: 'fino al',
    unit: '',
    cta: 'Vedi collezione',
    highlight: true,
  },
  {
    image: CONTACT_IMG,
    badge: 'Novità',
    category: 'Lenti a Contatto',
    name: 'Lenti Desio',
    description: 'Lenti a contatto colorate e correttive Desio. Comfort tutto il giorno, colori naturali e vivaci.',
    price: 'Consulta',
    priceNote: '',
    unit: '',
    cta: 'Richiedi info',
  },
  {
    image: STORE_IMG,
    badge: 'Consigliato',
    category: 'Lenti Fotocromatiche',
    name: 'SKY Releasy',
    description: 'La nuova generazione di lenti fotocromatiche SKY Releasy. Adattamento ultra-rapido alla luce.',
    price: 'Consulta',
    priceNote: '',
    unit: '',
    cta: 'Prenota prova',
  },
];

export default function ProductsSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' });

  return (
    <section id="prodotti" className="py-24 md:py-32 bg-[#F8F8F6] overflow-hidden">
      <div className="container">
        {/* Header */}
        <div ref={titleRef} className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="gold-line" />
            <span className="section-label">Prodotti in Evidenza</span>
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="display-heading text-4xl md:text-5xl lg:text-6xl"
            >
              La nostra
              <br />
              <em className="not-italic" style={{ color: 'var(--gold)' }}>selezione</em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#6B6B6B] text-base leading-relaxed max-w-sm"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Prodotti selezionati per qualità e comfort, adatti a ogni stile di vita e necessità visiva.
            </motion.p>
          </div>
        </div>

        {/* Swiper */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1.5, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 28 },
            }}
            className="pb-14"
          >
            {products.map((product, i) => (
              <SwiperSlide key={i}>
                <div className="group bg-white border border-[#EAEAE8] hover:border-[#C9A84C]/30 hover:shadow-[0_8px_40px_rgba(0,0,0,0.07)] transition-all duration-400 overflow-hidden">
                  {/* Image */}
                  <div className="relative overflow-hidden h-52">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    {/* Badge */}
                    <div className="absolute top-4 left-4">
                      <span
                        className={`flex items-center gap-1 px-2.5 py-1 text-[0.65rem] tracking-[0.12em] uppercase font-medium ${
                          product.highlight
                            ? 'bg-[#C9A84C] text-white'
                            : 'bg-white text-[#0A0A0A]'
                        }`}
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        <Tag size={9} />
                        {product.badge}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p
                      className="text-xs tracking-[0.15em] uppercase text-[#6B6B6B] mb-2"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {product.category}
                    </p>
                    <h3
                      className="text-xl font-bold text-[#0A0A0A] mb-3"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {product.name}
                    </h3>
                    <p
                      className="text-[#6B6B6B] text-sm leading-relaxed mb-5"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {product.description}
                    </p>

                    {/* Price + CTA */}
                    <div className="flex items-end justify-between pt-4 border-t border-[#F0F0EE]">
                      <div>
                        {product.priceNote && (
                          <p className="text-xs text-[#6B6B6B] mb-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                            {product.priceNote}
                          </p>
                        )}
                        <p
                          className="text-2xl font-bold text-[#0A0A0A]"
                          style={{ fontFamily: "'Cormorant Garamond', serif" }}
                        >
                          {product.price}
                          {product.unit && <span className="text-lg ml-0.5">{product.unit}</span>}
                        </p>
                      </div>
                      <button
                        onClick={() => document.querySelector('#prenota')?.scrollIntoView({ behavior: 'smooth' })}
                        className="group/btn flex items-center gap-1.5 text-xs tracking-[0.1em] uppercase font-medium text-[#0A0A0A] hover:text-[#C9A84C] transition-colors duration-200"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {product.cta}
                        <ArrowRight size={12} className="group-hover/btn:translate-x-0.5 transition-transform duration-200" />
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
