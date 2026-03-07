import { Zap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import logo from "@/assets/logo-gyntech.webp";

const WHATSAPP_URL = "https://wa.me/5562999999999?text=Olá! Gostaria de falar com Elias Barbo sobre instalação.";

const FooterCta = () => (
  <>
    {/* CTA Final */}
    <section className="py-20 lg:py-28">
      <div className="container">
        <AnimatedSection>
          <div className="glass-card border-primary/30 p-8 md:p-14 text-center flex flex-col items-center gap-6 neon-glow">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight max-w-2xl">
              Não Arrisque o Seu Patrimônio Automotivo em Instalações <span className="text-primary">Duvidosas.</span>
            </h2>
            <p className="text-muted-foreground max-w-xl leading-relaxed">
              Proteja o seu veículo, a sua residência e a sua família. Fale agora diretamente com nossa
              engenharia para agendar a primeira avaliação remota ou visita técnica em Goiânia e Cidades Vizinhas.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 text-base font-bold bg-primary text-primary-foreground rounded-xl animate-pulse-glow hover:scale-105 transition-transform duration-300"
            >
              <Zap size={20} />
              FALAR COM ELIAS BARBO NO WHATSAPP 🟢
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Footer */}
    <footer className="border-t border-border py-10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-muted-foreground">
        <img src={logo} alt="GYNTECH" className="h-8 opacity-60" />
        <div className="text-center md:text-right space-y-1">
          <p>CNPJ 54.987.788/0001-09 — Elias Maximiano Barbo ME</p>
          <p>Região Metropolitana de Goiânia, GO</p>
          <p>© 2024 Todos os Direitos Reservados. Cumprimento Técnico à ABNT NBR 5410 e NBR 17019.</p>
        </div>
      </div>
    </footer>
  </>
);

export default FooterCta;
