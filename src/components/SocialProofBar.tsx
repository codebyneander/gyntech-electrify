import AnimatedSection from "./AnimatedSection";

const brands = [
  { name: "BYD" },
  { name: "GWM" },
  { name: "Volvo" },
  { name: "Porsche" },
  { name: "BMW" },
  { name: "Audi" },
  { name: "Jac Motors" },
  { name: "WEG" },
  { name: "Intelbras" },
];

const BrandLogo = ({ name }: { name: string }) => (
  <div className="flex-shrink-0 opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-default select-none px-6 md:px-8">
    <span className="text-xl md:text-2xl font-heading font-bold tracking-wider text-foreground whitespace-nowrap">
      {name}
    </span>
  </div>
);

const SocialProofBar = () => {
  const doubled = [...brands, ...brands];

  return (
    <section className="bg-surface-alt border-y border-border py-10">
      <div className="container">
        <AnimatedSection>
          <p className="text-center text-sm text-muted-foreground mb-6 font-medium">
            Compatibilidade Técnica Garantida com as Principais Tecnologias do Mercado Global:
          </p>
        </AnimatedSection>
      </div>

      <div className="relative group overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 z-10 bg-gradient-to-r from-surface-alt to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 z-10 bg-gradient-to-l from-surface-alt to-transparent pointer-events-none" />

        <div className="flex items-center animate-marquee group-hover:[animation-play-state:paused] w-max gap-4 md:gap-6">
          {doubled.map((b, i) => (
            <BrandLogo key={`${b.name}-${i}`} name={b.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofBar;
