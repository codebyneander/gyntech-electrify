import { Star, ExternalLink } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { Button } from "./ui/button";

const testimonials = [
  {
    text: "Ouça o relato real de quem já garantiu segurança na recarga em casa.",
    name: "Cliente Gyntech",
    hasAudio: true,
  },
  {
    text: "Serviço impecável do início ao fim. A equipe analisou a rede da minha casa com muito cuidado antes de instalar o carregador. O acabamento ficou perfeito, sem fios expostos. Recomendo de olhos fechados!",
    name: "Carlos M. - GWM Haval H6",
    hasAudio: false,
  },
  {
    text: "Trabalho extremamente técnico e organizado. Diferente de curiosos, eles realmente entendem das normas de segurança. Me explicaram exatamente como usar o equipamento e deixaram tudo funcionando.",
    name: "Mariana T. - Volvo XC40",
    hasAudio: false,
  },
];

const Stars = () => (
  <div className="flex gap-1 mb-4">
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
    ))}
  </div>
);

const TestimonialsSection = () => (
  <section id="depoimentos" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-6">
      <AnimatedSection className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">
          O Que Nossos <span className="text-primary">Clientes Dizem</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Feedback real de quem confiou na GynTech para a instalação do seu carregador.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
        {testimonials.map((t, i) => (
          <AnimatedSection key={i} delay={i * 0.15}>
            <div className="glass-card rounded-2xl p-8 flex flex-col h-full">
              <Stars />
              <p className="text-foreground/90 italic leading-relaxed flex-1 mb-4">
                "{t.text}"
              </p>
              {t.hasAudio && (
                <audio
                  controls
                  className="w-full mb-4 rounded-lg [&::-webkit-media-controls-panel]:bg-card"
                  src="/audio/depoimento.mp3"
                />
              )}
              <p className="text-sm text-muted-foreground font-medium">
                — {t.name}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="text-center" delay={0.5}>
        <Button variant="outline" asChild>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Ver mais avaliações <ExternalLink size={16} />
          </a>
        </Button>
      </AnimatedSection>
    </div>
  </section>
);

export default TestimonialsSection;
