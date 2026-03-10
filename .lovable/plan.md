

## Plano: Reestruturar seção de Depoimentos

### 1. Copiar arquivo de áudio
- Copiar `user-uploads://WhatsApp-Audio-2026-03-10-at-19.10.03.mp3` para `public/audio/depoimento.mp3`

### 2. Reescrever `src/components/TestimonialsSection.tsx`

- Remover placeholders de imagem e importação de `ImageIcon`
- Criar array de 3 depoimentos com dados (texto, nome, hasAudio)
- Cada card: fundo `glass-card` ou `bg-card`, com:
  - 5 estrelas amarelas (SVG `Star` do lucide-react, `fill-yellow-400 text-yellow-400`)
  - Texto do depoimento em itálico
  - No card 1: tag `<audio controls>` estilizada abaixo do texto, src apontando para `/audio/depoimento.mp3`
  - Nome/veículo em `text-sm text-muted-foreground`
- Manter título, subtítulo e botão "Ver mais avaliações"
- Manter `AnimatedSection` com delays

### Conteúdo dos cards:
1. **Card 1 (áudio):** "Ouça o relato real de quem já garantiu segurança na recarga em casa." — Cliente Gyntech
2. **Card 2:** "Serviço impecável do início ao fim..." — Carlos M. - GWM Haval H6
3. **Card 3:** "Trabalho extremamente técnico e organizado..." — Mariana T. - Volvo XC40

