

## Plano: Ajustes no Anchor Menu e Esteira de Marcas

### 1. Editar `src/components/AnchorMenu.tsx`

- Adicionar texto instrucional acima dos botões: "⚡ Acesso Rápido: Navegue pelas seções do site"
  - O ⚡ será substituído por um ícone Lucide `Zap` na cor primária
  - Texto `text-sm text-gray-400` centralizado
- Alterar o flex container dos botões para `justify-center` no desktop
- Adicionar padding lateral (`px-4`) para mobile

### 2. Editar `src/components/SocialProofBar.tsx`

- O logo do Volvo (`Volvo_Iron_Mark_-_black.svg`) é apenas o símbolo circular sem texto, o que pode parecer um placeholder vazio com os filtros CSS aplicados. Trocar a URL para uma versão com o logotipo textual, ou remover o Volvo da lista se a URL estiver quebrando. Investigarei a URL exata durante a implementação — provavelmente o ícone circular do Volvo Iron Mark está renderizando como um círculo cinza por causa do `brightness-0 invert`.

