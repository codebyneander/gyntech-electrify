import AnimatedSection from "./AnimatedSection";
import eliasImg from "@/assets/elias-barbo.webp";
import seloImg from "@/assets/selo-20-anos.webp";

const AboutSection = () => (
  <section id="empresa" className="relative py-20 lg:py-28 overflow-hidden">
    <div className="container grid lg:grid-cols-2 gap-12 items-center">
      {/* Images */}
      <AnimatedSection className="relative">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-md mx-auto lg:mx-0">
          <img src={eliasImg} alt="Elias Barbo - Fundador da GYNTECH" className="w-full h-auto" />
          <div className="absolute inset-0 bg-background/30" />
        </div>
        <div className="absolute -bottom-6 -right-4 lg:right-8 w-48 md:w-56 rounded-xl overflow-hidden shadow-xl border-2 border-primary/30">
          <img src={seloImg} alt="20 anos de experiência" className="w-full h-auto" />
        </div>
      </AnimatedSection>

      {/* Text */}
      <AnimatedSection delay={0.2} className="flex flex-col gap-5">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight">
          Onde a <span className="text-primary">Inovação Verde</span> Encontra Duas Décadas de Engenharia Tradicional.
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Conheça Elias Maximiano Barbo, o fundador da GYNTECH ELÉTRICA MOB. Em um mercado inundado
          por eletricistas novatos seduzidos pela tendência dos VEs, Elias traz o peso de mais de 20 anos
          de experiência incontestável na execução rigorosa de obras e manutenções elétricas de altíssima
          complexidade e exigência de segurança.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Hoje, essa expertise vital é focada a laser na eletrificação automotiva. Não nos limitamos a
          pendurar um carregador na parede da sua garagem; nós inspecionamos o seu quadro de força primário,
          calculamos as quedas de tensão operacionais, adequamos as prumadas do seu condomínio junto à
          Equatorial Energia e garantimos que o sistema atue como um ecossistema seguro e perfeitamente
          integrado à sua moradia, seja no Marista, Alphaville, Aldeia do Vale ou em qualquer bairro nobre
          de Goiânia, Aparecida e Senador Canedo.
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default AboutSection;
