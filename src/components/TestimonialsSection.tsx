import { Quote } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    name: "Ricardo M.",
    location: "Alphaville Flamboyant, Goiânia",
    text: "Instalação rápida e impecável. A equipe do Elias cuidou de tudo: desde a adequação do padrão de entrada até a configuração do app do carregador. Hoje carrego meu BYD toda noite sem preocupação.",
  },
  {
    name: "Patrícia L.",
    location: "Síndica — Edifício Maison, Setor Marista",
    text: "Me senti muito segura com a equipe. Apresentaram toda a documentação, ART, laudo técnico e ainda fizeram uma reunião com o conselho do condomínio explicando cada detalhe da instalação. Profissionalismo exemplar.",
  },
  {
    name: "Fernando C.",
    location: "Aldeia do Vale, Goiânia",
    text: "Já tinha recebido três orçamentos de eletricistas comuns que nem mencionaram proteção DR Tipo B. Com a GYNTECH foi diferente: engenharia de verdade, sem improvisos. Valeu cada centavo investido.",
  },
];

const TestimonialsSection = () => (
  <section className="py-24 lg:py-32">
    <div className="container">
      <AnimatedSection className="text-center mb-14">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold">
          O Que Nossos Clientes <span className="text-primary">Dizem</span>
        </h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          A confiança de quem já carrega seu veículo elétrico com segurança e tranquilidade.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <AnimatedSection key={t.name} delay={i * 0.15}>
            <div className="glass-card h-full flex flex-col p-7 gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_0_20px_hsl(160_63%_52%/0.15)]">
              <Quote size={28} className="text-primary/40" />
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="border-t border-border pt-4 mt-auto">
                <p className="font-bold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.location}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
