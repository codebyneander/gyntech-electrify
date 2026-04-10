import { Zap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import InstagramPhoneMockup from "./InstagramPhoneMockup";
import bgCharger from "@/assets/bg-charger.png";

const WHATSAPP_URL = "https://wa.me/556293343548?text=Ol%C3%A1%20Elias!";

const trustItems = [
  "Sem Fios Expostos",
  "Proteção DR Tipo B Inclusa",
  "Laudo Técnico p/ Síndicos",
];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
    {/* BG: left half image, right half solid */}
    <div className="absolute inset-0">
      <img src={bgCharger} alt="" width={1920} height={1080} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
    </div>

    <div className="container relative z-10 grid lg:grid-cols-2 gap-10 items-center py-16 lg:py-24">
      <AnimatedSection className="flex flex-col gap-6">
        <span className="inline-flex items-center gap-2 self-start px-4 py-1.5 text-xs font-semibold bg-primary/15 text-primary rounded-full border border-primary/30">
          <Zap size={14} /> Especialistas Oficiais em Eletromobilidade em Goiânia e Região Metropolitana
        </span>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight text-white">
          Instale seu Carregador Elétrico com{" "}
          <span className="text-primary">Segurança e Engenharia</span> no Conforto da sua Casa.
        </h1>

        <p className="text-sm sm:text-base text-gray-300 max-w-2xl leading-relaxed">
          Infraestrutura profissional com conformidade ABNT (NBR 17019 e NBR 5410), laudos técnicos e dimensionamento preciso. Para residências, condomínios e redes comerciais em Goiânia e região.
        </p>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 self-start px-8 py-4 text-base font-bold bg-primary text-primary-foreground rounded-xl shadow-lg animate-pulse-glow hover:scale-105 transition-transform duration-300"
        >
          <Zap size={20} />
          Falar com um Especialista
        </a>

        <div className="flex flex-wrap gap-4 mt-2">
          {trustItems.map((item) => (
            <span key={item} className="flex items-center gap-2 text-sm text-gray-300">
              <span className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs">✓</span>
              {item}
            </span>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.3} className="hidden lg:block">
        <InstagramPhoneMockup />
      </AnimatedSection>
    </div>
  </section>
);

export default HeroSection;
