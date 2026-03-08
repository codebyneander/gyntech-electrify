

## Plano: Botão flutuante do Instagram acima do WhatsApp (mobile only)

### Editar `src/components/WhatsAppFloat.tsx`

- Envolver os dois botões em um `div` fixo no canto inferior direito com `flex flex-col gap-3`
- Adicionar botão do Instagram acima do WhatsApp, visível apenas em mobile (`lg:hidden`)
  - `w-12 h-12` (ligeiramente menor que o WhatsApp)
  - Fundo com gradiente Instagram: `linear-gradient(135deg, #405de6, #833ab4, #c13584, #e1306c, #fd1d1d, #f56040)`
  - Ícone SVG do Instagram em branco
  - Link para `https://www.instagram.com/gyntecheletricamob/`
  - `rounded-full`, sombra, hover scale
- Manter o botão do WhatsApp exatamente como está

