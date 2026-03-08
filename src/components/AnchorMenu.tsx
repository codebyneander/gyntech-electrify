import { Zap } from "lucide-react";

const anchors = [
  { label: "Nossos Serviços", href: "#servicos" },
  { label: "Demonstrações", href: "#demonstracoes" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Avaliações", href: "#depoimentos" },
  { label: "Dúvidas Frequentes", href: "#faq" },
];

const AnchorMenu = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="sticky top-16 z-40 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container py-3">
        <p className="text-center text-sm text-muted-foreground mb-3 flex items-center justify-center gap-1.5">
          <Zap className="h-4 w-4 text-primary fill-primary" />
          <span>Acesso Rápido: Navegue pelas seções do site</span>
        </p>
        <div className="flex gap-3 overflow-x-auto scrollbar-hide justify-center px-4 md:px-0">
          {anchors.map((a) => (
            <button
              key={a.href}
              onClick={() => scrollTo(a.href)}
              className="whitespace-nowrap rounded-full px-5 py-2 text-sm font-medium bg-white/5 text-muted-foreground border border-transparent hover:border-primary hover:text-primary transition-colors duration-300"
            >
              {a.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnchorMenu;
