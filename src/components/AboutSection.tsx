import AnimatedSection from "./AnimatedSection";
import eliasImg from "@/assets/elias-barbo.webp";


const AboutSection = () => (
  <section id="empresa" className="relative py-20 lg:py-28 overflow-hidden">
    <div className="container grid lg:grid-cols-2 gap-16 items-center">
      {/* Photo */}
      <AnimatedSection className="flex justify-center lg:justify-start">
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl w-full max-w-md">
            <img
              src={eliasImg}
              alt="Elias Barbo - Fundador da GYNTECH"
              width={448}
              height={600}
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Text */}
      <AnimatedSection delay={0.2} className="flex flex-col gap-6">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight font-heading">
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
