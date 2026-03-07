import AnimatedSection from "./AnimatedSection";

const brands = ["BYD", "GWM", "Volvo Cars", "Porsche", "BMW", "Audi", "Jac Motors"];

const SocialProofBar = () => (
  <section className="bg-surface-alt border-y border-border py-10">
    <div className="container">
      <AnimatedSection>
        <p className="text-center text-sm text-muted-foreground mb-6 font-medium">
          Compatibilidade Técnica Garantida com as Principais Tecnologias do Mercado Global:
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {brands.map((b) => (
            <span
              key={b}
              className="text-lg md:text-xl font-heading font-bold text-foreground/40 hover:text-foreground transition-opacity duration-300 cursor-default"
            >
              {b}
            </span>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default SocialProofBar;
