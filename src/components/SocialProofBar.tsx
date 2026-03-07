import AnimatedSection from "./AnimatedSection";

const brands = [
  { name: "BYD", url: "https://www.byd.com/br" },
  { name: "GWM", url: "https://www.gwmmotors.com.br/pt" },
  { name: "Volvo Cars", url: "https://www.volvocars.com/br/" },
  { name: "Porsche", url: "https://www.porsche.com/brazil/pt/" },
  { name: "BMW", url: "https://www.bmw.com.br/pt/index.html" },
  { name: "Audi", url: "https://www.audi.com.br/pt/" },
  { name: "Jac Motors", url: "https://www.jacmotors.com.br/" },
];

const SocialProofBar = () => (
  <section className="bg-surface-alt border-y border-border py-10">
    <div className="container">
      <AnimatedSection>
        <p className="text-center text-sm text-muted-foreground mb-6 font-medium">
          Compatibilidade Técnica Garantida com as Principais Tecnologias do Mercado Global:
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {brands.map((b) => (
            <a
              key={b.name}
              href={b.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg md:text-xl font-heading font-bold text-foreground/40 hover:text-foreground transition-opacity duration-300"
            >
              {b.name}
            </a>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default SocialProofBar;
