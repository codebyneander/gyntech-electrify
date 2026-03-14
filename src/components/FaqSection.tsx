import { useState } from "react";
import { ChevronDown } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import apertoImg from "@/assets/aperto-de-maos.webp";

const faqs = [
  {
    q: "Por que não posso simplesmente carregar meu carro direto naquela tomada 20A comum da garagem?",
    a: "Aquela tomada não foi projetada fisicamente para suportar horas contínuas de passagem de alta corrente (efeito Joule). O cabo da parede invariavelmente vai aquecer e derreter, derretendo o plástico do pino, anulando as proteções e causando sérios riscos de incêndio químico ao imóvel. A infraestrutura robusta dedicada do Wallbox não é um luxo opcional; é uma imposição da física.",
  },
  {
    q: "Como aprovar a instalação da minha vaga perante a administração rigorosa do meu condomínio?",
    a: "Deixe a burocracia complexa com a engenharia da GynTech. Nós elaboramos o projeto elétrico completo, avaliamos a prumada do prédio e entregamos a você a documentação, ARTs assinadas e manuais, exatamente no formato chancelado que a assembleia e as sindicaturas profissionais de Goiânia exigem para liberar a execução sumariamente.",
  },
  {
    q: "Quanto tempo o Elias e sua equipe demoram para concluir a obra na minha garagem?",
    a: "Após a rápida aprovação do projeto e avaliação das distâncias da fiação, instalações puramente residenciais com acesso ao quadro local costumam ser magistralmente finalizadas em menos de 1 dia de trabalho focado e ininterrupto, sempre com estética irretocável e zero sujeira deixada no local.",
  },
];

const FaqSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-20 lg:py-28 overflow-hidden">
      {/* BG image */}
      <div className="absolute inset-0">
        <img src={apertoImg} alt="" width={1920} height={1080} loading="lazy" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/85 backdrop-blur-md" />
      </div>

      <div className="container relative z-10 max-w-3xl">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold">
            Perguntas Frequentes Sobre <span className="text-primary">Infraestrutura Elétrica</span>
          </h2>
        </AnimatedSection>

        <div className="flex flex-col gap-4">
          {faqs.map((f, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="glass-card overflow-hidden">
                <button
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left font-semibold text-sm sm:text-base hover:text-primary transition-colors"
                >
                  {f.q}
                  <ChevronDown
                    size={20}
                    className={`flex-shrink-0 transition-transform duration-300 ${openIdx === i ? "rotate-180 text-primary" : ""}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openIdx === i ? "max-h-96 pb-5" : "max-h-0"}`}
                >
                  <p className="px-5 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
