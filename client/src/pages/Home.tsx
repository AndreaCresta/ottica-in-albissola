/* ============================================================
   HOME PAGE — Ottica IN Albissola Marina
   Design: Lusso Editoriale Mediterraneo
   Sezioni: Navbar, Hero, Credenziali, Servizi, Prodotti,
            PerchéNoi, ControlloVista, Prenota, Contatti, Footer
   ============================================================ */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CredentialsBar from "@/components/CredentialsBar";
import ServicesSection from "@/components/ServicesSection";
import ProductsSection from "@/components/ProductsSection";
import WhyUsSection from "@/components/WhyUsSection";
import EyeCheckSection from "@/components/EyeCheckSection";
import BookingSection from "@/components/BookingSection";
import ContactsSection from "@/components/ContactsSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <CredentialsBar />
        <ServicesSection />
        <ProductsSection />
        <WhyUsSection />
        <EyeCheckSection />
        <BookingSection />
        <ContactsSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
