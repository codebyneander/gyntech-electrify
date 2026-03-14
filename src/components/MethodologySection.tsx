import { ShieldCheck } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import tecnicoImg from "@/assets/tecnico-auditoria.webp";

const differentials = [
  {
    title: "1. Proteção de Nível Hospitalar",
    copy: "Utilizamos impreterivelmente Dispositivos DR Tipo B de altíssimo desempenho ou detectores específicos DC > 6mA, essenciais para detectar fugas silenciosas das baterias asiáticas que derreteriam painéis comuns.",
  },
  {
    title: "2. Conexões Zero-Resistência",
    copy: "Todas as emendas e terminações elétricas são firmemente clipadas utilizando terminais tubulares metálicos isolados. Nunca existirá fios desfibrados ou contatos soltos na nossa execução técnica. O equipamento deve rodar horas sem produzir qualquer aquecimento no cabo.",
  },
  {
    title: "3. Conectividade e Treinamento Inteligente",
    copy: "Não deixamos você abandonado com um equipamento piscando sem explicação. Nós configuramos pessoalmente o pareamento da rede 4G/Wi-Fi, as restrições do cartão magnético (RFID) do seu BYD e te treinamos para programar a carga para os horários de tarifa enxuta da distribuidora.",
  },
];

const MethodologySection = () => (
  <section id="metodologia" className="relative py-20 lg:py-28 overflow-hidden">
    <div className="container grid lg:grid-cols-2 gap-12 items-center">
      <AnimatedSection className="flex flex-col gap-6">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight">
          Instalações Amadoras <span className="text-primary">Custam Caro.</span> Nós Investimos em Segurança e Ciência Exata.
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          A ABNT NBR 17019 proíbe o improviso. Uma fuga de corrente contínua em um Wallbox pode anular
          as proteções tradicionais da sua casa.
        </p>
        <div className="flex flex-col gap-6 mt-2">
          {differentials.map((d, i) => (
            <AnimatedSection key={d.title} delay={i * 0.15} className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/15 text-primary flex items-center justify-center mt-1">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h3 className="font-bold text-base mb-1">{d.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{d.copy}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.2} className="relative rounded-2xl overflow-hidden shadow-2xl max-w-xl mx-auto aspect-video">
        <img src={tecnicoImg} alt="Técnico realizando instalação de Wallbox e quadro elétrico para veículos elétricos" width={640} height={360} loading="lazy" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/10" />
      </AnimatedSection>
    </div>
  </section>
);

export default MethodologySection;
