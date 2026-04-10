import { MessageCircle, ClipboardCheck, Wrench, CheckCircle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    icon: MessageCircle,
    title: "1. Atendimento Rápido",
    copy: "Contato inicial via WhatsApp para entendermos sua demanda e o modelo do veículo.",
  },
  {
    icon: ClipboardCheck,
    title: "2. Visita Técnica",
    copy: "Inspeção no local em Goiânia e região metropolitana para análise de carga e dimensionamento seguro.",
  },
  {
    icon: Wrench,
    title: "3. Instalação Padrão ABNT",
    copy: "Execução da infraestrutura, passagem de cabos e fixação do carregador sem gambiarras.",
  },
  {
    icon: CheckCircle,
    title: "4. Testes e Entrega",
    copy: "Comissionamento do equipamento, testes práticos de recarga e entrega do sistema funcionando.",
  },
];

const HowItWorksSection = () => (
  <section id="como-funciona" className="py-24 md:py-32 bg-secondary/30">
    <div className="container mx-auto px-6">
      <AnimatedSection className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">
          Como <span className="text-primary">Funciona</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Da primeira mensagem à recarga funcionando — veja como é simples.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-start gap-y-10 md:gap-y-0">
        {steps.map((step, i) => (
          <> 
            <AnimatedSection
              key={step.title}
              delay={i * 0.15}
              className="flex flex-col items-center text-center px-2"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 neon-glow">
                <step.icon size={28} className="text-primary" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-base leading-relaxed max-w-[220px]">
                {step.copy}
              </p>
            </AnimatedSection>

            {i < steps.length - 1 && (
              <div className="hidden md:flex items-center justify-center pt-7" aria-hidden="true">
                <div className="w-10 border-t-2 border-dashed border-primary/40" />
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
