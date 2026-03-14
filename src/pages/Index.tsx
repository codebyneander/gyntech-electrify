import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SocialProofBar from "@/components/SocialProofBar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

// Below-the-fold sections loaded lazily
const AnchorMenu = lazy(() => import("@/components/AnchorMenu"));
const AboutSection = lazy(() => import("@/components/AboutSection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const HowItWorksSection = lazy(() => import("@/components/HowItWorksSection"));
const MethodologySection = lazy(() => import("@/components/MethodologySection"));
const ServicesInActionSection = lazy(() => import("@/components/ServicesInActionSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const FaqSection = lazy(() => import("@/components/FaqSection"));
const FooterCta = lazy(() => import("@/components/FooterCta"));

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Header />
    <HeroSection />
    <SocialProofBar />
    <Suspense fallback={null}>
      <AnchorMenu />
      <AboutSection />
      <ServicesSection />
      <HowItWorksSection />
      <MethodologySection />
      <ServicesInActionSection />
      <TestimonialsSection />
      <FaqSection />
      <FooterCta />
    </Suspense>
    <WhatsAppFloat />
  </div>
);

export default Index;
