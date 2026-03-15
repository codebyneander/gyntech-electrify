import AnimatedSection from "./AnimatedSection";
import bydLogo from "@/assets/BYD_Auto_2022_logo.svg";
import gwmLogo from "@/assets/GWM_2025_logo.svg";
import volvoLogo from "@/assets/Volvo_Iron_Mark_-_black.svg";
import porscheLogo from "@/assets/Porsche_Wortmarke.svg";
import bmwLogo from "@/assets/BMW.svg";
import audiLogo from "@/assets/Audi_logo.svg";
import jacMotorsLogo from "@/assets/jac-motors_logo.svg";

const brands = [
  { name: "BYD", logo: bydLogo },
  { name: "GWM", logo: gwmLogo },
  { name: "Volvo", logo: volvoLogo },
  { name: "Porsche", logo: porscheLogo },
  { name: "BMW", logo: bmwLogo },
  { name: "Audi", logo: audiLogo },
  { name: "Jac Motors", logo: jacMotorsLogo },
];

const BrandLogo = ({ name, logo }: { name: string; logo?: string }) => (
  <div className="flex-shrink-0 cursor-default select-none px-6 md:px-8">
    {logo ? (
      <img
        src={logo}
        alt={name}
        width={120}
        height={40}
        loading="lazy"
        className="h-8 md:h-10 w-auto object-contain brightness-0 invert opacity-50 hover:opacity-100 transition-all duration-300"
      />
    ) : (
      <span className="text-xl md:text-2xl font-heading font-bold tracking-wider text-foreground opacity-50 hover:opacity-100 transition-all duration-300 whitespace-nowrap">
        {name}
      </span>
    )}
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
            <BrandLogo key={`${b.name}-${i}`} name={b.name} logo={b.logo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofBar;
