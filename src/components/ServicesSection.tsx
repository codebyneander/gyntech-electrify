import { Home, Building2, MapPin } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    icon: Home,
    title: "Instalação Residencial Premium",
    copy: "Adequação completa e cirúrgica do seu Padrão de Entrada de Energia, passagem estética e embutida (ou por eletrodutos rígidos discretos) do cabeamento pesado de 10mm², e fixação sólida do seu equipamento Wallbox (seja ele BYD, GWM ou de terceiros). Você sairá de casa com a bateria a 100% todas as manhãs, com risco zero de acidentes noturnos.",
  },
  {
    icon: Building2,
    title: "Soluções Integrais para Condomínios",
    copy: "Com a nova onda de carros elétricos, síndicos e administradoras de condomínio em Goiânia enfrentam terror elétrico. Nós fornecemos o levantamento de carga do transformador do prédio, instalamos sistemas com medidores individualizados de consumo, emitimos ART (Anotação de Responsabilidade Técnica) e cumprimos as duras exigências de prevenção a incêndio do Corpo de Bombeiros (AVCB). Tranquilidade para o condômino, blindagem legal para o síndico.",
  },
  {
    icon: MapPin,
    title: "Eletropostos Comerciais e Gestão de Frotas",
    copy: "Atraia o cobiçado público das classes A/B e agregue imenso valor tecnológico ao seu estacionamento particular, shopping center, clínica médica sofisticada ou restaurante de alto padrão. Projetamos, fornecemos infraestrutura para totens rápidos e configuramos a gestão dos sistemas de tarifação inteligente, viabilizando novos fluxos robustos de receita corporativa.",
  },
];

const ServicesSection = () => (
  <section id="solucoes" className="bg-surface-alt py-20 lg:py-28">
    <div className="container">
      <AnimatedSection className="text-center mb-14">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold">
          Especialização Modular: <span className="text-primary">Soluções Para Cada Cenário</span>
        </h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <AnimatedSection key={s.title} delay={i * 0.15}>
            <div className="glass-card h-full flex flex-col overflow-hidden hover:scale-[1.02] transition-transform duration-300 group">
              {s.image && (
                <div className="relative h-48 overflow-hidden">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-background/50" />
                </div>
              )}
              <div className="p-6 flex flex-col gap-4 flex-1">
                <div className="w-12 h-12 rounded-lg bg-primary/15 text-primary flex items-center justify-center">
                  <s.icon size={24} />
                </div>
                <h3 className="text-lg font-bold">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.copy}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
