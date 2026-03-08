

## Plano de Implementação

### 1. Nova seção "Nossos Serviços em Ação" na Home

Criar `src/components/ServicesInActionSection.tsx` — uma seção simples com título, texto curto sobre excelência/segurança das instalações, e um botão CTA "Ver Demonstrações" usando `<Link to="/portfolio">` do React Router. Mantém a identidade visual (glass-card, neon-glow, AnimatedSection).

Inserir o componente em `src/pages/Index.tsx` entre `MethodologySection` e `FaqSection`.

### 2. Página de Portfólio de Vídeos

Criar `src/pages/Portfolio.tsx`:
- Reutiliza `Header` e `FooterCta` da home para manter identidade visual
- Botão "Voltar para a Home" no topo (`<Link to="/">`)
- Grid responsivo: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
- 9 iframes do YouTube (shorts convertidos para embed: `youtube.com/embed/VIDEO_ID`) com `loading="lazy"` e aspect-ratio 9:16 (são shorts verticais)
- Inclui `WhatsAppFloat`

### 3. Rota

Adicionar `<Route path="/portfolio" element={<Portfolio />} />` em `App.tsx`.

### Arquivos afetados
- **Criar**: `src/components/ServicesInActionSection.tsx`, `src/pages/Portfolio.tsx`
- **Editar**: `src/pages/Index.tsx` (adicionar seção), `src/App.tsx` (adicionar rota)

