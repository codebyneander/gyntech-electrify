import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SocialProofBar from "@/components/SocialProofBar";
import AnchorMenu from "@/components/AnchorMenu";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import MethodologySection from "@/components/MethodologySection";
import ServicesInActionSection from "@/components/ServicesInActionSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import FooterCta from "@/components/FooterCta";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Header />
    <HeroSection />
    <SocialProofBar />
    <AnchorMenu />
    <AboutSection />
    <ServicesSection />
    <HowItWorksSection />
    <MethodologySection />
    <ServicesInActionSection />
    <TestimonialsSection />
    <FaqSection />
    <FooterCta />
    <WhatsAppFloat />
  </div>
);

export default Index;
