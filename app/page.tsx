import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ScrollProgress from "@/components/ScrollProgress";
import ClientSelector from "@/components/ClientSelector";
import Metrics from "@/components/Metrics";
import SystemFlow from "@/components/SystemFlow";
import Mayoristas from "@/components/Mayoristas";
import Ecommerce from "@/components/Ecommerce";
import Maquilas from "@/components/Maquilas";
import Productos from "@/components/Productos";
import MapaColombia from "@/components/MapaColombia";
import Soporte from "@/components/Soporte";
import Confianza from "@/components/Confianza";
import LeadForm from "@/components/LeadForm";
import Faq from "@/components/Faq";
import CierreCta from "@/components/CierreCta";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <ClientSelector />
        <Metrics />
        <SystemFlow />
        <Mayoristas />
        <Ecommerce />
        <Maquilas />
        <Productos />
        <MapaColombia />
        <Soporte />
        <Confianza />
        <LeadForm />
        <Faq />
        <CierreCta />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
