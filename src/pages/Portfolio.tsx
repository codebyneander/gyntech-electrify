import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import FooterCta from "@/components/FooterCta";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import AnimatedSection from "@/components/AnimatedSection";

const videos = [
  { id: "CK3H1hqVlOw", title: "Demonstração 1" },
  { id: "zrUKUnxIW1Q", title: "Demonstração 2" },
  { id: "x_mF0bFx2OU", title: "Demonstração 3" },
  { id: "vjSSa0mWNfc", title: "Demonstração 4" },
  { id: "yCo2duEa2Kw", title: "Demonstração 5" },
  { id: "yTkV4n9et4E", title: "Demonstração 6" },
  { id: "ukFtMHzpeTA", title: "Demonstração 7" },
  { id: "WoQSwa6JMME", title: "Demonstração 8" },
  { id: "3eVyKJkQVCk", title: "Demonstração 9" },
];

const Portfolio = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Header />

    <main className="pt-24 pb-12">
      <div className="container">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Voltar para a Home
        </Link>

        <AnimatedSection className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
            Portfólio de <span className="text-primary">Vídeos</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Confira demonstrações reais das nossas instalações de Wallbox e infraestrutura
            elétrica para veículos elétricos em Goiânia.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, i) => (
            <AnimatedSection key={video.id} delay={i * 0.08}>
              <div className="glass-card overflow-hidden rounded-xl">
                <div className="relative w-full" style={{ aspectRatio: "9/16" }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </main>

    <FooterCta />
    <WhatsAppFloat />
  </div>
);

export default Portfolio;
