import { ImageIcon, ExternalLink } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { Button } from "./ui/button";

const placeholders = [0, 1, 2];

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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
        {placeholders.map((i) => (
          <AnimatedSection key={i} delay={i * 0.15}>
            <div className="bg-[#1F2C34] rounded-2xl rounded-tl-sm p-8 flex flex-col items-center justify-center min-h-[220px] shadow-lg">
              <ImageIcon size={40} className="text-primary/60 mb-4" />
              <p className="text-muted-foreground text-sm text-center leading-relaxed">
                [Espaço reservado para Print de Feedback do WhatsApp]
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
