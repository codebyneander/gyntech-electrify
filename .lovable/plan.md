

## Plano: Ajustes de Legibilidade, Contraste e Espaçamento

Alterações puramente de estilo (CSS e classes Tailwind). Nenhum texto ou estrutura será modificado.

### 1. Variáveis CSS (`src/index.css`)

| Variável | Atual | Nova | Motivo |
|---|---|---|---|
| `--muted-foreground` | `213 16% 72%` | `213 16% 80%` | Corpo de texto cinza com contraste WCAG 4.5:1+ |
| `--text-silver` | `213 16% 78%` | `213 16% 82%` | Alinhamento com nova paleta |
| `--secondary-foreground` | `210 20% 80%` | `210 20% 85%` | Texto secundário mais legível |

### 2. Tipografia base — aumentar `text-sm` para `text-base`

Componentes que usam `text-sm` em corpo de texto (parágrafos longos) serão atualizados para `text-base` (16px):

- `ServicesSection.tsx` — cards copy (`text-sm` → `text-base`)
- `HowItWorksSection.tsx` — step copy
- `MethodologySection.tsx` — differential copy
- `FaqSection.tsx` — respostas do accordion
- `TestimonialsSection.tsx` — nome do cliente
- `SocialProofBar.tsx` — legenda `text-sm` → `text-base`
- `FooterCta.tsx` — footer text `text-xs` → `text-sm`

### 3. Contraste específico

- `FooterCta.tsx`: `text-foreground/60` → `text-foreground/80` (logo do footer)
- `TestimonialsSection.tsx`: `text-foreground/90` → `text-foreground` (citações)

### 4. Espaçamento entre seções

Aumentar padding vertical de todas as seções para mais respirabilidade:

| Atual | Novo |
|---|---|
| `py-20 lg:py-28` | `py-24 lg:py-32` |
| `py-20 md:py-28` | `py-24 md:py-32` |
| `mb-14` (headers) | `mb-16` |
| `gap-6` (cards grid) | `gap-8` |

Seções afetadas: ServicesSection, HowItWorksSection, AboutSection, MethodologySection, FaqSection, FooterCta, TestimonialsSection, ServicesInActionSection.

### 5. Container padding

Em `tailwind.config.ts`, aumentar padding do container:
- `padding: "1.5rem"` → `padding: "2rem"`

### Arquivos modificados
- `src/index.css` — variáveis de cor
- `tailwind.config.ts` — container padding
- `src/components/ServicesSection.tsx`
- `src/components/HowItWorksSection.tsx`
- `src/components/AboutSection.tsx`
- `src/components/MethodologySection.tsx`
- `src/components/FaqSection.tsx`
- `src/components/FooterCta.tsx`
- `src/components/TestimonialsSection.tsx`
- `src/components/ServicesInActionSection.tsx`
- `src/components/SocialProofBar.tsx`

