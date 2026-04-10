import { Play } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";

const ServicesInActionSection = () => (
  <section id="demonstracoes" className="py-24 lg:py-32">
    <div className="container">
      <AnimatedSection className="glass-card border-primary/20 p-8 md:p-14 text-center flex flex-col items-center gap-6">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight max-w-2xl">
          Nossos Serviços <span className="text-primary">em Ação</span>
        </h2>
        <p className="text-muted-foreground max-w-xl leading-relaxed">
          Cada instalação que realizamos segue rigorosamente as normas ABNT e padrões de
          segurança hospitalar. Veja com seus próprios olhos a qualidade e o cuidado técnico
          que aplicamos em cada projeto.
        </p>
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-3 px-8 py-4 text-base font-bold bg-primary text-primary-foreground rounded-xl hover:scale-105 transition-transform duration-300 neon-glow"
        >
          <Play size={20} />
          Ver Demonstrações
        </Link>
      </AnimatedSection>
    </div>
  </section>
);

export default ServicesInActionSection;
