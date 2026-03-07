import { useState } from "react";
import { Menu, X } from "lucide-react";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=5562993433548&text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento%20para%20instala%C3%A7%C3%A3o%20de%20carregador.";

const navLinks = [
  { label: "Nossas Soluções", href: "#solucoes" },
  { label: "A Empresa", href: "#empresa" },
  { label: "Metodologia Segura", href: "#metodologia" },
  { label: "FAQ", href: "#faq" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-18">
        <span className="font-heading font-extrabold text-base md:text-lg text-foreground">GYNTECH Elétrica MOB</span>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
          >
            Orçamento Rápido 🟢
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-foreground"
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border">
          <nav className="container flex flex-col gap-1 py-4">
            {navLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-left py-3 px-4 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
              >
                {l.label}
              </button>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 py-3 text-sm font-semibold bg-primary text-primary-foreground rounded-lg"
            >
              Orçamento Rápido 🟢
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
