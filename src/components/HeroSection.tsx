import { Zap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import heroImg from "@/assets/hero-ev-charger.webp";
import logoWatermark from "@/assets/logo-gyntech-eletrica-mob-oficial.webp";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=5562993433548&text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento%20para%20instala%C3%A7%C3%A3o%20de%20carregador.";

const trustItems = [
  "Sem Fios Expostos",
  "Proteção DR Tipo B Inclusa",
  "Laudo Técnico p/ Síndicos",
];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
    {/* BG Image — blurred & dimmed */}
    <div className="absolute inset-0 -z-10">
      <img src={heroImg} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-background/85 backdrop-blur-md" />
    </div>

    {/* Logo watermark — subtle, blurred, almost invisible */}
    <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
      <img
        src={logoWatermark}
        alt=""
        className="w-[80%] max-w-4xl h-auto opacity-[0.07] blur-[40px]"
        style={{ mixBlendMode: "overlay" }}
      />
    </div>

    <div className="container relative z-10 max-w-3xl py-16 lg:py-24">
      <AnimatedSection className="flex flex-col gap-6">
        <span className="inline-flex items-center gap-2 self-start px-4 py-1.5 text-xs font-semibold bg-primary/15 text-primary rounded-full border border-primary/30">
          <Zap size={14} /> Especialistas Oficiais em Eletromobilidade em Goiânia e Região Metropolitana
        </span>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight tracking-tight">
          Carregue o seu Veículo Elétrico no Conforto da sua Casa com{" "}
          <span className="text-primary whitespace-nowrap">Engenharia, Segurança</span> e{" "}
          <span className="text-primary">Padronização.</span>
        </h1>

        <p className="text-base lg:text-lg text-muted-foreground max-w-xl leading-relaxed">
          O seu veículo elétrico custou caro. A infraestrutura de recarga não é um serviço para aventureiros.
          Oferecemos instalação profissional, laudos técnicos precisos, dimensionamento matemático de carga
          e conformidade estrita com as Normas de Segurança ABNT (NBR 17019 e NBR 5410).
        </p>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 self-start w-full sm:w-auto justify-center px-8 py-4 text-base font-bold bg-primary text-primary-foreground rounded-xl animate-pulse-glow hover:scale-105 transition-transform duration-300"
        >
          <Zap size={20} />
          SOLICITAR ORÇAMENTO NO WHATSAPP
        </a>

        <div className="flex flex-wrap gap-4 mt-2">
          {trustItems.map((item) => (
            <span key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs">✓</span>
              {item}
            </span>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default HeroSection;
