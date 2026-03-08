

## Plano: Seção "Como Funciona"

### Novo arquivo: `src/components/HowItWorksSection.tsx`

- 4 passos em grid responsivo: `grid-cols-1 md:grid-cols-4`
- Cada passo: ícone Lucide (verde primário) + título bold + subtítulo muted
- Ícones: `MessageCircle` (Atendimento), `ClipboardCheck` (Visita), `Wrench` (Instalação), `CheckCircle` (Testes)
- Conexão desktop: linha tracejada horizontal entre os cards usando um separador `hidden md:block` (borda tracejada ou SVG seta) entre cada par de colunas
- Cards com `AnimatedSection` para animação de entrada escalonada
- Título da seção centralizado acima do grid

**Conteúdo dos 4 passos conforme especificado pelo usuário.**

### Editar: `src/pages/Index.tsx`

- Importar e inserir `<HowItWorksSection />` entre `<ServicesSection />` e `<MethodologySection />`

