

## Plano: Seção "O Que Nossos Clientes Dizem"

### Novo arquivo: `src/components/TestimonialsSection.tsx`

- Seção com título centralizado e `AnimatedSection`
- Grid responsivo: `grid-cols-1 md:grid-cols-3 gap-6`
- 3 cards estilo balão WhatsApp dark mode:
  - Fundo `bg-[#1F2C34]` (verde-escuro típico do WhatsApp dark), cantos arredondados (`rounded-2xl rounded-tl-sm`)
  - Dentro: ícone `ImageIcon` (Lucide) + texto placeholder centralizado `"[Espaço reservado para Print de Feedback do WhatsApp]"`
  - Sombra sutil e padding generoso
- Abaixo do grid: botão outline "Ver mais avaliações" com `href="#"` (placeholder para Google Meu Negócio futuro)

### Editar: `src/pages/Index.tsx`

- Importar `TestimonialsSection`
- Inserir `<TestimonialsSection />` entre `<ServicesInActionSection />` e `<FaqSection />`

