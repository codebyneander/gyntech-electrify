import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SocialProofBar from "@/components/SocialProofBar";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import MethodologySection from "@/components/MethodologySection";
import ServicesInActionSection from "@/components/ServicesInActionSection";
import FaqSection from "@/components/FaqSection";
import FooterCta from "@/components/FooterCta";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Header />
    <HeroSection />
    <SocialProofBar />
    <AboutSection />
    <ServicesSection />
    <HowItWorksSection />
    <MethodologySection />
    <ServicesInActionSection />
    <FaqSection />
    <FooterCta />
    <WhatsAppFloat />
  </div>
);

export default Index;
