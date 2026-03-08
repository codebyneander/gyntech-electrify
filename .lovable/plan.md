

## Plano: Anchor Menu abaixo da esteira de marcas

### Novo arquivo: `src/components/AnchorMenu.tsx`

- Contêiner com `overflow-x-auto` e scrollbar oculta (CSS `scrollbar-hide`)
- Botões pill (`rounded-full`, `whitespace-nowrap`) com `bg-white/5` e texto claro
- Hover/active: borda ou fundo na cor primária verde
- Smooth scroll via `document.querySelector(href).scrollIntoView({ behavior: "smooth" })`
- 5 botões:
  - "Nossos Serviços" → `#servicos`
  - "Demonstrações" → `#demonstracoes`
  - "Como Funciona" → `#como-funciona`
  - "Avaliações" → `#depoimentos`
  - "Dúvidas Frequentes" → `#faq`

### Editar: `src/components/ServicesSection.tsx`

- Mudar `id="solucoes"` para `id="servicos"`

### Editar: `src/components/ServicesInActionSection.tsx`

- Adicionar `id="demonstracoes"` na `<section>`

### Editar: `src/components/Header.tsx`

- Atualizar o link "Nossas Soluções" de `#solucoes` para `#servicos`

### Editar: `src/pages/Index.tsx`

- Importar e inserir `<AnchorMenu />` entre `<SocialProofBar />` e `<AboutSection />`

### Editar: `src/index.css`

- Adicionar classe utilitária para ocultar scrollbar (`.scrollbar-hide`)

